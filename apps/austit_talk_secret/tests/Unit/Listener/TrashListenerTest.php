<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Listener;

use OCA\AustitTalkSecret\Listener\TrashListener;
use OCA\AustitTalkSecret\Service\SecretService;
use OCA\Files_Trashbin\Events\MoveToTrashEvent;
use OCP\Files\File;
use Test\TestCase;

class TrashListenerTest extends TestCase {
	private function handle(int $fileId): MoveToTrashEvent {
		$secretService = $this->createMock(SecretService::class);
		$secretService->method('isSecretFile')->willReturnMap([
			[10, false],
			[20, true],
		]);
		$node = $this->createMock(File::class);
		$node->method('getId')->willReturn($fileId);
		$event = new MoveToTrashEvent($node);

		(new TrashListener($secretService))->handle($event);

		return $event;
	}

	public function testSecretFileSkipsTrashBin(): void {
		$this->assertFalse($this->handle(20)->shouldMoveToTrashBin());
	}

	public function testNormalFileKeepsTrashBin(): void {
		$this->assertTrue($this->handle(10)->shouldMoveToTrashBin());
	}
}
