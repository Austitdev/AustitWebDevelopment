<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

use OCA\AustitNotebook\Db\ClassNotebookStore;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\Files\Node;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\IGroupManager;
use OCP\IUserManager;

/**
 * Notebooks are stored as plain files:
 *
 * Personal notebook (storage of the user):
 *   Notizbücher/<Notebook>/<Section>/<Page>.anote
 *
 * Class notebook (storage of the teacher who created it), members are kept in the database:
 *   Klassennotizbücher/<Notebook>/Inhaltsbibliothek/<Section>/<Page>.anote
 *   Klassennotizbücher/<Notebook>/Platz für Zusammenarbeit/<Section>/...
 *   Klassennotizbücher/<Notebook>/Nur für Lehrkräfte/<Section>/...
 *   Klassennotizbücher/<Notebook>/Schülerbereiche/<user id>/<Section>/...
 *
 * Images placed on pages live in a ".medien" folder inside the section.
 * Every id is resolved through Location, which also decides what the user may do.
 */
class NotebookService {
	public const ROOT_FOLDER = 'Notizbücher';
	public const CLASS_ROOT_FOLDER = 'Klassennotizbücher';
	public const PAGE_EXTENSION = '.anote';
	public const MEDIA_FOLDER = '.medien';
	public const MAX_NAME_LENGTH = 120;
	public const MAX_PAGE_BYTES = 20 * 1024 * 1024;

	public const AREA_FOLDERS = [
		Location::AREA_LIBRARY => 'Inhaltsbibliothek',
		Location::AREA_COLLAB => 'Platz für Zusammenarbeit',
		Location::AREA_TEACHER => 'Nur für Lehrkräfte',
		Location::AREA_STUDENTS => 'Schülerbereiche',
	];
	public const DEFAULT_AREA_SECTIONS = [
		Location::AREA_LIBRARY => 'Material',
		Location::AREA_COLLAB => 'Gemeinsam',
		Location::AREA_TEACHER => 'Planung',
	];
	public const STUDENT_SECTIONS = ['Handouts', 'Klassennotizen', 'Hausaufgaben', 'Tests'];

	public function __construct(
		private IRootFolder $rootFolder,
		private ClassNotebookStore $store,
		private IUserManager $userManager,
		private IGroupManager $groupManager,
	) {
	}

	// ---------------------------------------------------------------- tree

	/**
	 * @return list<array<string, mixed>>
	 */
	public function getTree(string $userId): array {
		$notebooks = [];
		foreach ($this->sortedChildren($this->personalRoot($userId), Folder::class) as $notebook) {
			$notebooks[] = [
				'id' => $notebook->getId(),
				'name' => $notebook->getName(),
				'kind' => 'personal',
				'role' => Location::ROLE_OWNER,
				'canManage' => true,
				'canDelete' => true,
				'sections' => $this->sectionsOf($notebook, true),
			];
		}

		foreach ($this->accessibleClasses($userId) as [$class, $folder, $role]) {
			$notebooks[] = $this->classTree($userId, $class, $folder, $role);
		}
		return $notebooks;
	}

