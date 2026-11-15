<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Storage;

use OC\Files\Cache\CacheEntry;
use OCA\AustitTalkSecret\Db\SecretStore;
use OCA\AustitTalkSecret\Service\Cipher;
use OCA\AustitTalkSecret\Service\SecretAccess;
use OCA\AustitTalkSecret\Storage\SecretCache;
use OCP\Files\Cache\ICache;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

#[\PHPUnit\Framework\Attributes\Group('DB')]
class SecretCacheTest extends TestCase {
	private const SECRET = ['fileId' => 20, 'token' => 't1', 'owner' => 'alice', 'key' => 'k1', 'expiresAt' => 2000, 'encrypted' => true];
	private const PENDING = ['fileId' => 30, 'token' => 't1', 'owner' => 'alice', 'key' => 'k2', 'expiresAt' => 2000, 'encrypted' => false];

	private ICache&MockObject $inner;
	private SecretAccess&MockObject $access;
	private SecretCache $cache;

	protected function setUp(): void {
		parent::setUp();
		$this->inner = $this->createMock(ICache::class);
		$store = $this->createMock(SecretStore::class);
		$store->method('getFile')->willReturnMap([
			[10, null],
			[20, self::SECRET],
			[30, self::PENDING],
		]);
		$this->access = $this->createMock(SecretAccess::class);
		$this->cache = new SecretCache($this->inner, $store, $this->access);
	}

	private function entry(int $id, int $size, string $path = 'folder/file'): CacheEntry {
		return new CacheEntry(['fileid' => $id, 'size' => $size, 'path' => $path, 'permissions' => 31]);
	}

	public function testNormalFileIsUnchanged(): void {
		$this->inner->method('get')->with('normal.txt')->willReturn($this->entry(10, 500));
		$this->access->expects($this->never())->method('allows');

		$entry = $this->cache->get('normal.txt');

		$this->assertSame(10, $entry->getId());
		$this->assertSame(500, $entry['size']);
	}

	public function testSecretFileDoesNotExistWithoutAccess(): void {
		$this->inner->method('get')->with('.talk_secret/photo.jpg')->willReturn($this->entry(20, 500));
		$this->access->method('allows')->with(self::SECRET)->willReturn(false);

		$this->assertFalse($this->cache->get('.talk_secret/photo.jpg'));
	}

	public function testSecretFileIsLeftOutOfListings(): void {
		$this->inner->method('getFolderContentsById')->with(5)
			->willReturn([$this->entry(10, 500), $this->entry(20, 500)]);
		$this->access->method('allows')->willReturn(false);

		$ids = array_map(fn (CacheEntry $entry): int => $entry->getId(), $this->cache->getFolderContentsById(5));

		$this->assertSame([10], array_values($ids));
	}

	public function testSecretFileReportsPlainSizeWithAccess(): void {
		$this->inner->method('get')->with('.talk_secret/photo.jpg')
			->willReturn($this->entry(20, 500 + Cipher::OVERHEAD));
		$this->access->method('allows')->with(self::SECRET)->willReturn(true);

		$entry = $this->cache->get('.talk_secret/photo.jpg');

		$this->assertSame(500, $entry['size']);
	}

	public function testSizeIsNotAdjustedOnTopOfProtectedStorage(): void {
		$store = $this->createMock(SecretStore::class);
		$store->method('getFile')->with(20)->willReturn(self::SECRET);
		$cache = new SecretCache($this->inner, $store, $this->access, false);
		$this->inner->method('get')->willReturn($this->entry(20, 500));
		$this->access->method('allows')->willReturnOnConsecutiveCalls(true, false);

		$this->assertSame(500, $cache->get('photo.jpg')['size']);
		$this->assertFalse($cache->get('photo.jpg'));
	}

	public function testPendingFileKeepsItsSize(): void {
		$this->inner->method('get')->with('Talk/photo.jpg')->willReturn($this->entry(30, 500));
		$this->access->method('allows')->with(self::PENDING)->willReturn(true);

		$this->assertSame(500, $this->cache->get('Talk/photo.jpg')['size']);
	}
}
