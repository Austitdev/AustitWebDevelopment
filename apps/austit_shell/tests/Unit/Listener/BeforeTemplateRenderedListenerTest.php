<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitShell\Tests\Unit\Listener;

use OCA\AustitShell\Listener\BeforeTemplateRenderedListener;
use OCP\App\IAppManager;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IURLGenerator;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class BeforeTemplateRenderedListenerTest extends TestCase {
	private IInitialState&MockObject $initialState;
	private IURLGenerator&MockObject $urlGenerator;
	private IAppManager&MockObject $appManager;
	private BeforeTemplateRenderedListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->initialState = $this->createMock(IInitialState::class);
		$this->urlGenerator = $this->createMock(IURLGenerator::class);
		$this->appManager = $this->createMock(IAppManager::class);
		$this->listener = new BeforeTemplateRenderedListener($this->initialState, $this->urlGenerator, $this->appManager);

		$this->urlGenerator->method('getWebroot')->willReturn('/cloud');
		$this->urlGenerator->method('linkToRoute')->willReturn('/cloud/settings/user');
	}

	public function testQuickActionsOnlyForEnabledApps(): void {
		$this->appManager->method('isEnabledForUser')->willReturnCallback(
			static fn (string $appId): bool => in_array($appId, ['files', 'calendar'], true),
		);

		$state = $this->listener->getShellState();

		$this->assertSame(['Neues Dokument', 'Termin erstellen'], array_column($state['quickActions'], 'label'));
		$this->assertSame('/cloud/index.php/apps/calendar/', $state['quickActions'][1]['href']);
		$this->assertSame('/cloud/settings/user', $state['settingsUrl']);
		$this->assertArrayHasKey('legalUrl', $state);
	}

	public function testSkipsGuestAndPublicPages(): void {
		$this->initialState->expects($this->never())->method('provideInitialState');

		$this->listener->handle(new BeforeTemplateRenderedEvent(false, new TemplateResponse('core', 'x', [], TemplateResponse::RENDER_AS_USER)));
		$this->listener->handle(new BeforeTemplateRenderedEvent(true, new TemplateResponse('core', 'x', [], TemplateResponse::RENDER_AS_PUBLIC)));
	}

	public function testProvidesStateForUserLayout(): void {
		$this->appManager->method('isEnabledForUser')->willReturn(false);
		$this->initialState->expects($this->once())
			->method('provideInitialState')
			->with('shell', $this->callback(static fn (array $state): bool => $state['quickActions'] === []));

		$this->listener->handle(new BeforeTemplateRenderedEvent(true, new TemplateResponse('core', 'x', [], TemplateResponse::RENDER_AS_USER)));
	}
}
