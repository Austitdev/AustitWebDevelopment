<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Tests\Unit\Service;

use OCA\AustitUpdates\Service\GitHubClient;
use OCA\AustitUpdates\Service\ManifestReader;
use OCA\AustitUpdates\Service\UpdateAnalyzer;
use OCA\AustitUpdates\Service\UpstreamException;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class UpdateAnalyzerTest extends TestCase {
	private ManifestReader&MockObject $manifestReader;
	private GitHubClient&MockObject $gitHub;
	private UpdateAnalyzer $analyzer;

	protected function setUp(): void {
		parent::setUp();
		$this->manifestReader = $this->createMock(ManifestReader::class);
		$this->gitHub = $this->createMock(GitHubClient::class);
		$this->analyzer = new UpdateAnalyzer($this->manifestReader, $this->gitHub);
	}

	public function testAnalyzeClassifiesFiles(): void {
		$this->manifestReader->method('read')->willReturn([
			'baseVersion' => '35.0.2',
			'upstreamTag' => 'v35.0.2',
			'generatedAt' => '',
			'files' => [
				['path' => 'a.php', 'kind' => 'modified', 'sha256' => hash('sha256', 'old')],
				['path' => 'b.php', 'kind' => 'modified', 'sha256' => hash('sha256', 'same')],
				['path' => 'c.php', 'kind' => 'theme-override', 'sha256' => hash('sha256', 'x'), 'source' => 'themes/austit/c.php'],
				['path' => 'd.php', 'kind' => 'modified', 'sha256' => hash('sha256', 'y')],
			],
		]);
		$this->gitHub->method('getRawFile')->willReturnCallback(function (string $tag, string $path): ?string {
			$this->assertSame('v35.0.3', $tag);
			return match ($path) {
				'a.php' => 'new',
				'b.php' => 'same',
				'c.php' => null,
				'd.php' => throw new UpstreamException('down'),
			};
		});
		$this->gitHub->method('getJson')->with('/compare/v35.0.2...v35.0.3')->willReturn([
			'total_commits' => 4,
			'files' => [['filename' => 'a.php', 'status' => 'modified']],
		]);

		$result = $this->analyzer->analyze('35.0.2', '35.0.3');

		$this->assertSame(['changed' => 1, 'removed' => 1, 'error' => 1, 'unchanged' => 1], $result['counts']);
		$this->assertSame(['a.php', 'c.php', 'd.php', 'b.php'], array_column($result['files'], 'path'));
		$this->assertSame('themes/austit/c.php', $result['files'][1]['source']);
		$this->assertFalse($result['manifestOutdated']);
		$this->assertSame(4, $result['upstream']['commits']);
		$this->assertFalse($result['upstream']['truncated']);
	}

	public function testAnalyzeReportsUnavailableUpstreamCompare(): void {
		$this->manifestReader->method('read')->willReturn([
			'baseVersion' => '35.0.1',
			'upstreamTag' => 'v35.0.1',
			'generatedAt' => '',
			'files' => [],
		]);
		$this->gitHub->method('getJson')->willThrowException(new UpstreamException('rate limit'));

		$result = $this->analyzer->analyze('35.0.2', '36.0.0');

		$this->assertTrue($result['manifestOutdated']);
		$this->assertFalse($result['upstream']['available']);
		$this->assertSame('rate limit', $result['upstream']['message']);
	}

	public static function invalidTargets(): array {
		return [
			['35.0.2'],
			['35.0.1'],
			['../../etc'],
			['36.0.0;rm'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('invalidTargets')]
	public function testAnalyzeRejectsInvalidTarget(string $target): void {
		$this->manifestReader->expects($this->never())->method('read');
		$this->expectException(\InvalidArgumentException::class);
		$this->analyzer->analyze('35.0.2', $target);
	}
}
