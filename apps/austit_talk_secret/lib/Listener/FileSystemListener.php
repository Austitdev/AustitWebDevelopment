<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Listener;

use OCA\AustitTalkSecret\Db\SecretStore;
use OCA\AustitTalkSecret\Service\Cipher;
use OCA\AustitTalkSecret\Service\SecretAccess;
use OCA\AustitTalkSecret\Storage\SecretStorage;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\BeforeFileSystemSetupEvent;
use OCP\Files\Storage\IStorage;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<BeforeFileSystemSetupEvent>
 */
class FileSystemListener implements IEventListener {
	public function __construct(
		private SecretStore $secretStore,
		private Cipher $cipher,
		private SecretAccess $access,
		private LoggerInterface $logger,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!$event instanceof BeforeFileSystemSetupEvent) {
			return;
		}

		$event->addStorageWrapper(
			'austit_talk_secret',
			function (string $mountPoint, IStorage $storage): IStorage {
				return new SecretStorage(
					['storage' => $storage, 'mountPoint' => $mountPoint],
					$this->secretStore,
					$this->cipher,
					$this->access,
					$this->logger,
				);
			},
			50
		);
	}
}
