<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Service;

use OCA\AustitNotebook\Service\Location;
use OCP\Files\File;
use OCP\Files\Folder;
use Test\TestCase;

class LocationTest extends TestCase {
	/**
	 * role, area, student folder owner => [canRead, canWrite] for user "max"
	 */
	public static function classPermissions(): array {
		return [
			'teacher library' => [Location::ROLE_TEACHER, Location::AREA_LIBRARY, null, true, true],
			'teacher only area' => [Location::ROLE_TEACHER, Location::AREA_TEACHER, null, true, true],
			'teacher in student area' => [Location::ROLE_OWNER, Location::AREA_STUDENTS, 'lena', true, true],
			'student library' => [Location::ROLE_STUDENT, Location::AREA_LIBRARY, null, true, false],
			'student collaboration' => [Location::ROLE_STUDENT, Location::AREA_COLLAB, null, true, true],
			'student teacher area' => [Location::ROLE_STUDENT, Location::AREA_TEACHER, null, false, false],
			'student own area' => [Location::ROLE_STUDENT, Location::AREA_STUDENTS, 'max', true, true],
			'student other student' => [Location::ROLE_STUDENT, Location::AREA_STUDENTS, 'lena', false, false],
			'student notebook root' => [Location::ROLE_STUDENT, null, null, true, false],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('classPermissions')]
	public function testClassPermissions(string $role, ?string $area, ?string $studentUid, bool $canRead, bool $canWrite): void {
		$location = new Location(
			$this->createMock(File::class),
			$this->createMock(Folder::class),
			Location::LEVEL_PAGE,
			$role,
			1,
			$area,
			$studentUid,
			'max',
		);

		$this->assertSame($canRead, $location->canRead());
		$this->assertSame($canWrite, $location->canWrite());
	}

	public function testPersonalNotebookIsFullyAccessible(): void {
		$location = new Location($this->createMock(File::class), $this->createMock(Folder::class), Location::LEVEL_PAGE, Location::ROLE_OWNER);

		$this->assertFalse($location->isClass());
		$this->assertTrue($location->canRead());
		$this->assertTrue($location->canWrite());
	}
}
