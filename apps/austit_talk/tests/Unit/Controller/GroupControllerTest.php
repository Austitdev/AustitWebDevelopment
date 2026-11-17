<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Controller;

use OCA\AustitTalk\Controller\GroupController;
use OCA\AustitTalk\Service\AccessService;
use OCP\AppFramework\OCS\OCSException;
use OCP\IGroup;
use OCP\IGroupManager;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class GroupControllerTest extends TestCase {
	private AccessService&MockObject $access;
	private IGroupManager&MockObject $groupManager;
	private GroupController $controller;

	protected function setUp(): void {
		parent::setUp();
		$this->access = $this->createMock(AccessService::class);
		$this->groupManager = $this->createMock(IGroupManager::class);
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn('alice');
		$userSession = $this->createMock(IUserSession::class);
		$userSession->method('getUser')->willReturn($user);

		$this->controller = new GroupController('austit_talk', $this->createMock(IRequest::class), $this->access, $this->groupManager, $userSession);
	}

	private function group(string $gid, string $name): IGroup {
		$group = $this->createMock(IGroup::class);
		$group->method('getGID')->willReturn($gid);
		$group->method('getDisplayName')->willReturn($name);
		return $group;
	}

	public function testListsGroupsSortedByName(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->groupManager->method('search')->willReturn([$this->group('t', 'Teachers'), $this->group('a', 'admin')]);

		$this->assertSame([
			['id' => 'a', 'name' => 'admin'],
			['id' => 't', 'name' => 'Teachers'],
		], $this->controller->index()->getData());
	}

	public function testIsForbiddenWithoutAccess(): void {
		$this->access->method('canUseSettings')->willReturn(false);
		$this->groupManager->expects($this->never())->method('search');

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(403);
		$this->controller->index();
	}
}