	/**
	 * @param array{id: int, owner: string, folderId: int} $class
	 * @return array<string, mixed>
	 */
	private function classTree(string $userId, array $class, Folder $notebook, string $role): array {
		$isTeacher = $role !== Location::ROLE_STUDENT;
		$groups = [];
		foreach ([Location::AREA_LIBRARY, Location::AREA_COLLAB, Location::AREA_TEACHER] as $area) {
			if ($area === Location::AREA_TEACHER && !$isTeacher) {
				continue;
			}
			$folder = $this->areaFolder($notebook, $area);
			$canWrite = $isTeacher || $area === Location::AREA_COLLAB;
			$groups[] = [
				'id' => $folder->getId(),
				'area' => $area,
				'name' => self::AREA_FOLDERS[$area],
				'canWrite' => $canWrite,
				'sections' => $this->sectionsOf($folder, $canWrite),
			];
		}

		if ($isTeacher) {
			$students = [];
			foreach ($this->studentsOf($class['id'], $class['owner']) as $studentUid => $displayName) {
				$folder = $this->studentFolder($notebook, $studentUid);
				$students[] = [
					'id' => $folder->getId(),
					'uid' => $studentUid,
					'name' => $displayName,
					'sections' => $this->sectionsOf($folder, true),
				];
			}
			$groups[] = [
				'id' => $this->areaFolder($notebook, Location::AREA_STUDENTS)->getId(),
				'area' => Location::AREA_STUDENTS,
				'name' => self::AREA_FOLDERS[Location::AREA_STUDENTS],
				'canWrite' => true,
				'students' => $students,
			];
		} else {
			$folder = $this->studentFolder($notebook, $userId);
			$groups[] = [
				'id' => $folder->getId(),
				'area' => 'own',
				'name' => 'Mein Bereich',
				'canWrite' => true,
				'sections' => $this->sectionsOf($folder, true),
			];
		}

		return [
			'id' => $notebook->getId(),
			'name' => $notebook->getName(),
			'kind' => 'class',
			'role' => $role,
			'canManage' => $isTeacher,
			'canDelete' => $role === Location::ROLE_OWNER,
			'groups' => $groups,
		];
	}

	/**
	 * @return list<array{id: int, name: string, canWrite: bool, pages: list<array{id: int, name: string, mtime: int}>}>
	 */
	private function sectionsOf(Folder $container, bool $canWrite): array {
		$sections = [];
		foreach ($this->sortedChildren($container, Folder::class) as $section) {
			$pages = [];
			foreach ($this->sortedChildren($section, File::class) as $page) {
				if (str_ends_with($page->getName(), self::PAGE_EXTENSION)) {
					$pages[] = ['id' => $page->getId(), 'name' => $this->pageTitle($page), 'mtime' => $page->getMTime()];
				}
			}
			$sections[] = ['id' => $section->getId(), 'name' => $section->getName(), 'canWrite' => $canWrite, 'pages' => $pages];
		}
		return $sections;
	}

	// ---------------------------------------------------------------- notebooks

	public function createNotebook(string $userId, string $name): Folder {
		$root = $this->personalRoot($userId);
		return $root->newFolder($root->getNonExistingName($this->sanitizeName($name, 'Neues Notizbuch')));
	}

	/**
	 * @param list<array{type: string, id: string, role: string}> $members
	 */
	public function createClassNotebook(string $userId, string $name, array $members): Folder {
		$members = $this->validateMembers($members, $userId);
		$root = $this->classRoot($userId);
		$notebook = $root->newFolder($root->getNonExistingName($this->sanitizeName($name, 'Klassennotizbuch')));
		foreach (self::DEFAULT_AREA_SECTIONS as $area => $section) {
			$this->areaFolder($notebook, $area)->newFolder($section);
		}
		$this->areaFolder($notebook, Location::AREA_STUDENTS);

		$classId = $this->store->create($userId, $notebook->getId());
		$this->store->setMembers($classId, $members);
		return $notebook;
	}

	/**
	 * @return list<array{type: string, id: string, role: string, name: string}>
	 */
	public function getMembers(string $userId, int $notebookId): array {
		$location = $this->resolve($userId, $notebookId);
		if (!$location->isClass() || !$location->isTeacher() || $location->level !== Location::LEVEL_NOTEBOOK) {
			throw new NotPermittedException();
		}
		return array_map(fn (array $m) => $m + ['name' => $this->principalName($m['type'], $m['id'])], $this->store->getMembers($location->classId));
	}

