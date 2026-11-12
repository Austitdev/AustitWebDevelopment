<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<nav class="nb-nav" aria-label="Notizbücher">
		<section class="nb-nav__column">
			<header class="nb-nav__header">
				<h2>Notizbücher</h2>
				<button type="button" class="nb-icon-button" title="Neues Notizbuch" aria-label="Neues Notizbuch" @click="$emit('create', { type: 'notebook' })">+</button>
			</header>
			<ul class="nb-nav__list">
				<li v-for="notebook in notebooks" :key="notebook.id">
					<NavItem
						:node="notebook"
						:active="notebook.id === notebookId"
						kind="notebook"
						@select="$emit('select', { notebookId: notebook.id })"
						@rename="(name) => $emit('rename', { id: notebook.id, name })"
						@remove="$emit('remove', { id: notebook.id, label: 'Notizbuch „' + notebook.name + '“' })" />
					<ul v-if="notebook.id === notebookId" class="nb-nav__list nb-nav__list--nested">
						<li v-for="section in notebook.sections" :key="section.id">
							<NavItem
								:node="section"
								:active="section.id === sectionId"
								kind="section"
								@select="$emit('select', { notebookId: notebook.id, sectionId: section.id })"
								@rename="(name) => $emit('rename', { id: section.id, name })"
								@remove="$emit('remove', { id: section.id, label: 'Abschnitt „' + section.name + '“' })" />
						</li>
						<li>
							<button type="button" class="nb-nav__add" @click="$emit('create', { type: 'section', parentId: notebook.id })">
								+ Abschnitt
							</button>
						</li>
					</ul>
				</li>
			</ul>
			<p v-if="notebooks.length === 0" class="nb-nav__empty">Noch keine Notizbücher.</p>
		</section>

		<section v-if="currentSection" class="nb-nav__column nb-nav__column--pages">
			<header class="nb-nav__header">
				<h2>{{ currentSection.name }}</h2>
				<button type="button" class="nb-icon-button" title="Neue Seite" aria-label="Neue Seite" @click="$emit('create', { type: 'page', parentId: currentSection.id })">+</button>
			</header>
			<ul class="nb-nav__list">
				<li v-for="pageItem in currentSection.pages" :key="pageItem.id">
					<NavItem
						:node="pageItem"
						:active="pageItem.id === pageId"
						kind="page"
						@select="$emit('select', { notebookId, sectionId: currentSection.id, pageId: pageItem.id })"
						@rename="(name) => $emit('rename', { id: pageItem.id, name })"
						@remove="$emit('remove', { id: pageItem.id, label: 'Seite „' + pageItem.name + '“' })" />
				</li>
			</ul>
			<p v-if="currentSection.pages.length === 0" class="nb-nav__empty">Noch keine Seiten.</p>
		</section>
	</nav>
</template>

<script setup>
import { computed } from 'vue'
import NavItem from './NavItem.vue'

const props = defineProps({
	notebooks: { type: Array, required: true },
	notebookId: { type: Number, default: null },
	sectionId: { type: Number, default: null },
	pageId: { type: Number, default: null },
})

defineEmits(['select', 'create', 'rename', 'remove'])

const currentSection = computed(() => props.notebooks
	.find((n) => n.id === props.notebookId)?.sections
	.find((s) => s.id === props.sectionId) ?? null)
</script>
