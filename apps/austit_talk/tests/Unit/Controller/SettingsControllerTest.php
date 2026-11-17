<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Controller;

use OCA\AustitTalk\Controller\SettingsController;
use OCA\AustitTalk\Service\AccessService;
use OCA\AustitTalk\Service\AuditService;
use OCA\AustitTalk\Service\SettingsService;
use OCP\AppFramework\OCS\OCSException;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class SettingsControllerTest extends TestCase {
	private IRequest&MockObject $request;
	private AccessService&MockObject $access;
	private SettingsService&MockObject $settings;
	private AuditService&MockObject $audit;
	private SettingsController $controller;

	protected function setUp(): void {
		parent::setUp();
		$this->request = $this->createMock(IRequest::class);
		$this->access = $this->createMock(AccessService::class);
		$this->settings = $this->createMock(SettingsService::class);
		$this->audit = $this->createMock(AuditService::class);
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn('alice');
		$userSession = $this->createMock(IUserSession::class);
		$userSession->method('getUser')->willReturn($user);

		$this->controller = new SettingsController('austit_talk', $this->request, $this->access, $this->settings, $userSession, $this->audit);
	}

	public function testIndexIsForbiddenWithoutAccess(): void {
		$this->access->method('canUseSettings')->with('alice')->willReturn(false);
		$this->settings->expects($this->never())->method('getSettings');

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(403);
		$this->controller->index();
	}

	public function testUpdateDecodesJsonAndIsAudited(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->settings->expects($this->once())->method('update')
			->with('allowed_groups', ['teachers'])
			->willReturn(['allowed_groups' => ['teachers']]);
		$this->audit->expects($this->once())->method('log')
			->with($this->anything(), ['key' => 'allowed_groups', 'user' => 'alice', 'value' => '["teachers"]']);

		$this->assertSame(['allowed_groups' => ['teachers']], $this->controller->update('allowed_groups', '["teachers"]')->getData());
	}

	public function testUpdateNeedsAKey(): void {
		$this->access->method('canUseSettings')->willReturn(true);
		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);
		$this->controller->update(null);
	}
}
