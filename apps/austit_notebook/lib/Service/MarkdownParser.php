<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Service;

/**
 * Wandelt Markdown (z. B. aus einem OneNote-Export des onenote-md-exporters)
 * in TipTap-Dokumentknoten der Notizbuch-Seiten um.
 *
 * Unterstuetzt: Ueberschriften, Absaetze, ungeordnete und geordnete Listen,
 * Zitate, Code-Bloecke, Trennlinien sowie Hervorhebungen (fett, kursiv,
 * durchgestrichen, Code). Eingebettete Bilder (![alt](pfad)) werden gesondert
 * gemeldet, damit der Import sie neben die Seite legen kann.
 */
class MarkdownParser {
	/**
	 * @return array{blocks: list<array<string, mixed>>, images: list<array{alt: string, link: string}>}
	 */
	public function parse(string $markdown): array {
		$blocks = [];
		$images = [];
		$markdown = str_replace(["\r\n", "\r"], "\n", $markdown);
		$lines = explode("\n", $markdown);
		$paragraphLines = [];

		$flushParagraph = function () use (&$paragraphLines, &$blocks): void {
			if ($paragraphLines === []) {
				return;
			}
			$blocks[] = [
				'type' => 'paragraph',
				'content' => $this->inline(trim(implode(' ', $paragraphLines))),
			];
			$paragraphLines = [];
		};

		$lineCount = count($lines);
		for ($i = 0; $i < $lineCount; $i++) {
			$line = trim($lines[$i]);

			if ($line === '') {
				$flushParagraph();
				continue;
			}

			// Bilder in eigener Zeile
			if (preg_match('/^!\[([^\]]*)\]\(([^)]+)\)$/', $line, $m) === 1) {
				$flushParagraph();
				$images[] = ['alt' => $m[1], 'link' => $m[2]];
				continue;
			}

			// Code-Block
			if (str_starts_with($line, '```')) {
				$flushParagraph();
				$code = [];
				for ($i++; $i < $lineCount; $i++) {
					if (str_starts_with(trim($lines[$i]), '```')) {
						break;
					}
					$code[] = $lines[$i];
				}
				$blocks[] = [
					'type' => 'codeBlock',
					'content' => [['type' => 'text', 'text' => implode("\n", $code)]],
				];
				continue;
			}

			// Trennlinie
			if (preg_match('/^(-{3,}|\*{3,})$/', $line) === 1) {
				$flushParagraph();
				$blocks[] = ['type' => 'horizontalRule'];
				continue;
			}

			// Ueberschrift
			if (preg_match('/^(#{1,6})\s+(.+)$/', $line, $m) === 1) {
				$flushParagraph();
				$blocks[] = [
					'type' => 'heading',
					'attrs' => ['level' => strlen($m[1])],
					'content' => $this->inline($m[2]),
				];
				continue;
			}

			// Zitat
			if (str_starts_with($line, '> ')) {
				$flushParagraph();
				$quote = [];
				while ($i < $lineCount && str_starts_with(trim($lines[$i]), '> ')) {
					$quote[] = substr(trim($lines[$i]), 2);
					$i++;
				}
				$i--;
				$blocks[] = [
					'type' => 'blockquote',
					'content' => [[
						'type' => 'paragraph',
						'content' => $this->inline(trim(implode(' ', $quote))),
					]],
				];
				continue;
			}

			// Ungeordnete Liste
			if (preg_match('/^[-*]\s+(.+)$/', $line, $m) === 1) {
				$flushParagraph();
				$items = [];
				while ($i < $lineCount && preg_match('/^[-*]\s+(.+)$/', trim($lines[$i]), $m) === 1) {
					$items[] = $m[1];
					$i++;
				}
				$i--;
				$blocks[] = [
					'type' => 'bulletList',
					'content' => array_map(
						fn (string $item): array => [
							'type' => 'listItem',
							'content' => [['type' => 'paragraph', 'content' => $this->inline($item)]],
						],
						$items
					),
				];
				continue;
			}

			// Geordnete Liste
			if (preg_match('/^\d+[.)]\s+(.+)$/', $line, $m) === 1) {
				$flushParagraph();
				$items = [];
				while ($i < $lineCount && preg_match('/^\d+[.)]\s+(.+)$/', trim($lines[$i]), $m) === 1) {
					$items[] = $m[1];
					$i++;
				}
				$i--;
				$blocks[] = [
					'type' => 'orderedList',
					'attrs' => ['start' => 1],
					'content' => array_map(
						fn (string $item): array => [
							'type' => 'listItem',
							'content' => [['type' => 'paragraph', 'content' => $this->inline($item)]],
						],
						$items
					),
				];
				continue;
			}

			$paragraphLines[] = $line;
		}
		$flushParagraph();

		return ['blocks' => $blocks, 'images' => $images];
	}

	/**
	 * Zerlegt eine Zeile in Textknoten mit Hervorhebungen.
	 *
	 * @return list<array<string, mixed>>
	 */
	private function inline(string $text): array {
		$text = trim($text);
		if ($text === '') {
			return [];
		}

		$pattern = '/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|~~[^~]+~~|`[^`]+`|\[[^\]]+\]\([^)]+\))/';
		$parts = preg_split($pattern, $text, -1, PREG_SPLIT_DELIM_CAPTURE);
		if ($parts === false) {
			return [['type' => 'text', 'text' => $text]];
		}

		$nodes = [];
		foreach ($parts as $part) {
			if ($part === '') {
				continue;
			}
			if (str_starts_with($part, '**') && str_ends_with($part, '**')) {
				$nodes[] = [
					'type' => 'text',
					'text' => substr($part, 2, -2),
					'marks' => [['type' => 'bold']],
				];
				continue;
			}
			if (str_starts_with($part, '~~') && str_ends_with($part, '~~')) {
				$nodes[] = [
					'type' => 'text',
					'text' => substr($part, 2, -2),
					'marks' => [['type' => 'strike']],
				];
				continue;
			}
			if (str_starts_with($part, '`')) {
				$nodes[] = [
					'type' => 'text',
					'text' => substr($part, 1, -1),
					'marks' => [['type' => 'code']],
				];
				continue;
			}
			if (preg_match('/^\*([^*]+)\*$/', $part, $m) === 1) {
				$nodes[] = [
					'type' => 'text',
					'text' => $m[1],
					'marks' => [['type' => 'italic']],
				];
				continue;
			}
			if (preg_match('/^\[([^\]]*)\]\(([^)]+)\)$/', $part, $m) === 1) {
				$nodes[] = ['type' => 'text', 'text' => $m[1] !== '' ? $m[1] : $m[2]];
				continue;
			}
			$nodes[] = ['type' => 'text', 'text' => $part];
		}

		return $nodes;
	}
}
