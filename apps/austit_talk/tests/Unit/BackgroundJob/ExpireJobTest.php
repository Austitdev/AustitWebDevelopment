<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\BackgroundJob;

use OCA\AustitTalk\BackgroundJob\ExpireJob;
use OCA\AustitTalk\Service\SecretService;
use OCP\AppFramework\Utility\ITimeFactory;
use Test\TestCase;

class ExpireJobTest extends TestCase {
	public function testJobInvokesDeleteExpired(): void {
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturn(1700000000);

		$service = $this->createMock(SecretService::class);
		$service->expects($this->once())->method('registerPendingRoomShares');
		$service->expects($this->once())->method('protectPending');
		$service->expects($this->once())
			->method('deleteExpired')
			->with(1700000000);

		$job = new ExpireJob($time, $service);
		$job->start($this->createMock(\OCP\BackgroundJob\IJobList::class));
	}
}
