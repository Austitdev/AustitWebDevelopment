<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Controller;

use OCA\AustitNotebook\AppInfo\Application;
use OCA\AustitNotebook\Service\ConflictException;
use OCA\AustitNotebook\Service\ImportService;
use OCA\AustitNotebook\Service\NotebookException;
use OCA\AustitNotebook\Service\NotebookService;
use OCA\AustitNotebook\Service\SyncService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\Response;
use OCP\Files\NotFoundException;
use OCP\Files\NotPermittedException;
use OCP\IRequest;
use OCP\IUserSession;
use Psr\Log\LoggerInterface;

class ApiController extends Controller {
	public function __construct(
		IRequest $request,
		private NotebookService $service,
		private SyncService $sync,
		private ImportService $importService,
		private IUserSession $userSession,
		private LoggerInterface $logger,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/tree')]
	public function tree(): JSONResponse {
		return $this->run(fn () => [
			'notebooks' => $this->service->getTree($this->userId()),
			'templates' => $this->templatesList(),
		]);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/templates')]
	public function templates(): JSONResponse {
		return new JSONResponse(['templates' => $this->templatesList()]);
	}

	/**
	 * @return list<array{id: string, name: string}>
	 */
	private function templatesList(): array {
		return [
			['id' => 'plain', 'name' => 'Leer'],
			['id' => 'grid', 'name' => 'Kariert'],
			['id' => 'lines', 'name' => 'Liniert'],
			['id' => 'dots', 'name' => 'Punkte'],
		];
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/notebooks')]
	public function createNotebook(string $name = ''): JSONResponse {
		return $this->run(fn () => ['id' => $this->service->createNotebook($this->userId(), $name)->getId()], Http::STATUS_CREATED);
	}

	/**
	 * @param list<array{type: string, id: string, role: string}> $members
	 */
	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/class-notebooks')]
	public function createClassNotebook(string $name = '', array $members = []): JSONResponse {
		return $this->run(fn () => ['id' => $this->service->createClassNotebook($this->userId(), $name, $members)->getId()], Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/class-notebooks/{id}/members')]
	public function getMembers(int $id): JSONResponse {
		return $this->run(fn () => ['members' => $this->service->getMembers($this->userId(), $id)]);
	}

	/**
	 * @param list<array{type: string, id: string, role: string}> $members
	 */
	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'PUT', url: '/api/class-notebooks/{id}/members')]
	public function setMembers(int $id, array $members = []): JSONResponse {
		return $this->run(function () use ($id, $members) {
			$this->service->setMembers($this->userId(), $id, $members);
			return [];
		});
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/principals')]
	public function principals(string $search = ''): JSONResponse {
		return $this->run(fn () => ['results' => $this->service->searchPrincipals($search)]);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/containers/{parentId}/sections')]
	public function createSection(int $parentId, string $name = ''): JSONResponse {
		return $this->run(fn () => ['id' => $this->service->createSection($this->userId(), $parentId, $name)->getId()], Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/sections/{sectionId}/pages')]
	public function createPage(int $sectionId, string $name = ''): JSONResponse {
		return $this->run(fn () => ['id' => $this->service->createPage($this->userId(), $sectionId, $name)->getId()], Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'PATCH', url: '/api/nodes/{id}')]
	public function rename(int $id, string $name): JSONResponse {
		return $this->run(fn () => ['id' => $this->service->rename($this->userId(), $id, $name)->getId()]);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'DELETE', url: '/api/nodes/{id}')]
	public function delete(int $id): JSONResponse {
		return $this->run(function () use ($id) {
			$this->service->delete($this->userId(), $id);
			return [];
		});
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/pages/{id}')]
	public function getPage(int $id): JSONResponse {
		return $this->run(fn () => $this->service->readPage($this->userId(), $id));
	}

	/**
	 * @param array<mixed> $content
	 */
	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'PUT', url: '/api/pages/{id}')]
	public function savePage(int $id, array $content, string $etag): JSONResponse {
		return $this->run(fn () => ['etag' => $this->service->writePage($this->userId(), $id, $content, $etag)]);
	}

	/**
	 * @param list<mixed>|null $cursor
	 */
	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/pages/{id}/sync')]
	public function syncPage(
		int $id,
		string $session = '',
		int $epoch = 0,
		int $since = 0,
		string $update = '',
		bool $init = false,
		?array $cursor = null,
		bool $leave = false,
	): JSONResponse {
		return $this->run(fn () => $this->sync->sync($this->userId(), $id, $session, $epoch, $since, $update, $init, $cursor, $leave));
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/pages/{id}/sync/compact')]
	public function compactPage(int $id, int $epoch = 0, int $upTo = 0, string $state = ''): JSONResponse {
		return $this->run(fn () => ['compacted' => $this->sync->compact($this->userId(), $id, $epoch, $upTo, $state)]);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/pages/{id}/distribute')]
	public function distributePage(int $id, string $section = ''): JSONResponse {
		return $this->run(fn () => ['count' => $this->service->distributePage($this->userId(), $id, $section)]);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/pages/{id}/images')]
	public function uploadImage(int $id): JSONResponse {
		$upload = $this->request->getUploadedFile('image');
		if (!is_array($upload) || ($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !is_uploaded_file($upload['tmp_name'])) {
			return new JSONResponse(['message' => 'Das Bild konnte nicht hochgeladen werden.'], Http::STATUS_BAD_REQUEST);
		}
		$mimeType = (string)mime_content_type($upload['tmp_name']);

		return $this->run(function () use ($id, $upload, $mimeType) {
			$stream = fopen($upload['tmp_name'], 'rb');
			try {
				return ['fileId' => $this->service->addImage($this->userId(), $id, (string)$upload['name'], $mimeType, $stream)];
			} finally {
				if (is_resource($stream)) {
					fclose($stream);
				}
			}
		}, Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/import')]
	public function importNotebook(): JSONResponse {
		$upload = $this->request->getUploadedFile('zip');
		if (!is_array($upload) || ($upload['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !is_uploaded_file($upload['tmp_name'])) {
			return new JSONResponse(['message' => 'Die ZIP-Datei konnte nicht hochgeladen werden.'], Http::STATUS_BAD_REQUEST);
		}
		$name = pathinfo((string)$upload['name'], PATHINFO_FILENAME);
		$notebookName = trim((string)($this->request->getParam('name') ?? ''));
		if ($notebookName === '') {
			$notebookName = $name;
		}

		return $this->run(fn () => $this->importService->importZip($this->userId(), (string)$upload['tmp_name'], $notebookName), Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/images/{fileId}')]
	public function image(int $fileId): Response {
		try {
			$file = $this->service->getImage($this->userId(), $fileId);
		} catch (NotFoundException|NotPermittedException) {
			return new JSONResponse(['message' => 'Bild nicht gefunden.'], Http::STATUS_NOT_FOUND);
		}
		$response = new FileDisplayResponse($file, Http::STATUS_OK, ['Content-Type' => $file->getMimetype()]);
		$response->cacheFor(3600, false, true);
		return $response;
	}

	/**
	 * @param callable(): array<mixed> $action
	 */
	private function run(callable $action, int $successStatus = Http::STATUS_OK): JSONResponse {
		try {
			return new JSONResponse($action(), $successStatus);
		} catch (ConflictException) {
			return new JSONResponse(['message' => 'Die Seite wurde inzwischen an anderer Stelle geändert.'], Http::STATUS_CONFLICT);
		} catch (NotFoundException) {
			return new JSONResponse(['message' => 'Nicht gefunden.'], Http::STATUS_NOT_FOUND);
		} catch (NotPermittedException) {
			return new JSONResponse(['message' => 'Dafür fehlt die Berechtigung.'], Http::STATUS_FORBIDDEN);
		} catch (NotebookException $e) {
			return new JSONResponse(['message' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (\Exception $e) {
			$this->logger->error('Notebook request failed', ['exception' => $e]);
			return new JSONResponse(['message' => 'Unerwarteter Fehler.'], Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}

	private function userId(): string {
		$user = $this->userSession->getUser();
		if ($user === null) {
			throw new NotPermittedException();
		}
		return $user->getUID();
	}
}
