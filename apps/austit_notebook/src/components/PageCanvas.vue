<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-page">
		<Toolbar
			:read-only="readOnly"
			:templates="templates"
			:tool="tool"
			:color="toolColor"
			:size="toolSize"
			:editor="activeEditor"
			:editor-tick="editorTick"
			:can-undo="canUndo"
			:can-redo="canRedo"
			:zoom="view.zoom"
			:template="template"
			@update:tool="setTool"
			@update:color="setColor"
			@update:size="setSize"
			@update:template="template = $event"
			@insert-image="fileInput.click()"
			@undo="undo"
			@redo="redo"
			@zoom="zoomStep" />

		<div
			ref="viewport"
			class="nb-canvas"
			:class="[
				'nb-canvas--' + (readOnly ? 'readonly' : tool),
				'nb-canvas--template-' + template,
				{ 'nb-canvas--panning': gestureType === 'pan' },
			]"
			:style="paperStyle"
			@pointerdown="onPointerDown"
			@pointermove="onPointerMove"
			@pointerup="onPointerUp"
			@pointercancel="onPointerUp"
			@pointerleave="sync.setCursor(null)"
			@wheel="onWheel"
			@contextmenu.prevent.stop="openContextMenu"
			@dragover.prevent
			@drop.prevent="onDrop">
			<div class="nb-world" :style="{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})` }">
				<template v-for="element in page.elements" :key="element.id">
					<TextBlock
						v-if="element.type === 'text'"
						:element="element"
						:editable="!readOnly"
						:autofocus="element.id === autofocusId"
						:initial-text="element.id === autofocusId ? pendingInput : ''"
						:selected="selectedElementIds.has(element.id)"
						@change="(doc) => onTextChange(element, doc)"
						@focus="(editor) => onEditorFocus(editor, element)"
						@blur="onEditorBlur"
						@remove="removeElement(element.id)"
						@height="(h) => heights[element.id] = h"
						@drag-start="(e) => startElementGesture(e, element, 'move-element')"
						@resize-start="(e) => startElementGesture(e, element, 'resize-element')" />
					<ImageBlock
						v-else
						:element="element"
						:src="api.imageUrl(element.fileId)"
						:selected="selectedElementIds.has(element.id)"
						@drag-start="(e) => startElementGesture(e, element, 'move-element')"
						@resize-start="(e) => startElementGesture(e, element, 'resize-element')" />
				</template>

				<svg class="nb-ink" aria-hidden="true">
					<path
						v-for="stroke in orderedStrokes"
						:key="stroke.id"
						:d="pathFor(stroke)"
						:fill="stroke.color"
						:fill-opacity="TOOLS[stroke.tool]?.opacity ?? 1"
						:class="{
							'nb-ink--selected': selectedStrokeIds.has(stroke.id),
							'nb-ink--black': stroke.color === '#1f2937' || stroke.color === '#000000',
						}" />
					<path
						v-if="currentStroke"
						:d="strokePath(currentStroke, false)"
						:fill="currentStroke.color"
						:fill-opacity="TOOLS[currentStroke.tool].opacity"
						:class="{ 'nb-ink--black': currentStroke.color === '#1f2937' || currentStroke.color === '#000000' }" />
					<polyline
						v-if="lassoPoints.length > 1"
						class="nb-lasso"
						:points="lassoPoints.map((p) => p.join(',')).join(' ')"
						:stroke-width="1.5 / view.zoom" />
					<rect
						v-if="selectionBox"
						class="nb-selection"
						:x="selectionBox.minX - 6"
						:y="selectionBox.minY - 6"
						:width="selectionBox.maxX - selectionBox.minX + 12"
						:height="selectionBox.maxY - selectionBox.minY + 12"
						:stroke-width="1.5 / view.zoom" />
				</svg>

				<div
					v-for="peer in peers.filter((p) => p.cursor)"
					:key="peer.id"
					class="nb-peer"
					:style="{ transform: `translate(${peer.cursor[0]}px, ${peer.cursor[1]}px) scale(${1 / view.zoom})`, '--nb-peer': peer.color }">
					<svg class="nb-peer__pointer" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 1l11 6-5 1.5L6 14z" /></svg>
					<span class="nb-peer__name">{{ peer.name }}</span>
				</div>
			</div>

			<p v-if="!readOnly && page.elements.length === 0 && page.strokes.length === 0" class="nb-hint">
				Irgendwo klicken und schreiben, mit dem Stift zeichnen oder Bilder hineinziehen.
			</p>
		</div>

		<div
			v-if="contextMenu"
			class="nb-context-menu"
			role="menu"
			:style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
			@click.stop>
			<button v-if="!readOnly" type="button" role="menuitem" @click="addTextFromMenu">Text einfügen</button>
			<button v-if="!readOnly" type="button" role="menuitem" @click="addImageFromMenu">Bild einfügen</button>
			<button v-if="selectionBox && !contextMenu.elementId && !readOnly" type="button" role="menuitem" @click="moveSelectionFromMenu">Verschieben</button>
			<button v-if="contextMenu.elementId && !readOnly" type="button" role="menuitem" class="nb-context-menu__danger" @click="deleteElementFromMenu">Löschen</button>
			<button v-if="selectionBox" type="button" role="menuitem" class="nb-context-menu__danger" @click="deleteSelectionFromMenu">Auswahl löschen</button>
		</div>

		<input
			ref="fileInput"
			type="file"
			accept="image/png,image/jpeg,image/gif,image/webp"
			hidden
			@change="onFilePicked">
	</div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { api } from '../api.js'
