<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Controller;

use OCA\AustitTalk\Controller\CrashController;
use OCP\AppFramework\OCS\OCSException;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Log\LoggerInterface;
use Test\TestCase;

class CrashControllerTest extends TestCase {
	private IRequest&MockObject $request;
	private IUserSession&MockObject $userSession;
	private IAppData&MockObject $appData;
	private ISimpleFolder&MockObject $folder;
	private CrashController $controller;

	protected function setUp(): void {
		parent::setUp();
		$this->request = $this->createMock(IRequest::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->appData = $this->createMock(IAppData::class);
		$this->folder = $this->createMock(ISimpleFolder::class);

		$this->controller = new CrashController('austit_talk', $this->request, $this->userSession, $this->appData, $this->createMock(LoggerInterface::class));
	}

	private function loggedIn(): void {
		$user = $this->createMock(IUser::class);
		$user->method('getUID')->willReturn('alice');
		$this->userSession->method('getUser')->willReturn($user);
	}

	public function testStoresReportInNewFolder(): void {
		$this->loggedIn();
		$this->request->method('getParam')->willReturnCallback(
			static fn (string $key): mixed => ['device' => str_repeat('d', 300), 'thread' => ['no scalar']][$key] ?? null
		);
		$this->appData->method('getFolder')->willThrowException(new NotFoundException());
		$this->appData->expects($this->once())->method('newFolder')->with('crashes')->willReturn($this->folder);
		$this->folder->method('getDirectoryListing')->willReturn([]);

		$this->folder->expects($this->once())->method('newFile')
			->with($this->matchesRegularExpression('/^\d{8}-\d{6}-[0-9a-f]{8}\.json$/'), $this->callback(function (string $json): bool {
				$report = json_decode($json, true);
				return $report['user'] === 'alice'
					&& $report['stacktrace'] === 'java.lang.NullPointerException'
					&& $report['device'] === str_repeat('d', 200)
					&& $report['thread'] === '';
			}));

		$this->assertSame(['stored' => true], $this->controller->report('java.lang.NullPointerException')->getData());
	}

	public function testKeepsOnlyTheNewestReports(): void {
		$this->loggedIn();
		$this->appData->method('getFolder')->willReturn($this->folder);

		$files = [];
		for ($i = 201; $i >= 1; $i--) {
			$file = $this->createMock(ISimpleFile::class);
			$file->method('getName')->willReturn(sprintf('%03d.json', $i));
			$file->expects($i === 1 ? $this->once() : $this->never())->method('delete');
			$files[] = $file;
		}
		$this->folder->method('getDirectoryListing')->willReturn($files);

		$this->controller->report('trace');
	}

	public function testNeedsAStacktrace(): void {
		$this->loggedIn();
		$this->expectException(OCSException::class);
		$this->expectExceptionCode(400);
		$this->controller->report(null);
	}

	public function testNeedsALogin(): void {
		$this->expectException(OCSException::class);
		$this->expectExceptionCode(401);
		$this->controller->report();
	}
}
