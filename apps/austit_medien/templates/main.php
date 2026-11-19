<?php

/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var array $_ */ ?>
<div id="austit-medien" class="section" data-api-base="<?php p($_['apiBase'] ?? ''); ?>">
	<header class="am-kopf">
		<h2>austit Medien</h2>
		<p class="am-hinweis">YouTube läuft ausschließlich über die eigene Cloud – Suche, Freigabe und Wiedergabe.</p>
	</header>

	<section class="am-kachel am-suche" id="am-suche-panel" hidden>
		<form id="am-suche-form" class="am-suche-form">
			<input type="search" id="am-suche-eingabe" placeholder="YouTube durchsuchen …" autocomplete="off" />
			<button type="submit" class="am-button">Suchen</button>
		</form>
		<div id="am-suche-status" class="am-status" hidden></div>
		<ul id="am-suche-ergebnis" class="am-liste"></ul>
	</section>

	<section class="am-kachel am-suche-gesperrt" id="am-suche-gesperrt" hidden>
		<p>Die freie Suche ist für dich nicht freigegeben. Du kannst freigegebene Videos aus der Liste unten abspielen.</p>
	</section>

	<section class="am-kachel">
		<h3>Freigegebene Videos</h3>
		<ul id="am-freigabe-liste" class="am-liste"></ul>
		<p id="am-freigabe-leer" class="am-hinweis" hidden>Noch keine Videos freigegeben.</p>
	</section>

	<section class="am-kachel" id="am-player-panel" hidden>
		<div class="am-player-kopf">
			<h3 id="am-player-titel"></h3>
			<span id="am-player-kanal" class="am-kanal"></span>
		</div>
		<video id="am-player" controls preload="metadata"></video>
		<p id="am-player-status" class="am-status"></p>
	</section>

	<section class="am-kachel" id="am-verwaltung" hidden>
		<h3>Verwaltung</h3>

		<div class="am-einstellungen">
			<label>Maximale Auflösung (Höhe in px)
				<select id="am-max-height">
					<option value="360">360p</option>
					<option value="480">480p</option>
					<option value="720" selected>720p</option>
					<option value="1080">1080p</option>
					<option value="1440">1440p</option>
					<option value="2160">2160p</option>
				</select>
			</label>
			<label>Gruppen mit freier Suche (Komma-getrennt)
				<input type="text" id="am-search-groups" placeholder="z. B. lehrkraefte, klasse-10a" />
			</label>
			<label>Freigegebene Kanäle (Kanal-IDs, Komma-getrennt)
				<input type="text" id="am-channels" placeholder="z. B. UCxxxxxxxxxxxxxxxxxxxxxx" />
			</label>
			<div class="am-aktionen">
				<button type="button" id="am-config-speichern" class="am-button">Einstellungen speichern</button>
			</div>
		</div>

		<div class="am-freigabe-hinzufuegen">
			<label>Video-ID oder YouTube-Link zum Freigeben
				<input type="text" id="am-allow-id" placeholder="dQw4w9WgXcQ oder https://youtu.be/…" />
			</label>
			<button type="button" id="am-allow-button" class="am-button">Freigeben</button>
		</div>
	</section>

	<section class="am-kachel am-statusjob">
		<p id="am-job-status" class="am-hinweis"></p>
	</section>
</div>
