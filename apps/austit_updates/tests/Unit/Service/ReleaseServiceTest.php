<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Tests\Unit\Service;

use OCA\AustitUpdates\Service\GitHubClient;
use OCA\AustitUpdates\Service\ReleaseService;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class ReleaseServiceTest extends TestCase {
	private GitHubClient&MockObject $gitHub;
	private ReleaseService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->gitHub = $this->createMock(GitHubClient::class);
		$this->service = new ReleaseService($this->gitHub);

		$this->gitHub->method('getJson')->with('/releases?per_page=50')->willReturn([
			['tag_name' => 'v35.0.1', 'draft' => false, 'prerelease' => false],
			['tag_name' => 'v35.0.3', 'draft' => false, 'prerelease' => false],
			['tag_name' => 'v36.0.0', 'draft' => false, 'prerelease' => false],
			['tag_name' => 'v37.0.0', 'draft' => false, 'prerelease' => false],
			['tag_name' => 'v36.0.1rc1', 'draft' => false, 'prerelease' => true],
			['tag_name' => 'v35.0.4', 'draft' => true, 'prerelease' => false],
			['tag_name' => 'nightly', 'draft' => false, 'prerelease' => false],
		]);
	}

	public function testOnlyNewerStableReleasesSortedDescending(): void {
		$releases = $this->service->getNewerReleases('35.0.2');

		$this->assertSame(['37.0.0', '36.0.0', '35.0.3'], array_column($releases, 'version'));
		$this->assertSame([false, true, true], array_column($releases, 'supported'));
	}

	public function testPrereleasesOnRequest(): void {
		$releases = $this->service->getNewerReleases('35.0.2', true);

		$this->assertContains('36.0.1rc1', array_column($releases, 'version'));
	}
}
