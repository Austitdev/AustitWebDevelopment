<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Controller;

use OCA\AustitUpdates\AppInfo\Application;
use OCA\AustitUpdates\Service\ReleaseService;
use OCA\AustitUpdates\Service\UpdateAnalyzer;
use OCA\AustitUpdates\Service\UpstreamException;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IRequest;
use OCP\ServerVersion;
use Psr\Log\LoggerInterface;

/**
 * Admin-only endpoints of the manual update check. Nothing is installed here.
 */
class UpdateController extends Controller {
	public function __construct(
		IRequest $request,
		private ReleaseService $releaseService,
		private UpdateAnalyzer $analyzer,
		private ServerVersion $serverVersion,
		private LoggerInterface $logger,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	public function releases(bool $includePrereleases = false): JSONResponse {
		$installed = $this->serverVersion->getVersionString();
		try {
			return new JSONResponse([
				'installedVersion' => $installed,
				'releases' => $this->releaseService->getNewerReleases($installed, $includePrereleases),
			]);
		} catch (UpstreamException $e) {
			$this->logger->warning('Update check failed', ['exception' => $e]);
			return new JSONResponse(['message' => $e->getMessage()], Http::STATUS_BAD_GATEWAY);
		}
	}

	public function analyze(string $version): JSONResponse {
		try {
			return new JSONResponse($this->analyzer->analyze($this->serverVersion->getVersionString(), $version));
		} catch (\InvalidArgumentException $e) {
			return new JSONResponse(['message' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (\RuntimeException $e) {
			$this->logger->error('Update analysis failed', ['exception' => $e]);
			return new JSONResponse(['message' => $e->getMessage()], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}
}