	/**
	 * @param list<array{type: string, id: string, role: string}> $members
	 */
	public function setMembers(string $userId, int $notebookId, array $members): void {
		$location = $this->resolve($userId, $notebookId);
		if (!$location->isClass() || !$location->isTeacher() || $location->level !== Location::LEVEL_NOTEBOOK) {
			throw new NotPermittedException();
		}
		$class = $this->store->findByFolderId($notebookId);
		$this->store->setMembers($location->classId, $this->validateMembers($members, $class['owner'] ?? $userId));
	}

	/**
	 * Users and groups that can be added to a class notebook.
	 *
	 * @return list<array{type: string, id: string, name: string}>
	 */
	public function searchPrincipals(string $search): array {
		$search = trim($search);
		if (mb_strlen($search) < 2) {
			return [];
		}
		$result = [];
		foreach ($this->groupManager->search($search, 10) as $group) {
			$result[] = ['type' => 'group', 'id' => $group->getGID(), 'name' => $group->getDisplayName()];
		}
		foreach ($this->userManager->searchDisplayName($search, 15) as $user) {
			$result[] = ['type' => 'user', 'id' => $user->getUID(), 'name' => $user->getDisplayName()];
		}
		return $result;
	}

	// ---------------------------------------------------------------- sections & pages

	public function createSection(string $userId, int $parentId, string $name): Folder {
		$location = $this->resolve($userId, $parentId);
		$allowed = $location->isClass()
			? ($location->level === Location::LEVEL_STUDENT
				|| ($location->level === Location::LEVEL_AREA && $location->area !== Location::AREA_STUDENTS))
			: $location->level === Location::LEVEL_NOTEBOOK;
		if (!$allowed || !$location->canWrite() || !$location->node instanceof Folder) {
			throw new NotPermittedException();
		}
		$parent = $location->node;
		return $parent->newFolder($parent->getNonExistingName($this->sanitizeName($name, 'Neuer Abschnitt')));
	}

	public function createPage(string $userId, int $sectionId, string $title): File {
		$location = $this->resolve($userId, $sectionId);
		if ($location->level !== Location::LEVEL_SECTION || !$location->canWrite() || !$location->node instanceof Folder) {
			throw new NotPermittedException();
		}
		$section = $location->node;
		$fileName = $section->getNonExistingName($this->sanitizeName($title, 'Neue Seite') . self::PAGE_EXTENSION);
		$content = ['version' => 1, 'created' => time(), 'elements' => [], 'strokes' => []];
		return $section->newFile($fileName, json_encode($content, JSON_THROW_ON_ERROR));
	}

	public function rename(string $userId, int $id, string $name): Node {
		$location = $this->editable($userId, $id);
		$node = $location->node;
		$isPage = $location->level === Location::LEVEL_PAGE;
		$newName = $this->sanitizeName($name, $isPage ? 'Seite' : 'Notizbuch') . ($isPage ? self::PAGE_EXTENSION : '');
		if ($newName === $node->getName()) {
			return $node;
		}
		$parent = $node->getParent();
		return $node->move($parent->getPath() . '/' . $parent->getNonExistingName($newName));
	}

	/**
	 * Moves the node to the trash bin.
	 */
	public function delete(string $userId, int $id): void {
		$location = $this->editable($userId, $id);
		if ($location->isClass() && $location->level === Location::LEVEL_NOTEBOOK) {
			if ($location->role !== Location::ROLE_OWNER) {
				throw new NotPermittedException();
			}
			$this->store->delete($location->classId);
		}
		$location->node->delete();
	}

	/**
	 * @return array{content: array<mixed>, etag: string, name: string, canWrite: bool}
	 */
	public function readPage(string $userId, int $pageId): array {
		$location = $this->page($userId, $pageId);
		/** @var File $page */
		$page = $location->node;
		$content = json_decode($page->getContent(), true);
		if (!is_array($content)) {
			throw new NotebookException('Die Seite ist beschädigt und kann nicht gelesen werden.');
		}
		return [
			'content' => $content,
			'etag' => $page->getEtag(),
			'name' => $this->pageTitle($page),
			'canWrite' => $location->canWrite(),
			'canDistribute' => $location->isClass() && $location->isTeacher(),
		];
	}

