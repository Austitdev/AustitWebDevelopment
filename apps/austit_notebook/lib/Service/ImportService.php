<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

use ZipArchive;

/**
 * Importiert ein Notizbuch aus einem Markdown-Zip-Export (z. B. aus OneNote
 * ueber den onenote-md-exporter):
 *
 * - Markdown-Dateien (.md/.markdown) werden zu Seiten, ihr Pfad bestimmt den
 *   Abschnitt (letzter Verzeichnisname, ohne Verzeichnis: "Import").
 * - Bilder neben den Markdown-Dateien werden im .medien-Ordner des Abschnitts
 *   abgelegt und als Bildelemente unter dem Text platziert.
 * - Der Markdown-Inhalt wird in TipTap-Knoten uebersetzt (MarkdownParser).
 */
class ImportService {
	private const MAX_ENTRIES = 2000;
	private const MAX_TOTAL_BYTES = 300 * 1024 * 1024;

	public function __construct(
		private NotebookService $service,
		private MarkdownParser $parser,
	) {
	}

	/**
	 * @return array{notebookId: int, notebook: string, sections: int, pages: int, images: int, skippedImages: int}
	 */
	public function importZip(string $userId, string $zipPath, string $notebookName): array {
		if (!class_exists(ZipArchive::class)) {
			throw new NotebookException('PHP-Erweiterung „zip“ fehlt auf dem Server.');
		}
		$zip = new ZipArchive();
		if ($zip->open($zipPath) !== true) {
			throw new NotebookException('Das Archiv konnte nicht geöffnet werden. Bitte eine ZIP-Datei mit Markdown-Dateien hochladen.');
		}

		try {
			[$markdownFiles, $mediaFiles] = $this->collectFiles($zip);
			if ($markdownFiles === []) {
				throw new NotebookException('Im Archiv wurde keine Markdown-Datei (.md) gefunden.');
			}

			$groups = [];
			foreach (array_keys($markdownFiles) as $name) {
				$dir = rtrim(str_replace('\\', '/', dirname($name)), '/');
				$section = $dir === '' ? 'Import' : basename($dir);
				$groupKey = mb_strtolower($section);
				if (!isset($groups[$groupKey])) {
					$groups[$groupKey] = ['section' => $section, 'pages' => []];
				}
				$fileName = basename($name);
				$groups[$groupKey]['pages'][] = [
					'path' => $name,
					'title' => preg_replace('/\.(md|markdown)$/i', '', $fileName) ?? $fileName,
				];
			}

			$notebook = $this->service->createNotebook(
				$userId,
				trim($notebookName) !== '' ? trim($notebookName) : 'Import'
			);

			$sections = 0;
			$pages = 0;
			$images = 0;
			$skippedImages = 0;

			foreach ($groups as $group) {
				$section = $this->service->createSection($userId, $notebook->getId(), $group['section']);
				$sections++;

				foreach ($group['pages'] as $pageInfo) {
					$source = $zip->getFromName($pageInfo['path']);
					if ($source === false) {
						continue;
					}
					$page = $this->service->createPage($userId, $section->getId(), (string)$pageInfo['title']);
					$pages++;

					$result = $this->parser->parse($source);
					$elements = [
						[
							'id' => $this->uid(),
							'type' => 'text',
							'x' => 48,
							'y' => 48,
							'width' => 640,
							'doc' => ['type' => 'doc', 'content' => $result['blocks']],
						],
					];

					$cursorY = 48 + count($result['blocks']) * 32 + 64;
					foreach ($result['images'] as $image) {
						$mediaName = $this->findMedia($mediaFiles, $pageInfo['path'], $image['link']);
						if ($mediaName === null) {
							$skippedImages++;
							continue;
						}
						$imageElement = $this->addImageElement($zip, $mediaName, $userId, $page->getId(), 48, $cursorY, $images);
						if ($imageElement === null) {
							$skippedImages++;
							continue;
						}
						$elements[] = $imageElement;
						$cursorY += (int)round(($imageElement['height'] ?? 320)) + 32;
					}

					$read = $this->service->readPage($userId, $page->getId());
					$this->service->writePage(
						$userId,
						$page->getId(),
						['version' => 1, 'created' => time(), 'elements' => $elements, 'strokes' => []],
						$read['etag']
					);
				}
			}

			return [
				'notebookId' => $notebook->getId(),
				'notebook' => $notebook->getName(),
				'sections' => $sections,
				'pages' => $pages,
				'images' => $images,
				'skippedImages' => $skippedImages,
			];
		} finally {
			$zip->close();
		}
	}

