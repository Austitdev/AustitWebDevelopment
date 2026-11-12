<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Migration;

use Closure;
use OCA\AustitNotebook\Db\ClassNotebookStore;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Class notebooks and their members.
 */
class Version000200Date20261112000000 extends SimpleMigrationStep {
	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		$changed = false;

		if (!$schema->hasTable(ClassNotebookStore::TABLE_CLASSES)) {
			$table = $schema->createTable(ClassNotebookStore::TABLE_CLASSES);
			$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('owner', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('folder_id', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('created_at', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->setPrimaryKey(['id']);
			$table->addUniqueIndex(['folder_id'], 'austit_nb_cls_folder');
			$table->addIndex(['owner'], 'austit_nb_cls_owner');
			$changed = true;
		}

		if (!$schema->hasTable(ClassNotebookStore::TABLE_MEMBERS)) {
			$table = $schema->createTable(ClassNotebookStore::TABLE_MEMBERS);
			$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('class_id', Types::BIGINT, ['notnull' => true, 'length' => 20, 'unsigned' => true]);
			$table->addColumn('member_type', Types::STRING, ['notnull' => true, 'length' => 8]);
			$table->addColumn('member_id', Types::STRING, ['notnull' => true, 'length' => 255]);
			$table->addColumn('role', Types::STRING, ['notnull' => true, 'length' => 16]);
			$table->setPrimaryKey(['id']);
			$table->addUniqueIndex(['class_id', 'member_type', 'member_id'], 'austit_nb_mem_uniq');
			$table->addIndex(['member_type', 'member_id'], 'austit_nb_mem_member');
			$changed = true;
		}

		return $changed ? $schema : null;
	}
}
