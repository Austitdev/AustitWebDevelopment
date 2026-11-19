<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Service;

use OCA\AustitMedien\AppInfo\Application;
use OCA\AustitMedien\Core\AccessRules;
use OCA\AustitMedien\Core\TubeSearch;
use OCA\AustitMedien\Core\YtDlp;
use OCP\BackgroundJob\IJobList;
use OCP\Files\AppData\AppDataNotFoundException;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\Files\SimpleFolder\ISimpleFile;
use OCP\Files\SimpleFolder\ISimpleFolder;
use OCP\IConfig;
use OCP\IGroupManager;
use OCP\IUser;
use OCP\IUserSession;

/**
 * Adapter-Schicht zum Nextcloud-System: Konfiguration, Rechte, Cache im
 * App-Data-Verzeichnis und Download-Warteschlange. Die Arbeitslogik selbst
 * liegt im Kern (TubeSearch, YtDlp, AccessRules).
 */
class MediaService {
	public function __construct(
		private IAppData $appData,
		private IConfig $config,
		private IGroupManager $groupManager,
		private IUserSession $userSession,
		private YtDlp $ytDlp,
		private IJobList $jobList,
	) {
	}

	// ---------------------------------------------------------------- Rechte

	public function userId(): string {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new NotPermittedException();
		}
		return $user->getUID();
	}

	public function isAdmin(): bool {
		$user = $this->userSession->getUser();
		return $user !== null && $this->groupManager->isAdmin($user->getUID());
	}

	public function rules(): AccessRules {
		$user = $this->userSession->getUser();
		$groups = [];
		if ($user instanceof IUser) {
			foreach ($this->groupManager->getUserGroups($user) as $group) {
				$groups[] = $group->getGID();
			}
		}
		return new AccessRules($this->configArray(), $groups, $this->isAdmin());
	}

	// ----------------------------------------------------------- Konfiguration

	/**
	 * @return array{videos: list<string>, channels: list<string>, searchGroups: list<string>, maxHeight: int}
	 */
	public function configArray(): array {
		return [
			'videos' => $this->jsonList('videos'),
			'channels' => $this->jsonList('channels'),
			'searchGroups' => $this->jsonList('search_groups'),
			'maxHeight' => max(144, min(2160, (int)$this->config->getAppValue(Application::APP_ID, 'max_height', '720'))),
		];
	}

	/**
	 * @param array{videos?: list<string>, channels?: list<string>, searchGroups?: list<string>, maxHeight?: int} $values
	 */
	public function saveConfig(array $values): void {
		if (!$this->isAdmin()) {
			throw new NotPermittedException();
		}
		foreach (['videos' => 'videos', 'channels' => 'channels', 'searchGroups' => 'search_groups'] as $key => $configKey) {
			if (isset($values[$key]) && is_array($values[$key])) {
				$this->config->setAppValue(Application::APP_ID, $configKey, json_encode(array_values(array_map('strval', $values[$key]))));
			}
		}
		if (isset($values['maxHeight'])) {
			$this->config->setAppValue(Application::APP_ID, 'max_height', (string)max(144, min(2160, (int)$values['maxHeight'])));
		}
	}

	/**
	 * @return list<string>
	 */
	private function jsonList(string $key): array {
		$raw = $this->config->getAppValue(Application::APP_ID, $key, '[]');
		$list = json_decode($raw, true);
		return is_array($list) ? array_values(array_map('strval', $list)) : [];
	}

	// -------------------------------------------------------------- Suche

	/**
	 * @return list<array{id: string, title: string, channel: string, duration: string, thumbnail: string, allowed: bool}>
	 */
	public function search(string $query): array {
		$rules = $this->rules();
		$results = (new TubeSearch())->search($query);
		foreach ($results as &$result) {
			$result['allowed'] = $rules->isVideoAllowed($result['id']);
		}
		return $results;
	}

	// --------------------------------------------------------- Video & Cache

	/**
	 * @return array{id: string, title: string, channel: string, duration: int, allowed: bool, state: string, fileSize: int}
	 */
	public function videoInfo(string $videoId): array {
		$this->assertVideoId($videoId);
		$meta = $this->meta($videoId);
		return [
			'id' => $videoId,
			'title' => $meta['title'],
			'channel' => $meta['channel'],
			'duration' => $meta['duration'],
			'allowed' => $this->rules()->isVideoAllowed($videoId),
			'state' => $this->state($videoId),
			'fileSize' => $this->fileSize($videoId),
		];
	}

	public function queueFetch(string $videoId): void {
		$this->assertVideoId($videoId);
		$state = $this->state($videoId);
		if ($state === 'ready' || $state === 'running' || $state === 'queued') {
			return;
		}
		$this->writeState($videoId, 'queued');
		$this->jobList->add(\OCA\AustitMedien\Job\FetchJob::class, ['videoId' => $videoId]);
	}

	/**
	 * Wird vom Hintergrund-Job aufgerufen: lädt Metadaten und das MP4 über
	 * yt-dlp in eine Temp-Datei und füllt es danach in den App-Data-Cache.
	 */
	public function fetch(string $videoId): void {
		if (!preg_match('/^[A-Za-z0-9_-]{11}$/', $videoId)) {
			return;
		}
		$this->writeState($videoId, 'running');
		$tmpFile = sys_get_temp_dir() . '/austit_medien_' . $videoId . '.mp4.part';
		@unlink($tmpFile);
		try {
			$meta = $this->ytDlp->meta($videoId);
			$this->writeMeta($videoId, $meta);

			$this->ytDlp->download(
				$videoId,
				$tmpFile,
				$this->configArray()['maxHeight']
			);
			$data = (string)@file_get_contents($tmpFile);
			if ($data === '') {
				throw new MediaException('Video konnte nicht in den Cache übernommen werden.');
			}
			$this->writeFile('videos', $videoId . '.mp4', $data);
			$this->writeState($videoId, 'ready');
		} catch (\Throwable $e) {
			$this->writeState($videoId, 'error', $e->getMessage());
		} finally {
			@unlink($tmpFile);
		}
	}

	// --------------------------------------------------------------- Streams

	/**
	 * @return array{file: ISimpleFile, size: int}
	 */
	public function videoFile(string $videoId): array {
		$this->assertVideoId($videoId);
		if ($this->state($videoId) !== 'ready') {
			throw new MediaException('Video ist noch nicht im Cache.');
		}
		$file = $this->folder('videos')->get($videoId . '.mp4');
		return ['file' => $file, 'size' => $file->getSize()];
	}

	public function thumbnailFile(string $videoId): ISimpleFile {
		$this->assertVideoId($videoId);
		$thumbs = $this->folder('thumbs');
		try {
			return $thumbs->get($videoId . '.jpg');
		} catch (NotFoundException) {
			$tmpFile = sys_get_temp_dir() . '/austit_medien_' . $videoId . '.jpg';
			try {
				$this->ytDlp->thumbnail($videoId, $tmpFile);
				$data = (string)@file_get_contents($tmpFile);
				if ($data === '') {
					throw new MediaException('Thumbnail konnte nicht geladen werden.');
				}
				$this->writeFile('thumbs', $videoId . '.jpg', $data);
			} finally {
				@unlink($tmpFile);
			}
			return $thumbs->get($videoId . '.jpg');
		}
	}

	// ------------------------------------------------------------ Verwaltung

	public function allowVideo(string $videoId): void {
		if (!$this->isAdmin()) {
			throw new NotPermittedException();
		}
		$this->assertVideoId($videoId);
		$config = $this->configArray();
		if (!in_array($videoId, $config['videos'], true)) {
			$config['videos'][] = $videoId;
			$this->saveConfig(['videos' => $config['videos']]);
		}
		$this->queueFetch($videoId);
	}

	public function removeVideo(string $videoId): void {
		if (!$this->isAdmin()) {
			throw new NotPermittedException();
		}
		$config = $this->configArray();
		$config['videos'] = array_values(array_filter($config['videos'], static fn (string $id): bool => $id !== $videoId));
		$this->saveConfig(['videos' => $config['videos']]);
		foreach (['videos' => $videoId . '.mp4', 'thumbs' => $videoId . '.jpg', 'status' => $videoId . '.json', 'meta' => $videoId . '.json'] as $folderName => $fileName) {
			try {
				$this->folder($folderName)->get($fileName)->delete();
			} catch (NotFoundException) {
				// bereits weg
			}
		}
	}

	// ------------------------------------------------------------ Interna

	private function assertVideoId(string $videoId): void {
		if (!preg_match('/^[A-Za-z0-9_-]{11}$/', $videoId)) {
			throw new MediaException('Ungültige Video-ID.');
		}
	}

	private function folder(string $name): ISimpleFolder {
		try {
			return $this->appData->getFolder('medien/' . $name);
		} catch (AppDataNotFoundException) {
			// Ordner fehlt: Ebenen der Reihe nach anlegen
		}
		try {
			$this->appData->newFolder('medien');
		} catch (NotPermittedException|AppDataNotFoundException) {
			// existiert bereits oder wird gleich beanstandet
		}
		try {
			return $this->appData->newFolder('medien/' . $name);
		} catch (NotPermittedException|AppDataNotFoundException $e) {
			throw new MediaException('Cache-Verzeichnis konnte nicht angelegt werden.', 0, $e);
		}
	}

	/**
	 * Legt eine Datei im App-Data-Ordner an oder überschreibt sie.
	 */
	private function writeFile(string $folderName, string $fileName, string $content): void {
		$folder = $this->folder($folderName);
		try {
			$folder->get($fileName)->putContent($content);
		} catch (NotFoundException) {
			$folder->newFile($fileName, $content);
		}
	}

	/**
	 * @return array{title: string, channel: string, duration: int, thumbnail: string}
	 */
	private function meta(string $videoId): array {
		try {
			$metaFile = $this->folder('meta')->get($videoId . '.json');
			$meta = json_decode($metaFile->getContent(), true);
			if (is_array($meta) && isset($meta['title'], $meta['channel'], $meta['duration'], $meta['thumbnail'])) {
				return $meta;
			}
		} catch (NotFoundException) {
			// noch nicht gecacht
		}
		$meta = $this->ytDlp->meta($videoId);
		$this->writeMeta($videoId, $meta);
		return $meta;
	}

	/**
	 * @param array{title: string, channel: string, duration: int, thumbnail: string} $meta
	 */
	private function writeMeta(string $videoId, array $meta): void {
		$this->writeFile('meta', $videoId . '.json', json_encode($meta, JSON_THROW_ON_ERROR));
	}

	public function state(string $videoId): string {
		try {
			$stateFile = $this->folder('status')->get($videoId . '.json');
			$data = json_decode($stateFile->getContent(), true);
			if (is_array($data) && in_array($data['state'] ?? '', ['queued', 'running', 'ready', 'error'], true)) {
				return (string)$data['state'];
			}
		} catch (NotFoundException) {
			return 'new';
		} catch (\Throwable) {
			return 'new';
		}
		return 'new';
	}

	private function writeState(string $videoId, string $state, string $error = ''): void {
		$this->writeFile(
			'status',
			$videoId . '.json',
			json_encode(['state' => $state, 'error' => $error, 'time' => time()], JSON_THROW_ON_ERROR)
		);
	}

	private function fileSize(string $videoId): int {
		try {
			return $this->folder('videos')->get($videoId . '.mp4')->getSize();
		} catch (NotFoundException) {
			return 0;
		}
	}
}
