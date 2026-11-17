<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Service\AccessService;
use OCP\IConfig;
use OCP\IGroupManager;
use OCP\IUser;
use OCP\IUserManager;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class AccessServiceTest extends TestCase {
	private IConfig&MockObject $config;
	private IGroupManager&MockObject $groupManager;
	private IUserManager&MockObject $userManager;
	private AccessService $service;
	private string $stored = '';

	protected function setUp(): void {
		parent::setUp();
		$this->config = $this->createMock(IConfig::class);
		$this->groupManager = $this->createMock(IGroupManager::class);
		$this->userManager = $this->createMock(IUserManager::class);

		$this->config->method('getAppValue')
			->willReturnCallback(fn (string $app, string $key): string => $app === 'austit_talk' && $key === 'allowed_users' ? $this->stored : '');
		$this->config->method('setAppValue')
			->willReturnCallback(function (string $app, string $key, string $value): void {
				$this->assertSame('austit_talk', $app);
				$this->stored = $value;
			});
		$this->userManager->method('get')->willReturnCallback(function (string $uid): ?IUser {
			$canonical = ['katao' => 'Katao', 'alice' => 'alice', 'bob' => 'bob'][strtolower($uid)] ?? null;
			if ($canonical === null) {
				return null;
			}
			$user = $this->createMock(IUser::class);
			$user->method('getUID')->willReturn($canonical);
			return $user;
		});

		$this->service = new AccessService($this->config, $this->groupManager, $this->userManager);
	}

	public function testFirstReadAllowsTheInitialUser(): void {
		$this->assertSame(['Katao'], $this->service->getAllowedUsers());
		$this->assertSame('["Katao"]', $this->stored);
	}

	public function testStoresCanonicalUniqueKnownUsers(): void {
		$this->service->setAllowedUsers(['KATAO', 'alice', 'alice', 'nobody', '']);

		$this->assertSame(['Katao', 'alice'], $this->service->getAllowedUsers());
	}

	public function testBrokenValueAllowsNobody(): void {
		$this->stored = 'not json';

		$this->assertSame([], $this->service->getAllowedUsers());
	}

	public function testSettingsNeedAdminAndAllowList(): void {
		$this->stored = '["alice","bob"]';
		$this->groupManager->method('isAdmin')->willReturnMap([
			['alice', true],
			['bob', false],
			['katao', true],
		]);

		$this->assertTrue($this->service->canUseSettings('alice'));
		$this->assertFalse($this->service->canUseSettings('bob'));
		$this->assertFalse($this->service->canUseSettings('katao'));
	}
}
