<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Service;

use OCA\AustitTalkSecret\Db\SecretStore;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use Psr\Log\LoggerInterface;

/**
 * @psalm-import-type SecretFile from SecretStore
 */
class SecretService {
	public function __construct(
		private SecretStore $store,
		private Cipher $cipher,
		private TalkRooms $talkRooms,
		private SecretAccess $access,
		private IRootFolder $rootFolder,
		private ITimeFactory $time,
		private LoggerInterface $logger,
	) {
	}

	public function isSecretRoom(string $token): bool {
		$lease = $this->store->getLease($token);
		return $lease !== null && $lease > 0;
	}

	public function getRoomLease(string $token): ?int {
		return $this->store->getLease($token);
	}

	/**
	 * @throws NotPermittedException when user is not a room moderator
	 * @throws NotFoundException when Talk or the room is not available
	 */
	public function setRoomLease(string $token, int $lease, string $userId): void {
		if (!$this->talkRooms->isModerator($token, $userId)) {
			throw new NotPermittedException('Only moderators can configure secret conversations');
		}

		if ($lease > 0) {
			$this->store->setRoom($token, $lease, $userId);
			$this->talkRooms->setMessageExpiration($token, $lease);
		} else {
			$this->store->removeRoom($token);
			$this->talkRooms->setMessageExpiration($token, 0);
		}
	}

	/**
	 * Keeps the lease in step with the message expiration Talk holds for the conversation.
	 * A classified conversation is secret as long as its messages expire, and every secret
	 * conversation follows a changed expiration. Turning the expiration off ends the protection.
	 *
	 * @param int $expiration seconds after which Talk removes messages, 0 if they are kept
	 */
	public function syncRoomLease(string $token, bool $classified, int $expiration, string $userId): void {
		$lease = $this->store->getLease($token);
		if ($lease === null && !$classified) {
			return;
		}

		if ($expiration <= 0) {
			if ($lease !== null) {
				$this->store->removeRoom($token);
			}
		} elseif ($lease !== $expiration) {
			$this->store->setRoom($token, $expiration, $userId);
		}
	}

	public function isSecretFile(int $fileId): bool {
		return $this->store->getFile($fileId) !== null;
	}

	/**
	 * @return SecretFile|null
	 */
	public function getSecretFile(int $fileId): ?array {
		return $this->store->getFile($fileId);
	}

	/**
	 * Tells which secret conversation a folder holds the attachments of.
	 *
	 * @param string $folderPath absolute path, /{user}/files/{attachments}/{conversation}/{user folder}
	 * @return string|null token of the conversation, null if the folder is none of a secret conversation
	 */
	public function getConversationFolderToken(string $folderPath): ?string {
		$parts = explode('/', trim($folderPath, '/'));
		if (count($parts) < 4 || $parts[1] !== 'files') {
			return null;
		}

		$conversationFolder = $parts[count($parts) - 2];
		$dash = strrpos($conversationFolder, '-');
		if ($dash === false) {
			return null;
		}

		$token = substr($conversationFolder, $dash + 1);
		if (!$this->isSecretRoom($token)) {
			return null;
		}
		$isFolder = $this->talkRooms->isAttachmentFolder($parts[0], implode('/', array_slice($parts, 2)), $token);
		return $isFolder ? $token : null;
	}

	/**
	 * Makes a file a protected file: from now on it only exists in the chat and only until the
	 * lease runs out. Its content is encrypted by protectPending(), which needs the file unlocked.
	 *
	 * @return bool whether the file was registered
	 */
	public function registerFile(File $file, string $token, string $owner, int $lease): bool {
		$fileId = (int)$file->getId();
		if ($this->isSecretFile($fileId)) {
			return false;
		}

		$this->store->addFile($fileId, $token, $owner, $this->cipher->newKey(), $this->time->getTime() + $lease);
		return true;
	}

	/**
	 * Encrypts every registered file that is still stored in plain. Files that cannot be
	 * processed yet stay pending for the next run.
	 *
	 * @return int number of files encrypted
	 */
	public function protectPending(): int {
		$protected = 0;
		foreach ($this->store->getPending() as $secret) {
			try {
				$this->access->unrestricted(fn () => $this->protect($secret));
				$protected++;
			} catch (\Throwable $e) {
				$this->logger->error(
					sprintf('Failed to protect secret file %d: %s', $secret['fileId'], $e->getMessage()),
					['exception' => $e]
				);
			}
		}
		return $protected;
	}

	/**
	 * @param SecretFile $secret
	 */
	private function protect(array $secret): void {
		$userFolder = $this->rootFolder->getUserFolder($secret['owner']);
		$file = $userFolder->getFirstNodeById($secret['fileId']);
		if (!$file instanceof File) {
			$this->store->removeFile($secret['fileId']);
			return;
		}

		$content = $file->getContent();
		if (!str_starts_with($content, Cipher::MAGIC)) {
			$file->putContent($this->cipher->encrypt($content, $secret['key']));
		}
		$this->store->markEncrypted($secret['fileId']);
	}

	/**
	 * Deletes all secret files whose expiration timestamp has passed, together with the expired
	 * messages and the messages of files that no longer exist.
	 *
	 * @return int number of expired files deleted
	 */
	public function deleteExpired(int $now): int {
		$this->talkRooms->expireMessagesOfMissingFiles($this->store->getRoomTokens());
		$this->talkRooms->deleteExpiredMessages();

		$expired = $this->store->getExpired($now);
		$deleted = 0;

		foreach ($expired as $item) {
			$fileId = $item['fileId'];
			try {
				$this->access->unrestricted(function () use ($item, $fileId): void {
					$userFolder = $this->rootFolder->getUserFolder($item['owner']);
					foreach ($userFolder->getById($fileId) as $node) {
						$node->delete();
					}
				});
			} catch (\Throwable $e) {
				$this->logger->warning(
					sprintf('Failed to delete expired secret file %d: %s', $fileId, $e->getMessage()),
					['exception' => $e]
				);
			} finally {
				$this->store->removeFile($fileId);
				$deleted++;
			}
		}

		return $deleted;
	}
}
