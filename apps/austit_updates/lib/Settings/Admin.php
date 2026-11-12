<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Settings;

use OCA\AustitUpdates\AppInfo\Application;
use OCA\AustitUpdates\Service\ManifestReader;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IConfig;
use OCP\IURLGenerator;
use OCP\ServerVersion;
use OCP\Settings\ISettings;

class Admin implements ISettings {
	public function __construct(
		private IConfig $config,
		private ServerVersion $serverVersion,
		private ManifestReader $manifestReader,
		private IURLGenerator $urlGenerator,
	) {
	}

	#[\Override]
	public function getForm(): TemplateResponse {
		try {
			$manifest = $this->manifestReader->read();
			$manifestError = null;
		} catch (\RuntimeException $e) {
			$manifest = null;
			$manifestError = $e->getMessage();
		}

		$blockedApps = $this->config->getSystemValue('app_update_blocklist', []);

		return new TemplateResponse(Application::APP_ID, 'admin', [
			'releasesUrl' => $this->urlGenerator->linkToRoute(Application::APP_ID . '.Update.releases'),
			'analyzeUrl' => $this->urlGenerator->linkToRoute(Application::APP_ID . '.Update.analyze'),
			'installedVersion' => $this->serverVersion->getVersionString(),
			'updateCheckerEnabled' => $this->config->getSystemValueBool('updatechecker', true),
			'webUpdaterEnabled' => !$this->config->getSystemValueBool('upgrade.disable-web', false),
			'blockedApps' => is_array($blockedApps) ? array_values(array_filter($blockedApps, 'is_string')) : [],
			'manifest' => $manifest,
			'manifestError' => $manifestError,
		], '');
	}

	#[\Override]
	public function getSection(): string {
		return Application::APP_ID;
	}

	#[\Override]
	public function getPriority(): int {
		return 10;
	}
}
