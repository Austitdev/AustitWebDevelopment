<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
	'ocs' => [
		['name' => 'access#me', 'url' => '/api/v1/me', 'verb' => 'GET'],
		['name' => 'access#users', 'url' => '/api/v1/users', 'verb' => 'GET'],
		['name' => 'access#setUser', 'url' => '/api/v1/users', 'verb' => 'POST'],
		['name' => 'settings#index', 'url' => '/api/v1/settings', 'verb' => 'GET'],
		['name' => 'settings#update', 'url' => '/api/v1/settings', 'verb' => 'POST'],
		['name' => 'group#index', 'url' => '/api/v1/groups', 'verb' => 'GET'],
		['name' => 'crash#report', 'url' => '/api/v1/crash', 'verb' => 'POST'],
		['name' => 'room#getRoom', 'url' => '/api/v1/rooms/{token}', 'verb' => 'GET'],
		['name' => 'room#setRoom', 'url' => '/api/v1/rooms/{token}', 'verb' => 'POST'],
	],
];
