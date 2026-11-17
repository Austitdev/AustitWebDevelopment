<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Db;

use OCA\AustitTalk\Db\SecretStore;
use OCP\IDBConnection;
use OCP\Server;
use Test\TestCase;

#[\PHPUnit\Framework\Attributes\Group('DB')]
class SecretStoreTest extends TestCase {
	private const TOKEN = 'test_token_secret_123';
	private const OTHER_TOKEN = 'test_token_secret_456';
	private const FILE_ID = 888888001;
	private const OTHER_FILE_ID = 888888002;

	private SecretStore $store;

	protected function setUp(): void {
		parent::setUp();
		$this->store = new SecretStore(Server::get(IDBConnection::class));
		$this->cleanUp();
	}

	protected function tearDown(): void {
		$this->cleanUp();
		parent::tearDown();
	}

	private function cleanUp(): void {
		$this->store->removeRoom(self::TOKEN);
		$this->store->removeRoom(self::OTHER_TOKEN);
		$this->store->removeFile(self::FILE_ID);
		$this->store->removeFile(self::OTHER_FILE_ID);
	}

	public function testRoomLeaseManagement(): void {
		$this->assertNull($this->store->getLease(self::TOKEN));

		$this->store->setRoom(self::TOKEN, 300, 'alice');
		$this->assertSame(300, $this->store->getLease(self::TOKEN));

		// Update lease
		$this->store->setRoom(self::TOKEN, 600, 'alice');
		$this->assertSame(600, $this->store->getLease(self::TOKEN));

		$this->store->removeRoom(self::TOKEN);
		$this->assertNull($this->store->getLease(self::TOKEN));
	}

	public function testGetRoomTokens(): void {
		$this->store->setRoom(self::TOKEN, 300, 'alice');
		$this->store->setRoom(self::OTHER_TOKEN, 600, 'bob');

		$tokens = $this->store->getRoomTokens();
		$this->assertContains(self::TOKEN, $tokens);
		$this->assertContains(self::OTHER_TOKEN, $tokens);

		$this->store->removeRoom(self::OTHER_TOKEN);
		$this->assertNotContains(self::OTHER_TOKEN, $this->store->getRoomTokens());
	}

	public function testFileManagementAndExpiry(): void {
		$this->assertNull($this->store->getFile(self::FILE_ID));
		$this->assertFalse($this->store->hasFile(self::FILE_ID));

		$this->store->addFile(self::FILE_ID, self::TOKEN, 'alice', 'wrapped_key_1', 1000);
		$this->assertTrue($this->store->hasFile(self::FILE_ID));
		$this->store->addFile(self::OTHER_FILE_ID, self::TOKEN, 'bob', 'wrapped_key_2', 2000);

		$file = $this->store->getFile(self::FILE_ID);
		$this->assertNotNull($file);
		$this->assertSame(self::FILE_ID, $file['fileId']);
		$this->assertSame(self::TOKEN, $file['token']);
		$this->assertSame('alice', $file['owner']);
		$this->assertSame('wrapped_key_1', $file['key']);
		$this->assertSame(1000, $file['expiresAt']);
		$this->assertFalse($file['encrypted']);

		// At timestamp 500, nothing is expired
		$this->assertSame([], $this->store->getExpired(500));

		// At timestamp 1000, file 1 is expired
		$expired = $this->store->getExpired(1000);
		$this->assertCount(1, $expired);
		$this->assertSame(self::FILE_ID, $expired[0]['fileId']);

		// At timestamp 2500, both are expired
		$expiredBoth = $this->store->getExpired(2500);
		$this->assertCount(2, $expiredBoth);

		$this->store->removeFile(self::FILE_ID);
		$this->assertNull($this->store->getFile(self::FILE_ID));
		$this->assertFalse($this->store->hasFile(self::FILE_ID));
	}

	public function testPendingUntilMarkedEncrypted(): void {
		$this->store->addFile(self::FILE_ID, self::TOKEN, 'alice', 'wrapped_key_1', 1000);
		$this->store->addFile(self::OTHER_FILE_ID, self::TOKEN, 'bob', 'wrapped_key_2', 2000);
		$this->assertFalse($this->store->getFile(self::FILE_ID)['encrypted']);

		$this->store->markEncrypted(self::FILE_ID);

		$this->assertTrue($this->store->getFile(self::FILE_ID)['encrypted']);
		$pending = array_column($this->store->getPending(), 'fileId');
		$this->assertContains(self::OTHER_FILE_ID, $pending);
		$this->assertNotContains(self::FILE_ID, $pending);
	}

	public function testFilesOfOtherRequestsAreFound(): void {
		$this->store->addFile(self::FILE_ID, self::TOKEN, 'alice', 'wrapped_key_1', 1000);

		$other = new SecretStore(Server::get(IDBConnection::class));
		$this->assertTrue($other->hasFile(self::FILE_ID));
		$this->assertSame('wrapped_key_1', $other->getFile(self::FILE_ID)['key']);
	}
}
