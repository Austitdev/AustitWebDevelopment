<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\AppInfo;

use OCA\AustitTalkSecret\Listener\ConversationFolderListener;
use OCA\AustitTalkSecret\Listener\FileSystemListener;
use OCA\AustitTalkSecret\Listener\RoomListener;
use OCA\AustitTalkSecret\Listener\ShareListener;
use OCA\AustitTalkSecret\Listener\TrashListener;
use OCA\Files_Trashbin\Events\MoveToTrashEvent;
use OCA\Talk\Events\RoomCreatedEvent;
use OCA\Talk\Events\RoomModifiedEvent;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Files\Events\BeforeFileSystemSetupEvent;
use OCP\Files\Events\Node\NodeCreatedEvent;
use OCP\Files\Events\Node\NodeRenamedEvent;
use OCP\Share\Events\BeforeShareCreatedEvent;
use OCP\Share\Events\ShareCreatedEvent;

class Application extends App implements IBootstrap {
	public const APP_ID = 'austit_talk_secret';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	#[\Override]
	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(BeforeFileSystemSetupEvent::class, FileSystemListener::class);
		$context->registerEventListener(BeforeShareCreatedEvent::class, ShareListener::class);
		$context->registerEventListener(ShareCreatedEvent::class, ShareListener::class);
		$context->registerEventListener(MoveToTrashEvent::class, TrashListener::class);
		$context->registerEventListener(NodeRenamedEvent::class, ConversationFolderListener::class);
		$context->registerEventListener(NodeCreatedEvent::class, ConversationFolderListener::class);
		$context->registerEventListener(RoomCreatedEvent::class, RoomListener::class);
		$context->registerEventListener(RoomModifiedEvent::class, RoomListener::class);
	}

	#[\Override]
	public function boot(IBootContext $context): void {
	}
}
