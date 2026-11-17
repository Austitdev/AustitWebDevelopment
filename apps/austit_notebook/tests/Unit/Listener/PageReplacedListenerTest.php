<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Listener;

use OCA\AustitNotebook\Listener\PageReplacedListener;
use OCA\AustitNotebook\Service\SyncService;
use OCP\EventDispatcher\Event;
use OCP\Files\Events\Node\BeforeNodeDeletedEvent;
use OCP\Files\File;
use OCP\Files\FileInfo;
use OCP\Files\Folder;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class PageReplacedListenerTest extends TestCase {
	private SyncService&MockObject $sync;
	private PageReplacedListener $listener;

	protected function setUp(): void {
		parent::setUp();
		$this->sync = $this->createMock(SyncService::class);
		$this->listener = new PageReplacedListener($this->sync);
	}

	private function file(string $name, int $id): File&MockObject {
		$file = $this->createMock(File::class);
		$file->method('getType')->willReturn(FileInfo::TYPE_FILE);
		$file->method('getName')->willReturn($name);
		$file->method('getId')->willReturn($id);
		return $file;
	}

	public function testDeletingAPageForgetsItsLog(): void {
		$this->sync->expects($this->once())->method('reset')->with(88);

		$this->listener->handle(new BeforeNodeDeletedEvent($this->file('Erste Seite.anote', 88)));
	}

	public function testOtherFilesAreIgnored(): void {
		$this->sync->expects($this->never())->method('reset');

		$this->listener->handle(new BeforeNodeDeletedEvent($this->file('Bild.png', 89)));
	}

	public function testFoldersAreIgnored(): void {
		$folder = $this->createMock(Folder::class);
		$folder->method('getType')->willReturn(FileInfo::TYPE_FOLDER);
		$folder->method('getName')->willReturn('Ordner.anote');
		$this->sync->expects($this->never())->method('reset');

		$this->listener->handle(new BeforeNodeDeletedEvent($folder));
	}

	public function testUnrelatedEventsAreIgnored(): void {
		$this->sync->expects($this->never())->method('reset');

		$this->listener->handle(new Event());
	}
}
