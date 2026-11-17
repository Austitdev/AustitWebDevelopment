/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export class ApiError extends Error {
	constructor(message, status) {
		super(message)
		this.status = status
	}
}

function loadConfig() {
	const input = document.getElementById('initial-state-austit_notebook-config')
	try {
		return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(input.value), (c) => c.charCodeAt(0))))
	} catch (e) {
		return { apiBase: '/index.php/apps/austit_notebook/api' }
	}
}

const config = loadConfig()

async function request(method, path, body) {
	const headers = { Accept: 'application/json', requesttoken: document.head.dataset.requesttoken ?? '' }
	let payload
	if (body instanceof FormData) {
		payload = body
	} else if (body !== undefined) {
		headers['Content-Type'] = 'application/json'
		payload = JSON.stringify(body)
	}

	const response = await fetch(config.apiBase + path, { method, headers, body: payload })
	const data = await response.json().catch(() => ({}))
	if (!response.ok) {
		throw new ApiError(data.message || `Fehler ${response.status}`, response.status)
	}
	return data
}

export const api = {
	tree: () => request('GET', '/tree'),
	templates: () => request('GET', '/templates'),
	createNotebook: (name) => request('POST', '/notebooks', { name }),
	createClassNotebook: (name, members) => request('POST', '/class-notebooks', { name, members }),
	getMembers: (notebookId) => request('GET', `/class-notebooks/${notebookId}/members`),
	setMembers: (notebookId, members) => request('PUT', `/class-notebooks/${notebookId}/members`, { members }),
	searchPrincipals: (search) => request('GET', `/principals?search=${encodeURIComponent(search)}`),
	createSection: (parentId, name) => request('POST', `/containers/${parentId}/sections`, { name }),
	distributePage: (pageId, section) => request('POST', `/pages/${pageId}/distribute`, { section }),
	createPage: (sectionId, name) => request('POST', `/sections/${sectionId}/pages`, { name }),
	rename: (id, name) => request('PATCH', `/nodes/${id}`, { name }),
	remove: (id) => request('DELETE', `/nodes/${id}`),
	getPage: (id) => request('GET', `/pages/${id}`),
	savePage: (id, content, etag) => request('PUT', `/pages/${id}`, { content, etag }),
	syncPage: (id, body) => request('POST', `/pages/${id}/sync`, body),
	compactPage: (id, body) => request('POST', `/pages/${id}/sync/compact`, body),
	uploadImage(pageId, file) {
		const form = new FormData()
		form.append('image', file)
		return request('POST', `/pages/${pageId}/images`, form)
	},
	imageUrl: (fileId) => `${config.apiBase}/images/${fileId}`,
}
