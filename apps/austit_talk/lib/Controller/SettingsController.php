<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCA\AustitTalk\Service\AccessService;
use OCA\AustitTalk\Service\AuditService;
use OCA\AustitTalk\Service\SettingsService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\IRequest;
use OCP\IUserSession;

class SettingsController extends OCSController {
	public function __construct(
		string $appName,
		IRequest $request,
		private readonly AccessService $accessService,
		private readonly SettingsService $settingsService,
		private readonly IUserSession $userSession,
		private readonly AuditService $auditService,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Returns the Talk settings this app exposes
	 *
	 * @return DataResponse<Http::STATUS_OK, array<string, mixed>, array{}>
	 * 200: The Talk settings this app exposes
	 */
	#[NoAdminRequired]
	public function index(): DataResponse {
		$this->requireAllowed();
		return new DataResponse($this->settingsService->getSettings());
	}

	/**
	 * Changes one of the Talk settings this app exposes
	 *
	 * @param ?string $key name of the setting
	 * @param mixed $value new value of the setting, JSON is accepted as well
	 * @return DataResponse<Http::STATUS_OK, array<string, mixed>, array{}>
	 * 200: The Talk settings this app exposes
	 */
	#[NoAdminRequired]
	public function update(?string $key = null, mixed $value = null): DataResponse {
		$this->requireAllowed();

		if (!is_string($key) || $key === '') {
			throw new OCSException('Missing key', 400);
		}

		if (is_string($value)) {
			$decoded = json_decode($value, true);
			if (json_last_error() === JSON_ERROR_NONE) {
				$value = $decoded;
			}
		}

		$settings = $this->settingsService->update($key, $value);

		$this->auditService->log('Talk setting "%s" changed by "%s" to: %s', [
			'key' => $key,
			'user' => $this->userSession->getUser()?->getUID() ?? '',
			'value' => (string)json_encode($settings[$key] ?? $value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
		]);

		return new DataResponse($settings);
	}

	private function requireAllowed(): void {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new OCSException('Not logged in', 401);
		}
		if (!$this->accessService->canUseSettings($user->getUID())) {
			throw new OCSException('Forbidden', 403);
		}
	}
}
