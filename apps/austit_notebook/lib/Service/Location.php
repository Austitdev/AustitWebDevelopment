<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

use OCP\Files\Folder;
use OCP\Files\Node;

/**
 * Where a node lives inside a notebook and what the current user may do with it.
 */
final class Location {
	public const LEVEL_NOTEBOOK = 'notebook';
	public const LEVEL_AREA = 'area';
	public const LEVEL_STUDENT = 'student';
	public const LEVEL_SECTION = 'section';
	public const LEVEL_PAGE = 'page';
	public const LEVEL_MEDIA = 'media';
	public const LEVEL_OTHER = 'other';

	public const AREA_LIBRARY = 'library';
	public const AREA_COLLAB = 'collab';
	public const AREA_TEACHER = 'teacher';
	public const AREA_STUDENTS = 'students';

	public const ROLE_OWNER = 'owner';
	public const ROLE_TEACHER = 'teacher';
	public const ROLE_STUDENT = 'student';

	public function __construct(
		public readonly Node $node,
		public readonly Folder $notebook,
		public readonly string $level,
		public readonly string $role,
		public readonly ?int $classId = null,
		public readonly ?string $area = null,
		public readonly ?string $studentUid = null,
		private readonly ?string $userId = null,
	) {
	}

	public function isClass(): bool {
		return $this->classId !== null;
	}

	public function isTeacher(): bool {
		return $this->role === self::ROLE_OWNER || $this->role === self::ROLE_TEACHER;
	}

	public function canRead(): bool {
		if (!$this->isClass() || $this->isTeacher()) {
			return true;
		}
		return match ($this->area) {
			null, self::AREA_LIBRARY, self::AREA_COLLAB => true,
			self::AREA_STUDENTS => $this->studentUid === null || $this->studentUid === $this->userId,
			default => false,
		};
	}

	public function canWrite(): bool {
		if (!$this->isClass() || $this->isTeacher()) {
			return true;
		}
		return match ($this->area) {
			self::AREA_COLLAB => true,
			self::AREA_STUDENTS => $this->studentUid !== null && $this->studentUid === $this->userId,
			default => false,
		};
	}
}
