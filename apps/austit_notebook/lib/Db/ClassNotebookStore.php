<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Db;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Persistence of class notebooks and their members.
 *
 * @psalm-type ClassRow = array{id: int, owner: string, folderId: int}
 * @psalm-type Member = array{type: 'user'|'group', id: string, role: 'teacher'|'student'}
 */
class ClassNotebookStore {
	public const TABLE_CLASSES = 'austit_nb_classes';
	public const TABLE_MEMBERS = 'austit_nb_members';
	public const ROLES = ['teacher', 'student'];
	public const MEMBER_TYPES = ['user', 'group'];

	public function __construct(
		private IDBConnection $db,
	) {
	}

	public function create(string $owner, int $folderId): int {
		$qb = $this->db->getQueryBuilder();
		$qb->insert(self::TABLE_CLASSES)
			->values([
				'owner' => $qb->createNamedParameter($owner),
				'folder_id' => $qb->createNamedParameter($folderId, IQueryBuilder::PARAM_INT),
				'created_at' => $qb->createNamedParameter(time(), IQueryBuilder::PARAM_INT),
			])
			->executeStatement();
		return $qb->getLastInsertId();
	}

	/**
	 * @return ClassRow|null
	 */
	public function findByFolderId(int $folderId): ?array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('id', 'owner', 'folder_id')
			->from(self::TABLE_CLASSES)
			->where($qb->expr()->eq('folder_id', $qb->createNamedParameter($folderId, IQueryBuilder::PARAM_INT)));
		$row = $qb->executeQuery()->fetch();
		return $row === false ? null : $this->toClass($row);
	}

	/**
	 * Class notebooks the user owns or is a member of, directly or through a group.
	 *
	 * @param list<string> $groupIds
	 * @return list<ClassRow>
	 */
	public function findForUser(string $userId, array $groupIds): array {
		$members = $this->db->getQueryBuilder();
		$members->selectDistinct('class_id')
			->from(self::TABLE_MEMBERS)
			->where($members->expr()->andX(
				$members->expr()->eq('member_type', $members->createNamedParameter('user')),
				$members->expr()->eq('member_id', $members->createNamedParameter($userId)),
			));
		if ($groupIds !== []) {
			$members->orWhere($members->expr()->andX(
				$members->expr()->eq('member_type', $members->createNamedParameter('group')),
				$members->expr()->in('member_id', $members->createNamedParameter($groupIds, IQueryBuilder::PARAM_STR_ARRAY)),
			));
		}
		$classIds = array_map('intval', $members->executeQuery()->fetchFirstColumn());

		$qb = $this->db->getQueryBuilder();
		$qb->select('id', 'owner', 'folder_id')
			->from(self::TABLE_CLASSES)
			->where($qb->expr()->eq('owner', $qb->createNamedParameter($userId)));
		if ($classIds !== []) {
			$qb->orWhere($qb->expr()->in('id', $qb->createNamedParameter($classIds, IQueryBuilder::PARAM_INT_ARRAY)));
		}
		$qb->orderBy('id');

		return array_map($this->toClass(...), $qb->executeQuery()->fetchAllAssociative());
	}

	/**
	 * @return list<Member>
	 */
	public function getMembers(int $classId): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('member_type', 'member_id', 'role')
			->from(self::TABLE_MEMBERS)
			->where($qb->expr()->eq('class_id', $qb->createNamedParameter($classId, IQueryBuilder::PARAM_INT)))
			->orderBy('id');
		return array_map(static fn (array $row) => [
			'type' => $row['member_type'],
			'id' => $row['member_id'],
			'role' => $row['role'],
		], $qb->executeQuery()->fetchAllAssociative());
	}

	/**
	 * Replaces all members of a class notebook.
	 *
	 * @param list<Member> $members
	 */
	public function setMembers(int $classId, array $members): void {
		$this->db->beginTransaction();
		try {
			$this->deleteMembers($classId);
			$seen = [];
			foreach ($members as $member) {
				$key = $member['type'] . ':' . $member['id'];
				if (isset($seen[$key])) {
					continue;
				}
				$seen[$key] = true;
				$qb = $this->db->getQueryBuilder();
				$qb->insert(self::TABLE_MEMBERS)
					->values([
						'class_id' => $qb->createNamedParameter($classId, IQueryBuilder::PARAM_INT),
						'member_type' => $qb->createNamedParameter($member['type']),
						'member_id' => $qb->createNamedParameter($member['id']),
						'role' => $qb->createNamedParameter($member['role']),
					])
					->executeStatement();
			}
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
	}

	public function delete(int $classId): void {
		$this->deleteMembers($classId);
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_CLASSES)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($classId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
	}

	private function deleteMembers(int $classId): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_MEMBERS)
			->where($qb->expr()->eq('class_id', $qb->createNamedParameter($classId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
	}

	/**
	 * @return ClassRow
	 */
	private function toClass(array $row): array {
		return ['id' => (int)$row['id'], 'owner' => (string)$row['owner'], 'folderId' => (int)$row['folder_id']];
	}
}
