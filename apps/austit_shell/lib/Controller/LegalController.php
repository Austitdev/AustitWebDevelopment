<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitShell\Controller;

use OCA\AustitShell\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\PublicPage;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\IRequest;

/**
 * License notices and source code offer required by the AGPL-3.0.
 */
class LegalController extends Controller {
	public const SOURCE_CODE_URL = 'https://austit.de/quellcode';

	public function __construct(IRequest $request) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[PublicPage]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/lizenzen')]
	public function index(): TemplateResponse {
		return new TemplateResponse(Application::APP_ID, 'legal', [
			'sourceCodeUrl' => self::SOURCE_CODE_URL,
		], TemplateResponse::RENDER_AS_GUEST);
	}
}
