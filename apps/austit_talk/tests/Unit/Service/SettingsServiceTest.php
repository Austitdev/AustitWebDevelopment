<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Service\SettingsService;
use OCP\AppFramework\OCS\OCSException;
use OCP\IAppConfig;
use OCP\IGroup;
use OCP\IGroupManager;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class SettingsServiceTest extends TestCase {
	private IAppConfig&MockObject $appConfig;
	private IGroupManager&MockObject $groupManager;
	private SettingsService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->groupManager = $this->createMock(IGroupManager::class);
		$this->groupManager->method('get')
			->willReturnCallback(fn (string $gid): ?IGroup => $gid === 'teachers' ? $this->createMock(IGroup::class) : null);
		$this->appConfig->method('getValueArray')->willReturnArgument(2);
		$this->appConfig->method('getValueBool')->willReturnArgument(2);
		$this->appConfig->method('getValueString')->willReturnArgument(2);

		$this->service = new SettingsService($this->appConfig, $this->groupManager);
	}

	public function testReadsTalkSettingsWithoutTurnSecrets(): void {
		$appConfig = $this->createMock(IAppConfig::class);
		$appConfig->method('getValueArray')->willReturnCallback(
			fn (string $app, string $key, array $default): array => $key === 'turn_servers'
				? [['schemes' => 'turns', 'server' => 'turn.example.org:443', 'secret' => 'hidden', 'protocols' => 'tcp']]
				: $default
		);
		$appConfig->method('getValueBool')->willReturnArgument(2);
		$appConfig->method('getValueString')->willReturnArgument(2);

		$settings = (new SettingsService($appConfig, $this->groupManager))->getSettings();

		$this->assertSame(['turns:turn.example.org:443 (tcp)'], $settings['turn_servers']);
		$this->assertSame(['stun.nextcloud.com:443'], $settings['stun_servers']);
		$this->assertFalse($settings['federation_enabled']);
		$this->assertTrue($settings['breakout_rooms']);
		$this->assertStringNotContainsString('hidden', (string)json_encode($settings));
	}

	public function testWritesOnlyToTalk(): void {
		$this->appConfig->expects($this->once())->method('setValueBool')->with('spreed', 'force_passwords', true);

		$this->service->update('force_passwords', 'yes');
	}

	public function testAcceptsKnownGroups(): void {
		$this->appConfig->expects($this->once())->method('setValueArray')->with('spreed', 'allowed_groups', ['teachers']);

		$this->service->update('allowed_groups', ['teachers', 'teachers']);
	}

	public function testFederationIsStoredAsYesOrNo(): void {
		$this->appConfig->expects($this->once())->method('setValueString')->with('spreed', 'federation_enabled', 'yes');

		$this->service->update('federation_enabled', true);
	}

	public function testRangeIsChecked(): void {
		$this->appConfig->expects($this->once())->method('setValueInt')->with('spreed', 'inactivity_lock_after_days', 30);

		$this->service->update('inactivity_lock_after_days', '30');
	}

	public static function invalidUpdates(): array {
		return [
			'unknown key' => ['turn_servers', []],
			'unknown group' => ['allowed_groups', ['admins']],
			'group list is no list' => ['allowed_groups', 'teachers'],
			'value out of choice' => ['start_calls', 4],
			'value out of range' => ['inactivity_lock_after_days', 3651],
			'no integer' => ['start_calls', '1.5'],
			'no boolean' => ['force_passwords', 1.0],
			'stun server with space' => ['stun_servers', ['stun.example.org 443']],
		];
	}

	#[DataProvider('invalidUpdates')]
	public function testInvalidUpdatesAreRefused(string $key, mixed $value): void {
		$this->appConfig->expects($this->never())->method('setValueArray');
		$this->appConfig->expects($this->never())->method('setValueInt');
		$this->appConfig->expects($this->never())->method('setValueBool');

		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);

		$this->service->update($key, $value);
	}
}
