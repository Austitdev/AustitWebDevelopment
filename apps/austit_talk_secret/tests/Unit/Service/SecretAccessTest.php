<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Service;

use OCA\AustitTalkSecret\Service\ChatContext;
use OCA\AustitTalkSecret\Service\SecretAccess;
use OCP\AppFramework\Utility\ITimeFactory;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class SecretAccessTest extends TestCase {
	private const NOW = 1000;

	private ChatContext&MockObject $chatContext;
	private SecretAccess $access;

	protected function setUp(): void {
		parent::setUp();
		$this->chatContext = $this->createMock(ChatContext::class);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturn(self::NOW);
		$this->access = new SecretAccess($this->chatContext, $time);
	}

	private function secret(int $expiresAt): array {
		return ['fileId' => 1, 'token' => 't1', 'owner' => 'alice', 'key' => 'k1', 'expiresAt' => $expiresAt, 'encrypted' => true];
	}

	public function testAllowsValidFileInChat(): void {
		$this->chatContext->method('isChat')->willReturn(true);
		$this->assertTrue($this->access->allows($this->secret(self::NOW + 1)));
	}

	public function testDeniesOutsideChat(): void {
		$this->chatContext->method('isChat')->willReturn(false);
		$this->assertFalse($this->access->allows($this->secret(self::NOW + 1)));
	}

	public function testDeniesExpiredFileInChat(): void {
		$this->chatContext->method('isChat')->willReturn(true);
		$this->assertFalse($this->access->allows($this->secret(self::NOW)));
	}

	public function testUnrestrictedAllowsOnlyWhileRunning(): void {
		$this->chatContext->method('isChat')->willReturn(false);
		$expired = $this->secret(self::NOW - 1);

		$result = $this->access->unrestricted(fn (): bool => $this->access->allows($expired));

		$this->assertTrue($result);
		$this->assertFalse($this->access->allows($expired));
	}

	public function testUnrestrictedEndsWhenCallbackThrows(): void {
		$this->chatContext->method('isChat')->willReturn(false);

		try {
			$this->access->unrestricted(function (): void {
				throw new \RuntimeException('failed');
			});
			$this->fail('Exception expected');
		} catch (\RuntimeException) {
		}

		$this->assertFalse($this->access->allows($this->secret(self::NOW + 1)));
	}
}
