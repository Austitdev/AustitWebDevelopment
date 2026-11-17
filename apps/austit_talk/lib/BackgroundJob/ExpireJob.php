<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\BackgroundJob;

use OCA\AustitTalk\Service\SecretService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;

/**
 * Encrypts images that are still pending and deletes those whose lease time has expired.
 */
class ExpireJob extends TimedJob {
	public function __construct(
		ITimeFactory $time,
		private SecretService $secretService,
	) {
		parent::__construct($time);
		$this->setInterval(60);
		$this->setTimeSensitivity(self::TIME_SENSITIVE);
	}

	#[\Override]
	protected function run(mixed $argument): void {
		$this->secretService->registerPendingRoomShares();
		$this->secretService->protectPending();
		$this->secretService->deleteExpired($this->time->getTime());
	}
}
