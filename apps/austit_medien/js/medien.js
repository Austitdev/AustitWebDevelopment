/**
 * austit Medien – Oberfläche: Suche, Freigabeliste, Player, Verwaltung.
 *
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

(function () {
	'use strict';

	var root = document.getElementById('austit-medien');
	if (!root) {
		return;
	}
	var apiBase = root.getAttribute('data-api-base') || '';
	var state = { config: null, maySearch: false, isAdmin: false, allowed: [] };

	function token() {
		return (typeof oc_requesttoken !== 'undefined') ? oc_requesttoken : '';
	}

	function api(method, path, body) {
		var options = { method: method, headers: { 'requesttoken': token() } };
		if (body !== undefined) {
			options.headers['Content-Type'] = 'application/json';
			options.body = JSON.stringify(body);
		}
		return fetch(apiBase + path, options).then(function (res) {
			if (!res.ok) {
				return res.json().then(
					function (data) { throw new Error(data.error || ('HTTP ' + res.status)); },
					function () { throw new Error('HTTP ' + res.status); }
				);
			}
			return res.json();
		});
	}

	function videoIdFrom(input) {
		var value = (input || '').trim();
		if (/^[A-Za-z0-9_-]{11}$/.test(value)) {
			return value;
		}
		var match = value.match(/(?:v=|youtu\.be\/|shorts\/)([A-Za-z0-9_-]{11})/);
		return match ? match[1] : '';
	}

	function text(value) {
		var div = document.createElement('span');
		div.textContent = value || '';
		return div;
	}

	function el(tag, className, child) {
		var node = document.createElement(tag);
		if (className) {
			node.className = className;
		}
		if (child) {
			node.appendChild(child);
		}
		return node;
	}

	function stateLabel(state) {
		return {
			new: 'nicht geladen',
			queued: 'in Warteschlange',
			running: 'wird geladen …',
			ready: 'bereit',
			error: 'Fehler'
		}[state] || state;
	}

	function statusNode(video) {
		var span = el('span', 'am-video-status', text(stateLabel(video.state)));
		if (video.state === 'error') {
			span.classList.add('am-video-error');
		}
		return span;
	}

	function renderAllowed() {
		var list = document.getElementById('am-freigabe-liste');
		list.textContent = '';
		var empty = document.getElementById('am-freigabe-leer');
		empty.hidden = state.allowed.length > 0;
		state.allowed.forEach(function (video) {
			var row = el('li', 'am-liste-eintrag');

			var thumb = el('img', 'am-video-thumb');
			thumb.src = video.thumbnail;
			thumb.alt = '';
			thumb.loading = 'lazy';

			var info = el('div', 'am-video-info');
			info.appendChild(el('span', 'am-video-titel', text(video.title)));
			info.appendChild(el('span', 'am-video-kanal', text(video.channel)));

			var actions = el('div', 'am-video-aktionen');
			var play = el('button', 'am-button am-button-klein', text('Abspielen'));
			play.type = 'button';
			play.disabled = video.state !== 'ready';
			play.addEventListener('click', function () {
				playVideo(video);
			});
			actions.appendChild(play);
			actions.appendChild(stateNode(video));

			if (state.isAdmin) {
				var remove = el('button', 'am-button am-button-klein am-gefahr', text('Entfernen'));
				remove.type = 'button';
				remove.addEventListener('click', function () {
					api('DELETE', '/allow/' + video.id).then(loadVideo).catch(zeigeFehler);
				});
				actions.appendChild(remove);
			}

			row.appendChild(thumb);
			row.appendChild(info);
			row.appendChild(actions);
			list.appendChild(row);
		});
	}

	function refreshJobStatus() {
		var pending = state.allowed.filter(function (v) { return v.state === 'queued' || v.state === 'running'; });
		var status = document.getElementById('am-job-status');
		if (pending.length === 0) {
			status.textContent = 'Kein Download aktiv.';
			return;
		}
		status.textContent = pending.length + ' Video(s) werden gerade über die Cloud geladen …';
	}

	function loadVideo() {
		api('GET', '/config').then(function (data) {
			state.config = data.config;
			state.maySearch = data.maySearch;
			state.isAdmin = data.isAdmin;

			document.getElementById('am-suche-panel').hidden = !data.maySearch;
			document.getElementById('am-suche-gesperrt').hidden = data.maySearch;
			document.getElementById('am-verwaltung').hidden = !data.isAdmin;
			if (data.isAdmin) {
				document.getElementById('am-max-height').value = String(data.config.maxHeight);
				document.getElementById('am-search-groups').value = data.config.searchGroups.join(', ');
				document.getElementById('am-channels').value = data.config.channels.join(', ');
			}
		}).catch(zeigeFehler);

		var ids = state.allowed.map(function (v) { return v.id; });
		Promise.all((ids.length > 0 ? ids : (state.config ? state.config.videos : [])).map(function (id) {
			return api('GET', '/video/' + id).catch(function () { return null; });
		})).then(function (infos) {
			state.allowed = infos.filter(function (info) { return info !== null; });
			renderAllowed();
			refreshJobStatus();
		});
	}

	function ensureLoaded(videoId, onReady) {
		if (state.allowed.some(function (v) { return v.id === videoId && v.state === 'ready'; })) {
			onReady();
			return;
		}
		api('POST', '/queue/' + videoId).then(function () { onReady(); }).catch(zeigeFehler);
	}

	function playVideo(video) {
		var panel = document.getElementById('am-player-panel');
		panel.hidden = false;
		document.getElementById('am-player-titel').textContent = '';
		document.getElementById('am-player-titel').appendChild(text(video.title));
		document.getElementById('am-player-kanal').textContent = video.channel || '';
		var player = document.getElementById('am-player');
		player.src = apiBase + '/stream/' + video.id;
		document.getElementById('am-player-status').textContent = 'Wird über die austit Cloud gestreamt.';
		player.play().catch(function () {});
		panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function renderSearchResults(results) {
		var list = document.getElementById('am-suche-ergebnis');
		list.textContent = '';
		var status = document.getElementById('am-suche-status');
		status.hidden = true;
		results.forEach(function (video) {
			var row = el('li', 'am-liste-eintrag');

			var thumb = el('img', 'am-video-thumb');
			thumb.src = video.thumbnail;
			thumb.alt = '';
			thumb.loading = 'lazy';

			var info = el('div', 'am-video-info');
			info.appendChild(el('span', 'am-video-titel', text(video.title)));
			info.appendChild(el('span', 'am-video-kanal', text(video.channel + ' · ' + video.duration)));

			var actions = el('div', 'am-video-aktionen');
			if (video.allowed) {
				actions.appendChild(el('span', 'am-video-ok', text('freigegeben')));
			} else if (state.isAdmin) {
				var allow = el('button', 'am-button am-button-klein', text('Freigeben'));
				allow.type = 'button';
				allow.addEventListener('click', function () {
					api('POST', '/allow/' + video.id).then(function () {
						loadVideo();
						renderSearch(results);
					}).catch(zeigeFehler);
				});
				actions.appendChild(allow);
			} else {
				actions.appendChild(el('span', 'am-video-status', text('nicht freigegeben')));
			}

			row.appendChild(thumb);
			row.appendChild(info);
			row.appendChild(actions);
			list.appendChild(row);
		});
	}

	function renderSearch(results) {
		renderSearchResults(results);
	}

	function zeigeFehler(error) {
		var status = document.getElementById('am-suche-status');
		status.textContent = error.message || 'Ein Fehler ist aufgetreten.';
		status.hidden = false;
	}

	document.getElementById('am-suche-form').addEventListener('submit', function (event) {
		event.preventDefault();
		var query = document.getElementById('am-suche-eingabe').value.trim();
		if (query === '') {
			return;
		}
		var status = document.getElementById('am-suche-status');
		status.textContent = 'Suche läuft über die Cloud …';
		status.hidden = false;
		api('GET', '/search?q=' + encodeURIComponent(query)).then(function (data) {
			renderSearch(data.results || []);
			if ((data.results || []).length === 0) {
				status.textContent = 'Keine Treffer.';
			} else {
				status.hidden = true;
			}
		}).catch(zeigeFehler);
	});

	document.getElementById('am-config-speichern').addEventListener('click', function () {
		var groups = document.getElementById('am-search-groups').value.split(',');
		var channels = document.getElementById('am-channels').value.split(',');
		api('PUT', '/config', {
			maxHeight: parseInt(document.getElementById('am-max-height').value, 10) || 720,
			searchGroups: groups.map(function (g) { return g.trim(); }).filter(Boolean),
			channels: channels.map(function (c) { return c.trim(); }).filter(Boolean)
		}).then(loadVideo).catch(zeigeFehler);
	});

	document.getElementById('am-allow-button').addEventListener('click', function () {
		var videoId = videoIdFrom(document.getElementById('am-allow-id').value);
		if (videoId === '') {
			zeigeFehler(new Error('Bitte eine gültige Video-ID oder einen YouTube-Link eingeben.'));
			return;
		}
		api('POST', '/allow/' + videoId).then(function () {
			document.getElementById('am-allow-id').value = '';
			loadVideo();
		}).catch(zeigeFehler);
	});

	api('GET', '/config').then(function (data) {
		state.config = data.config;
		state.maySearch = data.maySearch;
		state.isAdmin = data.isAdmin;
		loadVideo();
	});

	setInterval(function () {
		if (state.allowed.some(function (v) { return v.state === 'queued' || v.state === 'running'; })) {
			loadVideo();
		}
	}, 15000);
})();
