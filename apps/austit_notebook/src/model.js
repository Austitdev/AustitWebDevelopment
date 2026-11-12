/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Page content model:
 *   elements: [{ id, type: 'text', x, y, width, doc }, { id, type: 'image', x, y, width, height, fileId }]
 *   strokes:  [{ id, tool: 'pen' | 'highlighter', color, size, points: [[x, y, pressure], ...] }]
 * All coordinates are page (world) coordinates.
 */

export const PAGE_VERSION = 1

export function uid() {
	return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

export function normalizePage(content) {
	const page = content && typeof content === 'object' ? content : {}
	return {
		version: PAGE_VERSION,
		created: Number.isFinite(page.created) ? page.created : Math.floor(Date.now() / 1000),
		elements: Array.isArray(page.elements) ? page.elements.filter((el) => el && el.id && (el.type === 'text' || el.type === 'image')) : [],
		strokes: Array.isArray(page.strokes) ? page.strokes.filter((s) => s && s.id && Array.isArray(s.points) && s.points.length > 0) : [],
	}
}

export function round(value) {
	return Math.round(value * 10) / 10
}

export function distanceToSegment(px, py, ax, ay, bx, by) {
	const dx = bx - ax
	const dy = by - ay
	const lengthSquared = dx * dx + dy * dy
	const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared))
	return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
}

/**
 * Whether a circle at (x, y) with the given radius touches the stroke.
 */
export function strokeHitsPoint(stroke, x, y, radius) {
	const reach = radius + stroke.size / 2
	const points = stroke.points
	if (points.length === 1) {
		return Math.hypot(points[0][0] - x, points[0][1] - y) <= reach
	}
	for (let i = 1; i < points.length; i++) {
		if (distanceToSegment(x, y, points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]) <= reach) {
			return true
		}
	}
	return false
}

/**
 * Strokes that are not touched by the eraser at (x, y).
 */
export function eraseAt(strokes, x, y, radius) {
	return strokes.filter((stroke) => !strokeHitsPoint(stroke, x, y, radius))
}

export function pointInPolygon(x, y, polygon) {
	let inside = false
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const [xi, yi] = polygon[i]
		const [xj, yj] = polygon[j]
		if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
			inside = !inside
		}
	}
	return inside
}

export function strokeBounds(stroke) {
	const half = stroke.size / 2
	let minX = Infinity
	let minY = Infinity
	let maxX = -Infinity
	let maxY = -Infinity
	for (const [x, y] of stroke.points) {
		minX = Math.min(minX, x)
		minY = Math.min(minY, y)
		maxX = Math.max(maxX, x)
		maxY = Math.max(maxY, y)
	}
	return { minX: minX - half, minY: minY - half, maxX: maxX + half, maxY: maxY + half }
}

/**
 * Bounds of an element. Text blocks report their measured height via `heights`.
 */
export function elementBounds(element, heights = {}) {
	const height = element.type === 'image' ? element.height : (heights[element.id] ?? 40)
	return { minX: element.x, minY: element.y, maxX: element.x + element.width, maxY: element.y + height }
}

export function unionBounds(boundsList) {
	if (boundsList.length === 0) {
		return null
	}
	return boundsList.reduce((acc, b) => ({
		minX: Math.min(acc.minX, b.minX),
		minY: Math.min(acc.minY, b.minY),
		maxX: Math.max(acc.maxX, b.maxX),
		maxY: Math.max(acc.maxY, b.maxY),
	}))
}

/**
 * Strokes with most of their points inside the lasso, and elements whose center is inside.
 */
export function selectWithLasso(page, polygon, heights = {}) {
	if (polygon.length < 3) {
		return { strokeIds: [], elementIds: [] }
	}
	const strokeIds = page.strokes
		.filter((stroke) => {
			const inside = stroke.points.filter(([x, y]) => pointInPolygon(x, y, polygon)).length
			return inside / stroke.points.length >= 0.5
		})
		.map((stroke) => stroke.id)
	const elementIds = page.elements
		.filter((element) => {
			const b = elementBounds(element, heights)
			return pointInPolygon((b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2, polygon)
		})
		.map((element) => element.id)
	return { strokeIds, elementIds }
}

export function selectionBounds(page, selection, heights = {}) {
	const strokeIds = new Set(selection.strokeIds)
	const elementIds = new Set(selection.elementIds)
	return unionBounds([
		...page.strokes.filter((s) => strokeIds.has(s.id)).map(strokeBounds),
		...page.elements.filter((e) => elementIds.has(e.id)).map((e) => elementBounds(e, heights)),
	])
}

export function moveSelection(page, selection, dx, dy) {
	const strokeIds = new Set(selection.strokeIds)
	const elementIds = new Set(selection.elementIds)
	return {
		...page,
		strokes: page.strokes.map((s) => strokeIds.has(s.id)
			? { ...s, points: s.points.map(([x, y, p]) => [round(x + dx), round(y + dy), p]) }
			: s),
		elements: page.elements.map((e) => elementIds.has(e.id) ? { ...e, x: round(e.x + dx), y: round(e.y + dy) } : e),
	}
}

export function removeSelection(page, selection) {
	const strokeIds = new Set(selection.strokeIds)
	const elementIds = new Set(selection.elementIds)
	return {
		...page,
		strokes: page.strokes.filter((s) => !strokeIds.has(s.id)),
		elements: page.elements.filter((e) => !elementIds.has(e.id)),
	}
}

/**
 * Whether a TipTap document contains no visible content.
 */
export function isEmptyDoc(doc) {
	if (!doc || !Array.isArray(doc.content)) {
		return true
	}
	return doc.content.every((node) => node.type === 'paragraph' && (!node.content || node.content.length === 0))
}

/**
 * All sections of a notebook from the tree API, flattened, with the container they belong to.
 * Personal notebooks have sections directly, class notebooks group them by area and student.
 */
export function flattenSections(notebook) {
	if (!notebook) {
		return []
	}
	if (Array.isArray(notebook.sections)) {
		return notebook.sections.map((section) => ({ section, group: null, student: null }))
	}
	const result = []
	for (const group of notebook.groups ?? []) {
		for (const section of group.sections ?? []) {
			result.push({ section, group, student: null })
		}
		for (const student of group.students ?? []) {
			for (const section of student.sections ?? []) {
				result.push({ section, group, student })
			}
		}
	}
	return result
}
