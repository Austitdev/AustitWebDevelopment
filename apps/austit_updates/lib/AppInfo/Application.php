<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\AppInfo;

use OCP\AppFramework\App;

class Application extends App {
	public const APP_ID = 'austit_updates';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}
}
