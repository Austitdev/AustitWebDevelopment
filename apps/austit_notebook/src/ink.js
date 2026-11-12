/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getStroke } from 'perfect-freehand'

export const TOOLS = {
	pen: { thinning: 0.6, opacity: 1 },
	highlighter: { thinning: 0, opacity: 0.35 },
}

/**
 * SVG path data for the outline polygon that perfect-freehand computes for a stroke.
 *
 * @param {object} stroke Stroke from the page model
 * @param {boolean} complete Whether the stroke is finished (tapers the end)
 */
export function strokePath(stroke, complete = true) {
	const options = TOOLS[stroke.tool] ?? TOOLS.pen
	const outline = getStroke(stroke.points, {
		size: stroke.size,
		thinning: options.thinning,
		smoothing: 0.5,
		streamline: 0.4,
		simulatePressure: stroke.simulatePressure ?? false,
		last: complete,
	})
	return outlineToPath(outline)
}

function outlineToPath(points) {
	if (points.length === 0) {
		return ''
	}
	if (points.length < 3) {
		const [x, y] = points[0]
		return `M ${x} ${y} Z`
	}
	const avg = (a, b) => ((a + b) / 2).toFixed(2)
	let d = `M${points[0][0].toFixed(2)},${points[0][1].toFixed(2)} Q${points[1][0].toFixed(2)},${points[1][1].toFixed(2)} ${avg(points[1][0], points[2][0])},${avg(points[1][1], points[2][1])} T`
	for (let i = 2; i < points.length - 1; i++) {
		d += `${avg(points[i][0], points[i + 1][0])},${avg(points[i][1], points[i + 1][1])} `
	}
	return d + 'Z'
}
