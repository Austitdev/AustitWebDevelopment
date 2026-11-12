<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Service;

class ReleaseService {
	public const VERSION_PATTERN = '/^\d+\.\d+\.\d+(?:(?:alpha|beta|rc)\d+)?$/';

	public function __construct(
		private GitHubClient $gitHub,
	) {
	}

	/**
	 * Lists upstream releases newer than the installed version, newest first.
	 * Only the current and the next major version are supported upgrade targets,
	 * because Nextcloud cannot skip major versions.
	 *
	 * @return list<array{version: string, tag: string, name: string, url: string, publishedAt: string, prerelease: bool, supported: bool}>
	 * @throws UpstreamException
	 */
	public function getNewerReleases(string $installedVersion, bool $includePrereleases = false): array {
		$installedMajor = (int)explode('.', $installedVersion)[0];
		$releases = [];

		foreach ($this->gitHub->getJson('/releases?per_page=50') as $release) {
			if (!is_array($release) || ($release['draft'] ?? false) === true) {
				continue;
			}
			$prerelease = ($release['prerelease'] ?? false) === true;
			if ($prerelease && !$includePrereleases) {
				continue;
			}
			$tag = (string)($release['tag_name'] ?? '');
			$version = ltrim($tag, 'v');
			if (!preg_match(self::VERSION_PATTERN, $version) || !version_compare($version, $installedVersion, '>')) {
				continue;
			}
			$major = (int)explode('.', $version)[0];
			$releases[] = [
				'version' => $version,
				'tag' => $tag,
				'name' => (string)($release['name'] ?? $tag),
				'url' => (string)($release['html_url'] ?? ''),
				'publishedAt' => (string)($release['published_at'] ?? ''),
				'prerelease' => $prerelease,
				'supported' => $major === $installedMajor || $major === $installedMajor + 1,
			];
		}

		usort($releases, static fn (array $a, array $b): int => version_compare($b['version'], $a['version']));
		return $releases;
	}
}
