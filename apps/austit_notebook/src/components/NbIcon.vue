<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<svg class="nb-icon" viewBox="0 0 24 24" aria-hidden="true" v-html="PATHS[name]" />
</template>

<script setup>
/** Outline icons on a 24px grid, drawn with the current text color */
const PATHS = {
	panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
	plus: '<path d="M12 5v14M5 12h14"/>',
	edit: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
	trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>',
	users: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
	chevron: '<path d="m9 6 6 6-6 6"/>',
	book: '<path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M8 3v18M12 8h4"/>',
}

defineProps({
	name: { type: String, required: true },
})
</script>
