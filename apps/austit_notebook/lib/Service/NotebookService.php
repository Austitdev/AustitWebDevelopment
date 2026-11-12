<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\Node;
use OCP\Files\NotFoundException;

/**
 * Notebooks are stored as plain files in the user's storage:
 *
 *   Notizbücher/<Notebook>/<Section>/<Page>.anote   page content (JSON)
 *   Notizbücher/<Notebook>/<Section>/.medien/        images placed on pages
 *
 * All node lookups go through the notebook root folder, so ids outside of it are never resolved.
 */
class NotebookService {
	public const ROOT_FOLDER = 'Notizbücher';
	public const PAGE_EXTENSION = '.anote';
	public const MEDIA_FOLDER = '.medien';
	public const MAX_NAME_LENGTH = 120;
	public const MAX_PAGE_BYTES = 20 * 1024 * 1024;

	private const DEPTH_NOTEBOOK = 1;
	private const DEPTH_SECTION = 2;
	private const DEPTH_PAGE = 3;

	public function __construct(
		private IRootFolder $rootFolder,
	) {
	}

	/**
	 * @return list<array{id: int, name: string, sections: list<array{id: int, name: string, pages: list<array{id: int, name: string, mtime: int}>}>}>
	 */
	public function getTree(string $userId): array {
		$notebooks = [];
		foreach ($this->sortedChildren($this->getRoot($userId), Folder::class) as $notebook) {
			$sections = [];
			foreach ($this->sortedChildren($notebook, Folder::class) as $section) {
				$pages = [];
				foreach ($this->sortedChildren($section, File::class) as $page) {
					if (str_ends_with($page->getName(), self::PAGE_EXTENSION)) {
						$pages[] = ['id' => $page->getId(), 'name' => $this->pageTitle($page), 'mtime' => $page->getMTime()];
					}
				}
				$sections[] = ['id' => $section->getId(), 'name' => $section->getName(), 'pages' => $pages];
			}
			$notebooks[] = ['id' => $notebook->getId(), 'name' => $notebook->getName(), 'sections' => $sections];
		}
		return $notebooks;
	}

	public function createNotebook(string $userId, string $name): Folder {
		$root = $this->getRoot($userId);
		return $root->newFolder($root->getNonExistingName($this->sanitizeName($name, 'Neues Notizbuch')));
	}

	public function createSection(string $userId, int $notebookId, string $name): Folder {
		$notebook = $this->getFolder($userId, $notebookId, self::DEPTH_NOTEBOOK);
		return $notebook->newFolder($notebook->getNonExistingName($this->sanitizeName($name, 'Neuer Abschnitt')));
	}

	public function createPage(string $userId, int $sectionId, string $title): File {
		$section = $this->getFolder($userId, $sectionId, self::DEPTH_SECTION);
		$fileName = $section->getNonExistingName($this->sanitizeName($title, 'Neue Seite') . self::PAGE_EXTENSION);
		$content = ['version' => 1, 'created' => time(), 'elements' => [], 'strokes' => []];
		return $section->newFile($fileName, json_encode($content, JSON_THROW_ON_ERROR));
	}

	public function rename(string $userId, int $id, string $name): Node {
		$node = $this->getEditableNode($userId, $id);
		$isPage = $node instanceof File;
		$newName = $this->sanitizeName($name, $isPage ? 'Seite' : 'Notizbuch') . ($isPage ? self::PAGE_EXTENSION : '');
		if ($newName === $node->getName()) {
			return $node;
		}
		$parent = $node->getParent();
		return $node->move($parent->getPath() . '/' . $parent->getNonExistingName($newName));
	}

	/**
	 * Moves the node to the trash bin.
	 */
	public function delete(string $userId, int $id): void {
		$this->getEditableNode($userId, $id)->delete();
	}

	/**
	 * @return array{content: array<mixed>, etag: string, name: string}
	 */
	public function readPage(string $userId, int $pageId): array {
		$page = $this->getPage($userId, $pageId);
		$content = json_decode($page->getContent(), true);
		if (!is_array($content)) {
			throw new NotebookException('Die Seite ist beschädigt und kann nicht gelesen werden.');
		}
		return ['content' => $content, 'etag' => $page->getEtag(), 'name' => $this->pageTitle($page)];
	}

