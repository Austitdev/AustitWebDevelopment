<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Storage;

use OC\Files\Cache\Wrapper\CacheWrapper;
use OCA\AustitTalkSecret\Db\SecretStore;
use OCA\AustitTalkSecret\Service\Cipher;
use OCA\AustitTalkSecret\Service\SecretAccess;
use OCP\Files\Cache\ICache;

/**
 * Leaves protected files out of every listing, search and lookup outside of the chat
 * and reports their size without the encryption overhead inside of it.
 */
class SecretCache extends CacheWrapper {
	public function __construct(
		ICache $cache,
		private SecretStore $secretStore,
		private SecretAccess $access,
		private bool $adjustSize = true,
	) {
		parent::__construct($cache);
	}

	#[\Override]
	protected function formatCacheEntry($entry) {
		$secret = $this->secretStore->getFile((int)$entry->getId());
		if ($secret === null) {
			return $entry;
		}
		if (!$this->access->allows($secret)) {
			return false;
		}
		if ($secret['encrypted'] && $this->adjustSize) {
			$entry['size'] = max(0, $entry['size'] - Cipher::OVERHEAD);
		}
		return $entry;
	}
}
