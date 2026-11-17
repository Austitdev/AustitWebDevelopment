<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Service\TalkRooms;
use OCP\App\IAppManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\Server;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

#[\PHPUnit\Framework\Attributes\Group('DB')]
class TalkRoomsTest extends TestCase {
	private const TOKEN = 'tstsecret1';
	private const OTHER_TOKEN = 'tstnormal1';
	private const MISSING_FILE_ID = 999999901;

	private IDBConnection $db;
	private IAppManager&MockObject $appManager;
	private \DateTime $now;
	private TalkRooms $talkRooms;
	/** @var list<int> */
	private array $roomIds = [];
	/** @var list<int> */
	private array $fileIds = [];

	protected function setUp(): void {
		parent::setUp();
		$this->db = Server::get(IDBConnection::class);
		$this->appManager = $this->createMock(IAppManager::class);
		$this->appManager->method('isEnabledForAnyone')->with('spreed')->willReturn(true);
		$this->now = new \DateTime('2026-11-15 13:00:00');
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getDateTime')->willReturnCallback(fn () => clone $this->now);
		$this->talkRooms = new TalkRooms($this->appManager, $this->db, $time);
	}

	protected function tearDown(): void {
		foreach ($this->roomIds as $roomId) {
			$qb = $this->db->getQueryBuilder();
			$qb->delete('comments')
				->where($qb->expr()->eq('object_type', $qb->createNamedParameter('chat')))
				->andWhere($qb->expr()->eq('object_id', $qb->createNamedParameter((string)$roomId)))
				->executeStatement();
			$qb = $this->db->getQueryBuilder();
			$qb->delete('talk_rooms')
				->where($qb->expr()->eq('id', $qb->createNamedParameter($roomId, IQueryBuilder::PARAM_INT)))
				->executeStatement();
		}
		foreach ($this->fileIds as $fileId) {
			$qb = $this->db->getQueryBuilder();
			$qb->delete('filecache')
				->where($qb->expr()->eq('fileid', $qb->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)))
				->executeStatement();
		}
		parent::tearDown();
	}

	public function testExpiresOnlyMessagesOfMissingFilesInGivenRooms(): void {
		$room = $this->room(self::TOKEN);
		$otherRoom = $this->room(self::OTHER_TOKEN);
		$existingFile = $this->file();

		$missing = $this->message($room, 'object_shared', $this->fileShared(self::MISSING_FILE_ID));
		$present = $this->message($room, 'object_shared', $this->fileShared($existingFile));
		$text = $this->message($room, 'comment', 'hello');
		$poll = $this->message($room, 'object_shared', json_encode(['message' => 'object_shared', 'parameters' => ['objectType' => 'talk-poll']]));
		$otherRoomMissing = $this->message($otherRoom, 'object_shared', $this->fileShared(self::MISSING_FILE_ID));

		$this->assertSame(1, $this->talkRooms->expireMessagesOfMissingFiles([self::TOKEN]));

		$this->assertSame('2026-11-15 13:00:00', $this->expireDate($missing));
		$this->assertNull($this->expireDate($present));
		$this->assertNull($this->expireDate($text));
		$this->assertNull($this->expireDate($poll));
		$this->assertNull($this->expireDate($otherRoomMissing));
	}

	public function testDoesNothingWithoutRooms(): void {
		$this->appManager->expects($this->never())->method('isEnabledForAnyone');
		$this->assertSame(0, $this->talkRooms->expireMessagesOfMissingFiles([]));
	}

	public function testDoesNothingWhileTalkIsDisabled(): void {
		$appManager = $this->createMock(IAppManager::class);
		$appManager->method('isEnabledForAnyone')->willReturn(false);
		$room = $this->room(self::TOKEN);
		$missing = $this->message($room, 'object_shared', $this->fileShared(self::MISSING_FILE_ID));

		$talkRooms = new TalkRooms($appManager, $this->db, $this->createMock(ITimeFactory::class));
		$this->assertSame(0, $talkRooms->expireMessagesOfMissingFiles([self::TOKEN]));
		$this->assertNull($this->expireDate($missing));
	}

	private function room(string $token): int {
		$qb = $this->db->getQueryBuilder();
		$qb->insert('talk_rooms')
			->values([
				'token' => $qb->createNamedParameter($token),
				'type' => $qb->createNamedParameter(2, IQueryBuilder::PARAM_INT),
			])
			->executeStatement();
		$id = $qb->getLastInsertId();
		$this->roomIds[] = $id;
		return $id;
	}

	private function file(): int {
		$qb = $this->db->getQueryBuilder();
		$qb->insert('filecache')
			->values([
				'storage' => $qb->createNamedParameter(999999, IQueryBuilder::PARAM_INT),
				'path' => $qb->createNamedParameter('files/talk-rooms-test.txt'),
				'path_hash' => $qb->createNamedParameter(md5('files/talk-rooms-test.txt')),
				'name' => $qb->createNamedParameter('talk-rooms-test.txt'),
			])
			->executeStatement();
		$id = $qb->getLastInsertId();
		$this->fileIds[] = $id;
		return $id;
	}

	private function fileShared(int $fileId): string {
		return json_encode(['message' => 'file_shared', 'parameters' => ['fileId' => (string)$fileId, 'metaData' => []]]);
	}

	private function message(int $roomId, string $verb, string $message): int {
		$qb = $this->db->getQueryBuilder();
		$qb->insert('comments')
			->values([
				'actor_type' => $qb->createNamedParameter('users'),
				'actor_id' => $qb->createNamedParameter('alice'),
				'message' => $qb->createNamedParameter($message),
				'verb' => $qb->createNamedParameter($verb),
				'object_type' => $qb->createNamedParameter('chat'),
				'object_id' => $qb->createNamedParameter((string)$roomId),
			])
			->executeStatement();
		return $qb->getLastInsertId();
	}

	private function expireDate(int $commentId): ?string {
		$qb = $this->db->getQueryBuilder();
		$qb->select('expire_date')
			->from('comments')
			->where($qb->expr()->eq('id', $qb->createNamedParameter($commentId, IQueryBuilder::PARAM_INT)));
		$value = $qb->executeQuery()->fetchOne();
		return $value === null || $value === false ? null : substr((string)$value, 0, 19);
	}
}
