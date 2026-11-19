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
	// Apps, die nicht aus dem Nextcloud App Store aktualisiert werden.
	// Standard-Apps ohne Customizing (Mail, Calendar, Social Login, TOTP)
	// erhalten ganz normale App-Store-Updates; alle eigenentwickelten Apps
	// (Talk/Spreed samt Austit-Anpassungen, Austit-Apps, austit_store,
	// austit_tickets, esign) bleiben fest und werden ueber den eigenen
	// austit_store bzw. manuell aktualisiert.
	'app_update_blocklist' => [
		'spreed',
		'austit_talk',
		'austit_notebook',
		'austit_medien',
		'austit_shell',
		'austit_updates',
		'austit_store',
		'austit_tickets',
		'esign',
	],
];