import { ORIGIN_LOCAL, ORIGIN_REMOTE, ORIGIN_TEXT } from '../collab.js'
import { strokePath, TOOLS } from '../ink.js'
import {
	eraseAt,
	moveSelection,
	removeSelection,
	round,
	selectionBounds,
	selectWithLasso,
	uid,
} from '../model.js'
import ImageBlock from './ImageBlock.vue'
import TextBlock from './TextBlock.vue'
import Toolbar from './Toolbar.vue'

const props = defineProps({
	pageId: { type: Number, required: true },
	/** PageSync of the open page; the page shown is always what its document contains */
	sync: { type: Object, required: true },
	peers: { type: Array, default: () => [] },
	readOnly: { type: Boolean, default: false },
	templates: { type: Array, default: () => [] },
})

const emit = defineEmits(['change', 'error'])

const MIN_ZOOM = 0.25
const MAX_ZOOM = 4
const GRID = 24

const page = ref(props.sync.read({ elements: [], strokes: [] }))
const view = reactive({ x: 48, y: 32, zoom: 1 })
const tool = ref('text')
const toolSettings = reactive({
	pen: { color: '#1f2937', size: 2 },
	highlighter: { color: '#facc15', size: 14 },
})
const heights = reactive({})
const autofocusId = ref(null)
// Keys typed between creating a text block and its editor being ready.
const pendingInput = ref('')
let awaitingEditor = false
const activeEditor = shallowRef(null)
const editorTick = ref(0)
const currentStroke = ref(null)
const lassoPoints = ref([])
const selection = ref({ strokeIds: [], elementIds: [] })
const canUndo = ref(props.sync.canUndo)
const canRedo = ref(props.sync.canRedo)
const viewport = ref(null)
const fileInput = ref(null)
const gestureType = ref(null)
const contextMenu = ref(null)
const template = ref('grid')

const pointers = new Map()
let gesture = null
let penSeen = false
let spaceDown = false
// Text block being typed in; changes by others leave its text alone until it loses focus.
let typingIn = null
const pathCache = new WeakMap()

const toolColor = computed(() => toolSettings[tool.value]?.color ?? toolSettings.pen.color)
const toolSize = computed(() => toolSettings[tool.value]?.size ?? toolSettings.pen.size)
const selectedStrokeIds = computed(() => new Set(selection.value.strokeIds))
const selectedElementIds = computed(() => new Set(selection.value.elementIds))
const selectionBox = computed(() => selectionBounds(page.value, selection.value, heights))
const orderedStrokes = computed(() => {
	const highlighters = []
	const strokes = []
	for (const stroke of page.value.strokes) {
		;(stroke.tool === 'highlighter' ? highlighters : strokes).push(stroke)
	}
	return highlighters.concat(strokes)
})
const paperStyle = computed(() => ({
	backgroundSize: `${GRID * view.zoom}px ${GRID * view.zoom}px`,
	backgroundPosition: `${view.x}px ${view.y}px`,
}))

watch(() => props.templates, (items) => {
	if (items.length > 0 && !items.some((item) => item.id === template.value)) {
		template.value = items[0].id
	}
}, { immediate: true })

