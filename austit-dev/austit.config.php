<?php

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Feste Konfiguration der austit Cloud (lokal und auf dem VPS als config/austit.config.php eingebunden).
// Updates laufen ausschliesslich manuell ueber Einstellungen > Verwaltung > Updates.
$CONFIG = [
	'theme' => 'austit',
	// Keine Update-Pruefung bei updates.nextcloud.com, keine Update-Hinweise.
	'updatechecker' => false,
	// Der Web-Updater wuerde die austit-Anpassungen mit dem Original ueberschreiben.
	'upgrade.disable-web' => true,
	// Apps, die weder im App Store noch bei "occ upgrade" aktualisiert werden.
	// Talk (spreed) bleibt fest, weil das Backend durch eine eigene Implementierung ersetzt wird.
	'app_update_blocklist' => [
		'spreed',
	],
];
