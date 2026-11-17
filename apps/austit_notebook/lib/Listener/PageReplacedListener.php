<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Listener;

use OCA\AustitNotebook\Service\NotebookService;
use OCA\AustitNotebook\Service\SyncService;
use OCA\Files_Versions\Events\VersionRestoredEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\Node\BeforeNodeDeletedEvent;
use OCP\Files\FileInfo;

/**
 * Forgets the update log of a page whose file is deleted or replaced by an older version,
 * so the page is built from the file again.
 *
 * @template-implements IEventListener<Event>
 */
class PageReplacedListener implements IEventListener {
	public function __construct(
		private SyncService $sync,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		$file = match (true) {
			$event instanceof BeforeNodeDeletedEvent => $event->getNode(),
			$event instanceof VersionRestoredEvent => $event->getVersion()->getSourceFile(),
			default => null,
		};
		if ($file instanceof FileInfo
			&& $file->getType() === FileInfo::TYPE_FILE
			&& str_ends_with($file->getName(), NotebookService::PAGE_EXTENSION)) {
			$this->sync->reset((int)$file->getId());
		}
	}
}
