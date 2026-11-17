<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Migration;

use OCA\AustitTalk\AppInfo\Application;
use OCP\App\IAppManager;
use OCP\BackgroundJob\IJobList;
use OCP\Files\AppData\IAppDataFactory;
use OCP\Files\NotFoundException;
use OCP\IAppConfig;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

/**
 * Takes over settings and crash reports of austit_talk_admin and austit_talk_secret and
 * disables both, so their listeners and storage wrapper do not run next to this app's.
 * The tables austit_ts_rooms and austit_ts_files keep their names and need no copy.
 */
class MigrateLegacyApps implements IRepairStep {
	public const LEGACY_ADMIN = 'austit_talk_admin';
	public const LEGACY_SECRET = 'austit_talk_secret';
	public const LEGACY_JOB = 'OCA\AustitTalkSecret\BackgroundJob\ExpireJob';

	/** @var array<string, list<string>> */
	private const SETTINGS = [
		self::LEGACY_ADMIN => ['allowed_users'],
		self::LEGACY_SECRET => ['client_pattern'],
	];

	private const CRASH_FOLDER = 'crashes';

	public function __construct(
		private IAppConfig $appConfig,
		private IAppManager $appManager,
		private IJobList $jobList,
		private IAppDataFactory $appDataFactory,
	) {
	}

	#[\Override]
	public function getName(): string {
		return 'Take over austit_talk_admin and austit_talk_secret';
	}

	#[\Override]
	public function run(IOutput $output): void {
		foreach (self::SETTINGS as $app => $keys) {
			foreach ($keys as $key) {
				if ($this->appConfig->hasKey($app, $key, null) && !$this->appConfig->hasKey(Application::APP_ID, $key, null)) {
					$this->appConfig->setValueString(Application::APP_ID, $key, $this->appConfig->getValueString($app, $key, '', $this->appConfig->isLazy($app, $key)));
					$output->info(sprintf('Took over %s from %s', $key, $app));
				}
			}
		}

		$this->moveCrashReports($output);
		$this->jobList->remove(self::LEGACY_JOB);

		foreach ([self::LEGACY_ADMIN, self::LEGACY_SECRET] as $app) {
			if ($this->appManager->isEnabledForAnyone($app)) {
				$this->appManager->disableApp($app);
				$output->info(sprintf('Disabled %s', $app));
			}
		}
	}

	private function moveCrashReports(IOutput $output): void {
		try {
			$source = $this->appDataFactory->get(self::LEGACY_ADMIN)->getFolder(self::CRASH_FOLDER);
		} catch (NotFoundException) {
			return;
		}

		$appData = $this->appDataFactory->get(Application::APP_ID);
		try {
			$target = $appData->getFolder(self::CRASH_FOLDER);
		} catch (NotFoundException) {
			$target = $appData->newFolder(self::CRASH_FOLDER);
		}

		$moved = 0;
		foreach ($source->getDirectoryListing() as $file) {
			if (!$target->fileExists($file->getName())) {
				$target->newFile($file->getName(), $file->getContent());
				$moved++;
			}
		}
		$source->delete();
		$output->info(sprintf('Moved %d crash reports', $moved));
	}
}
