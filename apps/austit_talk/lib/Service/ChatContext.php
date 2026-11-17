<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCA\AustitTalk\AppInfo\Application;
use OCP\IAppConfig;
use OCP\IRequest;

/**
 * Tells whether a request comes from a chat view: Talk in the browser or a Talk client app.
 * This keeps protected images out of every other view; it does not stop a participant who is
 * allowed to see an image in the chat from deliberately imitating such a request.
 */
class ChatContext {
	public const DEFAULT_CLIENT_PATTERN = '/Nextcloud-Talk|austit[-_ ]?talk/i';

	public function __construct(
		private IRequest $request,
		private IAppConfig $appConfig,
	) {
	}

	public function isChat(): bool {
		$pattern = $this->appConfig->getValueString(Application::APP_ID, 'client_pattern', self::DEFAULT_CLIENT_PATTERN);
		if (@preg_match($pattern, $this->request->getHeader('User-Agent')) === 1) {
			return true;
		}
		// Nextcloud sends "Referrer-Policy: no-referrer", so calls of Talk's own API carry no Referer
		$uriPath = parse_url($this->request->getRequestUri(), PHP_URL_PATH);
		if (is_string($uriPath) && preg_match('#/ocs/v[12]\.php/apps/spreed/#', $uriPath) === 1) {
			return true;
		}
		$path = parse_url($this->request->getHeader('Referer'), PHP_URL_PATH);
		return is_string($path) && preg_match('#/(call/[^/]+|apps/spreed)(/|$)#', $path) === 1;
	}
}
