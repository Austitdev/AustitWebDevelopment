<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Db;

use OCA\AustitNotebook\Db\SyncStore;
use OCP\IDBConnection;
use OCP\Server;
use Test\TestCase;

#[\PHPUnit\Framework\Attributes\Group('DB')]
class SyncStoreTest extends TestCase {
	/** Page ids far outside of what a file id can be on a test instance */
	private const PAGE = 9_000_000_001;
	private const OTHER_PAGE = 9_000_000_002;

	private SyncStore $store;

	protected function setUp(): void {
		parent::setUp();
		$this->store = new SyncStore(Server::get(IDBConnection::class));
		$this->cleanUp();
	}

	protected function tearDown(): void {
		$this->cleanUp();
		parent::tearDown();
	}

	private function cleanUp(): void {
		$this->store->clear(self::PAGE);
		$this->store->clear(self::OTHER_PAGE);
		$this->store->leave('storetest0001', 'alice');
		$this->store->leave('storetest0002', 'bob');
	}

	public function testHeadOfAPageWithoutUpdates(): void {
		$this->assertNull($this->store->head(self::PAGE));
	}

	public function testAppendNumbersUpdatesPerPage(): void {
		$this->assertTrue($this->store->append(self::PAGE, 1, 42, 'storetest0001', 'first'));
		$this->assertTrue($this->store->append(self::PAGE, 2, 42, 'storetest0002', 'second'));
		$this->assertTrue($this->store->append(self::OTHER_PAGE, 1, 7, 'storetest0001', 'elsewhere'));

		$this->assertSame(['seq' => 2, 'epoch' => 42, 'count' => 2], $this->store->head(self::PAGE));
		$this->assertSame(['seq' => 1, 'epoch' => 7, 'count' => 1], $this->store->head(self::OTHER_PAGE));
	}

	public function testAppendRefusesANumberThatIsTaken(): void {
		$this->assertTrue($this->store->append(self::PAGE, 1, 42, 'storetest0001', 'first'));
		$this->assertFalse($this->store->append(self::PAGE, 1, 42, 'storetest0002', 'late'));

		$this->assertSame(['first'], $this->store->since(self::PAGE, 0));
	}

	public function testSinceReturnsLaterUpdatesInOrderWithoutTheOwn(): void {
		$this->store->append(self::PAGE, 1, 42, 'storetest0001', 'a');
		$this->store->append(self::PAGE, 2, 42, 'storetest0002', 'b');
		$this->store->append(self::PAGE, 3, 42, 'storetest0001', 'c');
		$this->store->append(self::PAGE, 4, 42, 'storetest0002', 'd');

		$this->assertSame(['a', 'b', 'c', 'd'], $this->store->since(self::PAGE, 0));
		$this->assertSame(['c', 'd'], $this->store->since(self::PAGE, 2));
		$this->assertSame(['c'], $this->store->since(self::PAGE, 1, 'storetest0002'));
		$this->assertSame([], $this->store->since(self::PAGE, 4));
	}

	public function testCompactKeepsTheNumberAndDropsEarlierUpdates(): void {
		$this->store->append(self::PAGE, 1, 42, 'storetest0001', 'a');
		$this->store->append(self::PAGE, 2, 42, 'storetest0001', 'b');
		$this->store->append(self::PAGE, 3, 42, 'storetest0002', 'c');

		$this->assertTrue($this->store->compact(self::PAGE, 2, 'a+b'));

		$this->assertSame(['seq' => 3, 'epoch' => 42, 'count' => 2], $this->store->head(self::PAGE));
		$this->assertSame(['a+b', 'c'], $this->store->since(self::PAGE, 0));
		// The merged update belongs to nobody, so the session that wrote the originals gets it too.
		$this->assertSame(['a+b', 'c'], $this->store->since(self::PAGE, 1, 'storetest0001'));
	}

	public function testCompactWithoutMatchingUpdateChangesNothing(): void {
		$this->store->append(self::PAGE, 1, 42, 'storetest0001', 'a');

		$this->assertFalse($this->store->compact(self::PAGE, 5, 'x'));
		$this->assertSame(['a'], $this->store->since(self::PAGE, 0));
	}

	public function testClearForgetsOnlyThatPage(): void {
		$this->store->append(self::PAGE, 1, 42, 'storetest0001', 'a');
		$this->store->append(self::OTHER_PAGE, 1, 7, 'storetest0001', 'b');

		$this->store->clear(self::PAGE);

		$this->assertNull($this->store->head(self::PAGE));
		$this->assertSame(['b'], $this->store->since(self::OTHER_PAGE, 0));
	}

	public function testPresenceListsOtherRecentSessions(): void {
		$this->store->touchPresence('storetest0001', self::PAGE, 'alice', '[1,2]', 1000);
		$this->store->touchPresence('storetest0002', self::PAGE, 'bob', 'null', 1000);
		$this->store->touchPresence('storetest0002', self::PAGE, 'bob', '[3,4]', 1010);

		$this->assertSame(
			[['session' => 'storetest0002', 'userId' => 'bob', 'state' => '[3,4]']],
			$this->store->peers(self::PAGE, 'storetest0001', 1005),
		);
		$this->assertSame([], $this->store->peers(self::PAGE, 'storetest0002', 1005));
		$this->assertSame([], $this->store->peers(self::OTHER_PAGE, 'storetest0001', 0));
	}

	public function testASessionCannotBeTakenOverByAnotherUser(): void {
		$this->store->touchPresence('storetest0001', self::PAGE, 'alice', '[1,2]', 1000);
		$this->store->touchPresence('storetest0001', self::PAGE, 'bob', '[9,9]', 1001);
		$this->store->leave('storetest0001', 'bob');

		$this->assertSame(
			[['session' => 'storetest0001', 'userId' => 'alice', 'state' => '[1,2]']],
			$this->store->peers(self::PAGE, 'storetest0002', 0),
		);
	}

	public function testLeaveRemovesTheSession(): void {
		$this->store->touchPresence('storetest0001', self::PAGE, 'alice', 'null', 1000);
		$this->store->leave('storetest0001', 'alice');

		$this->assertSame([], $this->store->peers(self::PAGE, 'storetest0002', 0));
	}
}
