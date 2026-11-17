<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalk\Migration;

use Closure;
use OCA\AustitTalk\Db\SecretStore;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Tracks whether the content of a protected file is already encrypted.
 */
class Version000101Date20261113000001 extends SimpleMigrationStep {
	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable(SecretStore::TABLE_FILES);
		if ($table->hasColumn('encrypted')) {
			return null;
		}

		$table->addColumn('encrypted', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
		$table->addIndex(['encrypted'], 'austit_ts_files_enc');
		return $schema;
	}
}
