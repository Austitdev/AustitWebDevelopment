<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Service;

use OCA\AustitNotebook\Service\ConflictException;
use OCA\AustitNotebook\Service\NotebookException;
use OCA\AustitNotebook\Service\NotebookService;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class NotebookServiceTest extends TestCase {
	private IRootFolder&MockObject $rootFolder;
	private Folder&MockObject $root;
	private NotebookService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->rootFolder = $this->createMock(IRootFolder::class);
		$this->root = $this->createMock(Folder::class);
		$userFolder = $this->createMock(Folder::class);
		$userFolder->method('get')->with(NotebookService::ROOT_FOLDER)->willReturn($this->root);
		$this->rootFolder->method('getUserFolder')->with('alice')->willReturn($userFolder);
		$this->root->method('getRelativePath')->willReturnCallback(
			static fn (string $path): ?string => str_starts_with($path, '/alice/files/Notizbücher')
				? substr($path, strlen('/alice/files/Notizbücher'))
				: null,
		);
		$this->service = new NotebookService($this->rootFolder);
	}

	public static function names(): array {
		return [
			['Projekt X', 'Projekt X'],
			['  a/b\\c  ', 'a b c'],
			['..versteckt', 'versteckt'],
			["Zeile\neins", 'Zeile eins'],
			['', 'Fallback'],
			['///', 'Fallback'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('names')]
	public function testSanitizeName(string $input, string $expected): void {
		$this->assertSame($expected, $this->service->sanitizeName($input, 'Fallback'));
	}

	public function testSanitizeNameLimitsLength(): void {
		$this->assertSame(NotebookService::MAX_NAME_LENGTH, mb_strlen($this->service->sanitizeName(str_repeat('ä', 300), 'x')));
	}

	public function testReadPageRejectsFilesOutsidePageDepth(): void {
		$file = $this->createMock(File::class);
		$file->method('getName')->willReturn('Seite.anote');
		$file->method('getPath')->willReturn('/alice/files/Notizbücher/Seite.anote');
		$this->root->method('getFirstNodeById')->with(5)->willReturn($file);

		$this->expectException(NotFoundException::class);
		$this->service->readPage('alice', 5);
	}

	public function testReadPageRejectsUnknownIds(): void {
		$this->root->method('getFirstNodeById')->willReturn(null);

		$this->expectException(NotFoundException::class);
		$this->service->readPage('alice', 99);
	}

	public function testWritePageDetectsConflicts(): void {
		$this->root->method('getFirstNodeById')->with(7)->willReturn($this->page('etag-new'));

		$this->expectException(ConflictException::class);
		$this->service->writePage('alice', 7, ['elements' => []], 'etag-old');
	}

	public function testWritePageStoresJson(): void {
		$page = $this->page('etag-1');
		$page->expects($this->once())->method('putContent')->with('{"elements":[],"strokes":[]}');
		$this->root->method('getFirstNodeById')->with(7)->willReturn($page);

		$this->service->writePage('alice', 7, ['elements' => [], 'strokes' => []], 'etag-1');
	}

	public function testAddImageRejectsNonImages(): void {
		$this->expectException(NotebookException::class);
		$this->service->addImage('alice', 7, 'skript.svg', 'image/svg+xml', fopen('php://memory', 'rb'));
	}

	public function testDeleteRejectsRootFolder(): void {
		$this->root->method('getPath')->willReturn('/alice/files/Notizbücher');
		$this->root->method('getFirstNodeById')->with(1)->willReturn($this->root);
		$this->root->expects($this->never())->method('delete');

		$this->expectException(NotFoundException::class);
		$this->service->delete('alice', 1);
	}

	private function page(string $etag): File&MockObject {
		$page = $this->createMock(File::class);
		$page->method('getName')->willReturn('Seite.anote');
		$page->method('getPath')->willReturn('/alice/files/Notizbücher/Buch/Abschnitt/Seite.anote');
		$page->method('getEtag')->willReturn($etag);
		return $page;
	}
}
