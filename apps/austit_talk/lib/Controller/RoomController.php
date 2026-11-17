<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCA\AustitTalk\Service\SecretService;
use OCA\AustitTalk\Service\TalkRooms;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\IRequest;
use OCP\IUserSession;

class RoomController extends OCSController {
	private const DEFAULT_LEASE = 3600;

	public function __construct(
		string $appName,
		IRequest $request,
		private SecretService $secretService,
		private TalkRooms $talkRooms,
		private IUserSession $userSession,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Tells whether a conversation is a secret conversation and whether the user moderates it
	 *
	 * @param string $token token of the conversation
	 * @return DataResponse<Http::STATUS_OK, array{token: string, secret: bool, lease: int, isModerator: bool}, array{}>
	 */
	#[NoAdminRequired]
	public function getRoom(string $token): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new OCSException('Not logged in', 401);
		}

		$lease = $this->secretService->getRoomLease($token);
		$isModerator = false;
		try {
			$isModerator = $this->talkRooms->isModerator($token, $user->getUID());
		} catch (NotFoundException) {
			// Room not found or user not participant
		}

		return new DataResponse([
			'token' => $token,
			'secret' => $lease !== null && $lease > 0,
			'lease' => $lease ?? 0,
			'isModerator' => $isModerator,
		]);
	}

	/**
	 * Turns a conversation into a secret conversation or ends the protection
	 *
	 * @param string $token token of the conversation
	 * @param ?string $lease seconds the messages and shared files of the conversation stay, 0 lifts the protection
	 * @return DataResponse<Http::STATUS_OK, array{token: string, secret: bool, lease: int, isModerator: bool}, array{}>
	 */
	#[NoAdminRequired]
	public function setRoom(string $token, ?string $lease = null): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new OCSException('Not logged in', 401);
		}

		$leaseRaw = $lease ?? (string)self::DEFAULT_LEASE;
		if (!is_numeric($leaseRaw)) {
			throw new OCSException('Invalid lease', 400);
		}
		$lease = max(0, (int)$leaseRaw);

		try {
			$this->secretService->setRoomLease($token, $lease, $user->getUID());
		} catch (NotPermittedException) {
			throw new OCSException('Forbidden', 403);
		} catch (NotFoundException) {
			throw new OCSException('Room not found', 404);
		}

		return new DataResponse([
			'token' => $token,
			'secret' => $lease > 0,
			'lease' => $lease,
			'isModerator' => true,
		]);
	}
}
