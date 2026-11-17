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
			@create-notebook="openCreateDialog"
			@rename="rename"
			@remove="remove"
			@members="openMembersDialog" />

		<main class="nb-main">
			<header class="nb-main__header">
				<button
					type="button"
					class="nb-icon-button"
					:title="navVisible ? 'Navigation ausblenden' : 'Navigation einblenden'"
					:aria-label="navVisible ? 'Navigation ausblenden' : 'Navigation einblenden'"
					:aria-expanded="navVisible"
					@click="navVisible = !navVisible">
					<NbIcon name="panel" />
				</button>
				<template v-if="pageId && loadedPage">
					<input
						v-model="titleDraft"
						class="nb-title"
						aria-label="Seitentitel"
						maxlength="120"
						:readonly="!loadedPage.canWrite"
						@blur="saveTitle"
						@keydown.enter.prevent="$event.target.blur()">
					<span class="nb-date">{{ createdLabel }}</span>
					<span v-if="peers.length > 0" class="nb-peers" :aria-label="'Ebenfalls auf dieser Seite: ' + peers.map((p) => p.name).join(', ')">
						<span
							v-for="peer in peers.slice(0, 5)"
							:key="peer.id"
							class="nb-peers__avatar"
							:style="{ background: peer.color }"
							:title="peer.name">
							{{ peer.name.trim().charAt(0).toUpperCase() }}
						</span>
						<span v-if="peers.length > 5" class="nb-peers__more">+{{ peers.length - 5 }}</span>
					</span>
					<span v-if="!loadedPage.canWrite" class="nb-pill">Nur lesen</span>
					<button v-if="loadedPage.canDistribute" type="button" class="nb-button" @click="distributeDialog = { section: 'Hausaufgaben', custom: '' }">
						Seite verteilen
					</button>
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
				v-if="pageId && loadedPage && pageSync"
				:key="pageId + ':' + pageVersion"
				:page-id="pageId"
				:sync="pageSync"
				:peers="peers"
				:read-only="!loadedPage.canWrite"
				:templates="templates"
				@change="onPageChange"
				@error="(text) => showMessage(text)" />

			<div v-else-if="!loading" class="nb-empty">
				<template v-if="notebooks.length === 0">
					<h2>Willkommen bei deinen Notizbüchern</h2>
					<p>Text, Bilder und Handschrift frei auf einer unbegrenzten Seite – wie auf Papier, nur ohne Rand.</p>
					<button type="button" class="nb-button nb-button--primary" @click="openCreateDialog">Erstes Notizbuch anlegen</button>
				</template>
				<p v-else>Wähle links eine Seite aus oder lege eine neue an.</p>
			</div>
		</main>

		<ModalDialog v-if="createDialog" title="Neues Notizbuch" @close="createDialog = null">
			<div class="nb-choice" role="radiogroup" aria-label="Art des Notizbuchs">
				<label class="nb-choice__option" :class="{ 'nb-choice__option--active': createDialog.kind === 'personal' }">
					<input v-model="createDialog.kind" type="radio" value="personal">
					<strong>Persönliches Notizbuch</strong>
					<span>Für deine eigenen Notizen. Teilen kannst du es später.</span>
				</label>
				<label class="nb-choice__option" :class="{ 'nb-choice__option--active': createDialog.kind === 'class' }">
					<input v-model="createDialog.kind" type="radio" value="class">
					<strong>Klassennotizbuch</strong>
					<span>Mit Inhaltsbibliothek, Platz für Zusammenarbeit, Bereich nur für Lehrkräfte und einem eigenen Bereich für jede:n Schüler:in.</span>
				</label>
			</div>
			<label class="nb-field">
				<span>Name</span>
				<input v-model="createDialog.name" type="text" maxlength="120" :placeholder="createDialog.kind === 'class' ? 'z. B. Mathe 7b' : 'z. B. Projekt X'">
			</label>
			<MemberPicker v-if="createDialog.kind === 'class'" v-model="createDialog.members" @error="showMessage" />
			<template #footer>
				<button type="button" class="nb-button" @click="createDialog = null">Abbrechen</button>
				<button type="button" class="nb-button nb-button--primary" :disabled="busy" @click="createNotebook">Anlegen</button>
			</template>
		</ModalDialog>

		<ModalDialog v-if="membersDialog" :title="'Mitglieder von ' + membersDialog.notebook.name" @close="membersDialog = null">
			<p v-if="membersDialog.loading" class="nb-muted">Lädt …</p>
			<MemberPicker v-else v-model="membersDialog.members" @error="showMessage" />
			<template #footer>
				<button type="button" class="nb-button" @click="membersDialog = null">Abbrechen</button>
				<button type="button" class="nb-button nb-button--primary" :disabled="busy || membersDialog.loading" @click="saveMembers">Speichern</button>
			</template>
		</ModalDialog>

		<ModalDialog v-if="distributeDialog" title="Seite verteilen" @close="distributeDialog = null">
			<p>Jede:r Schüler:in erhält eine eigene Kopie von „{{ loadedPage?.name }}“ in diesem Abschnitt:</p>
			<label class="nb-field">
				<span>Abschnitt</span>
				<select v-model="distributeDialog.section">
					<option v-for="name in STUDENT_SECTIONS" :key="name" :value="name">{{ name }}</option>
					<option value="">Anderer Abschnitt …</option>
				</select>
			</label>
			<label v-if="distributeDialog.section === ''" class="nb-field">
				<span>Name des Abschnitts</span>
				<input v-model="distributeDialog.custom" type="text" maxlength="120">
			</label>
			<template #footer>
				<button type="button" class="nb-button" @click="distributeDialog = null">Abbrechen</button>
				<button type="button" class="nb-button nb-button--primary" :disabled="busy" @click="distribute">Verteilen</button>
			</template>
		</ModalDialog>
	</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { api, ApiError } from './api.js'
