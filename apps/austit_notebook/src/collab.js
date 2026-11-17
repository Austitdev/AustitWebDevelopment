/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { toRaw } from 'vue'
import * as Y from 'yjs'
import { PAGE_VERSION, uid } from './model.js'

/**
 * A page as a shared document:
 *   meta:     { created }
 *   elements: id => Y.Map of the element's fields plus "z" (stacking order)
 *   strokes:  id => the stroke plus "z" (drawing order); strokes are replaced as a whole
 * Fields of an element merge independently, so moving a text block and typing in it do not collide.
 */

/** Changes that arrived from other people */
export const ORIGIN_REMOTE = 'remote'
/** Own changes that can be undone */
export const ORIGIN_LOCAL = 'local'
/** Own typing; the text editor has its own undo */
export const ORIGIN_TEXT = 'text'

const POLL_TOGETHER = 1000
const POLL_ALONE = 5000
const POLL_HIDDEN = 15000
const POLL_AFTER_CHANGE = 300
const COMPACT_ABOVE = 120

const PEER_COLORS = ['#8764b8', '#0f7b83', '#c2572b', '#2f7d32', '#c43e6b', '#3b6fd4']

/** A stable color for someone else on the page */
export function peerColor(id) {
	let hash = 0
	for (const char of String(id)) {
		hash = (hash * 31 + char.charCodeAt(0)) >>> 0
	}
	return PEER_COLORS[hash % PEER_COLORS.length]
}

export function toBase64(bytes) {
	let binary = ''
	for (let i = 0; i < bytes.length; i += 0x8000) {
		binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
	}
	return btoa(binary)
}

export function fromBase64(text) {
	return Uint8Array.from(atob(text), (c) => c.charCodeAt(0))
}

function sameJson(a, b) {
	return a === b || JSON.stringify(a) === JSON.stringify(b)
}

function byOrder(a, b) {
	return a.z - b.z || (a.id < b.id ? -1 : 1)
}

/**
 * The shared document of one page together with the plain page object the canvas works on.
 */
export class PageDoc {
	constructor() {
		this.doc = new Y.Doc()
		this.meta = this.doc.getMap('meta')
		this.elements = this.doc.getMap('elements')
		this.strokes = this.doc.getMap('strokes')
		// stroke id => { stored, stroke }: the value in the document and the page object made from it
		this.strokeCache = new Map()
		this.undoManager = new Y.UndoManager([this.elements, this.strokes], {
			trackedOrigins: new Set([ORIGIN_LOCAL]),
			captureTimeout: 0,
		})
	}

	destroy() {
		this.undoManager.destroy()
		this.doc.destroy()
	}

	/**
	 * Fills an empty document from stored page content.
	 */
	seed(content) {
		this.doc.transact(() => {
			this.meta.set('created', content.created)
			this.write(content, null)
		}, ORIGIN_REMOTE)
		this.undoManager.clear()
	}

	/**
	 * Brings the document in line with the page; only what differs is written.
	 *
	 * @param {object} page the page object of the canvas
	 * @param {string|null} origin null when already inside a transaction
	 */
	write(page, origin = ORIGIN_LOCAL) {
		const apply = () => {
			this.writeElements(toRaw(page).elements)
			this.writeStrokes(toRaw(page).strokes)
		}
		if (origin === null) {
			apply()
		} else {
			this.doc.transact(apply, origin)
		}
	}

	writeElements(elements) {
		const seen = new Set()
		let nextZ = this.nextZ(this.elements, (entry) => entry.get('z'))
		for (const element of elements) {
			const fields = toRaw(element)
			seen.add(fields.id)
			let entry = this.elements.get(fields.id)
			if (!entry) {
				entry = new Y.Map()
				this.elements.set(fields.id, entry)
				entry.set('z', nextZ++)
			}
			for (const [key, value] of Object.entries(fields)) {
				if (value !== undefined && !sameJson(entry.get(key), toRaw(value))) {
					entry.set(key, value === null ? null : JSON.parse(JSON.stringify(value)))
				}
			}
			for (const key of [...entry.keys()]) {
				if (key !== 'z' && fields[key] === undefined) {
					entry.delete(key)
				}
			}
		}
		for (const id of [...this.elements.keys()]) {
			if (!seen.has(id)) {
				this.elements.delete(id)
			}
		}
	}

