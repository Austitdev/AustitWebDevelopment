<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Db;

use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Update log of pages that are edited together, and who is currently on a page.
 *
 * Updates of a page are numbered without gaps (seq); a reader that has seen seq n has seen
 * every update up to n. All updates of one page carry the same epoch, a new epoch means the
 * log was started over and earlier updates must be forgotten.
 *
 * @psalm-type Head = array{epoch: int, seq: int, count: int}
 * @psalm-type Peer = array{session: string, userId: string, state: string}
 */
class SyncStore {
	public const TABLE_UPDATES = 'austit_nb_sync';
	public const TABLE_PRESENCE = 'austit_nb_presence';

	public function __construct(
		private IDBConnection $db,
	) {
	}

	/**
	 * @return Head|null null when the page has no updates
	 */
	public function head(int $pageId): ?array {
		$qb = $this->db->getQueryBuilder();
		$qb->select($qb->func()->max('seq'), $qb->func()->max('epoch'), $qb->func()->count('id'))
			->from(self::TABLE_UPDATES)
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)));
		$row = $qb->executeQuery()->fetchNumeric();
		if ($row === false || (int)$row[2] === 0) {
			return null;
		}
		return ['seq' => (int)$row[0], 'epoch' => (int)$row[1], 'count' => (int)$row[2]];
	}

	/**
	 * Stores an update under the given number.
	 *
	 * @return bool false when another update already took that number
	 */
	public function append(int $pageId, int $seq, int $epoch, string $session, string $data): bool {
		$qb = $this->db->getQueryBuilder();
		$qb->insert(self::TABLE_UPDATES)
			->values([
				'page_id' => $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT),
				'seq' => $qb->createNamedParameter($seq, IQueryBuilder::PARAM_INT),
				'epoch' => $qb->createNamedParameter($epoch, IQueryBuilder::PARAM_INT),
				'session' => $qb->createNamedParameter($session),
				'data' => $qb->createNamedParameter($data),
			]);
		try {
			$qb->executeStatement();
		} catch (Exception $e) {
			if ($e->getReason() === Exception::REASON_UNIQUE_CONSTRAINT_VIOLATION) {
				return false;
			}
			throw $e;
		}
		return true;
	}

	/**
	 * Updates after the given number, oldest first.
	 *
	 * @param string|null $excludeSession leave out updates this session sent itself
	 * @return list<string>
	 */
	public function since(int $pageId, int $since, ?string $excludeSession = null): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('data')
			->from(self::TABLE_UPDATES)
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->gt('seq', $qb->createNamedParameter($since, IQueryBuilder::PARAM_INT)))
			->orderBy('seq');
		if ($excludeSession !== null) {
			$qb->andWhere($qb->expr()->neq('session', $qb->createNamedParameter($excludeSession)));
		}
		return array_map(strval(...), $qb->executeQuery()->fetchFirstColumn());
	}

	/**
	 * Replaces all updates up to the given number by one update that contains them.
	 *
	 * @return bool false when no update has that number
	 */
	public function compact(int $pageId, int $upTo, string $data): bool {
		$qb = $this->db->getQueryBuilder();
		$updated = $qb->update(self::TABLE_UPDATES)
			->set('data', $qb->createNamedParameter($data))
			->set('session', $qb->createNamedParameter(''))
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->eq('seq', $qb->createNamedParameter($upTo, IQueryBuilder::PARAM_INT)))
			->executeStatement();
		if ($updated === 0) {
			return false;
		}

		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_UPDATES)
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->lt('seq', $qb->createNamedParameter($upTo, IQueryBuilder::PARAM_INT)))
			->executeStatement();
		return true;
	}

	/**
	 * Forgets all updates of a page.
	 */
	public function clear(int $pageId): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_UPDATES)
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
	}

	public function touchPresence(string $session, int $pageId, string $userId, string $state, int $now): void {
		$qb = $this->db->getQueryBuilder();
		$updated = $qb->update(self::TABLE_PRESENCE)
			->set('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT))
			->set('last_seen', $qb->createNamedParameter($now, IQueryBuilder::PARAM_INT))
			->set('state', $qb->createNamedParameter($state))
			->where($qb->expr()->eq('session', $qb->createNamedParameter($session)))
			->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
			->executeStatement();
		if ($updated > 0) {
			return;
		}

		$qb = $this->db->getQueryBuilder();
		$qb->insert(self::TABLE_PRESENCE)
			->values([
				'session' => $qb->createNamedParameter($session),
				'page_id' => $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT),
				'user_id' => $qb->createNamedParameter($userId),
				'last_seen' => $qb->createNamedParameter($now, IQueryBuilder::PARAM_INT),
				'state' => $qb->createNamedParameter($state),
			]);
		try {
			$qb->executeStatement();
		} catch (Exception $e) {
			// The session id is taken, either by a parallel request of the same tab or by someone else; both are fine to skip.
			if ($e->getReason() !== Exception::REASON_UNIQUE_CONSTRAINT_VIOLATION) {
				throw $e;
			}
		}
	}

	/**
	 * Other sessions seen on the page since the given time.
	 *
	 * @return list<Peer>
	 */
	public function peers(int $pageId, string $session, int $seenSince): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('session', 'user_id', 'state')
			->from(self::TABLE_PRESENCE)
			->where($qb->expr()->eq('page_id', $qb->createNamedParameter($pageId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->gte('last_seen', $qb->createNamedParameter($seenSince, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->neq('session', $qb->createNamedParameter($session)))
			->orderBy('session');
		return array_map(static fn (array $row) => [
			'session' => (string)$row['session'],
			'userId' => (string)$row['user_id'],
			'state' => (string)$row['state'],
		], $qb->executeQuery()->fetchAllAssociative());
	}

	public function leave(string $session, string $userId): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_PRESENCE)
			->where($qb->expr()->eq('session', $qb->createNamedParameter($session)))
			->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
			->executeStatement();
	}

	public function prunePresence(int $seenBefore): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_PRESENCE)
			->where($qb->expr()->lt('last_seen', $qb->createNamedParameter($seenBefore, IQueryBuilder::PARAM_INT)))
			->executeStatement();
	}
}
