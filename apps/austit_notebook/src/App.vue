<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-app" :class="{ 'nb-app--nav-hidden': !navVisible }">
		<NotebookNav
			v-show="navVisible"
			:notebooks="notebooks"
			:notebook-id="notebookId"
			:section-id="sectionId"
			:page-id="pageId"
			@select="select"
			@create="create"
			@rename="rename"
			@remove="remove" />

		<main class="nb-main">
			<header class="nb-main__header">
				<button
					type="button"
					class="nb-icon-button"
					:title="navVisible ? 'Navigation ausblenden' : 'Navigation einblenden'"
					:aria-label="navVisible ? 'Navigation ausblenden' : 'Navigation einblenden'"
					:aria-expanded="navVisible"
					@click="navVisible = !navVisible">
					☰
				</button>
				<template v-if="pageId && loadedPage">
					<input
						v-model="titleDraft"
						class="nb-title"
						aria-label="Seitentitel"
						maxlength="120"
						@blur="saveTitle"
						@keydown.enter.prevent="$event.target.blur()">
					<span class="nb-date">{{ createdLabel }}</span>
				</template>
				<span class="nb-status" :class="'nb-status--' + saveState" role="status" aria-live="polite">{{ statusLabel }}</span>
			</header>

			<div v-if="message" class="nb-banner" :class="'nb-banner--' + message.type" role="alert">
				<span>{{ message.text }}</span>
				<template v-if="saveState === 'conflict'">
					<button type="button" class="nb-button" @click="reloadPage">Neu laden</button>
					<button type="button" class="nb-button nb-button--primary" @click="overwritePage">Meine Version behalten</button>
				</template>
				<button v-else type="button" class="nb-icon-button" aria-label="Meldung schließen" @click="message = null">×</button>
			</div>

			<PageCanvas
				v-if="pageId && loadedPage"
				:key="pageId + ':' + pageVersion"
				:page-id="pageId"
				:initial-content="loadedPage.content"
				@change="onPageChange"
				@error="(text) => showMessage(text)" />

			<div v-else-if="!loading" class="nb-empty">
				<template v-if="notebooks.length === 0">
					<h2>Willkommen bei deinen Notizbüchern</h2>
					<p>Text, Bilder und Handschrift frei auf einer unbegrenzten Seite – wie auf Papier, nur ohne Rand.</p>
					<button type="button" class="nb-button nb-button--primary" @click="createFirstNotebook">Erstes Notizbuch anlegen</button>
				</template>
				<p v-else>Wähle links eine Seite aus oder lege eine neue an.</p>
			</div>
		</main>
	</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { api, ApiError } from './api.js'
import NotebookNav from './components/NotebookNav.vue'
import PageCanvas from './components/PageCanvas.vue'
import { normalizePage } from './model.js'

const STORAGE_KEY = 'austit-notebook-last'
const SAVE_DELAY = 800

const notebooks = ref([])
const notebookId = ref(null)
const sectionId = ref(null)
const pageId = ref(null)
const loadedPage = ref(null)
const pageVersion = ref(0)
const titleDraft = ref('')
const loading = ref(true)
const navVisible = ref(window.innerWidth > 700)
const message = ref(null)
const saveState = ref('idle')

let etag = null
let latestContent = null
let saveTimer = null
let saving = null

const statusLabel = computed(() => ({
	idle: '',
	dirty: 'Nicht gespeichert …',
	saving: 'Speichert …',
	saved: 'Gespeichert',
	conflict: 'Konflikt',
	error: 'Nicht gespeichert',
})[saveState.value])

const createdLabel = computed(() => {
	const created = loadedPage.value?.content.created
	return created ? new Date(created * 1000).toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' }) : ''
})

function showMessage(text, type = 'error') {
	message.value = { text, type }
}

function remember() {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ notebookId: notebookId.value, sectionId: sectionId.value, pageId: pageId.value }))
	} catch (e) {
		// Remembering the last page is optional.
	}
}

function recalled() {
	try {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null') ?? {}
	} catch (e) {
		return {}
	}
}

async function loadTree() {
	notebooks.value = (await api.tree()).notebooks
}

async function select({ notebookId: nId = null, sectionId: sId = null, pageId: pId = null }) {
	await flushSave()
	const notebook = notebooks.value.find((n) => n.id === nId) ?? notebooks.value[0] ?? null
	const section = notebook?.sections.find((s) => s.id === sId) ?? notebook?.sections[0] ?? null
	const pageItem = section?.pages.find((p) => p.id === pId) ?? section?.pages[0] ?? null

	notebookId.value = notebook?.id ?? null
	sectionId.value = section?.id ?? null
	if ((pageItem?.id ?? null) !== pageId.value || loadedPage.value === null) {
		await openPage(pageItem?.id ?? null)
	}
	remember()
	if (window.innerWidth <= 700 && pageItem && pId) {
		navVisible.value = false
	}
}

