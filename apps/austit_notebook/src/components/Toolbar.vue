<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-toolbar" role="toolbar" aria-label="Werkzeuge" @mousedown.prevent>
		<div v-if="!readOnly" class="nb-toolbar__group">
			<button
				v-for="item in tools"
				:key="item.id"
				type="button"
				class="nb-tool"
				:class="{ 'nb-tool--active': tool === item.id }"
				:title="item.label"
				:aria-label="item.label"
				:aria-pressed="tool === item.id"
				@click="$emit('update:tool', item.id)">
				<svg viewBox="0 0 24 24" aria-hidden="true" v-html="item.icon" />
			</button>
			<button type="button" class="nb-tool" title="Bild einfügen" aria-label="Bild einfügen" @click="$emit('insert-image')">
				<svg viewBox="0 0 24 24" aria-hidden="true" v-html="ICONS.image" />
			</button>
		</div>

		<div v-if="!readOnly && (tool === 'pen' || tool === 'highlighter')" class="nb-toolbar__group">
			<button
				v-for="c in palette"
				:key="c"
				type="button"
				class="nb-swatch"
				:class="{ 'nb-swatch--active': color === c }"
				:style="{ '--swatch': c }"
				:title="'Farbe ' + c"
				:aria-label="'Farbe ' + c"
				@click="$emit('update:color', c)" />
			<button
				v-for="s in sizes"
				:key="s.value"
				type="button"
				class="nb-tool nb-size"
				:class="{ 'nb-tool--active': size === s.value }"
				:title="s.label"
				:aria-label="s.label"
				@click="$emit('update:size', s.value)">
				<span :style="{ width: s.dot + 'px', height: s.dot + 'px' }" />
			</button>
		</div>

		<div v-if="!readOnly && editor" class="nb-toolbar__group">
			<button
				v-for="f in formats"
				:key="f.id"
				type="button"
				class="nb-tool"
				:class="{ 'nb-tool--active': isActive(f) }"
				:title="f.label"
				:aria-label="f.label"
				@click="f.run(editor.chain().focus()).run()">
				<svg v-if="f.icon" viewBox="0 0 24 24" aria-hidden="true" v-html="f.icon" />
				<span v-else class="nb-tool__text" :class="f.textClass">{{ f.text }}</span>
			</button>
		</div>

		<div class="nb-toolbar__group nb-toolbar__group--end">
			<button v-if="!readOnly" type="button" class="nb-tool" title="Rückgängig (Strg+Z)" aria-label="Rückgängig" :disabled="!canUndo" @click="$emit('undo')">
				<svg viewBox="0 0 24 24" aria-hidden="true" v-html="ICONS.undo" />
			</button>
			<button v-if="!readOnly" type="button" class="nb-tool" title="Wiederholen (Strg+Y)" aria-label="Wiederholen" :disabled="!canRedo" @click="$emit('redo')">
				<svg viewBox="0 0 24 24" aria-hidden="true" v-html="ICONS.redo" />
			</button>
			<button type="button" class="nb-tool" title="Verkleinern" aria-label="Verkleinern" @click="$emit('zoom', -1)">−</button>
			<button type="button" class="nb-tool nb-zoom" title="Ansicht zurücksetzen" aria-label="Ansicht zurücksetzen" @click="$emit('zoom', 0)">
				{{ Math.round(zoom * 100) }} %
			</button>
			<button type="button" class="nb-tool" title="Vergrößern" aria-label="Vergrößern" @click="$emit('zoom', 1)">+</button>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	tool: { type: String, required: true },
	color: { type: String, required: true },
	size: { type: Number, required: true },
	editor: { type: Object, default: null },
	editorTick: { type: Number, default: 0 },
	canUndo: { type: Boolean, default: false },
	canRedo: { type: Boolean, default: false },
	zoom: { type: Number, default: 1 },
	readOnly: { type: Boolean, default: false },
})

defineEmits(['update:tool', 'update:color', 'update:size', 'insert-image', 'undo', 'redo', 'zoom'])

