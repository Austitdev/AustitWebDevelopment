<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Controller;

use OCA\AustitMedien\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\Util;

class PageController extends Controller {
	public function __construct(
		IRequest $request,
		private IInitialState $initialState,
		private IURLGenerator $urlGenerator,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/')]
	public function index(): TemplateResponse {
		$appBase = $this->urlGenerator->linkToRoute(Application::APP_ID . '.page.index');
		$this->initialState->provideInitialState('config', [
			'apiBase' => rtrim($appBase, '/') . '/api',
		]);
		Util::addScript(Application::APP_ID, 'medien');
		Util::addStyle(Application::APP_ID, 'medien');
		return new TemplateResponse(Application::APP_ID, 'main', [
			'apiBase' => rtrim($appBase, '/') . '/api',
		]);
	}
}
