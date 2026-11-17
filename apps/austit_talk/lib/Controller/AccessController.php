<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCA\AustitTalk\Service\AccessService;
use OCA\AustitTalk\Service\AuditService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\IRequest;
use OCP\IUserManager;
use OCP\IUserSession;

class AccessController extends OCSController {
	public function __construct(
		string $appName,
		IRequest $request,
		private readonly AccessService $accessService,
		private readonly IUserManager $userManager,
		private readonly IUserSession $userSession,
		private readonly AuditService $auditService,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Tells the requesting user which Talk administration rights they have
	 *
	 * @return DataResponse<Http::STATUS_OK, array{userId: string, isAdmin: bool, canUseSettings: bool, canManageAccess: bool}, array{}>
	 *                                                                                                                                   200: The Talk administration access of the current user
	 */
	#[NoAdminRequired]
	public function me(): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new OCSException('Not logged in', 401);
		}

		$userId = $user->getUID();

		$isAdmin = $this->accessService->isAdmin($userId);
		$isAllowed = $this->accessService->isAllowed($userId);
		$canUseSettings = $this->accessService->canUseSettings($userId);

		return new DataResponse([
			'userId' => $userId,
			'isAdmin' => $isAdmin,
			'canUseSettings' => $canUseSettings,
			'canManageAccess' => $canUseSettings,
		]);
	}

	/**
	 * Lists the Talk administrators and whether they may use the Talk administration
	 *
	 * @param string $search only users whose id or display name contain this are listed
	 * @return DataResponse<Http::STATUS_OK, list<array{id: string, displayName: string, allowed: bool}>, array{}>
	 *                                                                                                             200: The administrators and whether they may use the Talk administration
	 */
	public function users(string $search = ''): DataResponse {
		$this->requireAllowed();

		$result = [];
		foreach ($this->userManager->search($search, 100, 0) as $user) {
			$userId = $user->getUID();
			if (!$this->accessService->isAdmin($userId)) {
				continue;
			}
			$result[] = [
				'id' => $userId,
				'displayName' => $user->getDisplayName(),
				'allowed' => $this->accessService->isAllowed($userId),
			];
		}

		usort(
			$result,
			static fn (array $a, array $b): int => strcasecmp($a['displayName'], $b['displayName'])
		);

		return new DataResponse($result);
	}

	/**
	 * Grants or revokes access to the Talk administration for an administrator
	 *
	 * @param ?string $userId id of the administrator whose access is changed
	 * @param ?string $allowed whether the administrator may use the Talk administration
	 * @return DataResponse<Http::STATUS_OK, array{userId: string, allowed: bool}, array{}>
	 *                                                                                      200: The updated access of the administrator
	 */
	public function setUser(?string $userId = null, ?string $allowed = null): DataResponse {
		$this->requireAllowed();

		if (!is_string($userId) || $userId === '') {
			throw new OCSException('Missing userId', 400);
		}

		$allowed = filter_var($allowed, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
		if ($allowed === null) {
			throw new OCSException('Invalid allowed value', 400);
		}

		$user = $this->userManager->get($userId);
		if ($user === null) {
			throw new OCSException('User not found', 404);
		}

		$canonicalId = $user->getUID();
		if (!$this->accessService->isAdmin($canonicalId)) {
			throw new OCSException('User is not an administrator', 400);
		}

		$allowedUsers = $this->accessService->getAllowedUsers();

		if ($allowed) {
			$allowedUsers[] = $canonicalId;
		} else {
			$allowedUsers = array_values(
				array_filter($allowedUsers, static fn (string $uid): bool => $uid !== $canonicalId)
			);
		}

		if (!$allowed && $allowedUsers === []) {
			throw new OCSException('At least one user must remain allowed', 400);
		}

		$this->accessService->setAllowedUsers($allowedUsers);

		$this->auditService->log('Talk administration access for "%s" %s by "%s"', [
			'target' => $canonicalId,
			'action' => $allowed ? 'granted' : 'revoked',
			'user' => $this->userSession->getUser()?->getUID() ?? '',
		]);

		return new DataResponse([
			'userId' => $canonicalId,
			'allowed' => $allowed,
		]);
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
