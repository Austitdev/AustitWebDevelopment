<?php

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Feste Konfiguration der austit Cloud (lokal und auf dem VPS als config/austit.config.php eingebunden).
// Updates laufen ausschliesslich manuell ueber Einstellungen > Verwaltung > Updates.
$CONFIG = [
	'theme' => 'austit',
	'default_language' => 'de',
	'default_locale' => 'de_DE',
	// Keine Update-Pruefung bei updates.nextcloud.com, keine Update-Hinweise.
	'updatechecker' => false,
	// Der Web-Updater wuerde die austit-Anpassungen mit dem Original ueberschreiben.
	'upgrade.disable-web' => true,
	// Kein Nextcloud App Store: der Apps-Katalog bleibt leer, der Link wird
	// ausgeblendet und die Update-Benachrichtigung fragt keine App-Versionen ab.
	// Apps (auch Mail, Calendar, Social Login, TOTP) werden ausschliesslich
	// ueber den eigenen austit_store aus den Austit-Repositories verwaltet.
	'appstoreenabled' => false,
	// Apps, die weder im App Store noch bei "occ upgrade" aktualisiert werden.
	// Talk (spreed) bleibt fest, weil das Backend durch eine eigene Implementierung ersetzt wird.
	'app_update_blocklist' => [
		'spreed',
	],
];
