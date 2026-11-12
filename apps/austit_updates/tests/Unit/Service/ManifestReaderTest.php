<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Tests\Unit\Service;

use OCA\AustitUpdates\Service\ManifestReader;
use Test\TestCase;

class ManifestReaderTest extends TestCase {
	private ManifestReader $reader;
	private string $file;

	protected function setUp(): void {
		parent::setUp();
		$this->reader = new ManifestReader();
		$this->file = tempnam(sys_get_temp_dir(), 'austit-manifest');
	}

	protected function tearDown(): void {
		@unlink($this->file);
		parent::tearDown();
	}

	public function testShippedManifestIsValid(): void {
		$manifest = $this->reader->read();
		$this->assertMatchesRegularExpression('/^\d+\.\d+\.\d+/', $manifest['baseVersion']);
	}

	public function testReadValidManifest(): void {
		file_put_contents($this->file, json_encode([
			'baseVersion' => '35.0.2',
			'upstreamTag' => 'v35.0.2',
			'files' => [
				['path' => 'core/templates/404.php', 'kind' => 'theme-override', 'sha256' => 'abc', 'source' => 'themes/austit/core/templates/404.php'],
			],
		]));

		$manifest = $this->reader->read($this->file);

		$this->assertSame('', $manifest['generatedAt']);
		$this->assertSame('themes/austit/core/templates/404.php', $manifest['files'][0]['source']);
	}

	public function testRejectsUnknownKind(): void {
		file_put_contents($this->file, json_encode([
			'baseVersion' => '35.0.2',
			'upstreamTag' => 'v35.0.2',
			'files' => [['path' => 'x', 'kind' => 'other', 'sha256' => 'abc']],
		]));

		$this->expectException(\RuntimeException::class);
		$this->reader->read($this->file);
	}

	public function testMissingManifest(): void {
		$this->expectException(\RuntimeException::class);
		$this->reader->read($this->file . '.missing');
	}
}
