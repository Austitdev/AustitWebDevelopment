<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Migration;

use Closure;
use OCA\AustitNotebook\Db\SyncStore;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Update log and presence for editing a page together.
 */
class Version000300Date20261113000000 extends SimpleMigrationStep {
	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		$changed = false;

		if (!$schema->hasTable(SyncStore::TABLE_UPDATES)) {
			$table = $schema->createTable(SyncStore::TABLE_UPDATES);
			$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('page_id', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('seq', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('epoch', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('session', Types::STRING, ['notnull' => true, 'length' => 32, 'default' => '']);
			$table->addColumn('data', Types::TEXT, ['notnull' => true]);
			$table->setPrimaryKey(['id']);
			$table->addUniqueIndex(['page_id', 'seq'], 'austit_nb_sync_seq');
			$changed = true;
		}

		if (!$schema->hasTable(SyncStore::TABLE_PRESENCE)) {
			$table = $schema->createTable(SyncStore::TABLE_PRESENCE);
			$table->addColumn('session', Types::STRING, ['notnull' => true, 'length' => 32]);
			$table->addColumn('page_id', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('last_seen', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('state', Types::STRING, ['notnull' => true, 'length' => 255, 'default' => '']);
			$table->setPrimaryKey(['session']);
			$table->addIndex(['page_id', 'last_seen'], 'austit_nb_pres_page');
			$changed = true;
		}

		return $changed ? $schema : null;
	}
}