	writeStrokes(strokes) {
		const seen = new Set()
		let nextZ = this.nextZ(this.strokes, (stored) => stored.z)
		for (const item of strokes) {
			const stroke = toRaw(item)
			seen.add(stroke.id)
			const cached = this.strokeCache.get(stroke.id)
			if (cached?.stroke === stroke && this.strokes.get(stroke.id) === cached.stored) {
				continue
			}
			const stored = { ...JSON.parse(JSON.stringify(stroke)), z: this.strokes.get(stroke.id)?.z ?? nextZ++ }
			this.strokes.set(stroke.id, stored)
			this.strokeCache.set(stroke.id, { stored, stroke })
		}
		for (const id of [...this.strokes.keys()]) {
			if (!seen.has(id)) {
				this.strokes.delete(id)
				this.strokeCache.delete(id)
			}
		}
	}

	nextZ(map, zOf) {
		let max = 0
		for (const value of map.values()) {
			max = Math.max(max, zOf(value) ?? 0)
		}
		return max + 1
	}

	/**
	 * Brings the page in line with the document. Objects of unchanged elements and strokes are kept,
	 * so the canvas only re-renders what changed.
	 *
	 * @param {object} page the (reactive) page object of the canvas, changed in place
	 * @param {string|null} keepTextOf id of a text block whose text stays as it is locally (it is being typed in)
	 */
	read(page, keepTextOf = null) {
		page.version = PAGE_VERSION
		page.created = this.meta.get('created') ?? page.created ?? Math.floor(Date.now() / 1000)

		const existing = new Map((page.elements ?? []).map((element) => [element.id, element]))
		page.elements = [...this.elements.entries()]
			.map(([id, entry]) => ({ id, z: entry.get('z') ?? 0, entry }))
			.sort(byOrder)
			.map(({ id, entry }) => {
				const element = existing.get(id) ?? { id }
				for (const [key, value] of entry.entries()) {
					if (key === 'z' || (key === 'doc' && id === keepTextOf && existing.has(id))) {
						continue
					}
					if (!sameJson(toRaw(element[key]), value)) {
						element[key] = value === null || typeof value !== 'object' ? value : JSON.parse(JSON.stringify(value))
					}
				}
				for (const key of Object.keys(element)) {
					if (!entry.has(key)) {
						delete element[key]
					}
				}
				return element
			})

		const ids = new Set()
		page.strokes = [...this.strokes.entries()]
			.map(([id, stored]) => ({ id, z: stored.z ?? 0, stored }))
			.sort(byOrder)
			.map(({ id, stored }) => {
				ids.add(id)
				let cached = this.strokeCache.get(id)
				if (cached?.stored !== stored) {
					const { z, ...stroke } = stored
					cached = { stored, stroke: JSON.parse(JSON.stringify(stroke)) }
					this.strokeCache.set(id, cached)
				}
				return cached.stroke
			})
		for (const id of [...this.strokeCache.keys()]) {
			if (!ids.has(id)) {
				this.strokeCache.delete(id)
			}
		}
		return page
	}
}

/**
 * Keeps the document of an open page in sync with the server and with everyone else on the page.
 *
 * Callbacks:
 *   onChange(origin)  the document changed other than through commit(); the canvas re-reads it
 *   onPeers(peers)    who else is on the page
 *   onHistory()       what can be undone or redone changed
 *   onReset()         the page's file was replaced or deleted; the page has to be opened again
 */
export class PageSync {
	/**
	 * @param {object} options
	 * @param {number} options.pageId
	 * @param {object} options.content normalized page content from the file
	 * @param {boolean} options.canWrite
	 * @param {{ syncPage: Function, compactPage: Function }} options.api
	 */
	constructor({ pageId, content, canWrite, api }) {
		this.pageId = pageId
		this.content = content
		this.canWrite = canWrite
		this.api = api
		this.session = uid()
		this.epoch = 0
		this.seq = 0
		this.pending = []
		this.cursor = null
		this.peers = []
		this.timer = null
		this.running = null
		this.stopped = false
		this.onChange = () => {}
		this.onPeers = () => {}
		this.onHistory = () => {}
		this.onReset = () => {}
		this.due = 0
		this.onVisibility = () => this.schedule(0)
		this.adopt(new PageDoc(), (page) => page.seed(content))
	}

	/** Replaces the document, e.g. by the one everyone else is working on. */
	adopt(page, fill) {
		this.page?.destroy()
		this.page = page
		this.pending = []
		fill(page)
		page.undoManager.clear()
		page.doc.on('update', (update, origin) => {
			if (origin !== ORIGIN_REMOTE) {
				this.pending.push(update)
				this.schedule(POLL_AFTER_CHANGE)
			}
		})
		page.doc.on('afterTransaction', (transaction) => {
			if (transaction.origin === ORIGIN_REMOTE || transaction.origin === page.undoManager) {
				this.onChange(transaction.origin === ORIGIN_REMOTE ? ORIGIN_REMOTE : ORIGIN_LOCAL)
			}
		})
		for (const event of ['stack-item-added', 'stack-item-popped', 'stack-cleared']) {
			page.undoManager.on(event, () => this.onHistory())
		}
		this.onHistory()
	}

