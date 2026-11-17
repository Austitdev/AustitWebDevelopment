<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Listener;

use OCA\AustitTalk\Listener\ConversationFolderListener;
use OCA\AustitTalk\Service\SecretService;
use OCP\Files\Events\Node\NodeCreatedEvent;
use OCP\Files\Events\Node\NodeRenamedEvent;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\Node;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class ConversationFolderListenerTest extends TestCase {
	private const FOLDER = '/alice/files/Talk/Room-secret_room_1/Alice-alice';

	private SecretService&MockObject $service;
	private ConversationFolderListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->service = $this->createMock(SecretService::class);
		$this->service->method('getConversationFolderToken')->willReturnMap([
			[self::FOLDER, 'secret_room_1'],
			['/alice/files/Documents', null],
		]);
		$this->service->method('getRoomLease')->with('secret_room_1')->willReturn(600);
		$this->listener = new ConversationFolderListener($this->service);
	}

	/**
	 * @param class-string<Node> $class
	 */
	private function node(string $class, string $path): Node&MockObject {
		$node = $this->createMock($class);
		$node->method('getPath')->willReturn($path);
		return $node;
	}

	public function testRegistersFileMovedIntoAttachmentFolder(): void {
		$target = $this->node(File::class, self::FOLDER . '/report.pdf');
		$this->service->expects($this->once())
			->method('registerFile')
			->with($target, 'secret_room_1', 'alice', 600);

		$source = $this->node(File::class, '/alice/files/Talk/Room-secret_room_1/Draft/report.pdf');
		$this->listener->handle(new NodeRenamedEvent($source, $target));
	}

	public function testRegistersFileCreatedInAttachmentFolder(): void {
		$file = $this->node(File::class, self::FOLDER . '/photo.jpg');
		$this->service->expects($this->once())
			->method('registerFile')
			->with($file, 'secret_room_1', 'alice', 600);

		$this->listener->handle(new NodeCreatedEvent($file));
	}

	public function testIgnoresFileElsewhere(): void {
		$this->service->expects($this->never())->method('registerFile');

		$this->listener->handle(new NodeCreatedEvent($this->node(File::class, '/alice/files/Documents/report.pdf')));
	}

	public function testIgnoresFolder(): void {
		$this->service->expects($this->never())->method('registerFile');
		$this->service->expects($this->never())->method('getConversationFolderToken');

		$this->listener->handle(new NodeCreatedEvent($this->node(Folder::class, self::FOLDER . '/sub')));
	}
}
