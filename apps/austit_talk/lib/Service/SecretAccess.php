<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCA\AustitTalk\Db\SecretStore;
use OCP\AppFramework\Utility\ITimeFactory;

/**
 * Decides whether a protected file exists for the current request.
 *
 * @psalm-import-type SecretFile from SecretStore
 */
class SecretAccess {
	private int $unrestricted = 0;

	public function __construct(
		private ChatContext $chatContext,
		private ITimeFactory $time,
	) {
	}

	/**
	 * @param SecretFile $secret
	 */
	public function allows(array $secret): bool {
		if ($this->unrestricted > 0) {
			return true;
		}
		return $this->time->getTime() < $secret['expiresAt'] && $this->chatContext->isChat();
	}

	/**
	 * Runs the app's own maintenance with access to every protected file, expired ones included.
	 *
	 * @template T
	 * @param callable(): T $callback
	 * @return T
	 */
	public function unrestricted(callable $callback): mixed {
		$this->unrestricted++;
		try {
			return $callback();
		} finally {
			$this->unrestricted--;
		}
	}
}