async function openPage(id) {
	pageId.value = id
	loadedPage.value = null
	saveState.value = 'idle'
	if (id === null) {
		return
	}
	try {
		const data = await api.getPage(id)
		etag = data.etag
		loadedPage.value = { ...data, content: normalizePage(data.content) }
		titleDraft.value = data.name
		pageVersion.value++
	} catch (error) {
		showMessage(error.message)
	}
}

function onPageChange(content) {
	latestContent = content
	saveState.value = 'dirty'
	clearTimeout(saveTimer)
	saveTimer = setTimeout(() => save(), SAVE_DELAY)
}

async function save() {
	clearTimeout(saveTimer)
	if (saving) {
		await saving
	}
	if (saveState.value !== 'dirty' || !latestContent || pageId.value === null) {
		return
	}
	const id = pageId.value
	const content = JSON.parse(JSON.stringify(latestContent))
	saveState.value = 'saving'
	saving = api.savePage(id, content, etag)
		.then((result) => {
			etag = result.etag
			if (saveState.value === 'saving') {
				saveState.value = 'saved'
			}
		})
		.catch((error) => {
			if (error instanceof ApiError && error.status === 409) {
				saveState.value = 'conflict'
				showMessage('Diese Seite wurde inzwischen an anderer Stelle geändert.', 'warning')
			} else {
				saveState.value = 'error'
				showMessage(error.message)
			}
		})
		.finally(() => {
			saving = null
		})
	await saving
}

async function flushSave() {
	if (saveState.value === 'dirty') {
		await save()
	} else if (saving) {
		await saving
	}
}

async function reloadPage() {
	message.value = null
	await openPage(pageId.value)
}

async function overwritePage() {
	message.value = null
	const fresh = await api.getPage(pageId.value)
	etag = fresh.etag
	saveState.value = 'dirty'
	await save()
}

async function saveTitle() {
	const name = titleDraft.value.trim()
	if (!loadedPage.value || name === '' || name === loadedPage.value.name) {
		titleDraft.value = loadedPage.value?.name ?? ''
		return
	}
	await rename({ id: pageId.value, name })
}

async function create({ type, parentId }) {
	try {
		if (type === 'notebook') {
			const { id } = await api.createNotebook('Neues Notizbuch')
			const section = await api.createSection(id, 'Allgemein')
			await api.createPage(section.id, 'Unbenannte Seite')
			await loadTree()
			await select({ notebookId: id })
		} else if (type === 'section') {
			const { id } = await api.createSection(parentId, 'Neuer Abschnitt')
			await api.createPage(id, 'Unbenannte Seite')
			await loadTree()
			await select({ notebookId: parentId, sectionId: id })
		} else {
			const { id } = await api.createPage(parentId, 'Unbenannte Seite')
			await loadTree()
			await select({ notebookId: notebookId.value, sectionId: parentId, pageId: id })
		}
	} catch (error) {
		showMessage(error.message)
	}
}

async function createFirstNotebook() {
	try {
		const { id } = await api.createNotebook('Mein Notizbuch')
		const section = await api.createSection(id, 'Allgemein')
		await api.createPage(section.id, 'Erste Seite')
		await loadTree()
		await select({ notebookId: id })
	} catch (error) {
		showMessage(error.message)
	}
}

async function rename({ id, name }) {
	try {
		await flushSave()
		const result = await api.rename(id, name)
		await loadTree()
		if (id === pageId.value) {
			// Renaming moves the file; reload to pick up the new name and etag.
			await openPage(result.id)
		}
	} catch (error) {
		showMessage(error.message)
	}
}

async function remove({ id }) {
	try {
		if (id === pageId.value) {
			clearTimeout(saveTimer)
			saveState.value = 'idle'
		}
		await api.remove(id)
		await loadTree()
		const removedCurrent = [notebookId.value, sectionId.value, pageId.value].includes(id)
		if (removedCurrent) {
			loadedPage.value = null
			await select({
				notebookId: id === notebookId.value ? null : notebookId.value,
				sectionId: id === sectionId.value || id === notebookId.value ? null : sectionId.value,
			})
		}
		showMessage('In den Papierkorb verschoben.', 'info')
	} catch (error) {
		showMessage(error.message)
	}
}

function onBeforeUnload(event) {
	if (saveState.value === 'dirty' || saveState.value === 'saving') {
		save()
		event.preventDefault()
		event.returnValue = ''
	}
}

onMounted(async () => {
	window.addEventListener('beforeunload', onBeforeUnload)
	try {
		await loadTree()
		await select(recalled())
	} catch (error) {
		showMessage(error.message)
	} finally {
		loading.value = false
	}
})

onBeforeUnmount(() => {
	window.removeEventListener('beforeunload', onBeforeUnload)
})
</script>
