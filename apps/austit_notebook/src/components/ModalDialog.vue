<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-modal" @mousedown.self="$emit('close')">
		<div
			ref="dialog"
			class="nb-modal__dialog"
			role="dialog"
			aria-modal="true"
			:aria-labelledby="titleId"
			@keydown.esc.stop="$emit('close')">
			<header class="nb-modal__header">
				<h2 :id="titleId">{{ title }}</h2>
				<button type="button" class="nb-icon-button" aria-label="Schließen" @click="$emit('close')">×</button>
			</header>
			<div class="nb-modal__body">
				<slot />
			</div>
			<footer class="nb-modal__footer">
				<slot name="footer" />
			</footer>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({
	title: { type: String, required: true },
})

defineEmits(['close'])

const titleId = 'nb-modal-' + Math.random().toString(36).slice(2)
const dialog = ref(null)

onMounted(() => {
	dialog.value?.querySelector('input, select, button:not(.nb-icon-button)')?.focus()
})
</script>
