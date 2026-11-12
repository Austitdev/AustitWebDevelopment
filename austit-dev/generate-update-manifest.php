<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generates apps/austit_updates/update-manifest.json: every upstream file that the
 * austit Cloud modifies, deletes or overrides via the theme, together with the
 * SHA-256 of the upstream original.
 *
 * Usage: php austit-dev/generate-update-manifest.php [--base=<git ref of the upstream import>]
 */

$root = dirname(__DIR__);
$themePrefix = 'themes/austit/';
$output = $root . '/apps/austit_updates/update-manifest.json';

/**
 * @return string stdout of the git command
 */
function git(string $root, array $args): string {
	$process = proc_open(
		array_merge(['git', '-C', $root, '-c', 'core.quotepath=off'], $args),
		[1 => ['pipe', 'w'], 2 => ['pipe', 'w']],
		$pipes,
	);
	if (!is_resource($process)) {
		fwrite(STDERR, "git konnte nicht gestartet werden\n");
		exit(1);
	}
	$stdout = stream_get_contents($pipes[1]);
	$stderr = stream_get_contents($pipes[2]);
	if (proc_close($process) !== 0) {
		fwrite(STDERR, 'git ' . implode(' ', $args) . " fehlgeschlagen:\n" . $stderr);
		exit(1);
	}
	return $stdout;
}

function blobExists(string $root, string $ref, string $path): bool {
	exec('git -C ' . escapeshellarg($root) . ' cat-file -e ' . escapeshellarg($ref . ':' . $path) . ' 2>' . (PHP_OS_FAMILY === 'Windows' ? 'NUL' : '/dev/null'), $unused, $code);
	return $code === 0;
}

$OC_VersionString = '';
require $root . '/version.php';
$version = $OC_VersionString;

$options = getopt('', ['base:']);
$base = $options['base'] ?? trim(git($root, ['log', '--format=%H', '-n', '1', '--fixed-strings', '--grep=Nextcloud ' . $version . ' (upstream', 'HEAD']));
if ($base === '') {
	fwrite(STDERR, "Upstream-Import fuer $version nicht gefunden, bitte --base=<ref> angeben.\n");
	exit(1);
}

$files = [];
$diff = git($root, ['diff', '--name-status', '--no-renames', '-z', $base]);
$parts = explode("\0", rtrim($diff, "\0"));
for ($i = 0; $i + 1 < count($parts); $i += 2) {
	[$status, $path] = [$parts[$i], $parts[$i + 1]];

	if ($status === 'M' || $status === 'D') {
		$files[] = [
			'path' => $path,
			'kind' => $status === 'M' ? 'modified' : 'deleted',
			'sha256' => hash('sha256', git($root, ['cat-file', 'blob', $base . ':' . $path])),
		];
	} elseif ($status === 'A' && str_starts_with($path, $themePrefix)) {
		$original = substr($path, strlen($themePrefix));
		if (blobExists($root, $base, $original)) {
			$files[] = [
				'path' => $original,
				'kind' => 'theme-override',
				'sha256' => hash('sha256', git($root, ['cat-file', 'blob', $base . ':' . $original])),
				'source' => $path,
			];
		}
	}
}

usort($files, static fn (array $a, array $b): int => strcmp($a['path'], $b['path']));

$manifest = [
	'baseVersion' => $version,
	'upstreamTag' => 'v' . $version,
	'generatedAt' => gmdate('c'),
	'files' => $files,
];
file_put_contents($output, json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
echo count($files) . ' Dateien in ' . $output . " geschrieben (Basis $version, " . substr($base, 0, 12) . ")\n";