function pathFor(stroke) {
	let path = pathCache.get(stroke)
	if (path === undefined) {
		path = strokePath(stroke)
		pathCache.set(stroke, path)
	}
	return path
}

// ---------- tools ----------

function setTool(next) {
	tool.value = next
	if (next !== 'lasso') {
		clearSelection()
	}
	if (next !== 'text') {
		activeEditor.value?.commands.blur()
	}
}

function setColor(color) {
	if (toolSettings[tool.value]) {
		toolSettings[tool.value].color = color
	}
}

function setSize(size) {
	if (toolSettings[tool.value]) {
		toolSettings[tool.value].size = size
	}
}

// ---------- changes & history ----------

function endChange(changed = true) {
	if (changed) {
		notifyChange(ORIGIN_LOCAL)
	}
}

/** Hands a change of the page to the shared document and to whoever saves the page. */
function notifyChange(origin = ORIGIN_TEXT) {
	props.sync.commit(page.value, origin)
	emit('change', page.value)
}

function onDocumentChange(origin) {
	props.sync.read(page.value, origin === ORIGIN_REMOTE ? typingIn : null)
	if (origin !== ORIGIN_REMOTE) {
		emit('change', page.value)
	}
}

function onHistoryChange() {
	canUndo.value = props.sync.canUndo
	canRedo.value = props.sync.canRedo
}

function undo() {
	clearSelection()
	props.sync.undo()
}

function redo() {
	clearSelection()
	props.sync.redo()
}

// ---------- coordinates & view ----------

function toWorld(clientX, clientY) {
	const rect = viewport.value.getBoundingClientRect()
	return [round((clientX - rect.left - view.x) / view.zoom), round((clientY - rect.top - view.y) / view.zoom)]
}

function zoomAt(factor, clientX, clientY) {
	const rect = viewport.value.getBoundingClientRect()
	const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, view.zoom * factor))
	const px = clientX - rect.left
	const py = clientY - rect.top
	view.x = px - ((px - view.x) / view.zoom) * zoom
	view.y = py - ((py - view.y) / view.zoom) * zoom
	view.zoom = zoom
}

function zoomStep(direction) {
	const rect = viewport.value.getBoundingClientRect()
	if (direction === 0) {
		view.x = 48
		view.y = 32
		view.zoom = 1
		return
	}
	zoomAt(direction > 0 ? 1.25 : 0.8, rect.left + rect.width / 2, rect.top + rect.height / 2)
}

function onWheel(event) {
	event.preventDefault()
	if (event.ctrlKey || event.metaKey) {
		zoomAt(Math.exp(-event.deltaY * 0.01), event.clientX, event.clientY)
	} else if (event.shiftKey) {
		view.x -= event.deltaY
	} else {
		view.x -= event.deltaX
		view.y -= event.deltaY
	}
}

// ---------- pointer gestures ----------

function capture(event) {
	try {
		viewport.value.setPointerCapture(event.pointerId)
	} catch (e) {
		// The pointer may already be gone (e.g. a very short tap); the gesture still ends on pointerup.
	}
}

function touchPointers() {
	return [...pointers.values()].filter((p) => p.type === 'touch')
}

function startPinch() {
	const [a, b] = touchPointers()
	if (gesture?.type === 'stroke' && gesture.pointerType === 'touch') {
		currentStroke.value = null
	}
	gesture = {
		type: 'pinch',
		distance: Math.hypot(a.x - b.x, a.y - b.y),
		center: [(a.x + b.x) / 2, (a.y + b.y) / 2],
	}
	gestureType.value = 'pinch'
}

