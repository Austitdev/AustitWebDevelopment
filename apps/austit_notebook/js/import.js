/**
 * austit Notizbuch – Importseite (OneNote-/Markdown-Export).
 *
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
(function () {
	'use strict';

	var root = document.getElementById('austit-notebook-import');
	if (!root) {
		return;
	}

	var apiBase = root.getAttribute('data-api-base') || '';
	var appBase = root.getAttribute('data-app-base') || '';
	var start = document.getElementById('anb-import-start');
	var zipInput = document.getElementById('anb-zip');
	var nameInput = document.getElementById('anb-notebook-name');
	var message = document.getElementById('anb-import-msg');

	start.addEventListener('click', function () {
		var file = zipInput.files && zipInput.files[0];
		if (!file) {
			message.textContent = 'Bitte zuerst eine ZIP-Datei auswählen.';
			return;
		}

		var body = new FormData();
		body.append('zip', file);
		if (nameInput.value.trim() !== '') {
			body.append('name', nameInput.value.trim());
		}

		start.disabled = true;
		start.textContent = 'Import läuft …';
		message.textContent = 'Das Archiv wird gelesen, das kann einen Moment dauern.';

		fetch(apiBase + '/import', { method: 'POST', body: body }).then(function (res) {
			return res.json().then(function (data) { return { ok: res.ok, status: res.status, data: data }; });
		}).then(function (res) {
			start.disabled = false;
			start.textContent = 'Importieren';
			if (!res.ok) {
				message.textContent = 'Fehler: ' + (res.data.message || 'unbekannt');
				return;
			}
			var summary = res.data;
			var text = 'Notizbuch „' + summary.notebook + '“ angelegt: '
				+ summary.sections + ' Abschnitte, ' + summary.pages + ' Seiten, '
				+ summary.images + ' Bilder';
			if (summary.skippedImages > 0) {
				text += ' (' + summary.skippedImages + ' Bilder übersprungen)';
			}
			message.textContent = text + '. Du kannst die Notizbücher jetzt öffnen.';
			var open = document.createElement('a');
			open.className = 'button primary';
			open.href = appBase;
			open.textContent = 'Notizbuch öffnen';
			message.appendChild(document.createElement('br'));
			message.appendChild(open);
		}).catch(function () {
			start.disabled = false;
			start.textContent = 'Importieren';
			message.textContent = 'Der Import ist fehlgeschlagen (Netzwerk- oder Serverfehler).';
		});
	});
})();
