<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div
		class="nb-element nb-image"
		:class="{ 'nb-element--selected': selected }"
		:style="{ left: element.x + 'px', top: element.y + 'px', width: element.width + 'px', height: element.height + 'px' }"
		@pointerdown.stop.prevent="$emit('drag-start', $event)">
		<img :src="src" alt="" draggable="false">
		<div class="nb-resize nb-resize--corner" title="Größe ändern" @pointerdown.stop.prevent="$emit('resize-start', $event)" />
	</div>
</template>

<script setup>
defineProps({
	element: { type: Object, required: true },
	src: { type: String, required: true },
	selected: { type: Boolean, default: false },
})

defineEmits(['drag-start', 'resize-start'])
</script>
