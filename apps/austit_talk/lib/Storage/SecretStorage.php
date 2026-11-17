<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Storage;

use OC\Files\Cache\FailedCache;
use OC\Files\Storage\Wrapper\Wrapper;
use OCA\AustitTalk\Db\SecretStore;
use OCA\AustitTalk\Service\Cipher;
use OCA\AustitTalk\Service\SecretAccess;
use OCA\Files_Sharing\SharedStorage;
use OCP\Files\Cache\ICache;
use OCP\Files\Cache\ICacheEntry;
use OCP\Files\Storage\IStorage;
use Psr\Log\LoggerInterface;

class SecretStorage extends Wrapper {
	private ?bool $nested = null;

	public function __construct(
		array $parameters,
		private SecretStore $secretStore,
		private Cipher $cipher,
		private SecretAccess $access,
		private LoggerInterface $logger,
	) {
		parent::__construct($parameters);
	}

	#[\Override]
	public function getCache(string $path = '', ?IStorage $storage = null): ICache {
		$shared = $this->getInstanceOfStorage(SharedStorage::class);
		$secret = $shared === null ? null : $this->secretStore->getFile($shared->getShare()->getNodeId());
		if ($secret !== null && !$this->access->allows($secret)) {
			// The share of a hidden file cannot find its source and would show an empty folder instead
			return new FailedCache(false);
		}

		$cache = parent::getCache($path, $storage ?? $this);
		return new SecretCache($cache, $this->secretStore, $this->access, !$this->isNested());
	}

	#[\Override]
	public function isSharable(string $path): bool {
		if ($this->getSecretFile($path) !== null) {
			return false;
		}
		return parent::isSharable($path);
	}

	#[\Override]
	public function file_get_contents(string $path): string|false {
		$secret = $this->getSecretFile($path);
		if ($secret === null) {
			return parent::file_get_contents($path);
		}

		if (!$this->access->allows($secret)) {
			return false;
		}

		$raw = parent::file_get_contents($path);
		if ($raw === false) {
			return false;
		}

		if (str_starts_with($raw, Cipher::MAGIC)) {
			try {
				return $this->cipher->decrypt($raw, $secret['key']);
			} catch (\Throwable $e) {
				$this->logger->warning('Failed to decrypt secret file: ' . $e->getMessage());
				return false;
			}
		}

		return $raw;
	}

	#[\Override]
	public function fopen(string $path, string $mode) {
		$secret = $this->getSecretFile($path);
		if ($secret === null) {
			return parent::fopen($path, $mode);
		}

		if (!$this->access->allows($secret)) {
			return false;
		}

		if (str_contains($mode, 'r')) {
			$content = $this->file_get_contents($path);
			if ($content === false) {
				return false;
			}
			$stream = fopen('php://temp', 'r+b');
			fwrite($stream, $content);
			rewind($stream);
			return $stream;
		}

		return parent::fopen($path, $mode);
	}

	#[\Override]
	public function filesize(string $path): int|false {
		$secret = $this->getSecretFile($path);
		if ($secret === null) {
			return parent::filesize($path);
		}

		if (!$this->access->allows($secret)) {
			return false;
		}

		$rawSize = parent::filesize($path);
		if ($rawSize === false) {
			return false;
		}

		return $secret['encrypted'] && !$this->isNested() ? max(0, $rawSize - Cipher::OVERHEAD) : $rawSize;
	}

	#[\Override]
	public function unlink(string $path): bool {
		$secret = $this->getSecretFile($path);
		$result = parent::unlink($path);
		if ($result && $secret !== null) {
			$this->secretStore->removeFile($secret['fileId']);
		}
		return $result;
	}

	/**
	 * A shared storage sits on top of the storage of the owner, which already decrypts the file
	 * and reports its plain size.
	 */
	private function isNested(): bool {
		return $this->nested ??= $this->getWrapperStorage()->instanceOfStorage(self::class) === true;
	}

	/**
	 * @return array{fileId: int, token: string, owner: string, key: string, expiresAt: int, encrypted: bool}|null
	 */
	private function getSecretFile(string $path): ?array {
		try {
			$entry = parent::getCache($path)->get($path);
			if ($entry instanceof ICacheEntry) {
				return $this->secretStore->getFile((int)$entry->getId());
			}
		} catch (\Throwable) {
			// Cache not ready or lookup failed
		}
		return null;
	}
}
