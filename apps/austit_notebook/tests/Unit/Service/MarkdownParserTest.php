<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitNotebook\Tests\Unit\Service;

use OCA\AustitNotebook\Service\MarkdownParser;
use Test\TestCase;

class MarkdownParserTest extends TestCase {
	private MarkdownParser $parser;

	protected function setUp(): void {
		parent::setUp();
		$this->parser = new MarkdownParser();
	}

	public function testEmptyInput(): void {
		$result = $this->parser->parse('');
		$this->assertSame([], $result['blocks']);
		$this->assertSame([], $result['images']);
	}

	public function testHeadingsAndParagraphs(): void {
		$result = $this->parser->parse("# Titel\n\nEin Absatz mit **fettem** Text.\n\nNoch ein Absatz.");
		$this->assertCount(3, $result['blocks']);
		$this->assertSame('heading', $result['blocks'][0]['type']);
		$this->assertSame(1, $result['blocks'][0]['attrs']['level']);
		$this->assertSame(['type' => 'text', 'text' => 'Ein Absatz mit', ], $result['blocks'][1]['content'][0]);
	}

	public function testBoldAndItalicMarks(): void {
		$result = $this->parser->parse('Fett und **mehr** *kursiv*.');
		$content = $result['blocks'][0]['content'];
		$this->assertSame('bold', $content[1]['marks'][0]['type']);
		$this->assertSame('mehr', $content[1]['text']);
		$this->assertSame('italic', $content[3]['marks'][0]['type']);
		$this->assertSame('kursiv', $content[3]['text']);
	}

	public function testBulletList(): void {
		$result = $this->parser->parse("- Erster Punkt\n- Zweiter Punkt");
		$this->assertSame('bulletList', $result['blocks'][0]['type']);
		$this->assertCount(2, $result['blocks'][0]['content']);
		$this->assertSame('listItem', $result['blocks'][0]['content'][0]['type']);
	}

	public function testOrderedList(): void {
		$result = $this->parser->parse("1. Erster Punkt\n2. Zweiter Punkt");
		$this->assertSame('orderedList', $result['blocks'][0]['type']);
		$this->assertCount(2, $result['blocks'][0]['content']);
	}

	public function testBlockquote(): void {
		$result = $this->parser->parse('> Ein Zitat');
		$this->assertSame('blockquote', $result['blocks'][0]['type']);
		$this->assertSame('paragraph', $result['blocks'][0]['content'][0]['type']);
	}

	public function testCodeBlock(): void {
		$result = $this->parser->parse("```\necho 'Hallo';\n```");
		$this->assertSame('codeBlock', $result['blocks'][0]['type']);
		$this->assertSame("echo 'Hallo';", $result['blocks'][0]['content'][0]['text']);
	}

	public function testHorizontalRule(): void {
		$result = $this->parser->parse('---');
		$this->assertSame('horizontalRule', $result['blocks'][0]['type']);
	}

	public function testImagesAreCollected(): void {
		$result = $this->parser->parse("Vorspann\n\n![Bild A](attachments/bild-a.png)\n\nNachspann");
		$this->assertCount(2, $result['blocks']);
		$this->assertSame('Bild A', $result['images'][0]['alt']);
		$this->assertSame('attachments/bild-a.png', $result['images'][0]['link']);
	}

	public function testInlineLinkBecomesText(): void {
		$result = $this->parser->parse('Siehe [Dokumentation](https://example.com) für Details.');
		$content = $result['blocks'][0]['content'];
		$this->assertSame('Dokumentation', $content[1]['text']);
		$this->assertArrayNotHasKey('marks', $content[1]);
	}
}
