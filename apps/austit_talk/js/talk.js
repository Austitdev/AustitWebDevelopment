/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

(() => {
	'use strict'

	const root = document.getElementById('austit-talk')
	if (!root) return

	const apiBase = '/ocs/v2.php/apps/austit_talk/api/v1'
	const state = { me: null, settings: {}, users: [], search: '', saving: false }
	const settingGroups = [
		{ title: 'Gespräche', keys: ['conversations_files', 'conversations_files_public_shares', 'delete_one_to_one_conversations', 'force_passwords', 'breakout_rooms'] },
		{ title: 'Anrufe', keys: ['call_end_to_end_encryption', 'start_calls', 'default_group_notification', 'inactivity_enable_lobby', 'inactivity_lock_after_days'] },
		{ title: 'Federation', keys: ['federation_enabled', 'federation_incoming_enabled', 'federation_outgoing_enabled', 'federation_only_trusted_servers'] },
	]
	const labels = {
		conversations_files: 'Dateien in Gesprächen',
		conversations_files_public_shares: 'Dateien in öffentlichen Shares',
		delete_one_to_one_conversations: '1:1-Gespräche löschen',
		force_passwords: 'Passwörter erzwingen',
		breakout_rooms: 'Breakout-Räume',
		call_end_to_end_encryption: 'Ende-zu-Ende-Verschlüsselung',
		inactivity_enable_lobby: 'Lobby bei Inaktivität',
		federation_enabled: 'Federation aktiviert',
		federation_incoming_enabled: 'Eingehende Federation',
		federation_outgoing_enabled: 'Ausgehende Federation',
		federation_only_trusted_servers: 'Nur vertrauenswürdige Server',
		start_calls: 'Anrufstandard',
		default_group_notification: 'Gruppenbenachrichtigung',
		inactivity_lock_after_days: 'Sperren nach Tagen',
	}

	async function request(path, options = {}) {
		const response = await fetch(apiBase + path + (path.includes('?') ? '&' : '?') + 'format=json', {
			...options,
			headers: { Accept: 'application/json', 'OCS-APIRequest': 'true', requesttoken: document.head.dataset.requesttoken ?? '', ...options.headers },
		})
		const payload = await response.json().catch(() => ({}))
		if (!response.ok) throw new Error(payload.ocs?.meta?.message || payload.message || `Fehler ${response.status}`)
		return payload.ocs?.data ?? payload.data ?? payload
	}

	function escapeHtml(value) {
		return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char])
	}

	function label(key) {
		return labels[key] ?? key.replaceAll('_', ' ')
	}

	function notify(message, type = 'success') {
		const notice = document.createElement('div')
		notice.className = `at-notice at-notice--${type}`
		notice.textContent = message
		root.prepend(notice)
		setTimeout(() => notice.remove(), 3500)
	}

	function render() {
		const canManage = state.me?.canManageAccess
		root.innerHTML = `
			<header class="at-hero">
				<div><p class="at-eyebrow">austit flow</p><h1>austit Talk</h1><p class="at-subtitle">Klarer Überblick. Sichere Gespräche. Alles im Fluss.</p></div>
				<div class="at-hero__orb" aria-hidden="true"></div>
			</header>
			<div class="at-layout">
				<main class="at-main">
					<section class="at-stats">
						<div class="at-stat"><span class="at-stat__icon">◌</span><strong>Talk-Zentrale</strong><small>Serverweit konfiguriert</small></div>
						<div class="at-stat"><span class="at-stat__icon">✓</span><strong>${state.users.length || '—'}</strong><small>Administratoren im Zugriff</small></div>
						<div class="at-stat"><span class="at-stat__icon">◈</span><strong>${state.settings.federation_enabled ? 'Aktiv' : 'Inaktiv'}</strong><small>Federation</small></div>
					</section>
					<section class="at-panel"><div class="at-panel__heading"><div><p class="at-kicker">KONFIGURATION</p><h2>Talk-Einstellungen</h2></div><span class="at-live">● Live</span></div>
						<div class="at-settings">${settingGroups.map((group) => `<div class="at-setting-group"><h3>${group.title}</h3>${group.keys.filter((key) => key in state.settings).map(settingControl).join('')}</div>`).join('')}</div>
					</section>
				</main>
				<aside class="at-side">
					<section class="at-panel at-panel--access"><div class="at-panel__heading"><div><p class="at-kicker">BERECHTIGUNGEN</p><h2>Wer darf verwalten?</h2></div></div>
						${canManage ? `<label class="at-search"><span>⌕</span><input id="at-user-search" type="search" placeholder="Administrator suchen" value="${escapeHtml(state.search)}"></label><div id="at-users" class="at-users">${userRows()}</div>` : '<p class="at-muted">Dein Konto hat keinen Zugriff auf die Talk-Verwaltung.</p>'}
					</section>
					<section class="at-panel at-panel--tip"><span class="at-tip-icon">✦</span><h2>Sicherer Standard</h2><p>Änderungen werden sofort übernommen und serverseitig protokolliert.</p></section>
				</aside>
			</div>`
		bindEvents()
	}

	function settingControl(key) {
		const value = state.settings[key]
		if (typeof value === 'boolean') return `<label class="at-toggle"><span>${escapeHtml(label(key))}</span><input type="checkbox" data-setting="${key}" ${value ? 'checked' : ''}><i></i></label>`
		return `<label class="at-field"><span>${escapeHtml(label(key))}</span><input type="number" min="0" max="3650" data-setting="${key}" value="${escapeHtml(value)}"></label>`
	}

	function userRows() {
		const users = state.users.filter((user) => `${user.displayName} ${user.id}`.toLowerCase().includes(state.search.toLowerCase()))
		return users.length ? users.map((user) => `<div class="at-user"><span class="at-avatar">${escapeHtml(user.displayName.slice(0, 1).toUpperCase())}</span><span class="at-user__name"><strong>${escapeHtml(user.displayName)}</strong><small>${escapeHtml(user.id)}</small></span><label class="at-switch"><input type="checkbox" data-user="${escapeHtml(user.id)}" ${user.allowed ? 'checked' : ''}><i></i></label></div>`).join('') : '<p class="at-muted">Keine Treffer.</p>'
	}

	function bindEvents() {
		document.querySelector('#at-user-search')?.addEventListener('input', (event) => { state.search = event.target.value; document.querySelector('#at-users').innerHTML = userRows(); bindUserEvents() })
		bindUserEvents()
		document.querySelectorAll('[data-setting]').forEach((input) => input.addEventListener('change', () => saveSetting(input)))
	}

	function bindUserEvents() {
		document.querySelectorAll('[data-user]').forEach((input) => input.addEventListener('change', () => saveUser(input)))
	}

	async function saveSetting(input) {
		input.disabled = true
		try {
			const value = input.type === 'checkbox' ? input.checked : Number(input.value)
			state.settings = await request('/settings', { method: 'POST', body: new URLSearchParams({ key: input.dataset.setting, value: JSON.stringify(value) }) })
			notify('Einstellung gespeichert')
		} catch (error) { input.checked = !input.checked; notify(error.message, 'error') } finally { input.disabled = false }
	}

	async function saveUser(input) {
		input.disabled = true
		try {
			await request('/users', { method: 'POST', body: new URLSearchParams({ userId: input.dataset.user, allowed: String(input.checked) }) })
			const user = state.users.find((item) => item.id === input.dataset.user)
			if (user) user.allowed = input.checked
			notify(input.checked ? 'Zugriff gewährt' : 'Zugriff entzogen')
		} catch (error) { input.checked = !input.checked; notify(error.message, 'error') } finally { input.disabled = false }
	}

	async function init() {
		try {
			[state.me, state.settings] = await Promise.all([request('/me'), request('/settings')])
			if (state.me.canManageAccess) state.users = await request('/users')
			render()
		} catch (error) { root.innerHTML = `<div class="at-error"><h1>austit Talk</h1><p>${escapeHtml(error.message)}</p></div>` }
	}
	init()
})()
