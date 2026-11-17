<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Service;

use OCA\AustitNotebook\Db\SyncStore;
use OCA\AustitNotebook\Service\Location;
use OCA\AustitNotebook\Service\NotebookException;
use OCA\AustitNotebook\Service\NotebookService;
use OCA\AustitNotebook\Service\SyncService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\IUserManager;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class SyncServiceTest extends TestCase {
	private const SESSION = 'abcdefgh1234';
	private const UPDATE = 'AAEC';

	private NotebookService&MockObject $notebooks;
	private SyncStore&MockObject $store;
	private IUserManager&MockObject $userManager;
	private SyncService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->notebooks = $this->createMock(NotebookService::class);
		$this->store = $this->createMock(SyncStore::class);
		$this->userManager = $this->createMock(IUserManager::class);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturn(1001);
		$this->service = new SyncService($this->notebooks, $this->store, $this->userManager, $time);
	}

	/**
	 * A page in a class notebook: students may only read the content library.
	 */
	private function page(bool $canWrite): void {
		$this->notebooks->method('page')->with('alice', 5)->willReturn(new Location(
			$this->createMock(File::class),
			$this->createMock(Folder::class),
			Location::LEVEL_PAGE,
			$canWrite ? Location::ROLE_TEACHER : Location::ROLE_STUDENT,
			classId: 1,
			area: Location::AREA_LIBRARY,
			userId: 'alice',
		));
	}

	public function testPageWithoutLogReturnsNothing(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(null);
		$this->store->expects($this->never())->method('append');
		$this->store->expects($this->never())->method('since');

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, '', false, null);

		$this->assertSame(0, $result['seq']);
		$this->assertSame(0, $result['epoch']);
		$this->assertSame([], $result['updates']);
		$this->assertFalse($result['rejected']);
		$this->assertTrue($result['canWrite']);
	}

	public function testInitStartsTheLog(): void {
		$this->page(true);
		$this->store->method('head')->willReturnOnConsecutiveCalls(null, ['epoch' => 42, 'seq' => 1, 'count' => 1]);
		$this->store->expects($this->once())->method('append')
			->with(5, 1, $this->greaterThan(0), self::SESSION, self::UPDATE)
			->willReturn(true);
		$this->store->method('since')->with(5, 0, null)->willReturn([self::UPDATE]);

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, self::UPDATE, true, null);

		$this->assertFalse($result['rejected']);
		$this->assertSame(42, $result['epoch']);
		$this->assertSame(1, $result['seq']);
	}

	public function testInitIsRejectedWhenSomeoneElseStartedTheLog(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(['epoch' => 42, 'seq' => 3, 'count' => 3]);
		$this->store->expects($this->never())->method('append');
		$this->store->expects($this->once())->method('since')->with(5, 0, null)->willReturn(['a', 'b', 'c']);

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, self::UPDATE, true, null);

		$this->assertTrue($result['rejected']);
		$this->assertSame(['a', 'b', 'c'], $result['updates']);
	}

	public function testUpdateIsAppendedAfterTheLastOne(): void {
		$this->page(true);
		$this->store->method('head')->willReturnOnConsecutiveCalls(
			['epoch' => 42, 'seq' => 3, 'count' => 3],
			['epoch' => 42, 'seq' => 4, 'count' => 4],
		);
		$this->store->expects($this->once())->method('append')->with(5, 4, 42, self::SESSION, self::UPDATE)->willReturn(true);
		$this->store->expects($this->once())->method('since')->with(5, 2, self::SESSION)->willReturn(['c']);

		$result = $this->service->sync('alice', 5, self::SESSION, 42, 2, self::UPDATE, false, null);

		$this->assertFalse($result['rejected']);
		$this->assertSame(4, $result['seq']);
		$this->assertSame(['c'], $result['updates']);
	}

	public function testAppendRetriesWhenTheNumberWasTaken(): void {
		$this->page(true);
		$this->store->method('head')->willReturnOnConsecutiveCalls(
			['epoch' => 42, 'seq' => 3, 'count' => 3],
			['epoch' => 42, 'seq' => 4, 'count' => 4],
			['epoch' => 42, 'seq' => 5, 'count' => 5],
		);
		$numbers = [];
		$this->store->method('append')->willReturnCallback(function (int $pageId, int $seq) use (&$numbers): bool {
			$numbers[] = $seq;
			return count($numbers) > 1;
		});
		$this->store->method('since')->willReturn([]);

		$this->service->sync('alice', 5, self::SESSION, 42, 3, self::UPDATE, false, null);

		$this->assertSame([4, 5], $numbers);
	}

	public function testUpdateForAnotherLogIsRejectedAndTheCurrentLogReturned(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(['epoch' => 42, 'seq' => 2, 'count' => 2]);
		$this->store->expects($this->never())->method('append');
		$this->store->expects($this->once())->method('since')->with(5, 0, null)->willReturn(['a', 'b']);

		$result = $this->service->sync('alice', 5, self::SESSION, 41, 9, self::UPDATE, false, null);

		$this->assertTrue($result['rejected']);
		$this->assertSame(['a', 'b'], $result['updates']);
	}

	public function testReadOnlyUsersCannotSendUpdates(): void {
		$this->page(false);
		$this->store->expects($this->never())->method('append');

		$this->expectException(NotPermittedException::class);
		$this->service->sync('alice', 5, self::SESSION, 42, 0, self::UPDATE, false, null);
	}

	public function testReadOnlyUsersReceiveUpdates(): void {
		$this->page(false);
		$this->store->method('head')->willReturn(['epoch' => 42, 'seq' => 2, 'count' => 2]);
		$this->store->method('since')->willReturn(['a', 'b']);

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, '', false, null);

		$this->assertFalse($result['canWrite']);
		$this->assertSame(['a', 'b'], $result['updates']);
	}

	public function testUnknownPageIsNotSynced(): void {
		$this->notebooks->method('page')->willThrowException(new NotFoundException());
		$this->store->expects($this->never())->method($this->anything());

		$this->expectException(NotFoundException::class);
		$this->service->sync('alice', 5, self::SESSION, 0, 0, self::UPDATE, true, null);
	}

	public static function invalidInput(): array {
		return [
			'session too short' => ['abc', self::UPDATE],
			'session with other characters' => ['ABCDEFGH-1234', self::UPDATE],
			'update is not base64' => [self::SESSION, 'not base64!'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('invalidInput')]
	public function testInvalidInputIsRefused(string $session, string $update): void {
		$this->page(true);
		$this->store->expects($this->never())->method('append');

		$this->expectException(NotebookException::class);
		$this->service->sync('alice', 5, $session, 42, 0, $update, false, null);
	}

	public function testPresenceListsOthersWithNameAndCursor(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(null);
		$this->store->expects($this->once())->method('touchPresence')->with(self::SESSION, 5, 'alice', '[12.3,-4]', 1001);
		$this->store->method('peers')->with(5, self::SESSION, 1001 - SyncService::PRESENCE_TIMEOUT)->willReturn([
			['session' => 'bobsession01', 'userId' => 'bob', 'state' => '[1,2]'],
			['session' => 'carolsession', 'userId' => 'carol', 'state' => 'null'],
		]);
		$this->userManager->method('getDisplayName')->willReturnMap([['bob', 'Bob B.'], ['carol', null]]);

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, '', false, [12.34, '-4']);

		$this->assertSame([
			['id' => 'bobsession01', 'userId' => 'bob', 'name' => 'Bob B.', 'cursor' => [1.0, 2.0]],
			['id' => 'carolsession', 'userId' => 'carol', 'name' => 'carol', 'cursor' => null],
		], $result['peers']);
	}

	public function testLeavingRemovesPresence(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(null);
		$this->store->expects($this->once())->method('leave')->with(self::SESSION, 'alice');
		$this->store->expects($this->never())->method('touchPresence');

		$result = $this->service->sync('alice', 5, self::SESSION, 0, 0, '', false, null, true);

		$this->assertSame([], $result['peers']);
	}

	public function testCompactReplacesTheLogUpToAKnownUpdate(): void {
		$this->page(true);
		$this->store->method('head')->willReturn(['epoch' => 42, 'seq' => 9, 'count' => 9]);
		$this->store->expects($this->once())->method('compact')->with(5, 7, self::UPDATE)->willReturn(true);

		$this->assertTrue($this->service->compact('alice', 5, 42, 7, self::UPDATE));
	}

	public static function staleCompactions(): array {
		return [
			'other log' => [41, 7],
			'beyond the last update' => [42, 10],
			'before the first update' => [42, 0],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('staleCompactions')]
	public function testCompactIgnoresStaleRequests(int $epoch, int $upTo): void {
		$this->page(true);
		$this->store->method('head')->willReturn(['epoch' => 42, 'seq' => 9, 'count' => 9]);
		$this->store->expects($this->never())->method('compact');

		$this->assertFalse($this->service->compact('alice', 5, $epoch, $upTo, self::UPDATE));
	}

	public function testCompactNeedsWriteAccess(): void {
		$this->page(false);
		$this->store->expects($this->never())->method('compact');

		$this->expectException(NotPermittedException::class);
		$this->service->compact('alice', 5, 42, 7, self::UPDATE);
	}
}
