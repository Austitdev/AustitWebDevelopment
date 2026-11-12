/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	eraseAt,
	isEmptyDoc,
	moveSelection,
	normalizePage,
	pointInPolygon,
	removeSelection,
	selectionBounds,
	selectWithLasso,
	strokeHitsPoint,
} from './model.js'

const line = (id, points, size = 2) => ({ id, tool: 'pen', color: '#000', size, points })
const square = [[0, 0], [100, 0], [100, 100], [0, 100]]

test('normalizePage drops invalid entries and fills defaults', () => {
	const page = normalizePage({ elements: [{ id: 'a', type: 'text' }, { type: 'text' }, { id: 'b', type: 'video' }], strokes: [line('s', []), line('t', [[1, 1, 0.5]])] })
	assert.deepEqual(page.elements.map((e) => e.id), ['a'])
	assert.deepEqual(page.strokes.map((s) => s.id), ['t'])
	assert.equal(page.version, 1)
	assert.deepEqual(normalizePage(null).elements, [])
})

test('strokeHitsPoint respects stroke width and segments', () => {
	const stroke = line('s', [[0, 0, 0.5], [100, 0, 0.5]], 10)
	assert.equal(strokeHitsPoint(stroke, 50, 4, 0), true)
	assert.equal(strokeHitsPoint(stroke, 50, 20, 5), false)
	assert.equal(strokeHitsPoint(line('d', [[5, 5, 0.5]], 2), 6, 6, 1), true)
})

test('eraseAt removes only touched strokes', () => {
	const strokes = [line('a', [[0, 0, 0.5], [10, 0, 0.5]]), line('b', [[0, 50, 0.5], [10, 50, 0.5]])]
	assert.deepEqual(eraseAt(strokes, 5, 1, 2).map((s) => s.id), ['b'])
})

test('pointInPolygon', () => {
	assert.equal(pointInPolygon(50, 50, square), true)
	assert.equal(pointInPolygon(150, 50, square), false)
})

test('lasso selects mostly enclosed strokes and elements by center', () => {
	const page = normalizePage({
		strokes: [line('in', [[10, 10, 0.5], [20, 20, 0.5]]), line('half', [[90, 50, 0.5], [95, 50, 0.5], [150, 50, 0.5], [160, 50, 0.5]]), line('out', [[200, 200, 0.5]])],
		elements: [
			{ id: 'text', type: 'text', x: 10, y: 10, width: 50, doc: null },
			{ id: 'img', type: 'image', x: 80, y: 80, width: 100, height: 100, fileId: 1 },
		],
	})
	const selection = selectWithLasso(page, square, { text: 20 })
	assert.deepEqual(selection.strokeIds, ['in', 'half'])
	assert.deepEqual(selection.elementIds, ['text'])
	assert.deepEqual(selectWithLasso(page, [[0, 0], [1, 1]]), { strokeIds: [], elementIds: [] })
})

test('moveSelection and removeSelection only touch selected items', () => {
	const page = normalizePage({
		strokes: [line('a', [[0, 0, 0.5]]), line('b', [[5, 5, 0.5]])],
		elements: [{ id: 'e', type: 'text', x: 1, y: 2, width: 10, doc: null }],
	})
	const selection = { strokeIds: ['a'], elementIds: ['e'] }
	const moved = moveSelection(page, selection, 10, 20)
	assert.deepEqual(moved.strokes[0].points[0], [10, 20, 0.5])
	assert.deepEqual(moved.strokes[1].points[0], [5, 5, 0.5])
	assert.deepEqual([moved.elements[0].x, moved.elements[0].y], [11, 22])

	const removed = removeSelection(page, selection)
	assert.deepEqual(removed.strokes.map((s) => s.id), ['b'])
	assert.equal(removed.elements.length, 0)
})

test('selectionBounds covers strokes and elements', () => {
	const page = normalizePage({
		strokes: [line('a', [[0, 0, 0.5], [10, 10, 0.5]], 2)],
		elements: [{ id: 'e', type: 'image', x: 50, y: 50, width: 20, height: 30, fileId: 1 }],
	})
	assert.deepEqual(selectionBounds(page, { strokeIds: ['a'], elementIds: ['e'] }), { minX: -1, minY: -1, maxX: 70, maxY: 80 })
	assert.equal(selectionBounds(page, { strokeIds: [], elementIds: [] }), null)
})

test('isEmptyDoc', () => {
	assert.equal(isEmptyDoc(null), true)
	assert.equal(isEmptyDoc({ type: 'doc', content: [{ type: 'paragraph' }] }), true)
	assert.equal(isEmptyDoc({ type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'x' }] }] }), false)
})
