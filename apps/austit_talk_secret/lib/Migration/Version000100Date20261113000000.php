<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitTalkSecret\Migration;

use Closure;
use OCA\AustitTalkSecret\Db\SecretStore;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Secret conversations and the files protected in them.
 */
class Version000100Date20261113000000 extends SimpleMigrationStep {
	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		$changed = false;

		if (!$schema->hasTable(SecretStore::TABLE_ROOMS)) {
			$table = $schema->createTable(SecretStore::TABLE_ROOMS);
			$table->addColumn('token', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('lease', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('created_by', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->setPrimaryKey(['token']);
			$changed = true;
		}

		if (!$schema->hasTable(SecretStore::TABLE_FILES)) {
			$table = $schema->createTable(SecretStore::TABLE_FILES);
			$table->addColumn('file_id', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('token', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('owner', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('file_key', Types::TEXT, ['notnull' => true]);
			$table->addColumn('expires_at', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->setPrimaryKey(['file_id']);
			$table->addIndex(['expires_at'], 'austit_ts_files_exp');
			$changed = true;
		}

		return $changed ? $schema : null;
	}
}
