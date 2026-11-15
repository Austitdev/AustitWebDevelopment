<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Listener;

use OCA\AustitTalkSecret\Service\SecretService;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\Node\NodeCreatedEvent;
use OCP\Files\Events\Node\NodeRenamedEvent;
use OCP\Files\File;

/**
 * Protects files that arrive in the attachment folder Talk shares with a secret conversation.
 *
 * @template-implements IEventListener<NodeCreatedEvent|NodeRenamedEvent>
 */
class ConversationFolderListener implements IEventListener {
	public function __construct(
		private SecretService $secretService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if ($event instanceof NodeRenamedEvent) {
			$node = $event->getTarget();
		} elseif ($event instanceof NodeCreatedEvent) {
			$node = $event->getNode();
		} else {
			return;
		}
		if (!$node instanceof File) {
			return;
		}

		$path = $node->getPath();
		$token = $this->secretService->getConversationFolderToken(dirname($path));
		if ($token === null) {
			return;
		}
		$lease = $this->secretService->getRoomLease($token);
		if ($lease === null || $lease <= 0) {
			return;
		}

		$this->secretService->registerFile($node, $token, explode('/', ltrim($path, '/'))[0], $lease);
	}
}
