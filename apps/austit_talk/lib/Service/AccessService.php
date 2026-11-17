<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCA\AustitTalk\AppInfo\Application;
use OCP\IConfig;
use OCP\IGroupManager;
use OCP\IUserManager;

class AccessService {
	private const ALLOWED_USERS_KEY = 'allowed_users';
	private const INITIAL_USER = 'Katao';

	public function __construct(
		private readonly IConfig $config,
		private readonly IGroupManager $groupManager,
		private readonly IUserManager $userManager,
	) {
	}

	public function isAdmin(string $userId): bool {
		return $this->groupManager->isAdmin($userId);
	}

	/**
	 * @return list<string>
	 */
	public function getAllowedUsers(): array {
		$raw = $this->config->getAppValue(Application::APP_ID, self::ALLOWED_USERS_KEY, '');
		if ($raw === '') {
			$initial = [];
			$user = $this->userManager->get(self::INITIAL_USER);
			if ($user !== null) {
				$initial[] = $user->getUID();
			}
			$this->setAllowedUsers($initial);
			return $initial;
		}

		$decoded = json_decode($raw, true);
		if (!is_array($decoded)) {
			return [];
		}

		return array_values(array_filter($decoded, static fn ($value): bool => is_string($value)));
	}

	public function isAllowed(string $userId): bool {
		return in_array($userId, $this->getAllowedUsers(), true);
	}

	/**
	 * Settings are only available to administrators who are also on the
	 * explicitly managed allow-list. Being a full admin alone is not enough.
	 */
	public function canUseSettings(string $userId): bool {
		return $this->isAdmin($userId) && $this->isAllowed($userId);
	}

	/**
	 * @param list<string> $userIds
	 */
	public function setAllowedUsers(array $userIds): void {
		$canonical = [];
		foreach ($userIds as $userId) {
			if (!is_string($userId) || $userId === '') {
				continue;
			}
			$user = $this->userManager->get($userId);
			if ($user !== null) {
				$canonical[] = $user->getUID();
			}
		}

		$canonical = array_values(array_unique($canonical));
		$this->config->setAppValue(Application::APP_ID, self::ALLOWED_USERS_KEY, json_encode($canonical));
	}
}
