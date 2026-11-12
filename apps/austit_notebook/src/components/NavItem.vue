<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-nav-item" :class="['nb-nav-item--' + kind, { 'nb-nav-item--active': active }]">
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
				@dblclick="startEditing">
				{{ node.name }}
			</button>
			<button type="button" class="nb-nav-item__action" title="Umbenennen" :aria-label="node.name + ' umbenennen'" @click="startEditing">✎</button>
			<button type="button" class="nb-nav-item__action" title="Löschen" :aria-label="node.name + ' löschen'" @click="confirming = true">🗑</button>
		</template>
	</div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const props = defineProps({
	node: { type: Object, required: true },
	kind: { type: String, required: true },
	active: { type: Boolean, default: false },
})

const emit = defineEmits(['select', 'rename', 'remove'])

const editing = ref(false)
const confirming = ref(false)
const draft = ref('')
const input = ref(null)

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
</script>
