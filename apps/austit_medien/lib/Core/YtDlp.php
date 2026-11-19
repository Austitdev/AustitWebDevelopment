<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Core;

/**
 * Kern ohne Nextcloud-Abhängigkeiten: kapselt yt-dlp (Metadaten und Download
 * als MP4 mit ffmpeg-Zusammenfügen). yt-dlp übernimmt das Nachziehen der
 * YouTube-Extraktion, damit die App selbst keine Stream-Formate deuten muss.
 */
class YtDlp {
	public function __construct(
		private string $binary = 'yt-dlp',
		private string $ffmpeg = 'ffmpeg',
	) {
	}

	public function isAvailable(): bool {
		return $this->runOk('--version');
	}

	/**
	 * Metadaten eines Videos (Titel, Kanal, Länge, Thumbnail).
	 *
	 * @return array{title: string, channel: string, duration: int, thumbnail: string}
	 */
	public function meta(string $videoId): array {
		$url = escapeshellarg('https://www.youtube.com/watch?v=' . $videoId);
		$binary = escapeshellarg($this->binary);
		$command = sprintf('%s -J --no-warnings --no-playlist %s 2>/dev/null', $binary, $url);
		exec($command, $output, $code);
		$json = implode("\n", $output);
		$data = json_decode($json, true);
		if ($code !== 0 || !is_array($data)) {
			throw new \RuntimeException('Metadaten konnten nicht geladen werden (yt-dlp).');
		}
		return [
			'title' => (string)($data['title'] ?? $videoId),
			'channel' => (string)($data['channel'] ?? $data['uploader'] ?? ''),
			'duration' => (int)($data['duration'] ?? 0),
			'thumbnail' => (string)($data['thumbnail'] ?? ''),
		];
	}

	/**
	 * Lädt ein Video als MP4 (beste Qualität bis zur konfigurierten Hoehe)
	 * und fügt Audio und Video mit ffmpeg in einer Datei zusammen.
	 */
	public function download(string $videoId, string $targetPath, int $maxHeight = 720, int $timeout = 900): void {
		if (!@touch($targetPath) || !is_writable($targetPath)) {
			throw new \RuntimeException('Zieldatei kann nicht geschrieben werden: ' . $targetPath);
		}
		@unlink($targetPath);

		$maxHeight = max(144, min(2160, $maxHeight));
		$url = escapeshellarg('https://www.youtube.com/watch?v=' . $videoId);
		$binary = escapeshellarg($this->binary);
		$ffmpeg = escapeshellarg($this->ffmpeg);
		$target = escapeshellarg($targetPath);
		$format = escapeshellarg(sprintf('bv*[height<=%d]+ba/b[height<=%d]', $maxHeight, $maxHeight));

		$template = '%s -f %s --merge-output-format mp4 --no-warnings --no-playlist --no-progress %s -o %s >/dev/null 2>&1';
		$command = sprintf($template, $binary, $format, $url, $target);

		$process = proc_open($command, [1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes);
		if (!is_resource($process)) {
			throw new \RuntimeException('Download konnte nicht gestartet werden.');
		}
		fclose($pipes[1]);
		fclose($pipes[2]);

		$waited = 0;
		while (true) {
			$status = proc_get_status($process);
			if (!$status['running']) {
				break;
			}
			if ($waited >= $timeout) {
				proc_terminate($process);
				proc_close($process);
				@unlink($targetPath);
				throw new \RuntimeException('Download hat das Zeitlimit überschritten.');
			}
			sleep(5);
			$waited += 5;
		}
		$code = proc_close($process);
		if ($code !== 0 || !is_file($targetPath) || filesize($targetPath) < 1024) {
			@unlink($targetPath);
			throw new \RuntimeException('Download fehlgeschlagen (yt-dlp, Code ' . $code . ').');
		}
	}

	/**
	 * Lädt das Thumbnail eines Videos in eine Datei.
	 */
	public function thumbnail(string $videoId, string $targetPath): void {
		$url = 'https://i.ytimg.com/vi/' . rawurlencode($videoId) . '/hqdefault.jpg';
		$data = @file_get_contents($url);
		if ($data === false || strlen($data) < 64) {
			throw new \RuntimeException('Thumbnail konnte nicht geladen werden.');
		}
		if (@file_put_contents($targetPath, $data) === false) {
			throw new \RuntimeException('Thumbnail konnte nicht gespeichert werden.');
		}
	}

	private function runOk(string $args): bool {
		$binary = escapeshellarg($this->binary);
		exec(sprintf('%s %s 2>/dev/null', $binary, escapeshellarg($args)), $output, $code);
		return $code === 0;
	}
}
