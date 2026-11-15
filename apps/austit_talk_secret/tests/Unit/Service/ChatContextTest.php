<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Tests\Unit\Service;

use OCA\AustitTalkSecret\Service\ChatContext;
use OCP\IAppConfig;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class ChatContextTest extends TestCase {
	private IRequest&MockObject $request;
	private IAppConfig&MockObject $appConfig;
	private ChatContext $context;

	protected function setUp(): void {
		parent::setUp();
		$this->request = $this->createMock(IRequest::class);
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->appConfig->method('getValueString')
			->willReturn(ChatContext::DEFAULT_CLIENT_PATTERN);
		$this->context = new ChatContext($this->request, $this->appConfig);
	}

	public function testTalkUserAgentIsChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 Nextcloud-Talk Android/19.0.0'],
				['Referer', ''],
			]);
		$this->assertTrue($this->context->isChat());
	}

	public function testAustitTalkUserAgentIsChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'austit-talk v2.1'],
				['Referer', ''],
			]);
		$this->assertTrue($this->context->isChat());
	}

	public function testCallRefererIsChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', 'https://cloud.example.com/call/roomtoken123'],
			]);
		$this->assertTrue($this->context->isChat());
	}

	public function testSpreedRefererIsChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', 'https://cloud.example.com/apps/spreed/'],
			]);
		$this->assertTrue($this->context->isChat());
	}

	public function testTalkApiRequestWithoutRefererIsChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', ''],
			]);
		$this->request->method('getRequestUri')
			->willReturn('/ocs/v2.php/apps/spreed/api/v1/chat/roomtoken123/attachment?format=json');
		$this->assertTrue($this->context->isChat());
	}

	public function testOtherOcsRequestWithoutRefererIsNotChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', ''],
			]);
		$this->request->method('getRequestUri')
			->willReturn('/ocs/v2.php/apps/files_sharing/api/v1/shares');
		$this->assertFalse($this->context->isChat());
	}

	public function testSpreedNameInQueryIsNotChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', ''],
			]);
		$this->request->method('getRequestUri')
			->willReturn('/index.php/core/preview?x=/ocs/v2.php/apps/spreed/');
		$this->assertFalse($this->context->isChat());
	}

	public function testFilesAppRefererIsNotChat(): void {
		$this->request->method('getHeader')
			->willReturnMap([
				['User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'],
				['Referer', 'https://cloud.example.com/apps/files/files'],
			]);
		$this->assertFalse($this->context->isChat());
	}
}
