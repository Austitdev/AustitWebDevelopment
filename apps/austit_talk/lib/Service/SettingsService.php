<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCP\AppFramework\OCS\OCSException;
use OCP\IAppConfig;
use OCP\IGroupManager;

class SettingsService {
	private const TALK_APP = 'spreed';
	private const DEFAULT_STUN_SERVER = 'stun.nextcloud.com:443';

	private const GROUP_LIST_KEYS = [
		'allowed_groups',
		'start_conversations',
		'start_calls_groups',
		'federation_allowed_groups',
	];

	private const BOOL_KEYS = [
		'conversations_files' => true,
		'conversations_files_public_shares' => true,
		'federation_incoming_enabled' => true,
		'federation_outgoing_enabled' => true,
		'federation_only_trusted_servers' => false,
		'call_end_to_end_encryption' => false,
		'enable_matterbridge' => false,
		'force_passwords' => false,
		'breakout_rooms' => true,
		'inactivity_enable_lobby' => false,
		'delete_one_to_one_conversations' => false,
	];

	private const INT_KEYS = [
		'start_calls' => [0, 1, 2, 3],
		'default_group_notification' => [0, 1, 2, 3],
	];

	/** Integer settings with an allowed range [min, max]. */
	private const RANGE_INT_KEYS = [
		'inactivity_lock_after_days' => [0, 3650],
	];

	public function __construct(
		private readonly IAppConfig $appConfig,
		private readonly IGroupManager $groupManager,
	) {
	}

	/**
	 * @return array<string, mixed>
	 */
	public function getSettings(): array {
		$settings = [];

		foreach (self::GROUP_LIST_KEYS as $key) {
			$settings[$key] = $this->readStringList($key);
		}

		foreach (self::BOOL_KEYS as $key => $default) {
			$settings[$key] = $this->appConfig->getValueBool(self::TALK_APP, $key, $default);
		}

		foreach (array_keys(self::INT_KEYS + self::RANGE_INT_KEYS) as $key) {
			$settings[$key] = $this->appConfig->getValueInt(self::TALK_APP, $key, 0);
		}

		// Read-only: configured TURN servers without their secrets
		$settings['turn_servers'] = $this->readTurnServers();

		$settings['federation_enabled'] = $this->appConfig->getValueString(
			self::TALK_APP,
			'federation_enabled',
			'no'
		) === 'yes';

		$settings['stun_servers'] = $this->readStringList('stun_servers', [self::DEFAULT_STUN_SERVER]);

		return $settings;
	}

	/**
	 * @return array<string, mixed>
	 */
	public function update(string $key, mixed $value): array {
		if (in_array($key, self::GROUP_LIST_KEYS, true)) {
			$this->appConfig->setValueArray(self::TALK_APP, $key, $this->normalizeGroupList($value));
			return $this->getSettings();
		}

		if (array_key_exists($key, self::BOOL_KEYS)) {
			$this->appConfig->setValueBool(self::TALK_APP, $key, $this->toBool($value));
			return $this->getSettings();
		}

		if ($key === 'federation_enabled') {
			$this->appConfig->setValueString(
				self::TALK_APP,
				$key,
				$this->toBool($value) ? 'yes' : 'no'
			);
			return $this->getSettings();
		}

		if (array_key_exists($key, self::INT_KEYS)) {
			$intValue = $this->toInt($value);
			if (!in_array($intValue, self::INT_KEYS[$key], true)) {
				throw new OCSException('Invalid value for ' . $key, 400);
			}
			$this->appConfig->setValueInt(self::TALK_APP, $key, $intValue);
			return $this->getSettings();
		}

		if (array_key_exists($key, self::RANGE_INT_KEYS)) {
			$intValue = $this->toInt($value);
			[$min, $max] = self::RANGE_INT_KEYS[$key];
			if ($intValue < $min || $intValue > $max) {
				throw new OCSException('Invalid value for ' . $key, 400);
			}
			$this->appConfig->setValueInt(self::TALK_APP, $key, $intValue);
			return $this->getSettings();
		}

		if ($key === 'stun_servers') {
			$this->appConfig->setValueArray(
				self::TALK_APP,
				$key,
				$this->normalizeStringList($value, 20)
			);
			return $this->getSettings();
		}

		throw new OCSException('Unknown setting: ' . $key, 400);
	}

	/**
	 * TURN servers as shown to admins: scheme, server and protocols, never the secret.
	 *
	 * @return list<string>
	 */
	private function readTurnServers(): array {
		try {
			$servers = $this->appConfig->getValueArray(self::TALK_APP, 'turn_servers', []);
		} catch (\Throwable) {
			$decoded = json_decode($this->appConfig->getValueString(self::TALK_APP, 'turn_servers', '[]'), true);
			$servers = is_array($decoded) ? $decoded : [];
		}

		$result = [];
		foreach ($servers as $server) {
			if (!is_array($server) || !is_string($server['server'] ?? null)) {
				continue;
			}
			$result[] = sprintf(
				'%s:%s (%s)',
				is_string($server['schemes'] ?? null) ? $server['schemes'] : 'turn',
				$server['server'],
				is_string($server['protocols'] ?? null) ? $server['protocols'] : 'udp,tcp'
			);
		}
		return $result;
	}

	/**
	 * @param list<string> $default
	 * @return list<string>
	 */
	private function readStringList(string $key, array $default = []): array {
		$decoded = $this->appConfig->getValueArray(self::TALK_APP, $key, $default);
		return array_values(array_filter($decoded, static fn ($value): bool => is_string($value)));
	}

	/**
	 * @param mixed $value
	 * @return list<string>
	 */
	private function normalizeGroupList(mixed $value): array {
		if (!is_array($value)) {
			throw new OCSException('Expected a list of group ids', 400);
		}

		$groups = [];
		foreach ($value as $groupId) {
			if (!is_string($groupId) || $groupId === '') {
				throw new OCSException('Invalid group id', 400);
			}
			if ($this->groupManager->get($groupId) === null) {
				throw new OCSException('Unknown group: ' . $groupId, 400);
			}
			$groups[] = $groupId;
		}

		return array_values(array_unique($groups));
	}

	/**
	 * @param mixed $value
	 * @return list<string>
	 */
	private function normalizeStringList(mixed $value, int $limit): array {
		if (!is_array($value)) {
			throw new OCSException('Expected a list of strings', 400);
		}

		$result = [];
		foreach ($value as $item) {
			if (!is_string($item)) {
				throw new OCSException('Invalid list entry', 400);
			}
			$item = trim($item);
			if ($item === '' || strlen($item) > 255 || preg_match('/\s/', $item) === 1) {
				throw new OCSException('Invalid list entry: ' . $item, 400);
			}
			$result[] = $item;
		}

		$result = array_values(array_unique($result));
		if (count($result) > $limit) {
			throw new OCSException('Too many entries', 400);
		}

		return $result;
	}

	private function toBool(mixed $value): bool {
		if (is_bool($value)) {
			return $value;
		}
		if (is_int($value)) {
			return $value !== 0;
		}
		if (is_string($value)) {
			return in_array(strtolower($value), ['1', 'true', 'yes', 'on'], true);
		}

		throw new OCSException('Expected a boolean value', 400);
	}

	private function toInt(mixed $value): int {
		if (is_int($value)) {
			return $value;
		}
		if (is_string($value) && preg_match('/^-?\d+$/', $value) === 1) {
			return (int)$value;
		}

		throw new OCSException('Expected an integer value', 400);
	}
}
