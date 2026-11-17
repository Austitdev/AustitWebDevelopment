<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div
		ref="root"
		class="nb-element nb-text"
		:data-element-id="element.id"
		:class="{ 'nb-element--focused': focused, 'nb-element--selected': selected }"
		:style="{ left: element.x + 'px', top: element.y + 'px', width: element.width + 'px' }">
		<div v-if="editable" class="nb-handle" title="Verschieben" @pointerdown.stop.prevent="$emit('drag-start', $event)" />
		<EditorContent v-if="editor" :editor="editor" class="nb-text__content" />
		<div v-if="editable" class="nb-resize nb-resize--x" title="Breite ändern" @pointerdown.stop.prevent="$emit('resize-start', $event)" />
	</div>
</template>

<script setup>
import Highlight from '@tiptap/extension-highlight'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TableKit } from '@tiptap/extension-table'
import { Color, TextStyle } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { isEmptyDoc } from '../model.js'

const props = defineProps({
	element: { type: Object, required: true },
	autofocus: { type: Boolean, default: false },
	editable: { type: Boolean, default: true },
	initialText: { type: String, default: '' },
	selected: { type: Boolean, default: false },
})

const emit = defineEmits(['change', 'focus', 'blur', 'remove', 'height', 'drag-start', 'resize-start'])

const root = ref(null)
const editor = shallowRef(null)
const focused = ref(false)
let lastEmitted = props.element.doc
let resizeObserver = null

onMounted(() => {
	editor.value = new Editor({
		content: props.element.doc ?? '',
		editable: props.editable,
		extensions: [
			StarterKit.configure({ link: { openOnClick: false, autolink: true } }),
			TaskList,
			TaskItem.configure({ nested: true }),
			TableKit.configure({ table: { resizable: false } }),
			Highlight.configure({ multicolor: true }),
			TextStyle,
			Color,
		],
		onUpdate: ({ editor: instance }) => {
			lastEmitted = instance.getJSON()
			emit('change', lastEmitted)
		},
		onFocus: ({ editor: instance }) => {
			focused.value = true
			emit('focus', instance)
		},
		onBlur: ({ editor: instance }) => {
			focused.value = false
			emit('blur', instance)
			if (isEmptyDoc(instance.getJSON())) {
				emit('remove')
			}
		},
	})

	// Focus synchronously so that typing right after the click is not lost.
	if (props.autofocus) {
		const text = props.initialText
		editor.value.commands.focus('end')
		if (text) {
			editor.value.commands.insertContent(text)
		}
	}

	resizeObserver = new ResizeObserver(() => {
		if (root.value) {
			emit('height', root.value.offsetHeight)
		}
	})
	resizeObserver.observe(root.value)
})

watch(() => props.element.doc, (doc) => {
	if (editor.value && doc !== lastEmitted) {
		lastEmitted = doc
		editor.value.commands.setContent(doc ?? '', { emitUpdate: false })
	}
})

onBeforeUnmount(() => {
	resizeObserver?.disconnect()
	editor.value?.destroy()
})
</script>
