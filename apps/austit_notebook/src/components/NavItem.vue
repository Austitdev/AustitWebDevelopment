<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-nav-item" :class="['nb-nav-item--' + kind, { 'nb-nav-item--active': active }]" @contextmenu.prevent.stop="openContextMenu">
		<form v-if="editing" class="nb-nav-item__form" @submit.prevent="submit">
			<input
				ref="input"
				v-model="draft"
				class="nb-nav-item__input"
				:aria-label="'Name für ' + node.name"
				maxlength="120"
				@blur="submit"
				@keydown.esc.prevent="editing = false">
		</form>
		<template v-else-if="confirming">
			<span class="nb-nav-item__confirm">Löschen?</span>
			<button type="button" class="nb-nav-item__action nb-nav-item__action--danger" @click="$emit('remove'); confirming = false">Ja</button>
			<button type="button" class="nb-nav-item__action" @click="confirming = false">Nein</button>
		</template>
		<template v-else>
			<button
				type="button"
				class="nb-nav-item__label"
				:aria-current="active ? 'true' : undefined"
				@click="$emit('select')"
				@dblclick="editable && startEditing()">
				<NbIcon v-if="kind === 'notebook'" name="book" />
				<span class="nb-nav-item__name">{{ node.name }}</span>
				<span v-if="badge" class="nb-nav-item__badge">{{ badge }}</span>
			</button>
			<slot name="actions" />
			<button v-if="editable" type="button" class="nb-nav-item__action" title="Umbenennen" :aria-label="node.name + ' umbenennen'" @click="startEditing"><NbIcon name="edit" /></button>
			<button v-if="deletable" type="button" class="nb-nav-item__action" title="Löschen" :aria-label="node.name + ' löschen'" @click="confirming = true"><NbIcon name="trash" /></button>
		</template>
		<div
			v-if="contextMenu"
			class="nb-context-menu"
			role="menu"
			:style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
			@click.stop>
			<button type="button" role="menuitem" @click="selectFromMenu">Öffnen</button>
			<button v-if="editable" type="button" role="menuitem" @click="renameFromMenu">Umbenennen</button>
			<button v-if="deletable" type="button" role="menuitem" class="nb-context-menu__danger" @click="removeFromMenu">Löschen</button>
		</div>
	</div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'
import NbIcon from './NbIcon.vue'

const props = defineProps({
	node: { type: Object, required: true },
	kind: { type: String, required: true },
	active: { type: Boolean, default: false },
	editable: { type: Boolean, default: true },
	deletable: { type: Boolean, default: true },
	badge: { type: String, default: null },
})

const emit = defineEmits(['select', 'rename', 'remove'])

const editing = ref(false)
const confirming = ref(false)
const draft = ref('')
const input = ref(null)
const contextMenu = ref(null)

async function startEditing() {
	draft.value = props.node.name
	editing.value = true
	await nextTick()
	input.value?.select()
}

function submit() {
	if (!editing.value) {
		return
	}
	editing.value = false
	const name = draft.value.trim()
	if (name !== '' && name !== props.node.name) {
		emit('rename', name)
	}
}

function openContextMenu(event) {
	contextMenu.value = {
		x: Math.min(event.clientX, window.innerWidth - 180),
		y: Math.min(event.clientY, window.innerHeight - 140),
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

function selectFromMenu() {
	closeContextMenu()
	emit('select')
}

async function renameFromMenu() {
	closeContextMenu()
	await startEditing()
}

function removeFromMenu() {
	closeContextMenu()
	confirming.value = true
}

onBeforeUnmount(closeContextMenu)
</script>
