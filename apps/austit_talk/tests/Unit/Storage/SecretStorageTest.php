<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Storage;

use OC\Files\Storage\Storage;
use OCA\AustitTalk\Db\SecretStore;
use OCA\AustitTalk\Service\ChatContext;
use OCA\AustitTalk\Service\Cipher;
use OCA\AustitTalk\Service\SecretAccess;
use OCA\AustitTalk\Storage\SecretCache;
use OCA\AustitTalk\Storage\SecretStorage;
use OCA\Files_Sharing\SharedStorage;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\Cache\ICache;
use OCP\Files\Cache\ICacheEntry;
use OCP\Share\IShare;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Log\LoggerInterface;
use Test\TestCase;

#[\PHPUnit\Framework\Attributes\Group('DB')]
class SecretStorageTest extends TestCase {
	private Storage&MockObject $wrapped;
	private ICache&MockObject $cache;
	private SecretStore&MockObject $store;
	private Cipher&MockObject $cipher;
	private ChatContext&MockObject $chatContext;
	private LoggerInterface&MockObject $logger;
	private SecretStorage $storage;

	protected function setUp(): void {
		parent::setUp();
		$this->wrapped = $this->createMock(Storage::class);
		$this->cache = $this->createMock(ICache::class);
		$this->wrapped->method('getCache')->willReturn($this->cache);

		$this->store = $this->createMock(SecretStore::class);
		$this->cipher = $this->createMock(Cipher::class);
		$this->chatContext = $this->createMock(ChatContext::class);
		$this->logger = $this->createMock(LoggerInterface::class);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(time(...));

		$this->storage = new SecretStorage(
			['storage' => $this->wrapped, 'mountPoint' => '/alice/files'],
			$this->store,
			$this->cipher,
			new SecretAccess($this->chatContext, $time),
			$this->logger
		);
	}

	public function testCacheHidesSecretFiles(): void {
		$this->assertInstanceOf(SecretCache::class, $this->storage->getCache());
	}

	private function shareOfSecretFile(bool $inChat): SecretStorage {
		$share = $this->createMock(IShare::class);
		$share->method('getNodeId')->willReturn(20);
		$shared = $this->createMock(SharedStorage::class);
		$shared->method('getShare')->willReturn($share);
		$shared->method('getCache')->willReturn($this->cache);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() + 300,
			'encrypted' => true,
		]);
		$this->chatContext->method('isChat')->willReturn($inChat);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(time(...));

		return new SecretStorage(
			['storage' => $shared, 'mountPoint' => '/bob/files/Talk/photo.jpg'],
			$this->store,
			$this->cipher,
			new SecretAccess($this->chatContext, $time),
			$this->logger
		);
	}

	public function testShareOfSecretFileIsLeftOutOutsideChat(): void {
		$root = $this->shareOfSecretFile(false)->getCache()->get('');

		$this->assertSame(0, $root->getPermissions());
	}

	public function testShareOfSecretFileIsServedInChat(): void {
		$this->assertInstanceOf(SecretCache::class, $this->shareOfSecretFile(true)->getCache());
	}

	public function testStorageOnTopOfProtectedStorageKeepsPlainSize(): void {
		$this->wrapped->method('instanceOfStorage')->with(SecretStorage::class)->willReturn(true);
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->willReturn($entry);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() + 300,
			'encrypted' => true,
		]);
		$this->chatContext->method('isChat')->willReturn(true);
		$this->wrapped->method('filesize')->willReturn(1000);

		$this->assertSame(1000, $this->storage->filesize('photo.jpg'));
	}

	public function testNormalFilePassesThrough(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(10);
		$this->cache->method('get')->with('normal.txt')->willReturn($entry);
		$this->store->method('getFile')->with(10)->willReturn(null);

		$this->wrapped->method('isSharable')->with('normal.txt')->willReturn(true);
		$this->wrapped->method('file_get_contents')->with('normal.txt')->willReturn('regular data');

		$this->assertTrue($this->storage->isSharable('normal.txt'));
		$this->assertSame('regular data', $this->storage->file_get_contents('normal.txt'));
	}

	public function testSecretFileCannotBeShared(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->with('.talk_secret/photo.jpg')->willReturn($entry);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() + 300,
			'encrypted' => true,
		]);

		$this->assertFalse($this->storage->isSharable('.talk_secret/photo.jpg'));
	}

	public function testSecretFileBlockedOutsideChat(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->with('.talk_secret/photo.jpg')->willReturn($entry);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() + 300,
			'encrypted' => true,
		]);

		$this->chatContext->method('isChat')->willReturn(false);

		$this->assertFalse($this->storage->file_get_contents('.talk_secret/photo.jpg'));
		$this->assertFalse($this->storage->fopen('.talk_secret/photo.jpg', 'r'));
	}

	public function testSecretFileDecryptedInChat(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->with('.talk_secret/photo.jpg')->willReturn($entry);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() + 300,
			'encrypted' => true,
		]);

		$this->chatContext->method('isChat')->willReturn(true);
		$this->wrapped->method('file_get_contents')->with('.talk_secret/photo.jpg')
			->willReturn(Cipher::MAGIC . 'encrypted_bytes');

		$this->cipher->method('decrypt')->with(Cipher::MAGIC . 'encrypted_bytes', 'k1')
			->willReturn('decrypted_image_data');

		$this->assertSame('decrypted_image_data', $this->storage->file_get_contents('.talk_secret/photo.jpg'));

		$stream = $this->storage->fopen('.talk_secret/photo.jpg', 'rb');
		$this->assertIsResource($stream);
		$this->assertSame('decrypted_image_data', stream_get_contents($stream));
		fclose($stream);
	}

	public function testSecretFileBlockedWhenExpired(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->with('.talk_secret/photo.jpg')->willReturn($entry);
		$this->store->method('getFile')->with(20)->willReturn([
			'fileId' => 20,
			'token' => 't1',
			'owner' => 'alice',
			'key' => 'k1',
			'expiresAt' => time() - 10,
			'encrypted' => true,
		]);

		$this->chatContext->method('isChat')->willReturn(true);

		$this->assertFalse($this->storage->file_get_contents('.talk_secret/photo.jpg'));
	}

	public function testSizeLeavesOutEncryptionOverheadOnlyOnceEncrypted(): void {
		$entry = $this->createMock(ICacheEntry::class);
		$entry->method('getId')->willReturn(20);
		$this->cache->method('get')->willReturn($entry);
		$secret = ['fileId' => 20, 'token' => 't1', 'owner' => 'alice', 'key' => 'k1', 'expiresAt' => time() + 300];
		$this->store->method('getFile')->with(20)->willReturnOnConsecutiveCalls(
			$secret + ['encrypted' => false],
			$secret + ['encrypted' => true],
		);
		$this->chatContext->method('isChat')->willReturn(true);
		$this->wrapped->method('filesize')->willReturn(1000);

		$this->assertSame(1000, $this->storage->filesize('photo.jpg'));
		$this->assertSame(1000 - Cipher::OVERHEAD, $this->storage->filesize('photo.jpg'));
	}
}
