<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCA\Talk\Chat\ChatManager;
use OCA\Talk\Config;
use OCA\Talk\Events\ARoomModifiedEvent;
use OCA\Talk\Events\RoomCreatedEvent;
use OCA\Talk\Events\RoomModifiedEvent;
use OCA\Talk\Manager;
use OCA\Talk\Service\ParticipantService;
use OCA\Talk\Service\RoomService;
use OCP\App\IAppManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\EventDispatcher\Event;
use OCP\Files\NotFoundException;
use OCP\IDBConnection;
use OCP\Server;

/**
 * The few things this app needs from Talk. Talk's classes are only resolved when used,
 * so the app keeps loading while Talk is disabled.
 */
class TalkRooms {
	public function __construct(
		private IAppManager $appManager,
		private IDBConnection $db,
		private ITimeFactory $time,
	) {
	}

	/**
	 * @return bool whether the user moderates the conversation
	 * @throws NotFoundException when Talk is disabled or the user is not in the conversation
	 */
	public function isModerator(string $token, string $userId): bool {
		$this->assertTalk();
		try {
			$room = Server::get(Manager::class)->getRoomForUserByToken($token, $userId);
			return Server::get(ParticipantService::class)->getParticipant($room, $userId)->hasModeratorPermissions(false);
		} catch (\OutOfBoundsException) {
			throw new NotFoundException();
		}
	}

	/**
	 * Lets chat messages of the conversation disappear after the given time, 0 keeps them.
	 *
	 * @throws NotFoundException
	 */
	public function setMessageExpiration(string $token, int $seconds): void {
		$this->assertTalk();
		try {
			$room = Server::get(Manager::class)->getRoomByToken($token);
		} catch (\OutOfBoundsException) {
			throw new NotFoundException();
		}
		Server::get(RoomService::class)->setMessageExpiration($room, $seconds);
	}

	/**
	 * Reads the message expiration of a conversation from the Talk event that created the
	 * conversation or changed that setting.
	 *
	 * @return array{token: string, classified: bool, expiration: int}|null null for any other event
	 */
	public function getExpirationState(Event $event): ?array {
		$changed = $event instanceof RoomModifiedEvent
			&& $event->getProperty() === ARoomModifiedEvent::PROPERTY_MESSAGE_EXPIRATION;
		if (!$event instanceof RoomCreatedEvent && !$changed) {
			return null;
		}

		$room = $event->getRoom();
		return [
			'token' => $room->getToken(),
			'classified' => $room->isClassified(),
			'expiration' => $room->getMessageExpiration(),
		];
	}

	/**
	 * Lets the file messages of the conversations expire whose file no longer exists, so the
	 * chat does not keep a placeholder for a file that is gone.
	 *
	 * @param list<string> $tokens
	 * @return int number of messages that now expire
	 */
	public function expireMessagesOfMissingFiles(array $tokens): int {
		if ($tokens === [] || !$this->appManager->isEnabledForAnyone('spreed')) {
			return 0;
		}

		$qb = $this->db->getQueryBuilder();
		$qb->select('id')
			->from('talk_rooms')
			->where($qb->expr()->in('token', $qb->createNamedParameter($tokens, IQueryBuilder::PARAM_STR_ARRAY)));
		$roomIds = array_map('strval', $qb->executeQuery()->fetchFirstColumn());
		if ($roomIds === []) {
			return 0;
		}

		$qb = $this->db->getQueryBuilder();
		$qb->select('id', 'message')
			->from('comments')
			->where($qb->expr()->eq('object_type', $qb->createNamedParameter('chat')))
			->andWhere($qb->expr()->in('object_id', $qb->createNamedParameter($roomIds, IQueryBuilder::PARAM_STR_ARRAY)))
			->andWhere($qb->expr()->eq('verb', $qb->createNamedParameter('object_shared')));
		$messagesByFile = [];
		foreach ($qb->executeQuery()->fetchAllAssociative() as $row) {
			$message = json_decode((string)$row['message'], true);
			if (!is_array($message) || ($message['message'] ?? '') !== 'file_shared'
				|| !is_numeric($message['parameters']['fileId'] ?? null)) {
				continue;
			}
			$messagesByFile[(int)$message['parameters']['fileId']][] = (int)$row['id'];
		}
		if ($messagesByFile === []) {
			return 0;
		}

		$existing = [];
		foreach (array_chunk(array_keys($messagesByFile), 1000) as $fileIds) {
			$qb = $this->db->getQueryBuilder();
			$qb->select('fileid')
				->from('filecache')
				->where($qb->expr()->in('fileid', $qb->createNamedParameter($fileIds, IQueryBuilder::PARAM_INT_ARRAY)));
			foreach ($qb->executeQuery()->fetchFirstColumn() as $fileId) {
				$existing[(int)$fileId] = true;
			}
		}

		$messageIds = array_merge(...array_values(array_diff_key($messagesByFile, $existing)));
		foreach (array_chunk($messageIds, 1000) as $chunk) {
			$qb = $this->db->getQueryBuilder();
			$qb->update('comments')
				->set('expire_date', $qb->createNamedParameter($this->time->getDateTime(), IQueryBuilder::PARAM_DATETIME_MUTABLE))
				->where($qb->expr()->in('id', $qb->createNamedParameter($chunk, IQueryBuilder::PARAM_INT_ARRAY)))
				->executeStatement();
		}
		return count($messageIds);
	}

	/**
	 * Removes Talk messages whose expiration time has passed.
	 */
	public function deleteExpiredMessages(): void {
		if (!$this->appManager->isEnabledForAnyone('spreed')) {
			return;
		}

		Server::get(ChatManager::class)->deleteExpiredMessages();
	}

	/**
	 * @param string $path folder path inside the files of the user
	 * @return bool whether this is the folder Talk shares with the conversation for the attachments of the user
	 */
	public function isAttachmentFolder(string $userId, string $path, string $token): bool {
		if (!$this->appManager->isEnabledForAnyone('spreed')) {
			return false;
		}
		$config = Server::get(Config::class);
		if (!$config->isConversationSubfoldersEnabled()) {
			return false;
		}

		$root = trim($config->getAttachmentFolder($userId), '/');
		$prefix = $root === '' ? '' : $root . '/';
		if (!str_starts_with($path, $prefix)) {
			return false;
		}
		$folders = explode('/', substr($path, strlen($prefix)));
		return count($folders) === 2
			&& str_ends_with($folders[0], '-' . $token)
			&& $folders[1] === $config->getConversationSubfolderName($userId, false);
	}

	private function assertTalk(): void {
		if (!$this->appManager->isEnabledForAnyone('spreed')) {
			throw new NotFoundException();
		}
	}
}
