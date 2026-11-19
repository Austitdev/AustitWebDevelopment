<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Core;

/**
 * Kern ohne Nextcloud-Abhängigkeiten: reinwertige Entscheidungen der
 * Freigabe- und Suchrechte aus der Konfiguration.
 *
 * Konfiguration:
 * - videos: Liste freigegebener Video-IDs
 * - channels: Liste freigegebener Kanal-IDs (alle zugehörigen Videos erlaubt)
 * - searchGroups: Gruppen, deren Mitglieder frei suchen dürfen
 */
class AccessRules {
	/**
	 * @param array<string, mixed> $config
	 * @param list<string> $userGroups
	 */
	public function __construct(
		private array $config,
		private array $userGroups,
		private bool $isAdmin = false,
	) {
	}

	public function maySearch(): bool {
		if ($this->isAdmin) {
			return true;
		}
		$groups = $this->config['searchGroups'] ?? [];
		if (!is_array($groups)) {
			return true;
		}
		// Leere Liste: alle Nutzer duerfen suchen; gefuellte Liste: nur diese Gruppen.
		if ($groups === []) {
			return true;
		}
		foreach ($groups as $group) {
			if (in_array((string)$group, $this->userGroups, true)) {
				return true;
			}
		}
		return false;
	}

	public function mayManage(): bool {
		return $this->isAdmin;
	}

	public function isVideoAllowed(string $videoId, string $channelId = ''): bool {
		$videos = $this->config['videos'] ?? [];
		if (is_array($videos) && in_array($videoId, array_map('strval', $videos), true)) {
			return true;
		}
		if ($channelId !== '') {
			$channels = $this->config['channels'] ?? [];
			return is_array($channels) && in_array($channelId, array_map('strval', $channels), true);
		}
		return false;
	}
}
