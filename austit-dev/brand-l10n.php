<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Writes theme translation overrides that replace the Nextcloud brand name in
 * every translated string of core, lib and all apps (including custom_apps).
 *
 * - PHP side: themes/<theme>/<path>/l10n/<lang>.json, merged on top of the original.
 * - JS side:  themes/<theme>/<app>/l10n/<lang>.js, a full copy that replaces the original.
 *
 * The output is generated, not versioned. Run it again after every core or app update:
 *   php austit-dev/brand-l10n.php [server root] [theme]
 */

const LANGUAGES = ['de', 'de_DE'];

/** Ordered: specific product names first, the plain name last. */
const REPLACEMENTS = [
	'Nextcloud Talk' => 'Talk',
	'Nextcloud Office' => 'Office',
	'Nextcloud Hub' => 'austit Cloud',
	'Nextcloud-' => 'austit-',
	'Nextcloud' => 'austit Cloud',
];

function brand(string $text): string {
	return strtr($text, REPLACEMENTS);
}

/**
 * @param array<string, string|list<string>> $translations
 * @return array<string, string|list<string>>
 */
function brandAll(array $translations): array {
	return array_map(static fn ($value) => is_array($value) ? array_map('brand', $value) : brand($value), $translations);
}

function writeFile(string $path, string $content): void {
	if (!is_dir(dirname($path))) {
		mkdir(dirname($path), 0755, true);
	}
	file_put_contents($path, $content);
}

$root = rtrim($argv[1] ?? dirname(__DIR__), '/\\');
$theme = $argv[2] ?? 'austit';
$themeRoot = $root . '/themes/' . $theme;

$l10nDirs = array_merge(
	[$root . '/core/l10n', $root . '/lib/l10n'],
	glob($root . '/apps/*/l10n', GLOB_ONLYDIR) ?: [],
	glob($root . '/custom_apps/*/l10n', GLOB_ONLYDIR) ?: [],
);

$written = 0;
foreach ($l10nDirs as $dir) {
	// core/l10n -> "core/l10n", apps/files/l10n -> "apps/files/l10n"
	$relativeDir = substr($dir, strlen($root) + 1);
	$parts = explode('/', $relativeDir);
	$appId = $parts[0] === 'core' || $parts[0] === 'lib' ? $parts[0] : $parts[1];

	foreach (LANGUAGES as $lang) {
		$jsonFile = $dir . '/' . $lang . '.json';
		if (!is_file($jsonFile)) {
			continue;
		}
		$data = json_decode((string)file_get_contents($jsonFile), true);
		if (!is_array($data) || !is_array($data['translations'] ?? null)) {
			continue;
		}

		$branded = brandAll($data['translations']);
		$changed = array_filter($branded, static fn ($value, $key) => $value !== $data['translations'][$key], ARRAY_FILTER_USE_BOTH);
		if ($changed === []) {
			continue;
		}

		writeFile(
			$themeRoot . '/' . $relativeDir . '/' . $lang . '.json',
			json_encode(['translations' => $changed, 'pluralForm' => $data['pluralForm'] ?? ''], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n",
		);

		if ($appId !== 'lib' && is_file($dir . '/' . $lang . '.js')) {
			$js = 'OC.L10N.register(' . json_encode($appId) . ', '
				. json_encode($branded, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ', '
				. json_encode($data['pluralForm'] ?? '') . ");\n";
			writeFile($themeRoot . '/' . $appId . '/l10n/' . $lang . '.js', $js);
		}
		$written++;
	}
}

echo "$written Übersetzungsdateien mit Markenersetzung nach $themeRoot geschrieben\n";
