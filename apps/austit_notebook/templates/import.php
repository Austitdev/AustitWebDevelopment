<?php

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var array $_ */ ?>
<div id="austit-notebook-import" class="section"
	data-api-base="<?php p($_['apiBase'] ?? ''); ?>"
	data-app-base="<?php p($_['appBase'] ?? ''); ?>">
	<h2>Notizbuch importieren</h2>

	<section class="anb-import-card">
		<h3>OneNote-Export importieren</h3>
		<p class="anb-import-hint">
			Du exportierst ein OneNote-Notizbuch z. B. mit dem
			<a href="https://github.com/alxnbl/onenote-md-exporter" target="_blank" rel="noreferrer">onenote-md-exporter</a>
			als ZIP aus Markdown-Dateien mit Bildern. Jede Markdown-Datei wird
			zu einer Seite, die Verzeichnisse im Archiv zu Abschnitten.
		</p>
		<div class="anb-import-grid">
			<label>Name des neuen Notizbuchs
				<input type="text" id="anb-notebook-name" placeholder="z. B. Schule – OneNote" />
			</label>
			<label>ZIP-Datei (Markdown-Export)
				<input type="file" id="anb-zip" accept=".zip,application/zip" />
			</label>
		</div>
		<div class="anb-import-actions">
			<button type="button" class="primary" id="anb-import-start">Importieren</button>
			<a class="button" href="<?php p($_['appBase'] ?? ''); ?>">Zurück zu den Notizbüchern</a>
		</div>
		<p id="anb-import-msg" class="anb-import-msg"></p>
	</section>
</div>