	/**
	 * Saves the page if it was not changed since the given etag was read.
	 *
	 * @param array<mixed> $content
	 * @return string the new etag
	 * @throws ConflictException
	 */
	public function writePage(string $userId, int $pageId, array $content, string $etag): string {
		$page = $this->getPage($userId, $pageId);
		if ($page->getEtag() !== $etag) {
			throw new ConflictException();
		}
		$json = json_encode($content, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
		if (strlen($json) > self::MAX_PAGE_BYTES) {
			throw new NotebookException('Die Seite ist zu groß. Bitte große Inhalte auf mehrere Seiten verteilen.');
		}
		$page->putContent($json);
		return $this->getPage($userId, $pageId)->getEtag();
	}

	/**
	 * Stores an uploaded image next to the page and returns its file id.
	 *
	 * @param resource $stream
	 */
	public function addImage(string $userId, int $pageId, string $originalName, string $mimeType, $stream): int {
		if (!preg_match('#^image/(png|jpe?g|gif|webp)$#', $mimeType)) {
			throw new NotebookException('Nur Bilder (PNG, JPEG, GIF, WebP) können eingefügt werden.');
		}
		$section = $this->getPage($userId, $pageId)->getParent();
		$media = $section->nodeExists(self::MEDIA_FOLDER)
			? $section->get(self::MEDIA_FOLDER)
			: $section->newFolder(self::MEDIA_FOLDER);
		if (!$media instanceof Folder) {
			throw new NotebookException('Der Medienordner ist ungültig.');
		}
		$file = $media->newFile($media->getNonExistingName($this->sanitizeName($originalName, 'Bild')), $stream);
		return $file->getId();
	}

	public function getImage(string $userId, int $fileId): File {
		$file = $this->getNode($userId, $fileId);
		if (!$file instanceof File
			|| $file->getParent()->getName() !== self::MEDIA_FOLDER
			|| !str_starts_with($file->getMimetype(), 'image/')) {
			throw new NotFoundException();
		}
		return $file;
	}

	public function sanitizeName(string $name, string $fallback): string {
		$name = preg_replace('/[\x00-\x1F\x7F\/\\\\]+/u', ' ', $name) ?? '';
		$name = trim(preg_replace('/\s+/u', ' ', $name) ?? '');
		$name = ltrim($name, '.');
		$name = mb_substr($name, 0, self::MAX_NAME_LENGTH);
		return $name === '' ? $fallback : $name;
	}

	private function getRoot(string $userId): Folder {
		$userFolder = $this->rootFolder->getUserFolder($userId);
		try {
			$root = $userFolder->get(self::ROOT_FOLDER);
		} catch (NotFoundException) {
			return $userFolder->newFolder(self::ROOT_FOLDER);
		}
		if (!$root instanceof Folder) {
			throw new NotebookException('„' . self::ROOT_FOLDER . '“ ist kein Ordner.');
		}
		return $root;
	}

	/**
	 * @throws NotFoundException
	 */
	private function getNode(string $userId, int $id): Node {
		$node = $this->getRoot($userId)->getFirstNodeById($id);
		if ($node === null) {
			throw new NotFoundException();
		}
		return $node;
	}

	/**
	 * A notebook, section or page; never the root, the media folder or other files.
	 */
	private function getEditableNode(string $userId, int $id): Node {
		$node = $this->getNode($userId, $id);
		if ($node instanceof File) {
			return $this->getPage($userId, $id);
		}
		$depth = $this->depth($userId, $node);
		if ($depth !== self::DEPTH_NOTEBOOK && $depth !== self::DEPTH_SECTION) {
			throw new NotFoundException();
		}
		return $node;
	}

	private function getFolder(string $userId, int $id, int $depth): Folder {
		$node = $this->getNode($userId, $id);
		if (!$node instanceof Folder || $this->depth($userId, $node) !== $depth) {
			throw new NotFoundException();
		}
		return $node;
	}

	private function getPage(string $userId, int $id): File {
		$node = $this->getNode($userId, $id);
		if (!$node instanceof File
			|| !str_ends_with($node->getName(), self::PAGE_EXTENSION)
			|| $this->depth($userId, $node) !== self::DEPTH_PAGE) {
			throw new NotFoundException();
		}
		return $node;
	}

	/**
	 * Depth below the notebook root: notebook = 1, section = 2, page = 3.
	 */
	private function depth(string $userId, Node $node): int {
		$relative = $this->getRoot($userId)->getRelativePath($node->getPath());
		return $relative === null ? -1 : count(array_filter(explode('/', $relative), static fn (string $part) => $part !== ''));
	}

	/**
	 * @template T of Node
	 * @param class-string<T> $type
	 * @return list<T>
	 */
	private function sortedChildren(Folder $folder, string $type): array {
		$children = array_values(array_filter(
			$folder->getDirectoryListing(),
			static fn (Node $node) => $node instanceof $type && !str_starts_with($node->getName(), '.'),
		));
		usort($children, static fn (Node $a, Node $b) => strnatcasecmp($a->getName(), $b->getName()));
		return $children;
	}

	private function pageTitle(File $page): string {
		return substr($page->getName(), 0, -strlen(self::PAGE_EXTENSION));
	}
}
