<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Migration;

use OCA\AustitTalk\Migration\MigrateLegacyApps;
use OCP\App\IAppManager;
use OCP\BackgroundJob\IJobList;
use OCP\Files\AppData\IAppDataFactory;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\IAppConfig;
use OCP\Migration\IOutput;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class MigrateLegacyAppsTest extends TestCase {
	private IAppConfig&MockObject $appConfig;
	private IAppManager&MockObject $appManager;
	private IJobList&MockObject $jobList;
	private IAppDataFactory&MockObject $appDataFactory;
	private IAppData&MockObject $legacyAppData;
	private IAppData&MockObject $appData;
	private IOutput&MockObject $output;
	private MigrateLegacyApps $step;

	/** @var array<string, string> */
	private array $config = [];

	protected function setUp(): void {
		parent::setUp();
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->appManager = $this->createMock(IAppManager::class);
		$this->jobList = $this->createMock(IJobList::class);
		$this->appDataFactory = $this->createMock(IAppDataFactory::class);
		$this->legacyAppData = $this->createMock(IAppData::class);
		$this->appData = $this->createMock(IAppData::class);
		$this->output = $this->createMock(IOutput::class);

		$this->appConfig->method('hasKey')
			->willReturnCallback(fn (string $app, string $key): bool => isset($this->config[$app . '/' . $key]));
		$this->appConfig->method('isLazy')->willReturn(false);
		$this->appConfig->method('getValueString')
			->willReturnCallback(fn (string $app, string $key): string => $this->config[$app . '/' . $key]);
		$this->appConfig->method('setValueString')
			->willReturnCallback(function (string $app, string $key, string $value): bool {
				$this->config[$app . '/' . $key] = $value;
				return true;
			});

		$this->appDataFactory->method('get')->willReturnMap([
			['austit_talk_admin', $this->legacyAppData],
			['austit_talk', $this->appData],
		]);

		$this->step = new MigrateLegacyApps($this->appConfig, $this->appManager, $this->jobList, $this->appDataFactory);
	}

	public function testTakesOverSettingsOfBothApps(): void {
		$this->config = [
			'austit_talk_admin/allowed_users' => '["katao"]',
			'austit_talk_secret/client_pattern' => '/custom/',
		];
		$this->legacyAppData->method('getFolder')->willThrowException(new NotFoundException());

		$this->step->run($this->output);

		$this->assertSame('["katao"]', $this->config['austit_talk/allowed_users']);
		$this->assertSame('/custom/', $this->config['austit_talk/client_pattern']);
	}

	public function testKeepsSettingsThatAreAlreadySet(): void {
		$this->config = [
			'austit_talk_admin/allowed_users' => '["old"]',
			'austit_talk/allowed_users' => '["new"]',
		];
		$this->legacyAppData->method('getFolder')->willThrowException(new NotFoundException());

		$this->step->run($this->output);

		$this->assertSame('["new"]', $this->config['austit_talk/allowed_users']);
		$this->assertArrayNotHasKey('austit_talk/client_pattern', $this->config);
	}

	public function testDisablesEnabledLegacyAppsAndRemovesTheirJob(): void {
		$this->legacyAppData->method('getFolder')->willThrowException(new NotFoundException());
		$this->appManager->method('isEnabledForAnyone')->willReturnMap([
			['austit_talk_admin', false],
			['austit_talk_secret', true],
		]);

		$this->appManager->expects($this->once())->method('disableApp')->with('austit_talk_secret');
		$this->jobList->expects($this->once())->method('remove')->with(MigrateLegacyApps::LEGACY_JOB);

		$this->step->run($this->output);
	}

	public function testMovesCrashReportsWithoutOverwriting(): void {
		$existing = $this->createMock(ISimpleFile::class);
		$existing->method('getName')->willReturn('20261114-a.json');
		$new = $this->createMock(ISimpleFile::class);
		$new->method('getName')->willReturn('20261115-b.json');
		$new->method('getContent')->willReturn('{"user":"alice"}');

		$source = $this->createMock(ISimpleFolder::class);
		$source->method('getDirectoryListing')->willReturn([$existing, $new]);
		$this->legacyAppData->method('getFolder')->with('crashes')->willReturn($source);

		$target = $this->createMock(ISimpleFolder::class);
		$target->method('fileExists')->willReturnMap([
			['20261114-a.json', true],
			['20261115-b.json', false],
		]);
		$this->appData->method('getFolder')->with('crashes')->willThrowException(new NotFoundException());
		$this->appData->expects($this->once())->method('newFolder')->with('crashes')->willReturn($target);

		$target->expects($this->once())->method('newFile')->with('20261115-b.json', '{"user":"alice"}');
		$source->expects($this->once())->method('delete');

		$this->step->run($this->output);
	}
}