	/**
	 * @return array{0: array<string, true>, 1: array<string, string>}
	 */
	private function collectFiles(ZipArchive $zip): array {
		if ($zip->numFiles > self::MAX_ENTRIES) {
			throw new NotebookException('Das Archiv enthält zu viele Dateien (maximal ' . self::MAX_ENTRIES . ').');
		}
		$markdownFiles = [];
		$mediaFiles = [];
		$total = 0;
		for ($i = 0; $i < $zip->numFiles; $i++) {
			$name = $zip->getNameIndex($i);
			if (!is_string($name) || $name === '' || str_ends_with($name, '/')) {
				continue;
			}
			$parts = explode('/', str_replace('\\', '/', $name));
			$fileName = array_pop($parts);
			if ($fileName === '' || str_starts_with($fileName, '.') || in_array('__MACOSX', $parts, true)) {
				continue;
			}
			$trimmedName = implode('/', $parts) . ($parts === [] ? '' : '/') . $fileName;

			$entry = $zip->statIndex($i);
			if (is_array($entry) && isset($entry['size'])) {
				$total += (int)$entry['size'];
				if ($total > self::MAX_TOTAL_BYTES) {
					throw new NotebookException('Das Archiv ist zu groß (maximal 300 MB entpackt).');
				}
			}

			$lower = mb_strtolower($fileName);
			if (str_ends_with($lower, '.md') || str_ends_with($lower, '.markdown')) {
				$markdownFiles[$trimmedName] = true;
				continue;
			}
			if (preg_match('/\.(png|jpe?g|gif|webp)$/', $lower) === 1) {
				$mediaFiles[mb_strtolower($trimmedName)] = $trimmedName;
			}
		}
		return [$markdownFiles, $mediaFiles];
	}

	private function findMedia(array $mediaFiles, string $mdPath, string $link): ?string {
		$decoded = rawurldecode($link);
		$decoded = str_replace('\\', '/', $decoded);
		$base = rtrim(str_replace('\\', '/', dirname($mdPath)), '/');
		$candidates = [];
		$clean = preg_replace('#^\./#', '', $decoded) ?? $decoded;
		if ($base !== '') {
			$candidates[] = $base . '/' . $clean;
		}
		$candidates[] = $clean;
		$candidates[] = basename($clean);

		foreach ($candidates as $candidate) {
			$key = mb_strtolower($candidate);
			if (isset($mediaFiles[$key])) {
				return $mediaFiles[$key];
			}
		}
		return null;
	}

	/**
	 * @return array{id: string, type: string, x: int, y: int, width: int, height: int, fileId: int}|null
	 */
	private function addImageElement(ZipArchive $zip, string $mediaName, string $userId, int $pageId, int $x, int $y, int &$images): ?array {
		$data = $zip->getFromName($mediaName);
		if ($data === false) {
			return null;
		}
		$info = @getimagesizefromstring($data);
		if ($info === false) {
			return null;
		}
		[$width, $height] = $info;

		$extension = strtolower(pathinfo($mediaName, PATHINFO_EXTENSION));
		$mime = [
			'png' => 'image/png',
			'jpg' => 'image/jpeg',
			'jpeg' => 'image/jpeg',
			'gif' => 'image/gif',
			'webp' => 'image/webp',
		][$extension] ?? 'image/png';

		$tmpFile = tempnam(sys_get_temp_dir(), 'austit_nb_import_');
		if ($tmpFile === false) {
			return null;
		}
		try {
			file_put_contents($tmpFile, $data);
			$stream = fopen($tmpFile, 'rb');
			if ($stream === false) {
				return null;
			}
			try {
				$fileId = $this->service->addImage($userId, $pageId, basename($mediaName), $mime, $stream);
			} finally {
				fclose($stream);
			}
		} finally {
			@unlink($tmpFile);
		}

		$displayWidth = min(560, max(64, $width));
		$displayHeight = (int)round($displayWidth * $height / max(1, $width));
		$images++;

		return [
			'id' => $this->uid(),
			'type' => 'image',
			'x' => $x,
			'y' => $y,
			'width' => $displayWidth,
			'height' => max(24, $displayHeight),
			'fileId' => $fileId,
		];
	}

	private function uid(): string {
		try {
			return bin2hex(random_bytes(8));
		} catch (\Exception $e) {
			return substr(md5(uniqid('', true)), 0, 16);
		}
	}
}