function onPointerDown(event) {
	if (event.button === 2) {
		return
	}
	if (event.pointerType === 'pen') {
		penSeen = true
	}
	pointers.set(event.pointerId, { x: event.clientX, y: event.clientY, type: event.pointerType })

	if (event.pointerType === 'touch' && touchPointers().length === 2) {
		startPinch()
		return
	}
	if (gesture) {
		return
	}

	if (props.readOnly) {
		startPan(event)
		return
	}

	// Text blocks and images handle their own pointer events in the text tool.
	if (tool.value === 'text' && event.button !== 1 && event.target.closest('.nb-element')) {
		return
	}

	const [x, y] = toWorld(event.clientX, event.clientY)
	const drawingTool = ['pen', 'highlighter', 'eraser', 'lasso'].includes(tool.value)
	// Palm rejection: once a pen was used, fingers only pan and zoom.
	const fingerDraws = event.pointerType === 'touch' && drawingTool && !penSeen

	if (event.button === 1 || spaceDown || (event.pointerType === 'touch' && !fingerDraws)) {
		startPan(event)
		return
	}

	const penEraser = event.pointerType === 'pen' && (event.buttons & 32) === 32
	if (penEraser || tool.value === 'eraser') {
		event.preventDefault()
		gesture = { type: 'erase', pointerId: event.pointerId, radius: 8 / view.zoom, changed: false }
		eraseAtPoint(x, y)
		capture(event)
	} else if (tool.value === 'pen' || tool.value === 'highlighter') {
		event.preventDefault()
		const settings = toolSettings[tool.value]
		currentStroke.value = {
			id: uid(),
			tool: tool.value,
			color: settings.color,
			size: settings.size,
			points: [[x, y, pressureOf(event)]],
			simulatePressure: event.pointerType !== 'pen',
		}
		gesture = { type: 'stroke', pointerId: event.pointerId, pointerType: event.pointerType }
		capture(event)
	} else if (tool.value === 'lasso') {
		event.preventDefault()
		const box = selectionBox.value
		if (box && x >= box.minX && x <= box.maxX && y >= box.minY && y <= box.maxY) {
			gesture = { type: 'move-selection', pointerId: event.pointerId, last: [x, y], moved: false }
		} else {
			clearSelection()
			lassoPoints.value = [[x, y]]
			gesture = { type: 'lasso', pointerId: event.pointerId }
		}
		capture(event)
	} else {
		gesture = { type: 'tap', pointerId: event.pointerId, start: [event.clientX, event.clientY], world: [x, y] }
		capture(event)
	}
	gestureType.value = gesture?.type ?? null
}

function startPan(event) {
	event.preventDefault()
	gesture = { type: 'pan', pointerId: event.pointerId, last: [event.clientX, event.clientY] }
	gestureType.value = 'pan'
	capture(event)
}

function startElementGesture(event, element, type) {
	if (gesture || tool.value !== 'text' || props.readOnly) {
		return
	}
	gesture = {
		type,
		pointerId: event.pointerId,
		element,
		start: toWorld(event.clientX, event.clientY),
		origin: { x: element.x, y: element.y, width: element.width, height: element.height },
		moved: false,
	}
	gestureType.value = type
	capture(event)
}

function pressureOf(event) {
	return event.pointerType === 'pen' && event.pressure > 0 ? round(event.pressure * 100) / 100 : 0.5
}

function onPointerMove(event) {
	props.sync.setCursor(toWorld(event.clientX, event.clientY))
	const pointer = pointers.get(event.pointerId)
	if (pointer) {
		pointer.x = event.clientX
		pointer.y = event.clientY
	}
	if (!gesture) {
		return
	}

	if (gesture.type === 'pinch') {
		const touches = touchPointers()
		if (touches.length < 2) {
			return
		}
		const [a, b] = touches
		const distance = Math.hypot(a.x - b.x, a.y - b.y)
		const center = [(a.x + b.x) / 2, (a.y + b.y) / 2]
		view.x += center[0] - gesture.center[0]
		view.y += center[1] - gesture.center[1]
		zoomAt(distance / gesture.distance, center[0], center[1])
		gesture.distance = distance
		gesture.center = center
		return
	}
	if (event.pointerId !== gesture.pointerId) {
		return
	}

	const [x, y] = toWorld(event.clientX, event.clientY)
	switch (gesture.type) {
	case 'pan':
		view.x += event.clientX - gesture.last[0]
		view.y += event.clientY - gesture.last[1]
		gesture.last = [event.clientX, event.clientY]
		break
	case 'tap':
		if (Math.hypot(event.clientX - gesture.start[0], event.clientY - gesture.start[1]) > 6) {
			gesture = { type: 'pan', pointerId: event.pointerId, last: [event.clientX, event.clientY] }
			gestureType.value = 'pan'
		}
		break
	case 'stroke': {
		const events = event.getCoalescedEvents?.() ?? [event]
		const points = currentStroke.value.points
		for (const e of events.length > 0 ? events : [event]) {
			const [px, py] = toWorld(e.clientX, e.clientY)
			const last = points[points.length - 1]
			if (Math.hypot(px - last[0], py - last[1]) >= 0.5 / view.zoom) {
				points.push([px, py, pressureOf(e)])
			}
		}
		break
	}
	case 'erase':
		eraseAtPoint(x, y)
		break
	case 'lasso':
		lassoPoints.value.push([x, y])
		break
	case 'move-selection': {
		const dx = x - gesture.last[0]
		const dy = y - gesture.last[1]
		page.value = moveSelection(page.value, selection.value, dx, dy)
		gesture.last = [x, y]
		gesture.moved = true
		break
	}
	case 'move-element':
		gesture.element.x = round(gesture.origin.x + x - gesture.start[0])
		gesture.element.y = round(gesture.origin.y + y - gesture.start[1])
		gesture.moved = true
		break
	case 'resize-element': {
		const width = Math.max(80, gesture.origin.width + x - gesture.start[0])
		if (gesture.element.type === 'image') {
			gesture.element.height = round(gesture.origin.height * (width / gesture.origin.width))
		}
		gesture.element.width = round(width)
		gesture.moved = true
		break
	}
	}
}

