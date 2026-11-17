<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Tests\Unit\Service;

use OCA\AustitTalk\Service\Cipher;
use OCP\Security\ICrypto;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class CipherTest extends TestCase {
	private ICrypto&MockObject $crypto;
	private Cipher $cipher;

	protected function setUp(): void {
		parent::setUp();
		$this->crypto = $this->createMock(ICrypto::class);
		// Simple simulated envelope encryption for mock
		$this->crypto->method('encrypt')
			->willReturnCallback(static fn (string $plain): string => 'wrapped:' . $plain);
		$this->crypto->method('decrypt')
			->willReturnCallback(static fn (string $wrapped): string => str_starts_with($wrapped, 'wrapped:') ? substr($wrapped, 8) : throw new \Exception('Invalid'));

		$this->cipher = new Cipher($this->crypto);
	}

	public function testEncryptAndDecryptRoundTrip(): void {
		$wrappedKey = $this->cipher->newKey();
		$this->assertNotEmpty($wrappedKey);

		$plain = 'Secret image binary data 123456';
		$encrypted = $this->cipher->encrypt($plain, $wrappedKey);

		$this->assertNotSame($plain, $encrypted);
		$this->assertStringStartsWith(Cipher::MAGIC, $encrypted);

		$decrypted = $this->cipher->decrypt($encrypted, $wrappedKey);
		$this->assertSame($plain, $decrypted);
	}

	public function testDecryptRejectsNonProtectedContent(): void {
		$wrappedKey = $this->cipher->newKey();
		$this->expectException(\RuntimeException::class);
		$this->expectExceptionMessage('Not protected content');
		$this->cipher->decrypt('Just some plain text', $wrappedKey);
	}

	public function testDecryptRejectsDifferentKey(): void {
		$key1 = $this->cipher->newKey();
		$key2 = $this->cipher->newKey();

		$plain = 'Classified content';
		$encrypted = $this->cipher->encrypt($plain, $key1);

		$this->expectException(\RuntimeException::class);
		$this->cipher->decrypt($encrypted, $key2);
	}
}