import { PageSync, peerColor } from './collab.js'
import MemberPicker from './components/MemberPicker.vue'
import ModalDialog from './components/ModalDialog.vue'
import NbIcon from './components/NbIcon.vue'
import NotebookNav from './components/NotebookNav.vue'
import PageCanvas from './components/PageCanvas.vue'
import { flattenSections, normalizePage } from './model.js'

const STORAGE_KEY = 'austit-notebook-last'
const SAVE_DELAY = 800
const STUDENT_SECTIONS = ['Handouts', 'Klassennotizen', 'Hausaufgaben', 'Tests']

const notebooks = ref([])
const templates = ref([])
const notebookId = ref(null)
const sectionId = ref(null)
const pageId = ref(null)
const loadedPage = ref(null)
const pageSync = shallowRef(null)
const peers = ref([])
const pageVersion = ref(0)
const titleDraft = ref('')
const loading = ref(true)
const busy = ref(false)
const navVisible = ref(window.innerWidth > 700)
const message = ref(null)
const saveState = ref('idle')
const createDialog = ref(null)
const membersDialog = ref(null)
const distributeDialog = ref(null)

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
	const data = await api.tree()
	notebooks.value = data.notebooks
	templates.value = data.templates ?? []
}

async function select({ notebookId: nId = null, sectionId: sId = null, pageId: pId = null }) {
	await flushSave()
	const notebook = notebooks.value.find((n) => n.id === nId) ?? notebooks.value[0] ?? null
	const sections = flattenSections(notebook).map((e) => e.section)
	const section = sections.find((s) => s.id === sId) ?? sections[0] ?? null
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

function closeSync() {
	pageSync.value?.stop()
	pageSync.value = null
	peers.value = []
}

async function openPage(id) {
	pageId.value = id
	loadedPage.value = null
	saveState.value = 'idle'
	closeSync()
	if (id === null) {
		return
	}
	try {
		const data = await api.getPage(id)
		const content = normalizePage(data.content)
		const sync = new PageSync({ pageId: id, content, canWrite: data.canWrite, api })
		sync.onPeers = (list) => {
			peers.value = list.map((peer) => ({ ...peer, color: peerColor(peer.id) }))
		}
		sync.onReset = () => {
			showMessage('Die Seite wurde an anderer Stelle ersetzt und neu geladen.', 'info')
			openPage(id)
		}
		if (pageId.value !== id || pageSync.value !== null) {
			// Another page was opened while this one was joining.
			sync.stop()
			return
		}
		etag = data.etag
		pageSync.value = sync
		loadedPage.value = { ...data, content }
		titleDraft.value = data.name
		pageVersion.value++
		await sync.start()
		if (pageId.value !== id) {
			sync.stop()
		}
	} catch (error) {
		showMessage(error.message)
	}
}

/**
 * Saves the page file. While the page is edited together everyone holds the same merged content,
 * so a file that was saved by someone else in the meantime is not a conflict.
 */
async function putPage(id, content) {
	try {
		return await api.savePage(id, content, etag)
	} catch (error) {
		if (!(error instanceof ApiError) || error.status !== 409 || !pageSync.value?.epoch) {
			throw error
		}
		etag = (await api.getPage(id)).etag
		return api.savePage(id, content, etag)
	}
}

function onPageChange(content) {
	if (!loadedPage.value?.canWrite) {
		return
	}
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
	saving = putPage(id, content)
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
	if (!loadedPage.value?.canWrite || name === '' || name === loadedPage.value.name) {
		titleDraft.value = loadedPage.value?.name ?? ''
		return
	}
	await rename({ id: pageId.value, name })
}

async function create({ type, parentId }) {
	try {
		if (type === 'section') {
			const { id } = await api.createSection(parentId, 'Neuer Abschnitt')
			await api.createPage(id, 'Unbenannte Seite')
			await loadTree()
			await select({ notebookId: notebookId.value, sectionId: id })
		} else {
			const { id } = await api.createPage(parentId, 'Unbenannte Seite')
			await loadTree()
			await select({ notebookId: notebookId.value, sectionId: parentId, pageId: id })
		}
	} catch (error) {
		showMessage(error.message)
	}
}

function openCreateDialog() {
	createDialog.value = { kind: 'personal', name: '', members: [] }
}

async function createNotebook() {
	const dialog = createDialog.value
	busy.value = true
	try {
		let id
		if (dialog.kind === 'class') {
			const members = dialog.members.map(({ type, id: memberId, role }) => ({ type, id: memberId, role }))
			id = (await api.createClassNotebook(dialog.name || 'Klassennotizbuch', members)).id
		} else {
			id = (await api.createNotebook(dialog.name || 'Mein Notizbuch')).id
			const section = await api.createSection(id, 'Allgemein')
			await api.createPage(section.id, 'Erste Seite')
		}
		createDialog.value = null
		await loadTree()
		await select({ notebookId: id })
	} catch (error) {
		showMessage(error.message)
	} finally {
		busy.value = false
	}
}

async function openMembersDialog(notebook) {
	membersDialog.value = { notebook, members: [], loading: true }
	try {
		const { members } = await api.getMembers(notebook.id)
		membersDialog.value = { notebook, members, loading: false }
	} catch (error) {
		membersDialog.value = null
		showMessage(error.message)
	}
}

async function saveMembers() {
	busy.value = true
	try {
		const { notebook, members } = membersDialog.value
		await api.setMembers(notebook.id, members.map(({ type, id, role }) => ({ type, id, role })))
		membersDialog.value = null
		await loadTree()
		showMessage('Mitglieder gespeichert.', 'info')
	} catch (error) {
		showMessage(error.message)
	} finally {
		busy.value = false
	}
}

async function distribute() {
	const dialog = distributeDialog.value
	const section = dialog.section || dialog.custom.trim()
	if (!section) {
		return
	}
	busy.value = true
	try {
		await flushSave()
		const { count } = await api.distributePage(pageId.value, section)
		distributeDialog.value = null
		await loadTree()
		showMessage(count === 0
			? 'Es gibt noch keine Schüler:innen in diesem Notizbuch.'
			: `Seite an ${count} Schüler:innen verteilt (Abschnitt „${section}“).`, count === 0 ? 'warning' : 'info')
	} catch (error) {
		showMessage(error.message)
	} finally {
		busy.value = false
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
		const removedCurrent = [notebookId.value, sectionId.value, pageId.value].includes(id)
		await loadTree()
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
	closeSync()
	window.removeEventListener('beforeunload', onBeforeUnload)
})
</script>
