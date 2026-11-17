<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCA\AustitTalk\AppInfo\Application;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use Psr\Log\LoggerInterface;

class AuditService {
	private const MAX_PARAMETER_LENGTH = 500;

	public function __construct(
		private readonly IEventDispatcher $eventDispatcher,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * @param array<string, string> $parameters values for the %s placeholders, in order
	 */
	public function log(string $message, array $parameters): void {
		$parameters = array_map(
			static fn (string $value): string => mb_substr($value, 0, self::MAX_PARAMETER_LENGTH),
			$parameters
		);

		// admin_audit writes this to audit.log, but only while the log level is info (1) or lower.
		$this->eventDispatcher->dispatchTyped(new CriticalActionPerformedEvent($message, $parameters));

		// Keep a record in nextcloud.log at the default log level (warning) as well.
		$this->logger->warning(vsprintf($message, array_values($parameters)), ['app' => Application::APP_ID]);
	}
}
