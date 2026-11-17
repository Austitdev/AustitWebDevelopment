<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Controller;

use OCA\AustitTalk\Controller\RoomController;
use OCA\AustitTalk\Service\SecretService;
use OCA\AustitTalk\Service\TalkRooms;
use OCP\AppFramework\OCS\OCSException;
use OCP\Files\NotPermittedException;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class RoomControllerTest extends TestCase {
	private const TOKEN = 'room_xyz';
	private const DEFAULT_LEASE = 3600;

	private IRequest&MockObject $request;
	private SecretService&MockObject $service;
	private TalkRooms&MockObject $talkRooms;
	private IUserSession&MockObject $userSession;
	private IUser&MockObject $user;
	private RoomController $controller;

	protected function setUp(): void {
		parent::setUp();
		$this->request = $this->createMock(IRequest::class);
		$this->service = $this->createMock(SecretService::class);
		$this->talkRooms = $this->createMock(TalkRooms::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->user = $this->createMock(IUser::class);
		$this->user->method('getUID')->willReturn('alice');
		$this->userSession->method('getUser')->willReturn($this->user);

		$this->controller = new RoomController(
			'austit_talk',
			$this->request,
			$this->service,
			$this->talkRooms,
			$this->userSession
		);
	}

	public function testGetRoomStatus(): void {
		$this->service->method('getRoomLease')->with(self::TOKEN)->willReturn(300);
		$this->talkRooms->method('isModerator')->with(self::TOKEN, 'alice')->willReturn(true);

		$response = $this->controller->getRoom(self::TOKEN);
		$data = $response->getData();

		$this->assertSame(self::TOKEN, $data['token']);
		$this->assertTrue($data['secret']);
		$this->assertSame(300, $data['lease']);
		$this->assertTrue($data['isModerator']);
	}

	public function testSetRoomRejectsNonModerator(): void {
		$this->request->method('getParam')->with('lease', self::DEFAULT_LEASE)->willReturn(300);
		$this->service->method('setRoomLease')
			->willThrowException(new NotPermittedException());

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(403);

		$this->controller->setRoom(self::TOKEN);
	}

	public function testSetRoomSucceedsForModerator(): void {
		$this->request->method('getParam')->with('lease', self::DEFAULT_LEASE)->willReturn(600);
		$this->service->expects($this->once())
			->method('setRoomLease')
			->with(self::TOKEN, 600, 'alice');

		$response = $this->controller->setRoom(self::TOKEN);
		$data = $response->getData();

		$this->assertSame(self::TOKEN, $data['token']);
		$this->assertTrue($data['secret']);
		$this->assertSame(600, $data['lease']);
	}

	public function testSetRoomUsesOneHourByDefault(): void {
		$this->request->expects($this->once())
			->method('getParam')
			->with('lease', self::DEFAULT_LEASE)
			->willReturn(self::DEFAULT_LEASE);
		$this->service->expects($this->once())
			->method('setRoomLease')
			->with(self::TOKEN, self::DEFAULT_LEASE, 'alice');

		$response = $this->controller->setRoom(self::TOKEN);

		$this->assertSame(self::DEFAULT_LEASE, $response->getData()['lease']);
	}
}
