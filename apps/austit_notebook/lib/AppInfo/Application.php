<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\AppInfo;

use OCA\AustitNotebook\Listener\PageReplacedListener;
use OCA\Files_Versions\Events\VersionRestoredEvent;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Files\Events\Node\BeforeNodeDeletedEvent;

class Application extends App implements IBootstrap {
	public const APP_ID = 'austit_notebook';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	#[\Override]
	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(BeforeNodeDeletedEvent::class, PageReplacedListener::class);
		$context->registerEventListener(VersionRestoredEvent::class, PageReplacedListener::class);
	}

	#[\Override]
	public function boot(IBootContext $context): void {
	}
}
