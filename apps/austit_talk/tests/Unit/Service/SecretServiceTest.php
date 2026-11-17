<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Db\SecretStore;
use OCA\AustitTalk\Service\ChatContext;
use OCA\AustitTalk\Service\Cipher;
use OCA\AustitTalk\Service\SecretAccess;
use OCA\AustitTalk\Service\SecretService;
use OCA\AustitTalk\Service\TalkRooms;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\NotPermittedException;
use OCP\Lock\LockedException;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Log\LoggerInterface;
use Test\TestCase;

class SecretServiceTest extends TestCase {
	private const TOKEN = 'abc123';
	private const USER = 'alice';
	private const NOW = 5000;

	private SecretStore&MockObject $store;
	private Cipher&MockObject $cipher;
	private TalkRooms&MockObject $talkRooms;
	private IRootFolder&MockObject $rootFolder;
	private LoggerInterface&MockObject $logger;
	private SecretService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->store = $this->createMock(SecretStore::class);
		$this->cipher = $this->createMock(Cipher::class);
		$this->talkRooms = $this->createMock(TalkRooms::class);
		$this->rootFolder = $this->createMock(IRootFolder::class);
		$this->logger = $this->createMock(LoggerInterface::class);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturn(self::NOW);

		$this->service = new SecretService(
			$this->store,
			$this->cipher,
			$this->talkRooms,
			new SecretAccess($this->createMock(ChatContext::class), $time),
			$this->rootFolder,
			$time,
			$this->logger
		);
	}

	private function pending(int $fileId): array {
		return ['fileId' => $fileId, 'token' => self::TOKEN, 'owner' => self::USER, 'key' => 'wrapped_key', 'expiresAt' => self::NOW + 300, 'encrypted' => false];
	}

	private function pendingFile(int $fileId, ?File $file): void {
		$this->store->method('getPending')->willReturn([$this->pending($fileId)]);
		$userFolder = $this->createMock(Folder::class);
		$userFolder->method('getFirstNodeById')->with($fileId)->willReturn($file);
		$this->rootFolder->method('getUserFolder')->with(self::USER)->willReturn($userFolder);
	}

	public function testIsSecretRoom(): void {
		$this->store->method('getLease')
			->willReturnMap([
				['secret_room', 300],
				['normal_room', null],
				['zero_room', 0],
			]);

		$this->assertTrue($this->service->isSecretRoom('secret_room'));
		$this->assertFalse($this->service->isSecretRoom('normal_room'));
		$this->assertFalse($this->service->isSecretRoom('zero_room'));
	}

	public static function dataSyncRoomLease(): array {
		return [
			'classified conversation becomes secret' => [null, true, 3600, 3600, false],
			'classified conversation without expiration stays normal' => [null, true, 0, null, false],
			'normal conversation stays normal' => [null, false, 3600, null, false],
			'secret conversation follows the expiration' => [300, false, 3600, 3600, false],
			'unchanged expiration writes nothing' => [3600, true, 3600, null, false],
			'turning the expiration off ends the protection' => [300, true, 0, null, true],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('dataSyncRoomLease')]
	public function testSyncRoomLease(?int $lease, bool $classified, int $expiration, ?int $stored, bool $removed): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn($lease);
		if ($stored === null) {
			$this->store->expects($this->never())->method('setRoom');
		} else {
			$this->store->expects($this->once())->method('setRoom')->with(self::TOKEN, $stored, self::USER);
		}
		$this->store->expects($removed ? $this->once() : $this->never())->method('removeRoom')->with(self::TOKEN);
		$this->talkRooms->expects($this->never())->method('setMessageExpiration');

		$this->service->syncRoomLease(self::TOKEN, $classified, $expiration, self::USER);
	}

	public function testSetRoomLeaseEnforcesModerator(): void {
		$this->talkRooms->method('isModerator')->with(self::TOKEN, self::USER)->willReturn(false);
		$this->store->expects($this->never())->method('setRoom');

		$this->expectException(NotPermittedException::class);
		$this->service->setRoomLease(self::TOKEN, 300, self::USER);
	}

	public function testSetRoomLeaseEnablesSecret(): void {
		$this->talkRooms->method('isModerator')->with(self::TOKEN, self::USER)->willReturn(true);

		$this->store->expects($this->once())
			->method('setRoom')
			->with(self::TOKEN, 300, self::USER);

		$this->talkRooms->expects($this->once())
			->method('setMessageExpiration')
			->with(self::TOKEN, 300);

		$this->service->setRoomLease(self::TOKEN, 300, self::USER);
	}

	public function testSetRoomLeaseDisablesSecret(): void {
		$this->talkRooms->method('isModerator')->with(self::TOKEN, self::USER)->willReturn(true);

		$this->store->expects($this->once())
			->method('removeRoom')
			->with(self::TOKEN);

		$this->talkRooms->expects($this->once())
			->method('setMessageExpiration')
			->with(self::TOKEN, 0);

		$this->service->setRoomLease(self::TOKEN, 0, self::USER);
	}

	public function testConversationFolderTokenOfSecretRoom(): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn(300);
		$this->talkRooms->method('isAttachmentFolder')
			->with(self::USER, 'Talk/My-Room-abc123/Alice-alice', self::TOKEN)
			->willReturn(true);

		$this->assertSame(self::TOKEN, $this->service->getConversationFolderToken('/alice/files/Talk/My-Room-abc123/Alice-alice'));
	}

	public function testConversationFolderTokenIsNullForNormalRoom(): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn(null);
		$this->talkRooms->expects($this->never())->method('isAttachmentFolder');

		$this->assertNull($this->service->getConversationFolderToken('/alice/files/Talk/My-Room-abc123/Alice-alice'));
	}

	public function testConversationFolderTokenIsNullForFolderTalkDoesNotUse(): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn(300);
		$this->talkRooms->method('isAttachmentFolder')->willReturn(false);

		$this->assertNull($this->service->getConversationFolderToken('/alice/files/Other/My-Room-abc123/Alice-alice'));
	}

	public function testConversationFolderTokenIsNullForUnrelatedPaths(): void {
		$this->store->expects($this->never())->method('getLease');

		$this->assertNull($this->service->getConversationFolderToken('/alice/files/Documents/Invoices'));
		$this->assertNull($this->service->getConversationFolderToken('/alice/files'));
		$this->assertNull($this->service->getConversationFolderToken('/alice/cache/Talk/My-Room-abc123/Alice-alice'));
	}

	public function testRegisterFileSkipsAlreadyProtectedFile(): void {
		$file = $this->createMock(File::class);
		$file->method('getId')->willReturn(101);
		$this->store->method('getFile')->with(101)->willReturn($this->pending(101));

		$this->store->expects($this->never())->method('addFile');

		$this->assertFalse($this->service->registerFile($file, self::TOKEN, self::USER, 300));
	}

	public function testRegisterFileStoresKeyAndLeaseWithoutTouchingTheFile(): void {
		$file = $this->createMock(File::class);
		$file->method('getId')->willReturn(102);
		$file->method('getMimeType')->willReturn('application/pdf');
		$this->store->method('getFile')->with(102)->willReturn(null);
		$this->cipher->method('newKey')->willReturn('wrapped_key');

		$file->expects($this->never())->method('move');
		$file->expects($this->never())->method('putContent');
		$this->store->expects($this->once())
			->method('addFile')
			->with(102, self::TOKEN, self::USER, 'wrapped_key', self::NOW + 300);

		$this->assertTrue($this->service->registerFile($file, self::TOKEN, self::USER, 300));
	}

	public function testProtectPendingEncryptsInPlace(): void {
		$file = $this->createMock(File::class);
		$file->method('getContent')->willReturn('plain_bytes');
		$this->pendingFile(102, $file);

		$this->cipher->method('encrypt')->with('plain_bytes', 'wrapped_key')->willReturn('encrypted_bytes');
		$file->expects($this->never())->method('move');
		$file->expects($this->once())->method('putContent')->with('encrypted_bytes');
		$this->store->expects($this->once())->method('markEncrypted')->with(102);

		$this->assertSame(1, $this->service->protectPending());
	}

	public function testProtectPendingDoesNotEncryptTwice(): void {
		$file = $this->createMock(File::class);
		$file->method('getContent')->willReturn(Cipher::MAGIC . 'encrypted_bytes');
		$this->pendingFile(102, $file);

		$file->expects($this->never())->method('putContent');
		$this->store->expects($this->once())->method('markEncrypted')->with(102);

		$this->service->protectPending();
	}

	public function testProtectPendingKeepsLockedFilePending(): void {
		$file = $this->createMock(File::class);
		$file->method('getContent')->willReturn('plain_bytes');
		$file->method('putContent')->willThrowException(new LockedException('Talk/photo.jpg'));
		$this->pendingFile(102, $file);

		$this->store->expects($this->never())->method('markEncrypted');
		$this->store->expects($this->never())->method('removeFile');
		$this->logger->expects($this->once())->method('error');

		$this->assertSame(0, $this->service->protectPending());
	}

	public function testProtectPendingForgetsDeletedFile(): void {
		$this->pendingFile(102, null);

		$this->store->expects($this->once())->method('removeFile')->with(102);

		$this->service->protectPending();
	}

	public function testDeleteExpiredDeletesNodesAndCleansStore(): void {
		$this->store->method('getExpired')->with(1000)->willReturn([
			['fileId' => 201, 'token' => self::TOKEN, 'owner' => 'alice', 'key' => 'k1', 'expiresAt' => 900, 'encrypted' => true],
		]);

		$userFolder = $this->createMock(Folder::class);
		$node = $this->createMock(File::class);
		$node->expects($this->once())->method('delete');
		$userFolder->method('getById')->with(201)->willReturn([$node]);

		$this->rootFolder->method('getUserFolder')->with('alice')->willReturn($userFolder);

		$this->store->expects($this->once())->method('removeFile')->with(201);
		$this->store->method('getRoomTokens')->willReturn([self::TOKEN]);
		$this->talkRooms->expects($this->once())->method('expireMessagesOfMissingFiles')->with([self::TOKEN]);
		$this->talkRooms->expects($this->once())->method('deleteExpiredMessages');

		$deleted = $this->service->deleteExpired(1000);
		$this->assertSame(1, $deleted);
	}

	public function testRegisterRoomSharesRegistersSharedFiles(): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn(300);
		$this->store->method('getRoomShareFiles')->with(self::TOKEN)->willReturn([
			['fileId' => 301, 'owner' => 'alice'],
			['fileId' => 302, 'owner' => 'bob'],
		]);
		$this->store->method('getFile')->willReturnCallback(fn (int $fileId): ?array => $fileId === 301
			? ['fileId' => 301, 'token' => self::TOKEN, 'owner' => 'alice', 'key' => 'k', 'expiresAt' => self::NOW + 300, 'encrypted' => false]
			: null);
		$this->cipher->method('newKey')->willReturn('wrapped_key');
		$this->store->expects($this->once())
			->method('addFile')
			->with(302, self::TOKEN, 'bob', 'wrapped_key', self::NOW + 300);

		$this->assertSame(1, $this->service->registerRoomShares(self::TOKEN));
	}

	public function testRegisterRoomSharesSkipsNormalRoom(): void {
		$this->store->method('getLease')->with(self::TOKEN)->willReturn(null);
		$this->store->expects($this->never())->method('getRoomShareFiles');

		$this->assertSame(0, $this->service->registerRoomShares(self::TOKEN));
	}

	public function testRegisterPendingRoomSharesCoversEveryRoom(): void {
		$this->store->method('getRoomTokens')->willReturn([self::TOKEN, 'other_room']);
		$this->store->method('getLease')->willReturnMap([
			[self::TOKEN, 300],
			['other_room', null],
		]);
		$this->store->method('getRoomShareFiles')->with(self::TOKEN)->willReturn([
			['fileId' => 401, 'owner' => 'alice'],
		]);
		$this->store->method('getFile')->willReturn(null);
		$this->cipher->method('newKey')->willReturn('wrapped_key');
		$this->store->expects($this->once())->method('addFile')->with(401, self::TOKEN, 'alice', 'wrapped_key', self::NOW + 300);

		$this->assertSame(1, $this->service->registerPendingRoomShares());
	}
}
