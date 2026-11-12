/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

(function() {
	'use strict'

	const KIND_LABELS = {
		modified: 'angepasst',
		deleted: 'von austit entfernt',
		'theme-override': 'Theme-Override',
	}

	const STATUS_LABELS = {
		changed: 'Upstream geändert',
		removed: 'Upstream entfernt',
		unchanged: 'unverändert',
		error: 'nicht prüfbar',
	}

	/**
	 * Recommended action for a manifest file, depending on how upstream changed it.
	 *
	 * @param {object} file Analyzed manifest entry
	 * @return {string}
	 */
	function actionFor(file) {
		if (file.status === 'unchanged') {
			return 'Keine Aktion nötig.'
		}
		if (file.status === 'error') {
			return file.message || 'Datei konnte nicht abgerufen werden, bitte manuell prüfen.'
		}
		if (file.kind === 'theme-override') {
			return file.status === 'changed'
				? 'Das Original hat sich geändert. Die Theme-Kopie ' + file.source + ' mit dem neuen Original abgleichen.'
				: 'Das Original gibt es nicht mehr. Die Theme-Kopie ' + file.source + ' greift nicht mehr und kann entfernt werden.'
		}
		if (file.kind === 'deleted') {
			return file.status === 'changed'
				? 'austit hat diese Datei entfernt, upstream hat sie geändert. Prüfen, ob sie entfernt bleiben soll.'
				: 'Upstream hat die Datei ebenfalls entfernt. Keine Aktion nötig.'
		}
		return file.status === 'changed'
			? 'Upstream-Änderung mit der austit-Anpassung zusammenführen, ein Merge-Konflikt ist wahrscheinlich.'
			: 'Upstream hat die Datei entfernt. Die austit-Anpassung verlagern oder verwerfen.'
	}

	/**
	 * @param {string} tag Element name
	 * @param {object} [attrs] Attributes, `text` sets textContent
	 * @param {Array<Node|string>} [children] Child nodes
	 * @return {HTMLElement}
	 */
	function el(tag, attrs = {}, children = []) {
		const node = document.createElement(tag)
		for (const [key, value] of Object.entries(attrs)) {
			if (key === 'text') {
				node.textContent = value
			} else if (key === 'className') {
				node.className = value
			} else {
				node.setAttribute(key, value)
			}
		}
		for (const child of children) {
			node.append(child)
		}
		return node
	}

	async function request(url, options = {}) {
		const response = await fetch(url, {
			...options,
			headers: {
				Accept: 'application/json',
				requesttoken: document.head.dataset.requesttoken,
				...(options.headers || {}),
			},
		})
		const data = await response.json().catch(() => ({}))
		if (!response.ok) {
			throw new Error(data.message || 'Anfrage fehlgeschlagen (HTTP ' + response.status + ')')
		}
		return data
	}

	function init() {
		const root = document.getElementById('austit-updates')
		if (!root) {
			return
		}
		const checkButton = document.getElementById('austit-updates-check')
		const prereleases = document.getElementById('austit-updates-prereleases')
		const message = document.getElementById('austit-updates-message')
		const releasesBox = document.getElementById('austit-updates-releases')
		const confirmBox = document.getElementById('austit-updates-confirm')
		const resultBox = document.getElementById('austit-updates-result')

		function showMessage(text, type = 'info') {
			message.hidden = !text
			message.textContent = text || ''
			message.className = 'austit-updates__message austit-updates__message--' + type
		}

		function reset(...boxes) {
			for (const box of boxes) {
				box.hidden = true
				box.replaceChildren()
			}
		}

		checkButton.addEventListener('click', async () => {
			reset(releasesBox, confirmBox, resultBox)
			checkButton.disabled = true
			showMessage('Suche nach neuen Versionen …')
			try {
				const url = root.dataset.releasesUrl + (prereleases.checked ? '?includePrereleases=1' : '')
				const data = await request(url)
				if (data.releases.length === 0) {
					showMessage('Keine neuere Version als ' + data.installedVersion + ' gefunden.', 'ok')
					return
				}
				showMessage('')
				renderReleases(data)
			} catch (error) {
				showMessage(error.message, 'error')
			} finally {
				checkButton.disabled = false
			}
		})

		function renderReleases(data) {
			const list = el('ul', { className: 'austit-updates__releases' })
			for (const release of data.releases) {
				const button = el('button', {
					type: 'button',
					className: 'button',
					text: 'Auswirkungen prüfen',
				})
				if (!release.supported) {
					button.disabled = true
					button.title = 'Nextcloud kann keine Hauptversion überspringen.'
				}
				button.addEventListener('click', () => renderConfirm(release))

				const meta = [release.publishedAt ? new Date(release.publishedAt).toLocaleDateString() : '']
				if (release.prerelease) {
					meta.push('Vorabversion')
				}
				if (!release.supported) {
					meta.push('erst nach dem Update auf die nächste Hauptversion möglich')
				}

				list.append(el('li', {}, [
					el('div', {}, [
						el('strong', { text: release.version }),
						' ',
						el('a', { href: release.url, target: '_blank', rel: 'noreferrer noopener', text: 'Release-Notes' }),
						el('div', { className: 'austit-updates__meta', text: meta.filter(Boolean).join(' · ') }),
					]),
					button,
				]))
			}
			releasesBox.replaceChildren(el('h3', { text: 'Verfügbare Versionen' }), list)
			releasesBox.hidden = false
		}

		function renderConfirm(release) {
			reset(resultBox)
			const start = el('button', { type: 'button', className: 'button primary', text: 'Analyse starten' })
			const cancel = el('button', { type: 'button', className: 'button', text: 'Abbrechen' })
			cancel.addEventListener('click', () => reset(confirmBox))
			start.addEventListener('click', () => analyze(release, start, cancel))

			confirmBox.replaceChildren(
				el('h3', { text: 'Update auf ' + release.version + ' prüfen?' }),
				el('p', { text: 'Alle austit-Anpassungen werden mit dem Stand von Nextcloud ' + release.version + ' auf GitHub verglichen. Es wird nichts heruntergeladen oder installiert.' }),
				el('div', { className: 'austit-updates__actions' }, [start, cancel]),
			)
			confirmBox.hidden = false
			confirmBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
		}

		async function analyze(release, start, cancel) {
			start.disabled = true
			cancel.disabled = true
			showMessage('Vergleiche angepasste Dateien mit ' + release.version + ' …')
			try {
				const body = new URLSearchParams({ version: release.version })
				const data = await request(root.dataset.analyzeUrl, { method: 'POST', body })
				showMessage('')
				reset(confirmBox)
				renderResult(data)
			} catch (error) {
				showMessage(error.message, 'error')
				start.disabled = false
				cancel.disabled = false
			}
		}

		function renderResult(data) {
			const children = [el('h3', { text: 'Auswirkungen des Updates ' + data.baseVersion + ' → ' + data.targetVersion })]

			if (data.manifestOutdated) {
				children.push(el('p', {
					className: 'austit-updates__message austit-updates__message--warn',
					text: 'Das Manifest beschreibt Version ' + data.baseVersion + ', installiert ist ' + data.installedVersion + '. Manifest neu erzeugen, sonst ist das Ergebnis ungenau.',
				}))
			}

			const review = data.counts.changed + data.counts.removed + data.counts.error
			children.push(el('div', { className: 'austit-updates__summary' }, [
				summaryTile(review, 'Dateien prüfen/anpassen', review > 0 ? 'warn' : 'ok'),
				summaryTile(data.counts.unchanged, 'austit-Dateien unverändert', 'ok'),
				summaryTile(data.upstream.available ? data.upstream.files.length + (data.upstream.truncated ? '+' : '') : '–', 'Upstream-Dateien geändert', 'neutral'),
			]))

			const rows = data.files.map((file) => el('tr', { className: 'austit-updates__row--' + file.status }, [
				el('td', {}, [el('code', { text: file.path })]),
				el('td', { text: KIND_LABELS[file.kind] || file.kind }),
				el('td', {}, [el('span', { className: 'austit-badge austit-badge--' + file.status, text: STATUS_LABELS[file.status] })]),
				el('td', { text: actionFor(file) }),
			]))
			children.push(
				el('h4', { text: 'Angepasste Dateien' }),
				el('div', { className: 'austit-updates__table-wrap' }, [
					el('table', { className: 'austit-updates__table' }, [
						el('thead', {}, [el('tr', {}, ['Datei', 'Art', 'Status', 'Was ist zu tun?'].map((h) => el('th', { text: h })))]),
						el('tbody', {}, rows),
					]),
				]),
			)

			children.push(renderUpstream(data.upstream))
			children.push(
				el('h4', { text: 'Nächste Schritte' }),
				el('ol', { className: 'austit-updates__steps' }, [
					el('li', { text: 'Lokal den Upstream-Tag v' + data.targetVersion + ' in das Repository übernehmen.' }),
					el('li', { text: 'Die oben markierten Dateien zusammenführen und das Theme gegen die neue Oberfläche testen.' }),
					el('li', { text: 'Manifest neu erzeugen: php austit-dev/generate-update-manifest.php' }),
					el('li', { text: 'Image-Version in docker-compose.yml auf ' + data.targetVersion + ' anheben, lokal starten und testen.' }),
					el('li', { text: 'Erst danach auf dem VPS ausrollen.' }),
				]),
			)

			resultBox.replaceChildren(...children)
			resultBox.hidden = false
			resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}

		function summaryTile(value, label, type) {
			return el('div', { className: 'austit-updates__tile austit-updates__tile--' + type }, [
				el('span', { className: 'austit-updates__tile-value', text: String(value) }),
				el('span', { className: 'austit-updates__tile-label', text: label }),
			])
		}

		function renderUpstream(upstream) {
			const details = el('details', { className: 'austit-updates__upstream' })
			const link = el('a', { href: upstream.compareUrl, target: '_blank', rel: 'noreferrer noopener', text: 'Vollständigen Vergleich auf GitHub öffnen' })
			if (!upstream.available) {
				details.append(
					el('summary', { text: 'Alle Upstream-Änderungen (nicht verfügbar)' }),
					el('p', { text: upstream.message + ' ' }, [link]),
				)
				return details
			}

			const filter = el('input', { type: 'search', placeholder: 'Pfad filtern …', 'aria-label': 'Pfad filtern' })
			const list = el('ul', { className: 'austit-updates__upstream-list' },
				upstream.files.map((file) => el('li', { 'data-path': file.path.toLowerCase() }, [
					el('span', { className: 'austit-updates__file-status', text: file.status }),
					el('code', { text: file.path }),
				])))
			filter.addEventListener('input', () => {
				const query = filter.value.trim().toLowerCase()
				for (const item of list.children) {
					item.hidden = query !== '' && !item.dataset.path.includes(query)
				}
			})

			details.append(
				el('summary', { text: 'Alle Upstream-Änderungen (' + upstream.commits + ' Commits, ' + upstream.files.length + (upstream.truncated ? '+' : '') + ' Dateien)' }),
				el('p', { text: upstream.truncated ? 'GitHub liefert höchstens ' + upstream.files.length + ' Dateien. ' : '' }, [link]),
				filter,
				list,
			)
			return details
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init)
	} else {
		init()
	}
})()
