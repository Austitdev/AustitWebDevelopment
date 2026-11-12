<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var array $_ */

\OCP\Util::addScript('austit_updates', 'admin');
\OCP\Util::addStyle('austit_updates', 'admin');

$manifest = $_['manifest'];
?>
<div id="austit-updates" class="section"
	data-releases-url="<?php p($_['releasesUrl']); ?>"
	data-analyze-url="<?php p($_['analyzeUrl']); ?>">
	<h2>Manuelle Updates</h2>
	<p class="settings-hint">
		Die austit Cloud sucht nicht automatisch nach Updates. Hier kannst du gezielt prüfen, ob es eine neue
		Nextcloud-Version gibt und welche angepassten Dateien davon betroffen sind. Installiert wird hier nichts:
		Das Update selbst läuft über das Git-Repository und das Docker-Image.
	</p>

	<dl class="austit-updates__status">
		<dt>Installierte Version</dt>
		<dd><strong><?php p($_['installedVersion']); ?></strong></dd>

		<dt>Automatische Update-Prüfung</dt>
		<dd>
			<?php if ($_['updateCheckerEnabled']): ?>
				<span class="austit-badge austit-badge--warn">aktiv</span> – <code>updatechecker</code> in der Konfiguration auf <code>false</code> setzen
			<?php else: ?>
				<span class="austit-badge austit-badge--ok">aus</span>
			<?php endif; ?>
		</dd>

		<dt>Web-Updater</dt>
		<dd>
			<?php if ($_['webUpdaterEnabled']): ?>
				<span class="austit-badge austit-badge--warn">aktiv</span> – würde austit-Anpassungen überschreiben, <code>upgrade.disable-web</code> setzen
			<?php else: ?>
				<span class="austit-badge austit-badge--ok">gesperrt</span>
			<?php endif; ?>
		</dd>

		<dt>Gesperrte App-Updates</dt>
		<dd>
			<?php if ($_['blockedApps'] === []): ?>
				keine
			<?php else: ?>
				<?php foreach ($_['blockedApps'] as $app): ?>
					<span class="austit-badge"><?php p($app); ?></span>
				<?php endforeach; ?>
			<?php endif; ?>
		</dd>

		<dt>Änderungs-Manifest</dt>
		<dd>
			<?php if ($manifest === null): ?>
				<span class="austit-badge austit-badge--error">fehlt</span> <?php p($_['manifestError']); ?>
			<?php else: ?>
				<?php p((string)count($manifest['files'])); ?> angepasste Upstream-Dateien, Basis <?php p($manifest['baseVersion']); ?>
				<?php if ($manifest['baseVersion'] !== $_['installedVersion']): ?>
					<span class="austit-badge austit-badge--warn">veraltet</span>
				<?php endif; ?>
			<?php endif; ?>
		</dd>
	</dl>

	<div class="austit-updates__actions">
		<button type="button" class="button primary" id="austit-updates-check">Nach Updates suchen</button>
		<label class="austit-updates__checkbox">
			<input type="checkbox" id="austit-updates-prereleases">
			Vorabversionen anzeigen
		</label>
	</div>

	<div id="austit-updates-message" class="austit-updates__message" role="status" aria-live="polite" hidden></div>
	<div id="austit-updates-releases" hidden></div>
	<div id="austit-updates-confirm" class="austit-updates__confirm" hidden></div>
	<div id="austit-updates-result" hidden></div>
</div>