function onPointerUp(event) {
	pointers.delete(event.pointerId)
	if (!gesture) {
		return
	}
	if (gesture.type === 'pinch') {
		if (touchPointers().length < 2) {
			gesture = null
			gestureType.value = null
		}
		return
	}
	if (event.pointerId !== gesture.pointerId) {
		return
	}

	switch (gesture.type) {
	case 'tap':
		createTextBlock(gesture.world[0], gesture.world[1])
		break
	case 'stroke':
		if (currentStroke.value) {
			page.value.strokes.push(currentStroke.value)
			currentStroke.value = null
			endChange(true)
		}
		break
	case 'erase':
		endChange(gesture.changed)
		break
	case 'lasso':
		selection.value = selectWithLasso(page.value, lassoPoints.value, heights)
		lassoPoints.value = []
		break
	case 'move-selection':
	case 'move-element':
	case 'resize-element':
		endChange(gesture.moved)
		break
	}
	gesture = null
	gestureType.value = null
}

function eraseAtPoint(x, y) {
	const remaining = eraseAt(page.value.strokes, x, y, gesture.radius)
	if (remaining.length !== page.value.strokes.length) {
		page.value.strokes = remaining
		gesture.changed = true
	}
}

function clearSelection() {
	selection.value = { strokeIds: [], elementIds: [] }
	lassoPoints.value = []
}

function openContextMenu(event) {
	const element = event.target.closest?.('.nb-element')
	if (props.readOnly && !selectionBox.value && !element) {
		return
	}
	contextMenu.value = {
		x: Math.min(event.clientX, window.innerWidth - 180),
		y: Math.min(event.clientY, window.innerHeight - 120),
		point: toWorld(event.clientX, event.clientY),
		elementId: element?.dataset.elementId ?? null,
	}
	document.addEventListener('click', closeContextMenu, { once: true })
	document.addEventListener('keydown', onContextKeydown)
}

function closeContextMenu() {
	contextMenu.value = null
	document.removeEventListener('keydown', onContextKeydown)
}

function onContextKeydown(event) {
	if (event.key === 'Escape') {
		closeContextMenu()
	}
}

function addTextFromMenu() {
	const point = contextMenu.value?.point
	closeContextMenu()
	if (!props.readOnly && point) {
		createTextBlock(point[0], point[1])
	}
}

function addImageFromMenu() {
	closeContextMenu()
	if (!props.readOnly) {
		fileInput.value?.click()
	}
}

function moveSelectionFromMenu() {
	closeContextMenu()
	if (!props.readOnly && selectionBox.value) {
		tool.value = 'lasso'
	}
}

function deleteSelectionFromMenu() {
	closeContextMenu()
	if (selectionBox.value) {
		page.value = removeSelection(page.value, selection.value)
		clearSelection()
		endChange(true)
	}
}

function deleteElementFromMenu() {
	const elementId = contextMenu.value?.elementId
	closeContextMenu()
	if (!props.readOnly && elementId) {
		removeElement(elementId)
	}
}

// ---------- elements ----------

function createTextBlock(x, y) {
	const element = { id: uid(), type: 'text', x, y: round(y - 12), width: 360, doc: null }
	page.value.elements.push(element)
	autofocusId.value = element.id
	pendingInput.value = ''
	awaitingEditor = true
	endChange(true)
}

function onTextChange(element, doc) {
	element.doc = doc
	notifyChange()
}

