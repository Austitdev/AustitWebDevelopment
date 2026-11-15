<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Listener;

use OCA\AustitTalkSecret\Listener\RoomListener;
use OCA\AustitTalkSecret\Service\SecretService;
use OCA\AustitTalkSecret\Service\TalkRooms;
use OCP\EventDispatcher\Event;
use OCP\IUser;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class RoomListenerTest extends TestCase {
	private SecretService&MockObject $secretService;
	private TalkRooms&MockObject $talkRooms;
	private IUserSession&MockObject $userSession;
	private RoomListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->secretService = $this->createMock(SecretService::class);
		$this->talkRooms = $this->createMock(TalkRooms::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->listener = new RoomListener($this->secretService, $this->talkRooms, $this->userSession);
	}

	public function testSyncsLeaseWithExpiration(): void {
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn('alice');
		$this->userSession->method('getUser')->willReturn($user);
		$this->talkRooms->method('getExpirationState')
			->willReturn(['token' => 'abc123', 'classified' => true, 'expiration' => 3600]);

		$this->secretService->expects($this->once())
			->method('syncRoomLease')
			->with('abc123', true, 3600, 'alice');

		$this->listener->handle(new Event());
	}

	public function testSyncsWithoutUser(): void {
		$this->userSession->method('getUser')->willReturn(null);
		$this->talkRooms->method('getExpirationState')
			->willReturn(['token' => 'abc123', 'classified' => false, 'expiration' => 0]);

		$this->secretService->expects($this->once())
			->method('syncRoomLease')
			->with('abc123', false, 0, '');

		$this->listener->handle(new Event());
	}

	public function testIgnoresOtherEvents(): void {
		$this->talkRooms->method('getExpirationState')->willReturn(null);

		$this->secretService->expects($this->never())->method('syncRoomLease');

		$this->listener->handle(new Event());
	}
}
