<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Job;

use OCA\AustitMedien\Service\MediaService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\QueuedJob;

/**
 * Holt ein freigegebenes Video per yt-dlp in den Cache. Läuft über den
 * Cron/Background-Job-Container, damit Downloads die Weboberfläche nicht blockieren.
 */
class FetchJob extends QueuedJob {
	public function __construct(
		ITimeFactory $timeFactory,
		private MediaService $service,
	) {
		parent::__construct($timeFactory);
	}

	protected function run($argument): void {
		$videoId = (string)($argument['videoId'] ?? '');
		if ($videoId === '') {
			return;
		}
		$this->service->fetch($videoId);
	}
}