	/**
	 * Joins the page. Resolves once the document is the shared one, or the local one if the server cannot be reached.
	 */
	async start() {
		document.addEventListener('visibilitychange', this.onVisibility)
		await this.poll()
	}

	stop() {
		this.stopped = true
		clearTimeout(this.timer)
		document.removeEventListener('visibilitychange', this.onVisibility)
		this.api.syncPage(this.pageId, { session: this.session, leave: true }).catch(() => {})
		this.page.destroy()
	}

	get canUndo() {
		return this.page.undoManager.undoStack.length > 0
	}

	get canRedo() {
		return this.page.undoManager.redoStack.length > 0
	}

	undo() {
		this.page.undoManager.undo()
	}

	redo() {
		this.page.undoManager.redo()
	}

	/** Writes local changes of the canvas into the document. */
	commit(page, origin = ORIGIN_LOCAL) {
		if (this.canWrite) {
			this.page.write(page, origin)
		}
	}

	read(page, keepTextOf = null) {
		return this.page.read(page, keepTextOf)
	}

	setCursor(point) {
		this.cursor = point
	}

	/** Plans the next exchange; an earlier planned one stays. */
	schedule(delay) {
		const due = Date.now() + delay
		if (this.stopped || (this.timer !== null && this.due <= due)) {
			return
		}
		clearTimeout(this.timer)
		this.due = due
		this.timer = setTimeout(() => {
			this.timer = null
			this.poll()
		}, delay)
	}

	interval() {
		if (document.visibilityState === 'hidden') {
			return POLL_HIDDEN
		}
		return this.peers.length > 0 ? POLL_TOGETHER : POLL_ALONE
	}

	async poll() {
		if (this.running) {
			return this.running
		}
		this.running = this.exchange()
			.catch(() => {
				// Offline or the server is busy: keep working locally and try again.
			})
			.finally(() => {
				this.running = null
				this.schedule(this.pending.length > 0 ? POLL_AFTER_CHANGE : this.interval())
			})
		return this.running
	}

	async exchange() {
		const sent = this.pending.length
		const body = { session: this.session, epoch: this.epoch, since: this.seq, cursor: this.cursor }
		if (this.canWrite && this.epoch !== 0 && sent > 0) {
			body.update = toBase64(Y.mergeUpdates(this.pending))
		}
		let result = await this.api.syncPage(this.pageId, body)
		if (this.stopped) {
			return
		}

		if (result.seq === 0 && this.epoch === 0 && this.canWrite) {
			// Nobody has started the shared document yet: offer the local one.
			result = await this.api.syncPage(this.pageId, {
				...body,
				init: true,
				update: toBase64(Y.encodeStateAsUpdate(this.page.doc)),
			})
			if (this.stopped) {
				return
			}
			if (!result.rejected) {
				this.pending.splice(0, sent)
				this.epoch = result.epoch
			}
		}

		if (result.seq > 0 && (result.rejected || result.epoch !== this.epoch)) {
			// The shared document is a different one than the local: take it over completely.
			this.adopt(new PageDoc(), (page) => {
				for (const update of result.updates) {
					Y.applyUpdate(page.doc, fromBase64(update), ORIGIN_REMOTE)
				}
			})
			this.epoch = result.epoch
			this.onChange(ORIGIN_REMOTE)
		} else if (result.seq > 0) {
			this.pending.splice(0, body.update ? sent : 0)
			for (const update of result.updates) {
				Y.applyUpdate(this.page.doc, fromBase64(update), ORIGIN_REMOTE)
			}
		} else if (this.epoch !== 0) {
			// The shared document is gone because the file was replaced or deleted.
			this.stopped = true
			this.onReset()
			return
		}
		this.seq = result.seq
		this.peers = result.peers ?? []
		this.onPeers(this.peers)

		if (this.canWrite && result.count > COMPACT_ABOVE && this.pending.length === 0 && Math.random() < 0.3) {
			this.api.compactPage(this.pageId, {
				epoch: this.epoch,
				upTo: this.seq,
				state: toBase64(Y.encodeStateAsUpdate(this.page.doc)),
			}).catch(() => {})
		}
	}
}
