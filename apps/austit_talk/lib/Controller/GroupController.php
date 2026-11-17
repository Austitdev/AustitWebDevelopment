<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Controller;

use OCA\AustitTalk\Service\AccessService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSException;
use OCP\AppFramework\OCSController;
use OCP\IGroupManager;
use OCP\IRequest;
use OCP\IUserSession;

class GroupController extends OCSController {
	public function __construct(
		string $appName,
		IRequest $request,
		private readonly AccessService $accessService,
		private readonly IGroupManager $groupManager,
		private readonly IUserSession $userSession,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Lists the groups for the Talk administration settings
	 *
	 * @return DataResponse<Http::STATUS_OK, list<array{id: string, name: string}>, array{}>
	 * 200: The groups for the Talk administration settings
	 */
	#[NoAdminRequired]
	public function index(): DataResponse {
		$user = $this->userSession->getUser();
		if ($user === null || !$this->accessService->canUseSettings($user->getUID())) {
			throw new OCSException('Forbidden', 403);
		}

		$result = [];
		foreach ($this->groupManager->search('', 1000, 0) as $group) {
			$result[] = [
				'id' => $group->getGID(),
				'name' => $group->getDisplayName(),
			];
		}

		usort(
			$result,
			static fn (array $a, array $b): int => strcasecmp($a['name'], $b['name'])
		);

		return new DataResponse($result);
	}
}
