<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Listener;

use OCA\AustitTalk\Service\SecretService;
use OCA\Files_Trashbin\Events\MoveToTrashEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;

/**
 * Protected files are deleted for good instead of being kept in the trash bin.
 *
 * @template-implements IEventListener<MoveToTrashEvent>
 */
class TrashListener implements IEventListener {
	public function __construct(
		private SecretService $secretService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!$event instanceof MoveToTrashEvent) {
			return;
		}

		if ($this->secretService->isSecretFile((int)$event->getNode()->getId())) {
			$event->disableTrashBin();
		}
	}
}
