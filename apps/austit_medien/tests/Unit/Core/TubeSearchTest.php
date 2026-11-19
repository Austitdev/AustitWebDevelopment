<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Tests\Unit\Core;

use OCA\AustitMedien\Core\TubeSearch;
use Test\TestCase;

class TubeSearchTest extends TestCase {
	private TubeSearch $search;

	protected function setUp(): void {
		parent::setUp();
		$this->search = new TubeSearch();
	}

	public function testExtractVideosFindsVideoRenderers(): void {
		$fixture = [
			'contents' => [
				'sectionListRenderer' => [
					[
						'itemSectionRenderer' => [
							'contents' => [
								[
									'videoRenderer' => [
										'videoId' => 'aaaaaaaaaaa',
										'title' => ['runs' => [['text' => 'Erstes']]],
										'ownerText' => ['runs' => [['text' => 'Kanal A']]],
										'lengthText' => ['simpleText' => '3:21'],
										'thumbnail' => ['thumbnails' => [
											['url' => 'https://example.com/klein.jpg'],
											['url' => 'https://example.com/gross.jpg'],
										]],
									],
								],
							],
						],
					],
				],
			],
		];

		$result = $this->search->extractVideos($fixture);
		$this->assertCount(1, $result);
		$this->assertSame('aaaaaaaaaaa', $result[0]['id']);
		$this->assertSame('Erstes', $result[0]['title']);
		$this->assertSame('Kanal A', $result[0]['channel']);
		$this->assertSame('3:21', $result[0]['duration']);
		$this->assertSame('https://example.com/gross.jpg', $result[0]['thumbnail']);
	}

	public function testExtractVideosSkipsLivestreamsWithoutLength(): void {
		$fixture = [
			[
				'videoRenderer' => [
					'videoId' => 'bbbbbbbbbbb',
					'title' => ['runs' => [['text' => 'Live']]],
					'lengthText' => [],
				],
			],
			[
				'videoRenderer' => [
					'videoId' => 'ccccccccccc',
					'title' => ['runs' => [['text' => 'Normal']]],
					'lengthText' => ['simpleText' => '1:00'],
				],
			],
		];

		$result = $this->search->extractVideos($fixture);
		$this->assertCount(1, $result);
		$this->assertSame('ccccccccccc', $result[0]['id']);
	}

	public function testExtractVideosDeduplicatesIds(): void {
		$entry = [
			'videoRenderer' => [
				'videoId' => 'ddddddddddd',
				'title' => ['runs' => [['text' => 'Duplikat']]],
				'lengthText' => ['simpleText' => '2:00'],
			],
		];
		$result = $this->search->extractVideos([$entry, $entry]);
		$this->assertCount(1, $result);
		$this->assertSame('ddddddddddd', $result[0]['id']);
	}

	public function testExtractVideosWithEmptyData(): void {
		$this->assertSame([], $this->search->extractVideos([]));
	}
}
