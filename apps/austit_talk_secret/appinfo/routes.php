<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

return [
	'ocs' => [
		['name' => 'room#getRoom', 'url' => '/api/v1/rooms/{token}', 'verb' => 'GET'],
		['name' => 'room#setRoom', 'url' => '/api/v1/rooms/{token}', 'verb' => 'POST'],
	],
];
