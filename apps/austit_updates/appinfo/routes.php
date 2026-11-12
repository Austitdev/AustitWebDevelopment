<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
return [
	'routes' => [
		['name' => 'Update#releases', 'url' => '/releases', 'verb' => 'GET'],
		['name' => 'Update#analyze', 'url' => '/analyze', 'verb' => 'POST'],
	],
];
