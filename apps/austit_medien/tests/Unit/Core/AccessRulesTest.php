<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Tests\Unit\Core;

use OCA\AustitMedien\Core\AccessRules;
use Test\TestCase;

class AccessRulesTest extends TestCase {
	public function testMaySearchForAdmin(): void {
		$rules = new AccessRules([], [], true);
		$this->assertTrue($rules->maySearch());
		$this->assertTrue($rules->mayManage());
	}

	public function testMaySearchForConfiguredGroup(): void {
		$rules = new AccessRules(['searchGroups' => ['lehrkraefte']], ['schueler', 'lehrkraefte'], false);
		$this->assertTrue($rules->maySearch());
		$this->assertFalse($rules->mayManage());
	}

	public function testMaySearchDeniedForOtherGroups(): void {
		$rules = new AccessRules(['searchGroups' => ['lehrkraefte']], ['schueler'], false);
		$this->assertFalse($rules->maySearch());
	}

	public function testMaySearchAllowedForEveryoneWithoutConfig(): void {
		$rules = new AccessRules([], ['schueler'], false);
		$this->assertTrue($rules->maySearch());
	}

	public function testVideoAllowedFromList(): void {
		$rules = new AccessRules(['videos' => ['aaaaaaaaaaa']], [], false);
		$this->assertTrue($rules->isVideoAllowed('aaaaaaaaaaa'));
		$this->assertFalse($rules->isVideoAllowed('bbbbbbbbbbb'));
	}

	public function testVideoAllowedFromChannel(): void {
		$rules = new AccessRules(['channels' => ['UCkanal']], [], false);
		$this->assertTrue($rules->isVideoAllowed('aaaaaaaaaaa', 'UCkanal'));
		$this->assertFalse($rules->isVideoAllowed('aaaaaaaaaaa', 'UCandere'));
		$this->assertFalse($rules->isVideoAllowed('aaaaaaaaaaa'));
	}
}
