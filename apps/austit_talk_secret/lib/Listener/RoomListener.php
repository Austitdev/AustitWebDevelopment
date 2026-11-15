<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Listener;

use OCA\AustitTalkSecret\Service\SecretService;
use OCA\AustitTalkSecret\Service\TalkRooms;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IUserSession;

/**
 * Makes the message expiration of Talk the lease time: a conversation created as classified
 * becomes a secret conversation, and changing the expiration changes the lease.
 *
 * @template-implements IEventListener<Event>
 */
class RoomListener implements IEventListener {
	public function __construct(
		private SecretService $secretService,
		private TalkRooms $talkRooms,
		private IUserSession $userSession,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		$state = $this->talkRooms->getExpirationState($event);
		if ($state === null) {
			return;
		}

		$this->secretService->syncRoomLease(
			$state['token'],
			$state['classified'],
			$state['expiration'],
			$this->userSession->getUser()?->getUID() ?? '',
		);
	}
}
