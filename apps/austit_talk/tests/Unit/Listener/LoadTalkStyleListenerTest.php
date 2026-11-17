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
	private LoadTalkStyleListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->listener = new LoadTalkStyleListener();
	}

	private function response(string $app): TemplateResponse&MockObject {
		$response = $this->createMock(TemplateResponse::class);
		$response->method('getApp')->willReturn($app);
		return $response;
	}

	public function testLoadsStyleOnTalkPage(): void {
		$event = new BeforeTemplateRenderedEvent(true, $this->response('spreed'));
		$this->assertTrue($this->listener->shouldLoad($event));
	}

	public function testIgnoresOtherApps(): void {
		$event = new BeforeTemplateRenderedEvent(true, $this->response('files'));
		$this->assertFalse($this->listener->shouldLoad($event));
	}

	public function testIgnoresGuestRequests(): void {
		$event = new BeforeTemplateRenderedEvent(false, $this->response('spreed'));
		$this->assertFalse($this->listener->shouldLoad($event));
	}

	public function testIgnoresOtherEvents(): void {
		$event = $this->createMock(\OCP\EventDispatcher\Event::class);
		$this->assertFalse($this->listener->shouldLoad($event));
	}
}
