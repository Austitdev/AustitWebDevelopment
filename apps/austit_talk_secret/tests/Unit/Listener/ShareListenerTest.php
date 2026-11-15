<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Listener;

use OCA\AustitTalkSecret\Listener\ShareListener;
use OCA\AustitTalkSecret\Service\SecretService;
use OCP\Constants;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\Node;
use OCP\IUser;
use OCP\Share\Events\BeforeShareCreatedEvent;
use OCP\Share\Events\ShareCreatedEvent;
use OCP\Share\IShare;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class ShareListenerTest extends TestCase {
	private const FOLDER_PATH = '/alice/files/Talk/Room-secret_room_1/Alice-alice';

	private SecretService&MockObject $service;
	private ShareListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->service = $this->createMock(SecretService::class);
		$this->service->method('isSecretFile')->willReturnCallback(fn (int $fileId): bool => $fileId === 101);
		$this->service->method('isSecretRoom')->willReturnMap([['secret_room_1', true], ['normal_room', false]]);
		$this->service->method('getConversationFolderToken')->willReturnMap([
			[self::FOLDER_PATH, 'secret_room_1'],
			['/alice/files/Documents', null],
		]);
		$this->listener = new ShareListener($this->service);
	}

	/**
	 * @template T of Node
	 * @param class-string<T> $class
	 * @return T&MockObject
	 */
	private function node(string $class, int $id, string $owner = 'alice', string $path = ''): Node&MockObject {
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn($owner);
		$node = $this->createMock($class);
		$node->method('getId')->willReturn($id);
		$node->method('getOwner')->willReturn($user);
		$node->method('getPath')->willReturn($path);
		return $node;
	}

	private function roomShare(Node $node, string $token = 'secret_room_1', string $sharedBy = 'alice', int $permissions = Constants::PERMISSION_READ): IShare&MockObject {
		$share = $this->createMock(IShare::class);
		$share->method('getNode')->willReturn($node);
		$share->method('getShareType')->willReturn(IShare::TYPE_ROOM);
		$share->method('getSharedWith')->willReturn($token);
		$share->method('getSharedBy')->willReturn($sharedBy);
		$share->method('getShareOwner')->willReturn('alice');
		$share->method('getPermissions')->willReturn($permissions);
		return $share;
	}

	private function errorFor(IShare $share): ?string {
		$event = new BeforeShareCreatedEvent($share);
		$this->listener->handle($event);
		$this->assertSame($event->getError() !== null, $event->isPropagationStopped());
		return $event->getError();
	}

	public function testBlocksSharingSecretFileAgain(): void {
		$share = $this->createMock(IShare::class);
		$share->method('getNode')->willReturn($this->node(File::class, 101));

		$this->assertSame('Geheime Dateien können nicht weiter geteilt werden.', $this->errorFor($share));
	}

	public function testAllowsOwnFileOfAnyTypeInSecretRoom(): void {
		$this->assertNull($this->errorFor($this->roomShare($this->node(File::class, 102))));
	}

	public function testBlocksFileOfSomeoneElseInSecretRoom(): void {
		$share = $this->roomShare($this->node(File::class, 103, 'alice'), sharedBy: 'bob');

		$this->assertSame('In geheimen Unterhaltungen können nur eigene Dateien geteilt werden.', $this->errorFor($share));
	}

	public function testAllowsAttachmentFolderOfSecretRoom(): void {
		$share = $this->roomShare($this->node(Folder::class, 104, path: self::FOLDER_PATH));

		$this->assertNull($this->errorFor($share));
	}

	public function testBlocksWritableAttachmentFolderOfSecretRoom(): void {
		$share = $this->roomShare(
			$this->node(Folder::class, 104, path: self::FOLDER_PATH),
			permissions: Constants::PERMISSION_READ | Constants::PERMISSION_UPDATE,
		);

		$this->assertSame('In geheimen Unterhaltungen können keine Ordner geteilt werden.', $this->errorFor($share));
	}

	public function testBlocksOtherFolderInSecretRoom(): void {
		$share = $this->roomShare($this->node(Folder::class, 105, path: '/alice/files/Documents'));

		$this->assertSame('In geheimen Unterhaltungen können keine Ordner geteilt werden.', $this->errorFor($share));
	}

	public function testIgnoresNormalRoom(): void {
		$share = $this->roomShare($this->node(Folder::class, 105, path: '/alice/files/Documents'), 'normal_room', 'bob');

		$this->assertNull($this->errorFor($share));
	}

	public function testShareCreatedRegistersFile(): void {
		$file = $this->node(File::class, 104);
		$this->service->method('getRoomLease')->with('secret_room_1')->willReturn(600);
		$this->service->expects($this->once())
			->method('registerFile')
			->with($file, 'secret_room_1', 'alice', 600);

		$this->listener->handle(new ShareCreatedEvent($this->roomShare($file)));
	}

	public function testShareCreatedIgnoresNormalRoom(): void {
		$this->service->method('getRoomLease')->with('normal_room')->willReturn(null);
		$this->service->expects($this->never())->method('registerFile');

		$this->listener->handle(new ShareCreatedEvent($this->roomShare($this->node(File::class, 104), 'normal_room')));
	}

	public function testShareCreatedIgnoresFolder(): void {
		$this->service->method('getRoomLease')->with('secret_room_1')->willReturn(600);
		$this->service->expects($this->never())->method('registerFile');

		$this->listener->handle(new ShareCreatedEvent($this->roomShare($this->node(Folder::class, 104, path: self::FOLDER_PATH))));
	}
}
