<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Listener;

use OCA\AustitTalk\AppInfo\Application;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/**
 * Loads the austit design for the Talk interface on its pages.
 *
 * @template-implements IEventListener<BeforeTemplateRenderedEvent>
 */
class LoadTalkStyleListener implements IEventListener {
	public function handle(Event $event): void {
		if ($this->shouldLoad($event)) {
			Util::addStyle(Application::APP_ID, 'spreed');
		}
	}

	public function shouldLoad(Event $event): bool {
		return $event instanceof BeforeTemplateRenderedEvent
			&& $event->isLoggedIn()
			&& $event->getResponse()->getApp() === 'spreed';
	}
}
