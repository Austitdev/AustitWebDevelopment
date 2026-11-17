<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Controller;

use OCA\AustitTalk\Controller\AccessController;
use OCA\AustitTalk\Service\AccessService;
use OCA\AustitTalk\Service\AuditService;
use OCP\AppFramework\OCS\OCSException;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserManager;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class AccessControllerTest extends TestCase {
	private IRequest&MockObject $request;
	private AccessService&MockObject $access;
	private IUserManager&MockObject $userManager;
	private IUserSession&MockObject $userSession;
	private AuditService&MockObject $audit;
	private AccessController $controller;

	protected function setUp(): void {
		parent::setUp();
		$this->request = $this->createMock(IRequest::class);
		$this->access = $this->createMock(AccessService::class);
		$this->userManager = $this->createMock(IUserManager::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->audit = $this->createMock(AuditService::class);
		$this->userSession->method('getUser')->willReturn($this->user('alice'));

		$this->controller = new AccessController('austit_talk', $this->request, $this->access, $this->userManager, $this->userSession, $this->audit);
	}

	private function user(string $uid, string $displayName = ''): IUser&MockObject {
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn($uid);
		$user->method('getDisplayName')->willReturn($displayName ?: $uid);
		return $user;
	}

	private function params(array $params): void {
		$this->request->method('getParam')->willReturnCallback(fn (string $key): mixed => $params[$key] ?? null);
	}

	public function testMeReportsAccess(): void {
		$this->access->method('isAdmin')->willReturn(true);
		$this->access->method('canUseSettings')->with('alice')->willReturn(false);

		$this->assertSame([
			'userId' => 'alice',
			'isAdmin' => true,
			'canUseSettings' => false,
			'canManageAccess' => false,
		], $this->controller->me()->getData());
	}

	public function testUsersListsOnlyAdminsSortedByName(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->access->method('isAdmin')->willReturnMap([['zoe', true], ['bob', false], ['anna', true]]);
		$this->access->method('isAllowed')->willReturnMap([['zoe', true], ['anna', false]]);
		$this->userManager->method('search')->willReturn([$this->user('zoe', 'Zoe'), $this->user('bob', 'Bob'), $this->user('anna', 'Anna')]);

		$this->assertSame([
			['id' => 'anna', 'displayName' => 'Anna', 'allowed' => false],
			['id' => 'zoe', 'displayName' => 'Zoe', 'allowed' => true],
		], $this->controller->users()->getData());
	}

	public function testUsersIsForbiddenWithoutAccess(): void {
		$this->access->method('canUseSettings')->willReturn(false);

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(403);
		$this->controller->users();
	}

	public function testGrantsAccessToAnAdmin(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->access->method('isAdmin')->willReturn(true);
		$this->access->method('getAllowedUsers')->willReturn(['alice']);
		$this->userManager->method('get')->with('Bob')->willReturn($this->user('bob'));
		$this->params(['userId' => 'Bob', 'allowed' => 'true']);

		$this->access->expects($this->once())->method('setAllowedUsers')->with(['alice', 'bob']);
		$this->audit->expects($this->once())->method('log');

		$this->assertSame(['userId' => 'bob', 'allowed' => true], $this->controller->setUser()->getData());
	}

	public function testLastAllowedUserCannotBeRemoved(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->access->method('isAdmin')->willReturn(true);
		$this->access->method('getAllowedUsers')->willReturn(['alice']);
		$this->userManager->method('get')->willReturn($this->user('alice'));
		$this->params(['userId' => 'alice', 'allowed' => 'false']);

		$this->access->expects($this->never())->method('setAllowedUsers');
		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);
		$this->controller->setUser();
	}

	public function testNonAdminCannotBeGranted(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->access->method('isAdmin')->with('bob')->willReturn(false);
		$this->userManager->method('get')->willReturn($this->user('bob'));
		$this->params(['userId' => 'bob', 'allowed' => '1']);

		$this->access->expects($this->never())->method('setAllowedUsers');
		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);
		$this->controller->setUser();
	}

	public function testInvalidAllowedValueIsRefused(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->params(['userId' => 'bob', 'allowed' => 'maybe']);

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);
		$this->controller->setUser();
	}
}
