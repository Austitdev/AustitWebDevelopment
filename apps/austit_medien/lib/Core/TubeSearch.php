<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\AustitMedien\Core;

/**
 * Youtube-Suche über die öffentliche Innen-API des Web-Clients (Innertube).
 * Kern ohne Nextcloud-Abhängigkeiten: Anfrage und Antwortparsing sind
 * pur und damit in Unit-Tests ohne Netzwerk prüfbar.
 */
class TubeSearch {
	private const API = 'https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false';
	private const CLIENT = ['clientName' => 'WEB', 'clientVersion' => '2.20240726.00.00'];

	/**
	 * @return list<array{id: string, title: string, channel: string, duration: string, thumbnail: string}>
	 */
	public function search(string $query, int $limit = 20): array {
		$query = trim($query);
		if ($query === '') {
			return [];
		}

		$payload = json_encode([
			'context' => ['client' => self::CLIENT],
			'query' => $query,
		], JSON_THROW_ON_ERROR);

		$ch = curl_init();
		curl_setopt_array($ch, [
			CURLOPT_URL => self::API,
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $payload,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_TIMEOUT => 20,
			CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'User-Agent: Mozilla/5.0 (X11; Linux x86_64)'],
		]);
		$body = curl_exec($ch);
		$code = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
		curl_close($ch);

		if ($body === false || $code !== 200) {
			throw new \RuntimeException('YouTube-Suche fehlgeschlagen (HTTP ' . $code . ').');
		}
		$data = json_decode((string)$body, true);
		if (!is_array($data)) {
			throw new \RuntimeException('Antwort der YouTube-Suche konnte nicht gelesen werden.');
		}
		return array_slice($this->extractVideos($data), 0, max(1, $limit));
	}

	/**
	 * @return list<array{id: string, title: string, channel: string, duration: string, thumbnail: string}>
	 */
	public function extractVideos(array $data): array {
		$videos = [];
		$walk = function (mixed $node) use (&$walk, &$videos): void {
			if (is_array($node)) {
				if (isset($node['videoRenderer'])
					&& is_array($node['videoRenderer'])
					&& isset($node['videoRenderer']['videoId'])
					&& $this->videoPlayable($node['videoRenderer'])
				) {
					$videos[] = $this->mapVideo($node['videoRenderer']);
					return;
				}
				foreach ($node as $value) {
					$walk($value);
				}
			}
		};
		$walk($data);

		$seen = [];
		$result = [];
		foreach ($videos as $video) {
			if (isset($seen[$video['id']])) {
				continue;
			}
			$seen[$video['id']] = true;
			$result[] = $video;
		}
		return $result;
	}

	/**
	 * @param array<string, mixed> $renderer
	 */
	private function videoPlayable(array $renderer): bool {
		// Livestreams und gelöschte Videos haben keine Längenangabe
		if (!isset($renderer['lengthText']['simpleText'])) {
			return false;
		}
		return true;
	}

	/**
	 * @param array<string, mixed> $renderer
	 * @return array{id: string, title: string, channel: string, duration: string, thumbnail: string}
	 */
	private function mapVideo(array $renderer): array {
		$title = '';
		if (isset($renderer['title']['runs']) && is_array($renderer['title']['runs'])) {
			foreach ($renderer['title']['runs'] as $run) {
				$title .= (string)($run['text'] ?? '');
			}
		}
		$thumbnail = '';
		if (isset($renderer['thumbnail']['thumbnails']) && is_array($renderer['thumbnail']['thumbnails'])) {
			/** @var array<string, mixed> $last */
			foreach ($renderer['thumbnail']['thumbnails'] as $thumb) {
				$thumbnail = (string)($thumb['url'] ?? $thumbnail);
			}
		}
		return [
			'id' => (string)$renderer['videoId'],
			'title' => trim($title),
			'channel' => (string)($renderer['ownerText']['runs'][0]['text'] ?? $renderer['longBylineText']['runs'][0]['text'] ?? ''),
			'duration' => (string)($renderer['lengthText']['simpleText'] ?? ''),
			'thumbnail' => $thumbnail,
		];
	}
}
