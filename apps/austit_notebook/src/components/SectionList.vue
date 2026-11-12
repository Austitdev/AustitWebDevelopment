<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<ul class="nb-nav__list">
		<li v-for="section in sections" :key="section.id">
			<NavItem
				:node="section"
				:active="section.id === sectionId"
				:editable="section.canWrite"
				:deletable="section.canWrite"
				kind="section"
				@select="$emit('select', section)"
				@rename="(name) => $emit('rename', { id: section.id, name })"
				@remove="$emit('remove', { id: section.id })" />
		</li>
	</ul>
</template>

<script setup>
import NavItem from './NavItem.vue'

defineProps({
	sections: { type: Array, required: true },
	sectionId: { type: Number, default: null },
})

defineEmits(['select', 'rename', 'remove'])
</script>
