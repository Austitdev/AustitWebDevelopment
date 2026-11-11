<?php

// Zusatzkonfiguration nur fuer die lokale Dev-Instanz (wird als config/dev.config.php eingebunden).
$CONFIG = [
	'debug' => true,
	'theme' => 'austit',
	'loglevel' => 0,
	// Windows-Bind-Mounts melden immer 0777, daher die Rechtepruefung abschalten.
	'check_data_directory_permissions' => false,
	'apps_paths' => [
		['path' => '/var/www/html/apps', 'url' => '/apps', 'writable' => false],
		['path' => '/var/www/html/custom_apps', 'url' => '/custom_apps', 'writable' => true],
	],
];
