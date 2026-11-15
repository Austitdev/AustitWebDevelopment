<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Listener;

use OCA\AustitTalkSecret\Service\SecretService;
use OCP\Constants;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\File;
use OCP\Share\Events\BeforeShareCreatedEvent;
use OCP\Share\Events\ShareCreatedEvent;
use OCP\Share\IShare;

/**
 * @template-implements IEventListener<BeforeShareCreatedEvent|ShareCreatedEvent>
 */
class ShareListener implements IEventListener {
	public function __construct(
		private SecretService $secretService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if ($event instanceof BeforeShareCreatedEvent) {
			$this->onBeforeShareCreated($event);
		} elseif ($event instanceof ShareCreatedEvent) {
			$this->onShareCreated($event);
		}
	}

	private function onBeforeShareCreated(BeforeShareCreatedEvent $event): void {
		$share = $event->getShare();
		$node = $share->getNode();
		if ($node === null) {
			return;
		}

		if ($this->secretService->isSecretFile((int)$node->getId())) {
			$this->reject($event, 'Geheime Dateien können nicht weiter geteilt werden.');
			return;
		}

		if ($share->getShareType() !== IShare::TYPE_ROOM || !$this->secretService->isSecretRoom($share->getSharedWith())) {
			return;
		}

		// A protected file is encrypted and deleted with the lease, which only its owner may cause
		if ($node->getOwner()?->getUID() !== $share->getSharedBy()) {
			$this->reject($event, 'In geheimen Unterhaltungen können nur eigene Dateien geteilt werden.');
			return;
		}

		if ($node instanceof File) {
			return;
		}

		// The only folder is the one Talk keeps the attachments of the conversation in
		if ($share->getPermissions() !== Constants::PERMISSION_READ
			|| $this->secretService->getConversationFolderToken($node->getPath()) !== $share->getSharedWith()) {
			$this->reject($event, 'In geheimen Unterhaltungen können keine Ordner geteilt werden.');
		}
	}

	private function reject(BeforeShareCreatedEvent $event, string $error): void {
		$event->setError($error);
		$event->stopPropagation();
	}

	private function onShareCreated(ShareCreatedEvent $event): void {
		$share = $event->getShare();
		if ($share->getShareType() !== IShare::TYPE_ROOM) {
			return;
		}

		$token = $share->getSharedWith();
		$lease = $this->secretService->getRoomLease($token);
		if ($lease === null || $lease <= 0) {
			return;
		}

		$node = $share->getNode();
		if (!$node instanceof File) {
			return;
		}

		// The file is still locked by the request that shares it, the background job encrypts it
		$this->secretService->registerFile($node, $token, $share->getShareOwner(), $lease);
	}
}