const ICONS = {
	text: '<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',
	pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
	highlighter: '<path d="M9 11l-5 5v3h3l5-5"/><path d="M9 11l6-6 4 4-6 6z"/><path d="M14 20h6"/>',
	eraser: '<path d="M7 20h10"/><path d="M5 14l8-8a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-7 7H9z"/><path d="M9 10l6 6"/>',
	lasso: '<path d="M12 4c5 0 8 2.5 8 5.5S16.4 15 12 15 4 12.5 4 9.5 7 4 12 4z" stroke-dasharray="3 3"/><path d="M7 14c-1 2 0 4 2 5"/>',
	image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
	undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
	redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',
	bullet: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
	ordered: '<path d="M10 6h10M10 12h10M10 18h10M4 4h1v4M4 8h2M4 14h2l-2 3h2"/>',
	task: '<rect x="3" y="4" width="6" height="6" rx="1"/><path d="m4.5 7 1 1 2-2M12 7h9M3 16h6M12 16h9"/>',
	table: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/>',
	marker: '<path d="M4 20h16" stroke="#f5d90a" stroke-width="4"/><path d="M8 16 14 4l4 2-6 12z"/>',
}

const tools = [
	{ id: 'text', label: 'Schreiben und auswählen', icon: ICONS.text },
	{ id: 'pen', label: 'Stift', icon: ICONS.pen },
	{ id: 'highlighter', label: 'Textmarker', icon: ICONS.highlighter },
	{ id: 'eraser', label: 'Radierer', icon: ICONS.eraser },
	{ id: 'lasso', label: 'Lasso-Auswahl', icon: ICONS.lasso },
]

const PEN_COLORS = ['#1f2937', '#2563eb', '#dc2626', '#16a34a', '#9333ea', '#ea580c']
const HIGHLIGHTER_COLORS = ['#facc15', '#4ade80', '#38bdf8', '#f472b6', '#fb923c']

const SIZES = {
	pen: [{ value: 2, dot: 4, label: 'Fein' }, { value: 4, dot: 7, label: 'Mittel' }, { value: 8, dot: 11, label: 'Breit' }],
	highlighter: [{ value: 14, dot: 7, label: 'Schmal' }, { value: 22, dot: 11, label: 'Breit' }],
}

const palette = computed(() => props.tool === 'highlighter' ? HIGHLIGHTER_COLORS : PEN_COLORS)
const sizes = computed(() => SIZES[props.tool] ?? SIZES.pen)

const formats = [
	{ id: 'bold', label: 'Fett', text: 'F', textClass: 'is-bold', run: (c) => c.toggleBold() },
	{ id: 'italic', label: 'Kursiv', text: 'K', textClass: 'is-italic', run: (c) => c.toggleItalic() },
	{ id: 'underline', label: 'Unterstrichen', text: 'U', textClass: 'is-underline', run: (c) => c.toggleUnderline() },
	{ id: 'strike', label: 'Durchgestrichen', text: 'S', textClass: 'is-strike', run: (c) => c.toggleStrike() },
	{ id: 'h1', label: 'Überschrift 1', text: 'Ü1', active: ['heading', { level: 1 }], run: (c) => c.toggleHeading({ level: 1 }) },
	{ id: 'h2', label: 'Überschrift 2', text: 'Ü2', active: ['heading', { level: 2 }], run: (c) => c.toggleHeading({ level: 2 }) },
	{ id: 'bulletList', label: 'Aufzählung', icon: ICONS.bullet, run: (c) => c.toggleBulletList() },
	{ id: 'orderedList', label: 'Nummerierung', icon: ICONS.ordered, run: (c) => c.toggleOrderedList() },
	{ id: 'taskList', label: 'Aufgabenliste', icon: ICONS.task, run: (c) => c.toggleTaskList() },
	{ id: 'highlight', label: 'Hervorheben', icon: ICONS.marker, run: (c) => c.toggleHighlight({ color: '#fef08a' }) },
	{ id: 'table', label: 'Tabelle einfügen', icon: ICONS.table, active: ['table'], run: (c) => c.insertTable({ rows: 3, cols: 3, withHeaderRow: true }) },
]

function isActive(format) {
	// editorTick is read so the active state is recomputed after every editor transaction
	return props.editorTick >= 0 && props.editor.isActive(...(format.active ?? [format.id]))
}
</script>
