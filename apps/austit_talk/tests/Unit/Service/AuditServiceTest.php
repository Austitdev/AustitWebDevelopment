<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Service\AuditService;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use Psr\Log\LoggerInterface;
use Test\TestCase;

class AuditServiceTest extends TestCase {
	public function testLogsToAuditAndNextcloudLogWithShortenedValues(): void {
		$dispatcher = $this->createMock(IEventDispatcher::class);
		$logger = $this->createMock(LoggerInterface::class);
		$long = str_repeat('x', 600);

		$dispatcher->expects($this->once())->method('dispatchTyped')
			->with($this->callback(fn (CriticalActionPerformedEvent $event): bool => $event->getParameters()['value'] === str_repeat('x', 500)));
		$logger->expects($this->once())->method('warning')
			->with('Setting changed by alice to ' . str_repeat('x', 500), ['app' => 'austit_talk']);

		(new AuditService($dispatcher, $logger))->log('Setting changed by %s to %s', ['user' => 'alice', 'value' => $long]);
	}
}