	/**
	 * Saves the page if it was not changed since the given etag was read.
	 *
	 * @param array<mixed> $content
	 * @return string the new etag
	 * @throws ConflictException
	 */
	public function writePage(string $userId, int $pageId, array $content, string $etag): string {
		$location = $this->page($userId, $pageId);
		if (!$location->canWrite()) {
			throw new NotPermittedException();
		}
		/** @var File $page */
		$page = $location->node;
		if ($page->getEtag() !== $etag) {
			throw new ConflictException();
		}
		$json = json_encode($content, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
		if (strlen($json) > self::MAX_PAGE_BYTES) {
			throw new NotebookException('Die Seite ist zu groß. Bitte große Inhalte auf mehrere Seiten verteilen.');
		}
		$page->putContent($json);
		/** @var File $updated */
		$updated = $this->page($userId, $pageId)->node;
		return $updated->getEtag();
	}

	/**
	 * Copies a page into the given section of every student's area, creating the section if needed.
	 * Images on the page are copied along so students can see them.
	 *
	 * @return int number of students that received the page
	 */
	public function distributePage(string $userId, int $pageId, string $sectionName): int {
		$location = $this->page($userId, $pageId);
		if (!$location->isClass() || !$location->isTeacher()) {
			throw new NotPermittedException();
		}
		/** @var File $source */
		$source = $location->node;
		$content = json_decode($source->getContent(), true);
		if (!is_array($content)) {
			throw new NotebookException('Die Seite ist beschädigt und kann nicht verteilt werden.');
		}
		$sectionName = $this->sanitizeName($sectionName, self::STUDENT_SECTIONS[0]);
		$sourceMedia = $this->mediaFolder($source->getParent(), false);

		$class = $this->store->findByFolderId($location->notebook->getId());
		$count = 0;
		foreach (array_keys($this->studentsOf($location->classId, $class['owner'] ?? $userId)) as $studentUid) {
			$studentFolder = $this->studentFolder($location->notebook, $studentUid);
			$section = $this->childFolder($studentFolder, $sectionName);
			$copy = $content;
			$copy['elements'] = array_map(
				fn ($element) => $this->copyImageElement($element, $sourceMedia, $section),
				is_array($content['elements'] ?? null) ? $content['elements'] : [],
			);
			$section->newFile(
				$section->getNonExistingName($source->getName()),
				json_encode($copy, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE),
			);
			$count++;
		}
		return $count;
	}

	/**
	 * @param mixed $element
	 * @return mixed
	 */
	private function copyImageElement($element, ?Folder $sourceMedia, Folder $targetSection) {
		if (!is_array($element) || ($element['type'] ?? null) !== 'image' || $sourceMedia === null) {
			return $element;
		}
		$image = $sourceMedia->getFirstNodeById((int)($element['fileId'] ?? 0));
		if (!$image instanceof File) {
			return $element;
		}
		$targetMedia = $this->mediaFolder($targetSection, true);
		$copy = $image->copy($targetMedia->getPath() . '/' . $targetMedia->getNonExistingName($image->getName()));
		return ['fileId' => $copy->getId()] + $element;
	}

	// ---------------------------------------------------------------- images

	/**
	 * Stores an uploaded image next to the page and returns its file id.
	 *
	 * @param resource $stream
	 */
	public function addImage(string $userId, int $pageId, string $originalName, string $mimeType, $stream): int {
		if (!preg_match('#^image/(png|jpe?g|gif|webp)$#', $mimeType)) {
			throw new NotebookException('Nur Bilder (PNG, JPEG, GIF, WebP) können eingefügt werden.');
		}
		$location = $this->page($userId, $pageId);
		if (!$location->canWrite()) {
			throw new NotPermittedException();
		}
		$media = $this->mediaFolder($location->node->getParent(), true);
		return $media->newFile($media->getNonExistingName($this->sanitizeName($originalName, 'Bild')), $stream)->getId();
	}

	public function getImage(string $userId, int $fileId): File {
		$location = $this->resolve($userId, $fileId);
		$file = $location->node;
		if ($location->level !== Location::LEVEL_MEDIA
			|| !$file instanceof File
			|| !$location->canRead()
			|| !str_starts_with($file->getMimetype(), 'image/')) {
			throw new NotFoundException();
		}
		return $file;
	}

	// ---------------------------------------------------------------- resolving

	/**
	 * @throws NotFoundException
	 */
	public function resolve(string $userId, int $id): Location {
		$personal = $this->personalRoot($userId);
		$node = $personal->getFirstNodeById($id);
		if ($node !== null) {
			return $this->locatePersonal($personal, $node);
		}

		foreach ($this->accessibleClasses($userId) as [$class, $notebook, $role]) {
			$node = $notebook->getId() === $id ? $notebook : $notebook->getFirstNodeById($id);
			if ($node !== null) {
				$location = $this->locateClass($userId, $class['id'], $notebook, $node, $role);
				if (!$location->canRead()) {
					throw new NotFoundException();
				}
				return $location;
			}
		}
		throw new NotFoundException();
	}

	private function locatePersonal(Folder $root, Node $node): Location {
		$parts = $this->relativeParts($root, $node);
		if ($parts === null || $parts === []) {
			throw new NotFoundException();
		}
		$notebook = $root->get($parts[0]);
		if (!$notebook instanceof Folder) {
			throw new NotFoundException();
		}
		$level = $this->levelFor($node, array_slice($parts, 1));
		return new Location($node, $notebook, $level, Location::ROLE_OWNER);
	}

	private function locateClass(string $userId, int $classId, Folder $notebook, Node $node, string $role): Location {
		$parts = $node->getId() === $notebook->getId() ? [] : $this->relativeParts($notebook, $node);
		if ($parts === null) {
			throw new NotFoundException();
		}
		if ($parts === []) {
			return new Location($node, $notebook, Location::LEVEL_NOTEBOOK, $role, $classId, userId: $userId);
		}

		$area = array_search($parts[0], self::AREA_FOLDERS, true);
		if ($area === false) {
			return new Location($node, $notebook, Location::LEVEL_OTHER, $role, $classId, userId: $userId);
		}
		if (count($parts) === 1) {
			return new Location($node, $notebook, Location::LEVEL_AREA, $role, $classId, $area, userId: $userId);
		}

		if ($area === Location::AREA_STUDENTS) {
			$studentUid = $parts[1];
			$level = count($parts) === 2 ? Location::LEVEL_STUDENT : $this->levelFor($node, array_slice($parts, 2));
			return new Location($node, $notebook, $level, $role, $classId, $area, $studentUid, $userId);
		}
		return new Location($node, $notebook, $this->levelFor($node, array_slice($parts, 1)), $role, $classId, $area, userId: $userId);
	}

	/**
	 * Level of a node given its path below the section container (notebook, area or student folder).
	 *
	 * @param list<string> $parts
	 */
	private function levelFor(Node $node, array $parts): string {
		$count = count($parts);
		if ($count === 0) {
			return Location::LEVEL_NOTEBOOK;
		}
		if ($count === 1 && $node instanceof Folder && !str_starts_with($parts[0], '.')) {
			return Location::LEVEL_SECTION;
		}
		if ($count === 2 && $node instanceof File && str_ends_with($parts[1], self::PAGE_EXTENSION)) {
			return Location::LEVEL_PAGE;
		}
		if ($count === 3 && $node instanceof File && $parts[1] === self::MEDIA_FOLDER) {
			return Location::LEVEL_MEDIA;
		}
		return Location::LEVEL_OTHER;
	}

	/**
	 * A page the user may at least read.
	 *
	 * @throws NotFoundException
	 */
	public function page(string $userId, int $pageId): Location {
		$location = $this->resolve($userId, $pageId);
		if ($location->level !== Location::LEVEL_PAGE) {
			throw new NotFoundException();
		}
		return $location;
	}

	/**
	 * A notebook, section or page the user may rename or delete.
	 */
	private function editable(string $userId, int $id): Location {
		$location = $this->resolve($userId, $id);
		$allowed = match ($location->level) {
			Location::LEVEL_NOTEBOOK => $location->isTeacher(),
			Location::LEVEL_SECTION, Location::LEVEL_PAGE => $location->canWrite(),
			default => false,
		};
		if (!$allowed) {
			throw new NotPermittedException();
		}
		return $location;
	}

	/**
	 * @return list<array{0: array{id: int, owner: string, folderId: int}, 1: Folder, 2: string}>
	 */
	private function accessibleClasses(string $userId): array {
		$user = $this->userManager->get($userId);
		$groupIds = $user === null ? [] : $this->groupManager->getUserGroupIds($user);

		$result = [];
		foreach ($this->store->findForUser($userId, $groupIds) as $class) {
			$role = $this->roleFor($userId, $groupIds, $class);
			if ($role === null) {
				continue;
			}
			try {
				$notebook = $this->rootFolder->getUserFolder($class['owner'])->getFirstNodeById($class['folderId']);
			} catch (\Exception) {
				continue;
			}
			if ($notebook instanceof Folder) {
				$result[] = [$class, $notebook, $role];
			}
		}
		return $result;
	}

	/**
	 * @param list<string> $groupIds
	 * @param array{id: int, owner: string, folderId: int} $class
	 */
	private function roleFor(string $userId, array $groupIds, array $class): ?string {
		if ($class['owner'] === $userId) {
			return Location::ROLE_OWNER;
		}
		$role = null;
		foreach ($this->store->getMembers($class['id']) as $member) {
			$matches = ($member['type'] === 'user' && $member['id'] === $userId)
				|| ($member['type'] === 'group' && in_array($member['id'], $groupIds, true));
			if ($matches) {
				if ($member['role'] === Location::ROLE_TEACHER) {
					return Location::ROLE_TEACHER;
				}
				$role = Location::ROLE_STUDENT;
			}
		}
		return $role;
	}

	/**
	 * Students of a class notebook (direct members and members of student groups), excluding teachers.
	 *
	 * @return array<string, string> user id => display name, sorted by name
	 */
	private function studentsOf(int $classId, string $owner): array {
		$students = [];
		$teachers = [$owner => true];
		foreach ($this->store->getMembers($classId) as $member) {
			$uids = $member['type'] === 'user'
				? [$member['id']]
				: array_keys($this->groupManager->displayNamesInGroup($member['id']));
			foreach ($uids as $uid) {
				if ($member['role'] === Location::ROLE_TEACHER) {
					$teachers[$uid] = true;
				} else {
					$students[$uid] = true;
				}
			}
		}
		$result = [];
		foreach (array_keys(array_diff_key($students, $teachers)) as $uid) {
			$uid = (string)$uid;
			if ($this->userManager->userExists($uid)) {
				$result[$uid] = $this->userManager->getDisplayName($uid) ?? $uid;
			}
		}
		asort($result, SORT_NATURAL | SORT_FLAG_CASE);
		return $result;
	}

	/**
	 * @param list<array{type: string, id: string, role: string}> $members
	 * @return list<array{type: 'user'|'group', id: string, role: 'teacher'|'student'}>
	 */
	private function validateMembers(array $members, string $owner): array {
		$valid = [];
		foreach ($members as $member) {
			$type = $member['type'] ?? null;
			$id = (string)($member['id'] ?? '');
			$role = $member['role'] ?? null;
			if (!in_array($type, ClassNotebookStore::MEMBER_TYPES, true) || !in_array($role, ClassNotebookStore::ROLES, true)) {
				throw new NotebookException('Ungültiges Mitglied.');
			}
			$exists = $type === 'user' ? $this->userManager->userExists($id) : $this->groupManager->groupExists($id);
			if (!$exists) {
				throw new NotebookException('„' . $id . '“ wurde nicht gefunden.');
			}
			if ($type === 'user' && $id === $owner) {
				continue;
			}
			$valid[] = ['type' => $type, 'id' => $id, 'role' => $role];
		}
		return $valid;
	}

	private function principalName(string $type, string $id): string {
		if ($type === 'group') {
			return $this->groupManager->get($id)?->getDisplayName() ?? $id;
		}
		return $this->userManager->getDisplayName($id) ?? $id;
	}

	// ---------------------------------------------------------------- folders

	private function personalRoot(string $userId): Folder {
		return $this->childFolder($this->rootFolder->getUserFolder($userId), self::ROOT_FOLDER);
	}

	private function classRoot(string $userId): Folder {
		return $this->childFolder($this->rootFolder->getUserFolder($userId), self::CLASS_ROOT_FOLDER);
	}

	private function areaFolder(Folder $notebook, string $area): Folder {
		return $this->childFolder($notebook, self::AREA_FOLDERS[$area]);
	}

	/**
	 * The student's folder, created with the default sections on first use.
	 */
	private function studentFolder(Folder $notebook, string $studentUid): Folder {
		$area = $this->areaFolder($notebook, Location::AREA_STUDENTS);
		if ($area->nodeExists($studentUid)) {
			return $this->childFolder($area, $studentUid);
		}
		$folder = $area->newFolder($studentUid);
		foreach (self::STUDENT_SECTIONS as $section) {
			$folder->newFolder($section);
		}
		return $folder;
	}

	private function mediaFolder(Folder $section, bool $create): ?Folder {
		if (!$section->nodeExists(self::MEDIA_FOLDER)) {
			return $create ? $section->newFolder(self::MEDIA_FOLDER) : null;
		}
		return $this->childFolder($section, self::MEDIA_FOLDER);
	}

	private function childFolder(Folder $parent, string $name): Folder {
		try {
			$node = $parent->get($name);
		} catch (NotFoundException) {
			return $parent->newFolder($name);
		}
		if (!$node instanceof Folder) {
			throw new NotebookException('„' . $name . '“ ist kein Ordner.');
		}
		return $node;
	}

	/**
	 * @return list<string>|null path segments of $node below $base, null if outside
	 */
	private function relativeParts(Folder $base, Node $node): ?array {
		$relative = $base->getRelativePath($node->getPath());
		if ($relative === null) {
			return null;
		}
		return array_values(array_filter(explode('/', $relative), static fn (string $part) => $part !== ''));
	}

	/**
	 * @template T of Node
	 * @param class-string<T> $type
	 * @return list<T>
	 */
	private function sortedChildren(Folder $folder, string $type): array {
		$children = array_values(array_filter(
			$folder->getDirectoryListing(),
			static fn (Node $node) => $node instanceof $type && !str_starts_with($node->getName(), '.'),
		));
		usort($children, static fn (Node $a, Node $b) => strnatcasecmp($a->getName(), $b->getName()));
		return $children;
	}

	public function sanitizeName(string $name, string $fallback): string {
		$name = preg_replace('/[\x00-\x1F\x7F\/\\\\]+/u', ' ', $name) ?? '';
		$name = trim(preg_replace('/\s+/u', ' ', $name) ?? '');
		$name = ltrim($name, '.');
		$name = mb_substr($name, 0, self::MAX_NAME_LENGTH);
		return $name === '' ? $fallback : $name;
	}

	private function pageTitle(File $page): string {
		return substr($page->getName(), 0, -strlen(self::PAGE_EXTENSION));
	}
}
