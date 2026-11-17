/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as Y from 'yjs'
import { fromBase64, ORIGIN_LOCAL, ORIGIN_TEXT, PageDoc, PageSync, toBase64 } from './collab.js'

globalThis.document ??= { visibilityState: 'visible', addEventListener() {}, removeEventListener() {} }

const text = (id, x, doc = null) => ({ id, type: 'text', x, y: 0, width: 360, doc })
const stroke = (id, x = 0) => ({ id, tool: 'pen', color: '#000', size: 2, points: [[x, 0, 0.5], [x + 5, 5, 0.5]] })
const content = (elements = [], strokes = []) => ({ version: 1, created: 100, elements, strokes })
const emptyPage = () => ({ elements: [], strokes: [] })

/** The server side of the sync protocol, kept in memory */
function fakeServer() {
	const log = []
	let epoch = 0
	return {
		log,
		clear() {
			log.length = 0
			epoch = 0
		},
		async syncPage(pageId, { session, epoch: clientEpoch = 0, since = 0, update = '', init = false, leave = false }) {
			let rejected = false
			if (update !== '' && init) {
				if (log.length > 0) {
					rejected = true
				} else {
					epoch = 7
					log.push({ session, update })
				}
			} else if (update !== '') {
				if (log.length === 0 || clientEpoch !== epoch) {
					rejected = true
				} else {
					log.push({ session, update })
				}
			}
			const restart = log.length > 0 && (rejected || clientEpoch !== epoch)
			const updates = log
				.slice(restart ? 0 : since)
				.filter((entry) => restart || entry.session !== session)
				.map((entry) => entry.update)
			return { epoch: log.length > 0 ? epoch : 0, seq: log.length, count: log.length, updates, rejected, canWrite: true, peers: leave ? [] : [] }
		},
		async compactPage() {
			return { compacted: true }
		},
	}
}

function join(server, pageContent, canWrite = true) {
	const sync = new PageSync({ pageId: 1, content: pageContent, canWrite, api: server })
	sync.schedule = () => {}
	return sync
}

test('base64 round trip of binary updates', () => {
	const bytes = Uint8Array.from({ length: 70000 }, (_, i) => i % 256)
	assert.deepEqual(fromBase64(toBase64(bytes)), bytes)
})

test('a seeded document reads back as the same page', () => {
	const page = new PageDoc()
	const source = content([text('a', 10, { type: 'doc', content: [] }), text('b', 20)], [stroke('s1'), stroke('s2')])
	page.seed(source)
	assert.deepEqual(page.read(emptyPage()), source)
})

test('reading keeps the objects of unchanged elements and strokes', () => {
	const page = new PageDoc()
	page.seed(content([text('a', 10)], [stroke('s1')]))
	const view = page.read(emptyPage())
	const [element] = view.elements
	const [first] = view.strokes

	view.strokes.push(stroke('s2'))
	page.write(view)
	page.read(view)

	assert.equal(view.elements[0], element)
	assert.equal(view.strokes[0], first)
	assert.equal(view.strokes.length, 2)
})

test('moving a text block and typing in it merge', () => {
	const a = new PageDoc()
	a.seed(content([text('a', 10)]))
	const b = new PageDoc()
	Y.applyUpdate(b.doc, Y.encodeStateAsUpdate(a.doc))

	const viewA = a.read(emptyPage())
	viewA.elements[0].x = 99
	a.write(viewA)
	const viewB = b.read(emptyPage())
	viewB.elements[0].doc = { type: 'doc', content: [{ type: 'paragraph' }] }
	b.write(viewB, ORIGIN_TEXT)

	Y.applyUpdate(a.doc, Y.encodeStateAsUpdate(b.doc))
	Y.applyUpdate(b.doc, Y.encodeStateAsUpdate(a.doc))

	const merged = a.read(emptyPage())
	assert.equal(merged.elements[0].x, 99)
	assert.deepEqual(merged.elements[0].doc, { type: 'doc', content: [{ type: 'paragraph' }] })
	assert.deepEqual(b.read(emptyPage()), merged)
})

test('text that is being typed in is not replaced by remote changes', () => {
	const page = new PageDoc()
	page.seed(content([text('a', 10, { v: 1 })]))
	const view = page.read(emptyPage())
	view.elements[0].doc = { v: 'local' }

	page.elements.get('a').set('doc', { v: 'remote' })
	page.elements.get('a').set('x', 50)
	page.read(view, 'a')
	assert.deepEqual(view.elements[0].doc, { v: 'local' })
	assert.equal(view.elements[0].x, 50)

	page.read(view)
	assert.deepEqual(view.elements[0].doc, { v: 'remote' })
})

test('undo only takes back own tracked changes', () => {
	const page = new PageDoc()
	page.seed(content([], [stroke('s1')]))
	const view = page.read(emptyPage())

	view.strokes.push(stroke('mine'))
	page.write(view, ORIGIN_LOCAL)
	page.strokes.set('theirs', { ...stroke('theirs'), z: 9 })
	page.read(view)
	assert.deepEqual(view.strokes.map((s) => s.id), ['s1', 'mine', 'theirs'])

	page.undoManager.undo()
	page.read(view)
	assert.deepEqual(view.strokes.map((s) => s.id), ['s1', 'theirs'])
})

test('the first writer starts the shared document, later ones take it over', async () => {
	const server = fakeServer()
	const alice = join(server, content([text('a', 10)]))
	await alice.poll()
	assert.equal(server.log.length, 1)

	const bob = join(server, content([text('stale', 0)]))
	await bob.poll()
	assert.deepEqual(bob.read(emptyPage()).elements.map((e) => e.id), ['a'])
	assert.equal(server.log.length, 1)
	alice.stop()
	bob.stop()
})

test('changes travel between two people on the same page', async () => {
	const server = fakeServer()
	const alice = join(server, content())
	const bob = join(server, content())
	await alice.poll()
	await bob.poll()

	const viewA = alice.read(emptyPage())
	viewA.strokes.push(stroke('from-alice'))
	alice.commit(viewA)
	const viewB = bob.read(emptyPage())
	viewB.elements.push(text('from-bob', 5))
	bob.commit(viewB)

	let remoteChanges = 0
	bob.onChange = () => remoteChanges++
	await alice.poll()
	await bob.poll()
	await alice.poll()

	for (const view of [alice.read(viewA), bob.read(viewB)]) {
		assert.deepEqual(view.strokes.map((s) => s.id), ['from-alice'])
		assert.deepEqual(view.elements.map((e) => e.id), ['from-bob'])
	}
	assert.ok(remoteChanges > 0)
	assert.equal(alice.pending.length, 0)
	alice.stop()
	bob.stop()
})

test('read-only participants receive but never send', async () => {
	const server = fakeServer()
	const reader = join(server, content([text('a', 1)]), false)
	await reader.poll()
	assert.equal(server.log.length, 0)

	const view = reader.read(emptyPage())
	view.elements.push(text('b', 2))
	reader.commit(view)
	await reader.poll()
	assert.equal(server.log.length, 0)
	reader.stop()
})

test('a replaced page file asks for the page to be opened again', async () => {
	const server = fakeServer()
	const alice = join(server, content())
	await alice.poll()
	let resets = 0
	alice.onReset = () => resets++

	server.clear()
	await alice.poll()
	assert.equal(resets, 1)
	assert.equal(server.log.length, 0)
	alice.stop()
})
