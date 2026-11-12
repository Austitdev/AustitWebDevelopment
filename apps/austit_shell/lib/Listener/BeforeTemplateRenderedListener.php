<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitShell\Listener;

use OCA\AustitShell\AppInfo\Application;
use OCP\App\IAppManager;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IURLGenerator;
use OCP\Util;

/**
 * Loads the workspace shell on every page rendered with the logged-in user layout.
 *
 * @template-implements IEventListener<BeforeTemplateRenderedEvent>
 */
class BeforeTemplateRenderedListener implements IEventListener {
	/** Quick actions on the start page: app id => [label, icon, route path] */
	private const QUICK_ACTIONS = [
		'files' => ['Neues Dokument', 'plus', '/apps/files/'],
		'spreed' => ['Besprechung starten', 'video', '/apps/spreed/'],
		'calendar' => ['Termin erstellen', 'calendar', '/apps/calendar/'],
		'mail' => ['E-Mail schreiben', 'mail', '/apps/mail/'],
	];

	public function __construct(
		private IInitialState $initialState,
		private IURLGenerator $urlGenerator,
		private IAppManager $appManager,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!$event instanceof BeforeTemplateRenderedEvent
			|| !$event->isLoggedIn()
			|| $event->getResponse()->getRenderAs() !== TemplateResponse::RENDER_AS_USER) {
			return;
		}

		$this->initialState->provideInitialState('shell', $this->getShellState());
		Util::addStyle(Application::APP_ID, 'shell');
		Util::addScript(Application::APP_ID, 'shell');
	}

	/**
	 * @return array<string, mixed>
	 */
	public function getShellState(): array {
		$quickActions = [];
		foreach (self::QUICK_ACTIONS as $appId => [$label, $icon, $path]) {
			if ($this->appManager->isEnabledForUser($appId)) {
				$quickActions[] = [
					'label' => $label,
					'icon' => $icon,
					'href' => $this->urlGenerator->getWebroot() . '/index.php' . $path,
				];
			}
		}

		return [
			'brand' => 'austit',
			'subtitle' => 'Workspace',
			'settingsUrl' => $this->urlGenerator->linkToRoute('settings.PersonalSettings.index'),
			'legalUrl' => $this->urlGenerator->linkToRoute(Application::APP_ID . '.Legal.index'),
			'quickActions' => $quickActions,
		];
	}
}
