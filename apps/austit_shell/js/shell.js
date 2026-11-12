/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

(function() {
	'use strict'

	const STORAGE_KEY = 'austit-shell-collapsed'

	/** Outline icons (24px grid, stroke based) */
	const ICONS = {
		home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
		message: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z"/>',
		folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
		calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
		mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
		users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
		check: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 12 3 3 5-6"/>',
		image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
		board: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v12"/>',
		note: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
		form: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
		activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
		settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
		collapse: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M16 10l-2 2 2 2"/>',
		menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
		plus: '<path d="M12 5v14M5 12h14"/>',
		video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
	}

	/** Nextcloud app id => [icon, label override] */
	const APPS = {
		dashboard: ['home', 'Start'],
		spreed: ['message', 'Talk'],
		files: ['folder', 'Dateien'],
		calendar: ['calendar', 'Kalender'],
		mail: ['mail', 'Mail'],
		contacts: ['users', 'Kontakte'],
		tasks: ['check', 'Aufgaben'],
		photos: ['image', 'Fotos'],
		deck: ['board', null],
		notes: ['note', 'Notizen'],
		austit_notebook: ['note', 'Notizbücher'],
		forms: ['form', 'Formulare'],
		activity: ['activity', 'Aktivität'],
	}

	function loadState(app, key, fallback) {
		const input = document.getElementById('initial-state-' + app + '-' + key)
		if (!input) {
			return fallback
		}
		try {
			return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(input.value), (c) => c.charCodeAt(0))))
		} catch (e) {
			return fallback
		}
	}

	function icon(name) {
		const span = document.createElement('span')
		span.className = 'austit-icon'
		span.setAttribute('aria-hidden', 'true')
		span.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[name] + '</svg>'
		return span
	}

	/** Fallback for apps without own icon: the app's SVG used as a mask so it follows the text color */
	function maskIcon(url) {
		const span = document.createElement('span')
		span.className = 'austit-icon austit-icon--mask'
		span.setAttribute('aria-hidden', 'true')
		span.style.setProperty('--austit-icon-url', 'url("' + encodeURI(url) + '")')
		return span
	}

	function storage(action, value) {
		try {
			if (action === 'get') {
				return window.localStorage.getItem(STORAGE_KEY) === '1'
			}
			window.localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
		} catch (e) {
			// Storage can be unavailable (private mode), collapsing then just isn't remembered.
		}
		return false
	}

	function buildSidebar(shell, apps) {
		const nav = document.createElement('nav')
		nav.id = 'austit-sidebar'
		nav.setAttribute('aria-label', 'Hauptnavigation')

		const brand = document.createElement('a')
		brand.className = 'austit-sidebar__brand'
		brand.href = (apps.find((app) => app.id === 'dashboard') || apps[0] || { href: '/' }).href
		brand.innerHTML = '<span class="austit-sidebar__mark" aria-hidden="true">A</span><span class="austit-sidebar__brand-text"><strong></strong><small></small></span>'
		brand.querySelector('strong').textContent = shell.brand
		brand.querySelector('small').textContent = shell.subtitle
		nav.append(brand)

		const list = document.createElement('ul')
		list.className = 'austit-sidebar__list'
		for (const app of apps) {
			const [iconName, label] = APPS[app.id] || [null, null]
			const name = label || app.name

			const link = document.createElement('a')
			link.href = app.href
			link.className = 'austit-sidebar__item' + (app.active ? ' austit-sidebar__item--active' : '')
			link.title = name
			if (app.active) {
				link.setAttribute('aria-current', 'page')
			}
			link.append(iconName ? icon(iconName) : maskIcon(app.icon))

			const text = document.createElement('span')
			text.className = 'austit-sidebar__label'
			text.textContent = name
			link.append(text)

			if (app.unread > 0) {
				const badge = document.createElement('span')
				badge.className = 'austit-sidebar__badge'
				badge.textContent = app.unread > 99 ? '99+' : String(app.unread)
				badge.setAttribute('aria-label', app.unread + ' ungelesen')
				link.append(badge)
			}

			const item = document.createElement('li')
			item.append(link)
			list.append(item)
		}
		nav.append(list)

		const footer = document.createElement('div')
		footer.className = 'austit-sidebar__footer'

		const settings = document.createElement('a')
		settings.href = shell.settingsUrl
		settings.className = 'austit-sidebar__item' + (document.body.id === 'body-settings' ? ' austit-sidebar__item--active' : '')
		settings.title = 'Einstellungen'
		settings.append(icon('settings'))
		const settingsLabel = document.createElement('span')
		settingsLabel.className = 'austit-sidebar__label'
		settingsLabel.textContent = 'Einstellungen'
		settings.append(settingsLabel)

		const collapse = document.createElement('button')
		collapse.type = 'button'
		collapse.className = 'austit-sidebar__collapse'
		collapse.append(icon('collapse'))
		const updateCollapse = () => {
			const collapsed = document.documentElement.classList.contains('austit-shell--collapsed')
			collapse.setAttribute('aria-label', collapsed ? 'Navigation ausklappen' : 'Navigation einklappen')
			collapse.setAttribute('aria-expanded', String(!collapsed))
		}
		collapse.addEventListener('click', () => {
			const collapsed = document.documentElement.classList.toggle('austit-shell--collapsed')
			storage('set', collapsed)
			updateCollapse()
		})
		updateCollapse()

		const legal = document.createElement('a')
		legal.href = shell.legalUrl
		legal.className = 'austit-sidebar__legal'
		legal.textContent = 'Lizenzen & Quellcode'

		footer.append(settings, collapse, legal)
		nav.append(footer)
		return nav
	}

	function buildMobileToggle() {
		const button = document.createElement('button')
		button.type = 'button'
		button.id = 'austit-menu-toggle'
		button.setAttribute('aria-label', 'Navigation öffnen')
		button.setAttribute('aria-controls', 'austit-sidebar')
		button.setAttribute('aria-expanded', 'false')
		button.append(icon('menu'))
		button.addEventListener('click', () => {
			const open = document.documentElement.classList.toggle('austit-shell--open')
			button.setAttribute('aria-expanded', String(open))
		})
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && document.documentElement.classList.contains('austit-shell--open')) {
				document.documentElement.classList.remove('austit-shell--open')
				button.setAttribute('aria-expanded', 'false')
				button.focus()
			}
		})
		return button
	}

	function enhanceDashboard(shell) {
		const dashboard = document.getElementById('app-dashboard')
		if (!dashboard) {
			return
		}

		const apply = () => {
			const greeting = dashboard.querySelector(':scope > h2')
			if (!greeting || dashboard.querySelector('.austit-dashboard__date')) {
				return !!greeting
			}

			const date = document.createElement('p')
			date.className = 'austit-dashboard__date'
			date.textContent = new Date().toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })
			greeting.before(date)

			if (shell.quickActions.length > 0) {
				const actions = document.createElement('div')
				actions.className = 'austit-dashboard__actions'
				shell.quickActions.forEach((action, index) => {
					const link = document.createElement('a')
					link.href = action.href
					link.className = 'austit-button' + (index === 0 ? ' austit-button--primary' : '')
					link.append(icon(action.icon))
					link.append(document.createTextNode(action.label))
					actions.append(link)
				})
				greeting.after(actions)
			}
			return true
		}

		if (!apply()) {
			const observer = new MutationObserver(() => apply() && observer.disconnect())
			observer.observe(dashboard, { childList: true })
		}
	}

	function init() {
		const header = document.getElementById('header')
		const shell = loadState('austit_shell', 'shell', null)
		if (!header || !shell || document.getElementById('austit-sidebar')) {
			return
		}
		const apps = loadState('core', 'apps', []).filter((app) => app.type === 'link' || app.type === undefined)

		if (storage('get')) {
			document.documentElement.classList.add('austit-shell--collapsed')
		}
		document.documentElement.classList.add('austit-shell')

		document.body.prepend(buildSidebar(shell, apps))
		header.prepend(buildMobileToggle())

		const backdrop = document.createElement('div')
		backdrop.className = 'austit-shell__backdrop'
		backdrop.addEventListener('click', () => document.documentElement.classList.remove('austit-shell--open'))
		document.body.append(backdrop)

		enhanceDashboard(shell)
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init)
	} else {
		init()
	}
})()
