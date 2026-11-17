<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Service;

use OCP\Security\ICrypto;

/**
 * Encrypts file contents with a key of their own (XSalsa20-Poly1305).
 * The key is only ever stored wrapped with the secret of this instance.
 */
class Cipher {
	/** Marks protected content, followed by the nonce and the ciphertext */
	public const MAGIC = "AUSTIT-GEHEIM-1\n";

	/** Bytes protected content is longer than its plain content */
	public const OVERHEAD = 16 + SODIUM_CRYPTO_SECRETBOX_NONCEBYTES + SODIUM_CRYPTO_SECRETBOX_MACBYTES;

	public function __construct(
		private ICrypto $crypto,
	) {
	}

	/**
	 * @return string a new key, wrapped for storage
	 */
	public function newKey(): string {
		return $this->crypto->encrypt(base64_encode(sodium_crypto_secretbox_keygen()));
	}

	public function encrypt(string $plain, string $wrappedKey): string {
		$nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
		return self::MAGIC . $nonce . sodium_crypto_secretbox($plain, $nonce, $this->unwrap($wrappedKey));
	}

	/**
	 * @throws \RuntimeException when the content is not protected content or was not encrypted with this key
	 */
	public function decrypt(string $content, string $wrappedKey): string {
		$header = strlen(self::MAGIC) + SODIUM_CRYPTO_SECRETBOX_NONCEBYTES;
		if (!str_starts_with($content, self::MAGIC) || strlen($content) < $header) {
			throw new \RuntimeException('Not protected content');
		}
		$nonce = substr($content, strlen(self::MAGIC), SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
		$plain = sodium_crypto_secretbox_open(substr($content, $header), $nonce, $this->unwrap($wrappedKey));
		if ($plain === false) {
			throw new \RuntimeException('Content cannot be decrypted with this key');
		}
		return $plain;
	}

	private function unwrap(string $wrappedKey): string {
		$key = base64_decode($this->crypto->decrypt($wrappedKey), true);
		if ($key === false || strlen($key) !== SODIUM_CRYPTO_SECRETBOX_KEYBYTES) {
			throw new \RuntimeException('Invalid key');
		}
		return $key;
	}
}