function onEditorFocus(editor, element) {
	typingIn = element.id
	awaitingEditor = false
	pendingInput.value = ''
	activeEditor.value = editor
	editor.on('transaction', bumpEditorTick)
}

function onEditorBlur(editor) {
	editor.off('transaction', bumpEditorTick)
	typingIn = null
	props.sync.read(page.value)
	// Keep the toolbar when focus moves into the toolbar itself.
	setTimeout(() => {
		if (activeEditor.value === editor && !editor.isFocused) {
			activeEditor.value = null
		}
	}, 0)
}

function bumpEditorTick() {
	editorTick.value++
}

function removeElement(id) {
	page.value.elements = page.value.elements.filter((e) => e.id !== id)
	delete heights[id]
	if (autofocusId.value === id) {
		autofocusId.value = null
	}
	notifyChange()
}

async function insertImage(file, worldPoint) {
	try {
		const { fileId } = await api.uploadImage(props.pageId, file)
		const size = await imageSize(file)
		const width = Math.min(480, size.width)
		const height = round(size.height * (width / size.width))
		const [x, y] = worldPoint ?? centerOfView()
		page.value.elements.push({ id: uid(), type: 'image', x: round(x - width / 2), y: round(y - height / 2), width, height, fileId })
		endChange(true)
	} catch (error) {
		emit('error', error.message)
	}
}

function imageSize(file) {
	return new Promise((resolve) => {
		const url = URL.createObjectURL(file)
		const img = new Image()
		img.onload = () => {
			resolve({ width: img.naturalWidth || 320, height: img.naturalHeight || 240 })
			URL.revokeObjectURL(url)
		}
		img.onerror = () => {
			resolve({ width: 320, height: 240 })
			URL.revokeObjectURL(url)
		}
		img.src = url
	})
}

function centerOfView() {
	const rect = viewport.value.getBoundingClientRect()
	return toWorld(rect.left + rect.width / 2, rect.top + rect.height / 2)
}

function onFilePicked(event) {
	const [file] = event.target.files
	if (file) {
		insertImage(file)
	}
	event.target.value = ''
}

function onDrop(event) {
	if (props.readOnly) {
		return
	}
	const point = toWorld(event.clientX, event.clientY)
	for (const file of event.dataTransfer?.files ?? []) {
		if (file.type.startsWith('image/')) {
			insertImage(file, point)
		}
	}
}

// ---------- keyboard & clipboard ----------

function isTyping(event) {
	return event.target.closest?.('input, textarea, [contenteditable="true"]')
}

function onKeyDown(event) {
	if (awaitingEditor && event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
		event.preventDefault()
		pendingInput.value += event.key
		return
	}
	if (event.code === 'Space' && !isTyping(event)) {
		spaceDown = true
		event.preventDefault()
		return
	}
	if (isTyping(event) || props.readOnly) {
		return
	}
	const mod = event.ctrlKey || event.metaKey
	if (mod && event.key.toLowerCase() === 'z' && !event.shiftKey) {
		event.preventDefault()
		undo()
	} else if (mod && (event.key.toLowerCase() === 'y' || (event.shiftKey && event.key.toLowerCase() === 'z'))) {
		event.preventDefault()
		redo()
	} else if ((event.key === 'Delete' || event.key === 'Backspace') && selectionBox.value) {
		event.preventDefault()
		page.value = removeSelection(page.value, selection.value)
		clearSelection()
		endChange(true)
	} else if (event.key === 'Escape') {
		clearSelection()
	}
}

function onKeyUp(event) {
	if (event.code === 'Space') {
		spaceDown = false
	}
}

function onPaste(event) {
	if (isTyping(event) || props.readOnly) {
		return
	}
	for (const item of event.clipboardData?.items ?? []) {
		if (item.kind === 'file' && item.type.startsWith('image/')) {
			event.preventDefault()
			insertImage(item.getAsFile())
		}
	}
}

onMounted(() => {
	props.sync.onChange = onDocumentChange
	props.sync.onHistory = onHistoryChange
	window.addEventListener('keydown', onKeyDown)
	window.addEventListener('keyup', onKeyUp)
	window.addEventListener('paste', onPaste)
})

onBeforeUnmount(() => {
	closeContextMenu()
	props.sync.onChange = () => {}
	props.sync.onHistory = () => {}
	window.removeEventListener('keydown', onKeyDown)
	window.removeEventListener('keyup', onKeyUp)
	window.removeEventListener('paste', onPaste)
})
</script>
