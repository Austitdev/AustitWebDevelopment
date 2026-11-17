<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCA\AustitTalk\Service\AccessService;
use OCA\AustitTalk\Service\AuditService;
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

	public function setUser(): DataResponse {
		$this->requireAllowed();

		$userId = $this->request->getParam('userId');
		$allowedRaw = $this->request->getParam('allowed');

		if (!is_string($userId) || $userId === '') {
			throw new OCSException('Missing userId', 400);
		}

		$allowed = filter_var($allowedRaw, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
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
