<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Listener;

use OCA\AustitTalk\Listener\LoadTalkStyleListener;
use OCP\AppFramework\Http\Events\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Http\TemplateResponse;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class LoadTalkStyleListenerTest extends TestCase {
	private const STYLE = 'austit_talk/css/spreed.css';

	private LoadTalkStyleListener $listener;

	protected function setUp(): void {
		parent::setUp();
		\OC_Util::$styles = [];
		$this->listener = new LoadTalkStyleListener();
	}

	protected function tearDown(): void {
		\OC_Util::$styles = [];
		parent::tearDown();
	}

	private function response(string $app): TemplateResponse&MockObject {
		$response = $this->createMock(TemplateResponse::class);
		$response->method('getApp')->willReturn($app);
		return $response;
	}

	private function assertStyleLoaded(bool $loaded): void {
		$paths = \OC_Util::$styles;
		if ($loaded) {
			$this->assertContains(self::STYLE, $paths);
		} else {
			$this->assertNotContains(self::STYLE, $paths);
		}
	}

	public function testLoadsStyleOnTalkPage(): void {
		$this->listener->handle(new BeforeTemplateRenderedEvent(true, $this->response('spreed')));
		$this->assertStyleLoaded(true);
	}

	public function testIgnoresOtherApps(): void {
		$this->listener->handle(new BeforeTemplateRenderedEvent(true, $this->response('files')));
		$this->assertStyleLoaded(false);
	}

	public function testIgnoresGuestRequests(): void {
		$this->listener->handle(new BeforeTemplateRenderedEvent(false, $this->response('spreed')));
		$this->assertStyleLoaded(false);
	}
}
