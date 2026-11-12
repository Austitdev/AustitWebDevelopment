<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Service;

/**
 * Determines which austit-specific files are touched by an upstream update.
 *
 * Every file in the manifest is compared between the upstream base version
 * (hash stored in the manifest) and the upstream target version.
 */
class UpdateAnalyzer {
	public const STATUS_CHANGED = 'changed';
	public const STATUS_REMOVED = 'removed';
	public const STATUS_UNCHANGED = 'unchanged';
	public const STATUS_ERROR = 'error';

	/** GitHub returns at most this many files in a compare response. */
	public const COMPARE_FILE_LIMIT = 300;

	public function __construct(
		private ManifestReader $manifestReader,
		private GitHubClient $gitHub,
	) {
	}

	/**
	 * @return array<string, mixed>
	 * @throws \InvalidArgumentException|\RuntimeException
	 */
	public function analyze(string $installedVersion, string $targetVersion): array {
		if (!preg_match(ReleaseService::VERSION_PATTERN, $targetVersion)) {
			throw new \InvalidArgumentException('Ungültige Zielversion.');
		}
		if (!version_compare($targetVersion, $installedVersion, '>')) {
			throw new \InvalidArgumentException('Die Zielversion muss neuer als die installierte Version sein.');
		}

		$manifest = $this->manifestReader->read();
		$targetTag = 'v' . $targetVersion;

		$files = [];
		foreach ($manifest['files'] as $file) {
			$files[] = $file + $this->compareFile($targetTag, $file['path'], $file['sha256']);
		}

		$order = [self::STATUS_CHANGED => 0, self::STATUS_REMOVED => 1, self::STATUS_ERROR => 2, self::STATUS_UNCHANGED => 3];
		usort($files, static fn (array $a, array $b): int => [$order[$a['status']], $a['path']] <=> [$order[$b['status']], $b['path']]);

		$counts = array_fill_keys(array_keys($order), 0);
		foreach ($files as $file) {
			$counts[$file['status']]++;
		}

		return [
			'installedVersion' => $installedVersion,
			'baseVersion' => $manifest['baseVersion'],
			'targetVersion' => $targetVersion,
			'manifestGeneratedAt' => $manifest['generatedAt'],
			'manifestOutdated' => $manifest['baseVersion'] !== $installedVersion,
			'files' => $files,
			'counts' => $counts,
			'upstream' => $this->getUpstreamChanges($manifest['upstreamTag'], $targetTag),
		];
	}

	/**
	 * @return array{status: string, message?: string}
	 */
	private function compareFile(string $targetTag, string $path, string $baseHash): array {
		try {
			$content = $this->gitHub->getRawFile($targetTag, $path);
		} catch (UpstreamException $e) {
			return ['status' => self::STATUS_ERROR, 'message' => $e->getMessage()];
		}
		if ($content === null) {
			return ['status' => self::STATUS_REMOVED];
		}
		return ['status' => hash('sha256', $content) === $baseHash ? self::STATUS_UNCHANGED : self::STATUS_CHANGED];
	}

	/**
	 * Summary of all upstream changes between the two tags, independent of austit changes.
	 *
	 * @return array<string, mixed>
	 */
	private function getUpstreamChanges(string $baseTag, string $targetTag): array {
		$compareUrl = 'https://github.com/' . GitHubClient::REPOSITORY . '/compare/' . rawurlencode($baseTag) . '...' . rawurlencode($targetTag);
		try {
			$data = $this->gitHub->getJson('/compare/' . rawurlencode($baseTag) . '...' . rawurlencode($targetTag));
		} catch (UpstreamException $e) {
			return ['available' => false, 'message' => $e->getMessage(), 'compareUrl' => $compareUrl];
		}

		$files = [];
		foreach ($data['files'] ?? [] as $file) {
			if (is_array($file) && is_string($file['filename'] ?? null)) {
				$files[] = ['path' => $file['filename'], 'status' => (string)($file['status'] ?? 'modified')];
			}
		}

		return [
			'available' => true,
			'compareUrl' => $compareUrl,
			'commits' => (int)($data['total_commits'] ?? 0),
			'files' => $files,
			'truncated' => count($files) >= self::COMPARE_FILE_LIMIT,
		];
	}
}
