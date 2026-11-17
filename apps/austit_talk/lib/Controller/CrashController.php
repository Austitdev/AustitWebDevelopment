<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\UserRateLimit;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

/**
 * Receives crash reports from the austit Talk Android app. Only logged-in users can submit;
 * reports are kept in the app data folder "crashes" and picked up by the server monitor.
 */
class CrashController extends OCSController {
	private const FOLDER = 'crashes';
	private const MAX_REPORTS = 200;
	private const MAX_FIELD_LENGTH = 200;
	private const MAX_STACKTRACE_LENGTH = 65536;

	public function __construct(
		string $appName,
		IRequest $request,
		private readonly IUserSession $userSession,
		private readonly IAppData $appData,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Stores a crash report of the austit Talk Android app
	 *
	 * @param ?string $stacktrace stack trace of the crash
	 * @return DataResponse<Http::STATUS_OK, array{stored: bool}, array{}>
	 *
	 * 200: The crash report was stored
	 */
	#[NoAdminRequired]
	#[UserRateLimit(limit: 30, period: 3600)]
	public function report(?string $stacktrace = null): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new OCSException('Not logged in', 401);
		}

		if (!is_string($stacktrace) || $stacktrace === '') {
			throw new OCSException('Missing stacktrace', 400);
		}

		$report = [
			'user' => $user->getUID(),
			'receivedAt' => gmdate('c'),
			'crashedAt' => $this->field('crashedAt'),
			'appVersion' => $this->field('appVersion'),
			'versionCode' => $this->field('versionCode'),
			'device' => $this->field('device'),
			'androidVersion' => $this->field('androidVersion'),
			'thread' => $this->field('thread'),
			'stacktrace' => mb_substr($stacktrace, 0, self::MAX_STACKTRACE_LENGTH),
		];

		try {
			$folder = $this->appData->getFolder(self::FOLDER);
		} catch (NotFoundException) {
			$folder = $this->appData->newFolder(self::FOLDER);
		}

		$name = sprintf('%s-%s.json', gmdate('Ymd-His'), bin2hex(random_bytes(4)));
		$folder->newFile($name, (string)json_encode($report, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

		$files = $folder->getDirectoryListing();
		if (count($files) > self::MAX_REPORTS) {
			usort($files, static fn ($a, $b): int => strcmp($a->getName(), $b->getName()));
			foreach (array_slice($files, 0, count($files) - self::MAX_REPORTS) as $old) {
				$old->delete();
			}
		}

		$this->logger->warning(
			sprintf('Crash report from %s (%s, %s)', $user->getUID(), $report['appVersion'], $report['device']),
			['app' => $this->appName]
		);

		return new DataResponse(['stored' => true]);
	}

	private function field(string $name): string {
		$value = $this->request->getParam($name);
		return is_scalar($value) ? mb_substr((string)$value, 0, self::MAX_FIELD_LENGTH) : '';
	}
}
