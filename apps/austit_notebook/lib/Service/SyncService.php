<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

use OCA\AustitNotebook\Db\SyncStore;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\IUserManager;

/**
 * Exchanges page updates between everyone who has a page open.
 *
 * The server only stores and hands out opaque updates; merging happens in the browsers.
 * The first writer on a page starts the log (init), everyone else builds the page from it.
 *
 * @psalm-type SyncResult = array{
 *     epoch: int,
 *     seq: int,
 *     count: int,
 *     updates: list<string>,
 *     rejected: bool,
 *     canWrite: bool,
 *     peers: list<array{id: string, userId: string, name: string, cursor: list<float>|null}>,
 * }
 */
class SyncService {
	public const MAX_UPDATE_LENGTH = 8 * 1024 * 1024;
	/** Seconds without a request after which a session no longer counts as present */
	public const PRESENCE_TIMEOUT = 15;
	private const PRESENCE_RETENTION = 300;
	private const APPEND_ATTEMPTS = 20;

	public function __construct(
		private NotebookService $notebooks,
		private SyncStore $store,
		private IUserManager $userManager,
		private ITimeFactory $time,
	) {
	}

	/**
	 * Stores the update of the calling session, if any, and returns what it has not seen yet.
	 *
	 * @param int $epoch the log the session is working with, 0 if it has none yet
	 * @param int $since number of the last update the session has seen
	 * @param bool $init the update starts the log and must only be stored if there is none
	 * @param list<mixed>|null $cursor position of the pointer on the page
	 * @return SyncResult
	 * @throws NotFoundException
	 * @throws NotPermittedException
	 */
	public function sync(
		string $userId,
		int $pageId,
		string $session,
		int $epoch,
		int $since,
		string $update,
		bool $init,
		?array $cursor,
		bool $leave = false,
	): array {
		$canWrite = $this->notebooks->page($userId, $pageId)->canWrite();
		$this->assertSession($session);

		$rejected = false;
		if ($update !== '') {
			if (!$canWrite) {
				throw new NotPermittedException();
			}
			$this->assertUpdate($update);
			$rejected = !($init
				? $this->start($pageId, $session, $update)
				: $this->append($pageId, $epoch, $session, $update));
		}

		$head = $this->store->head($pageId);
		// A session on another log (or none) gets the whole current one.
		$restart = $head !== null && ($rejected || $head['epoch'] !== $epoch);
		$updates = $head === null
			? []
			: $this->store->since($pageId, $restart ? 0 : $since, $restart ? null : $session);

		return [
			'epoch' => $head['epoch'] ?? 0,
			'seq' => $head['seq'] ?? 0,
			'count' => $head['count'] ?? 0,
			'updates' => $updates,
			'rejected' => $rejected,
			'canWrite' => $canWrite,
			'peers' => $this->presence($userId, $pageId, $session, $cursor, $leave),
		];
	}

	/**
	 * Replaces the log up to the given update by one state that contains all of it.
	 *
	 * @throws NotFoundException
	 * @throws NotPermittedException
	 */
	public function compact(string $userId, int $pageId, int $epoch, int $upTo, string $state): bool {
		if (!$this->notebooks->page($userId, $pageId)->canWrite()) {
			throw new NotPermittedException();
		}
		$this->assertUpdate($state);
		$head = $this->store->head($pageId);
		if ($head === null || $head['epoch'] !== $epoch || $upTo < 1 || $upTo > $head['seq']) {
			return false;
		}
		return $this->store->compact($pageId, $upTo, $state);
	}

	/**
	 * Forgets the log of a page, e.g. because its file was replaced. Open sessions reload the page.
	 */
	public function reset(int $pageId): void {
		$this->store->clear($pageId);
	}

	private function start(int $pageId, string $session, string $update): bool {
		if ($this->store->head($pageId) !== null) {
			return false;
		}
		return $this->store->append($pageId, 1, random_int(1, 0x7fffffff), $session, $update);
	}

	private function append(int $pageId, int $epoch, string $session, string $update): bool {
		for ($attempt = 0; $attempt < self::APPEND_ATTEMPTS; $attempt++) {
			$head = $this->store->head($pageId);
			if ($head === null || $head['epoch'] !== $epoch) {
				return false;
			}
			if ($this->store->append($pageId, $head['seq'] + 1, $epoch, $session, $update)) {
				return true;
			}
		}
		throw new NotebookException('Die Änderung konnte gerade nicht übertragen werden.');
	}

	/**
	 * @param list<mixed>|null $cursor
	 * @return list<array{id: string, userId: string, name: string, cursor: list<float>|null}>
	 */
	private function presence(string $userId, int $pageId, string $session, ?array $cursor, bool $leave): array {
		$now = $this->time->getTime();
		if ($leave) {
			$this->store->leave($session, $userId);
			return [];
		}
		$this->store->touchPresence($session, $pageId, $userId, json_encode($this->point($cursor), JSON_THROW_ON_ERROR), $now);
		if ($now % 60 === 0) {
			$this->store->prunePresence($now - self::PRESENCE_RETENTION);
		}

		$peers = [];
		foreach ($this->store->peers($pageId, $session, $now - self::PRESENCE_TIMEOUT) as $peer) {
			$position = json_decode($peer['state'], true);
			$peers[] = [
				'id' => $peer['session'],
				'userId' => $peer['userId'],
				'name' => $this->userManager->getDisplayName($peer['userId']) ?? $peer['userId'],
				'cursor' => is_array($position) ? $this->point($position) : null,
			];
		}
		return $peers;
	}

	/**
	 * @param array<mixed>|null $value
	 * @return list<float>|null
	 */
	private function point(?array $value): ?array {
		if ($value === null || count($value) !== 2 || !isset($value[0], $value[1]) || !is_numeric($value[0]) || !is_numeric($value[1])) {
			return null;
		}
		return [round((float)$value[0], 1), round((float)$value[1], 1)];
	}

	private function assertSession(string $session): void {
		if (preg_match('/^[a-z0-9]{8,32}$/', $session) !== 1) {
			throw new NotebookException('Ungültige Sitzung.');
		}
	}

	private function assertUpdate(string $update): void {
		if (strlen($update) > self::MAX_UPDATE_LENGTH || base64_decode($update, true) === false) {
			throw new NotebookException('Die Änderung ist ungültig oder zu groß.');
		}
	}
}
