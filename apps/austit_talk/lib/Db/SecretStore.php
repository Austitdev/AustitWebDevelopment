<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Db;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Which conversations are secret and which files are protected in them.
 *
 * @psalm-type SecretFile = array{fileId: int, token: string, owner: string, key: string, expiresAt: int, encrypted: bool}
 */
class SecretStore {
	public const TABLE_ROOMS = 'austit_ts_rooms';
	public const TABLE_FILES = 'austit_ts_files';

	/** @var array<int, true>|null ids of all protected files, loaded once per request */
	private ?array $fileIds = null;

	/** @var array<int, SecretFile> */
	private array $files = [];

	/** @var array<string, int|null> */
	private array $leases = [];

	public function __construct(
		private IDBConnection $db,
	) {
	}

	/**
	 * @return int|null seconds a file stays available, null if the conversation is not secret
	 */
	public function getLease(string $token): ?int {
		if (!array_key_exists($token, $this->leases)) {
			$qb = $this->db->getQueryBuilder();
			$qb->select('lease')
				->from(self::TABLE_ROOMS)
				->where($qb->expr()->eq('token', $qb->createNamedParameter($token)));
			$lease = $qb->executeQuery()->fetchOne();
			$this->leases[$token] = $lease === false ? null : (int)$lease;
		}
		return $this->leases[$token];
	}

	public function setRoom(string $token, int $lease, string $userId): void {
		unset($this->leases[$token]);
		$qb = $this->db->getQueryBuilder();
		$updated = $qb->update(self::TABLE_ROOMS)
			->set('lease', $qb->createNamedParameter($lease, IQueryBuilder::PARAM_INT))
			->where($qb->expr()->eq('token', $qb->createNamedParameter($token)))
			->executeStatement();
		if ($updated > 0) {
			return;
		}
		$qb = $this->db->getQueryBuilder();
		$qb->insert(self::TABLE_ROOMS)
			->values([
				'token' => $qb->createNamedParameter($token),
				'lease' => $qb->createNamedParameter($lease, IQueryBuilder::PARAM_INT),
				'created_by' => $qb->createNamedParameter($userId),
			])
			->executeStatement();
	}

	/**
	 * @return list<string> tokens of all secret conversations
	 */
	public function getRoomTokens(): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('token')
			->from(self::TABLE_ROOMS);
		return array_map('strval', $qb->executeQuery()->fetchFirstColumn());
	}

	public function removeRoom(string $token): void {
		unset($this->leases[$token]);
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_ROOMS)
			->where($qb->expr()->eq('token', $qb->createNamedParameter($token)))
			->executeStatement();
	}

	public function addFile(int $fileId, string $token, string $owner, string $key, int $expiresAt): void {
		$qb = $this->db->getQueryBuilder();
		$qb->insert(self::TABLE_FILES)
			->values([
				'file_id' => $qb->createNamedParameter($fileId, IQueryBuilder::PARAM_INT),
				'token' => $qb->createNamedParameter($token),
				'owner' => $qb->createNamedParameter($owner),
				'file_key' => $qb->createNamedParameter($key),
				'expires_at' => $qb->createNamedParameter($expiresAt, IQueryBuilder::PARAM_INT),
			])
			->executeStatement();
		if ($this->fileIds !== null) {
			$this->fileIds[$fileId] = true;
		}
	}

	public function hasFile(int $fileId): bool {
		if ($this->fileIds === null) {
			$qb = $this->db->getQueryBuilder();
			$qb->select('file_id')->from(self::TABLE_FILES);
			$this->fileIds = [];
			foreach ($qb->executeQuery()->fetchFirstColumn() as $id) {
				$this->fileIds[(int)$id] = true;
			}
		}
		return isset($this->fileIds[$fileId]);
	}

	/**
	 * @return SecretFile|null
	 */
	public function getFile(int $fileId): ?array {
		if (!$this->hasFile($fileId)) {
			return null;
		}
		if (!isset($this->files[$fileId])) {
			$qb = $this->db->getQueryBuilder();
			$qb->select('file_id', 'token', 'owner', 'file_key', 'expires_at', 'encrypted')
				->from(self::TABLE_FILES)
				->where($qb->expr()->eq('file_id', $qb->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)));
			$row = $qb->executeQuery()->fetch();
			if ($row === false) {
				return null;
			}
			$this->files[$fileId] = $this->toFile($row);
		}
		return $this->files[$fileId];
	}

	/**
	 * @return list<SecretFile>
	 */
	public function getExpired(int $now): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('file_id', 'token', 'owner', 'file_key', 'expires_at', 'encrypted')
			->from(self::TABLE_FILES)
			->where($qb->expr()->lte('expires_at', $qb->createNamedParameter($now, IQueryBuilder::PARAM_INT)))
			->orderBy('expires_at');
		return array_map($this->toFile(...), $qb->executeQuery()->fetchAllAssociative());
	}

	/**
	 * @return list<SecretFile> files whose content is still stored in plain
	 */
	public function getPending(): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('file_id', 'token', 'owner', 'file_key', 'expires_at', 'encrypted')
			->from(self::TABLE_FILES)
			->where($qb->expr()->eq('encrypted', $qb->createNamedParameter(0, IQueryBuilder::PARAM_INT)));
		return array_map($this->toFile(...), $qb->executeQuery()->fetchAllAssociative());
	}

	public function markEncrypted(int $fileId): void {
		$qb = $this->db->getQueryBuilder();
		$qb->update(self::TABLE_FILES)
			->set('encrypted', $qb->createNamedParameter(1, IQueryBuilder::PARAM_INT))
			->where($qb->expr()->eq('file_id', $qb->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
		unset($this->files[$fileId]);
	}

	public function removeFile(int $fileId): void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete(self::TABLE_FILES)
			->where($qb->expr()->eq('file_id', $qb->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
		unset($this->fileIds[$fileId], $this->files[$fileId]);
	}

	/**
	 * @return SecretFile
	 */
	private function toFile(array $row): array {
		return [
			'fileId' => (int)$row['file_id'],
			'token' => (string)$row['token'],
			'owner' => (string)$row['owner'],
			'key' => (string)$row['file_key'],
			'expiresAt' => (int)$row['expires_at'],
			'encrypted' => (int)$row['encrypted'] === 1,
		];
	}
}
