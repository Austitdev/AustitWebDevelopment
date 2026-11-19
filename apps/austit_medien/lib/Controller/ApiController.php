<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Controller;

use OCA\AustitMedien\AppInfo\Application;
use OCA\AustitMedien\Service\MediaException;
use OCA\AustitMedien\Service\MediaService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\FrontpageRoute;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\AppFramework\Http\Response;
use OCP\Files\SimpleFolder\ISimpleFile;
use OCP\IRequest;
use OCP\IURLGenerator;

class ApiController extends Controller {
	public function __construct(
		IRequest $request,
		private MediaService $service,
		private IURLGenerator $urlGenerator,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/search')]
	public function search(string $q = ''): JSONResponse {
		if (!$this->service->rules()->maySearch()) {
			return new JSONResponse(['error' => 'Freie Suche ist für dich nicht freigegeben.'], Http::STATUS_FORBIDDEN);
		}
		try {
			return new JSONResponse(['results' => $this->service->search($q)]);
		} catch (\Throwable $e) {
			return new JSONResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/video/{videoId}')]
	public function video(string $videoId): JSONResponse {
		try {
			$info = $this->service->videoInfo($videoId);
			$info['thumbnail'] = $this->mediaUrl('/api/thumb/' . $videoId);
			$info['stream'] = $this->mediaUrl('/api/stream/' . $videoId);
			$info['state'] = $this->stateDetail($videoId, $info['state']);
			return new JSONResponse($info);
		} catch (\Throwable $e) {
			return new JSONResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		}
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/thumb/{videoId}')]
	public function thumb(string $videoId): Response {
		try {
			$file = $this->service->thumbnailFile($videoId);
		} catch (\Throwable) {
			return new Response(Http::STATUS_NOT_FOUND);
		}
		return $this->fileResponse($file, 'image/jpeg', 86400);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/stream/{videoId}')]
	public function stream(string $videoId): Response {
		try {
			$video = $this->service->videoFile($videoId);
		} catch (MediaException) {
			return new Response(Http::STATUS_NOT_FOUND);
		}
		if (!$this->service->rules()->isVideoAllowed($videoId)) {
			return new Response(Http::STATUS_FORBIDDEN);
		}

		$size = $video['size'];
		/** @var ISimpleFile $file */
		$file = $video['file'];
		$content = $file->getContent();

		$range = $this->request->getHeader('Range');
		if (preg_match('/^bytes=(\d+)-(\\d*)$/', trim($range), $match)) {
			$start = (int)$match[1];
			$end = $match[2] === '' ? $size - 1 : min((int)$match[2], $size - 1);
			if ($start >= $size || $start > $end) {
				$response = new DataDisplayResponse('', Http::STATUS_REQUEST_RANGE_NOT_SATISFIABLE);
				$response->addHeader('Content-Range', 'bytes */' . $size);
				return $response;
			}
			$response = new DataDisplayResponse(substr($content, $start, $end - $start + 1), Http::STATUS_PARTIAL_CONTENT);
			$response->addHeader('Content-Range', sprintf('bytes %d-%d/%d', $start, $end, $size));
			$response->addHeader('Content-Length', (string)($end - $start + 1));
			$this->applyStreamHeaders($response, 'video/mp4');
			return $response;
		}

		$response = new DataDisplayResponse($content);
		$response->addHeader('Content-Length', (string)$size);
		$this->applyStreamHeaders($response, 'video/mp4');
		return $response;
	}

	#[NoAdminRequired]
	#[FrontpageRoute(verb: 'POST', url: '/api/queue/{videoId}')]
	public function queue(string $videoId): JSONResponse {
		if (!$this->service->rules()->isVideoAllowed($videoId)) {
			return new JSONResponse(['error' => 'Video ist nicht freigegeben.'], Http::STATUS_FORBIDDEN);
		}
		try {
			$this->service->queueFetch($videoId);
		} catch (MediaException $e) {
			return new JSONResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
		return new JSONResponse(['state' => $this->stateDetail($videoId, $this->service->state($videoId))]);
	}

	#[FrontpageRoute(verb: 'POST', url: '/api/allow/{videoId}')]
	public function allow(string $videoId): JSONResponse {
		try {
			$this->service->allowVideo($videoId);
		} catch (\OCP\Files\NotPermittedException) {
			return new JSONResponse(['error' => 'Nur Administratoren dürfen freigeben.'], Http::STATUS_FORBIDDEN);
		} catch (MediaException $e) {
			return new JSONResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
		return new JSONResponse(['allowed' => true]);
	}

	#[FrontpageRoute(verb: 'DELETE', url: '/api/allow/{videoId}')]
	public function unallow(string $videoId): JSONResponse {
		try {
			$this->service->removeVideo($videoId);
		} catch (\OCP\Files\NotPermittedException) {
			return new JSONResponse(['error' => 'Nur Administratoren dürfen entfernen.'], Http::STATUS_FORBIDDEN);
		}
		return new JSONResponse(['allowed' => false]);
	}

	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[FrontpageRoute(verb: 'GET', url: '/api/config')]
	public function getConfig(): JSONResponse {
		return new JSONResponse([
			'config' => $this->service->configArray(),
			'maySearch' => $this->service->rules()->maySearch(),
			'isAdmin' => $this->service->isAdmin(),
		]);
	}

	/**
	 * @param array{videos?: list<string>, channels?: list<string>, searchGroups?: list<string>, maxHeight?: int} $values
	 */
	#[FrontpageRoute(verb: 'PUT', url: '/api/config')]
	public function setConfig(array $values = []): JSONResponse {
		try {
			$this->service->saveConfig($values);
		} catch (\OCP\Files\NotPermittedException) {
			return new JSONResponse(['error' => 'Nur Administratoren dürfen konfigurieren.'], Http::STATUS_FORBIDDEN);
		}
		return new JSONResponse(['config' => $this->service->configArray()]);
	}

	private function applyStreamHeaders(Response $response, string $contentType): void {
		$response->addHeader('Content-Type', $contentType);
		$response->addHeader('Accept-Ranges', 'bytes');
		$response->addHeader('Cache-Control', 'private, max-age=3600');
	}

	private function fileResponse(ISimpleFile $file, string $contentType, int $cacheSeconds): FileDisplayResponse {
		return new FileDisplayResponse($file, Http::STATUS_OK, [
			'Content-Type' => $contentType,
			'Cache-Control' => 'private, max-age=' . $cacheSeconds,
		]);
	}

	private function mediaUrl(string $path): string {
		return rtrim($this->urlGenerator->linkToRoute(Application::APP_ID . '.page.index'), '/') . $path;
	}

	/**
	 * @return array{state: string, error?: string}
	 */
	private function stateDetail(string $videoId, string $state): array {
		return ['state' => $state];
	}
}
