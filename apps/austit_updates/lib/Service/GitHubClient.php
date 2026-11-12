<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitUpdates\Service;

use OCP\Http\Client\IClientService;
use OCP\IConfig;

/**
 * Read-only access to the upstream nextcloud/server repository on GitHub.
 */
class GitHubClient {
	public const REPOSITORY = 'nextcloud/server';
	private const API_URL = 'https://api.github.com/repos/' . self::REPOSITORY;
	private const RAW_URL = 'https://raw.githubusercontent.com/' . self::REPOSITORY;

	public function __construct(
		private IClientService $clientService,
		private IConfig $config,
	) {
	}

	/**
	 * @return array<mixed>
	 * @throws UpstreamException
	 */
	public function getJson(string $path): array {
		$headers = [
			'Accept' => 'application/vnd.github+json',
			'User-Agent' => 'austit-cloud-updates',
		];
		$token = $this->config->getSystemValueString('austit_updates.github_token', '');
		if ($token !== '') {
			$headers['Authorization'] = 'Bearer ' . $token;
		}

		[$status, $body] = $this->request(self::API_URL . $path, $headers);
		if ($status !== 200) {
			throw new UpstreamException('GitHub API antwortete mit HTTP ' . $status . ' für ' . $path);
		}
		$data = json_decode($body, true);
		if (!is_array($data)) {
			throw new UpstreamException('Ungültige Antwort der GitHub API für ' . $path);
		}
		return $data;
	}

	/**
	 * Returns the raw content of a file at a tag, or null if the file does not exist there.
	 *
	 * @throws UpstreamException
	 */
	public function getRawFile(string $tag, string $path): ?string {
		$encodedPath = implode('/', array_map('rawurlencode', explode('/', $path)));
		[$status, $body] = $this->request(
			self::RAW_URL . '/' . rawurlencode($tag) . '/' . $encodedPath,
			['User-Agent' => 'austit-cloud-updates'],
		);
		if ($status === 404) {
			return null;
		}
		if ($status !== 200) {
			throw new UpstreamException('GitHub antwortete mit HTTP ' . $status . ' für ' . $path);
		}
		return $body;
	}

	/**
	 * @param array<string, string> $headers
	 * @return array{0: int, 1: string}
	 * @throws UpstreamException
	 */
	private function request(string $url, array $headers): array {
		try {
			$response = $this->clientService->newClient()->get($url, [
				'headers' => $headers,
				'timeout' => 20,
				'http_errors' => false,
			]);
		} catch (\Exception $e) {
			throw new UpstreamException('GitHub ist nicht erreichbar: ' . $e->getMessage(), 0, $e);
		}
		return [$response->getStatusCode(), (string)$response->getBody()];
	}
}
