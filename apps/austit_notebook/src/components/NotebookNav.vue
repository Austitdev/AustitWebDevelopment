<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<nav class="nb-nav" aria-label="Notizbücher">
		<section class="nb-nav__column">
			<header class="nb-nav__header">
				<h2>Notizbücher</h2>
				<button type="button" class="nb-icon-button" title="Neues Notizbuch" aria-label="Neues Notizbuch" @click="$emit('create-notebook')"><NbIcon name="plus" /></button>
			</header>
			<ul class="nb-nav__list">
				<li v-for="notebook in notebooks" :key="notebook.id">
					<NavItem
						:node="notebook"
						:active="notebook.id === notebookId"
						:badge="notebook.kind === 'class' ? 'Klasse' : null"
						:editable="notebook.canManage"
						:deletable="notebook.canDelete"
						kind="notebook"
						@select="$emit('select', { notebookId: notebook.id })"
						@rename="(name) => $emit('rename', { id: notebook.id, name })"
						@remove="$emit('remove', { id: notebook.id })">
						<template v-if="notebook.kind === 'class' && notebook.canManage" #actions>
							<button type="button" class="nb-nav-item__action" title="Mitglieder" :aria-label="'Mitglieder von ' + notebook.name" @click="$emit('members', notebook)"><NbIcon name="users" /></button>
						</template>
					</NavItem>

					<div v-if="notebook.id === notebookId" class="nb-nav__nested">
						<!-- Personal notebook: sections directly -->
						<template v-if="notebook.kind === 'personal'">
							<SectionList :sections="notebook.sections" :section-id="sectionId" @select="selectSection(notebook, $event)" @rename="$emit('rename', $event)" @remove="$emit('remove', $event)" />
							<button type="button" class="nb-nav__add" @click="$emit('create', { type: 'section', parentId: notebook.id })"><NbIcon name="plus" /> Abschnitt hinzufügen</button>
						</template>

						<!-- Class notebook: areas, and one area per student for teachers -->
						<template v-else>
							<div v-for="group in notebook.groups" :key="group.id" class="nb-nav__group" :class="'nb-nav__group--' + group.area">
								<h3 class="nb-nav__group-title">
									{{ group.name }}
									<span v-if="!group.canWrite" class="nb-nav__readonly">nur lesen</span>
								</h3>
								<template v-if="group.students">
									<p v-if="group.students.length === 0" class="nb-nav__empty">Noch keine Schüler:innen. Über „Mitglieder“ hinzufügen.</p>
									<div v-for="student in group.students" :key="student.id" class="nb-nav__student">
										<button
											type="button"
											class="nb-nav__student-toggle"
											:aria-expanded="isStudentOpen(student)"
											@click="toggleStudent(student)">
											<NbIcon name="chevron" :class="{ 'nb-icon--open': isStudentOpen(student) }" />
											{{ student.name }}
										</button>
										<template v-if="isStudentOpen(student)">
											<SectionList :sections="student.sections" :section-id="sectionId" @select="selectSection(notebook, $event)" @rename="$emit('rename', $event)" @remove="$emit('remove', $event)" />
											<button type="button" class="nb-nav__add" @click="$emit('create', { type: 'section', parentId: student.id })"><NbIcon name="plus" /> Abschnitt hinzufügen</button>
										</template>
									</div>
								</template>
								<template v-else>
									<SectionList :sections="group.sections" :section-id="sectionId" @select="selectSection(notebook, $event)" @rename="$emit('rename', $event)" @remove="$emit('remove', $event)" />
									<button v-if="group.canWrite" type="button" class="nb-nav__add" @click="$emit('create', { type: 'section', parentId: group.id })"><NbIcon name="plus" /> Abschnitt hinzufügen</button>
								</template>
							</div>
						</template>
					</div>
				</li>
			</ul>
			<p v-if="notebooks.length === 0" class="nb-nav__empty">Noch keine Notizbücher.</p>
		</section>

		<section v-if="current" class="nb-nav__column nb-nav__column--pages">
			<header class="nb-nav__header">
				<h2>{{ current.student ? current.student.name + ' · ' : '' }}{{ current.section.name }}</h2>
				<button
					v-if="current.section.canWrite"
					type="button"
					class="nb-icon-button"
					title="Neue Seite"
					aria-label="Neue Seite"
					@click="$emit('create', { type: 'page', parentId: current.section.id })">
					<NbIcon name="plus" />
				</button>
			</header>
			<ul class="nb-nav__list">
				<li v-for="pageItem in current.section.pages" :key="pageItem.id">
					<NavItem
						:node="pageItem"
						:active="pageItem.id === pageId"
						:editable="current.section.canWrite"
						:deletable="current.section.canWrite"
						kind="page"
						@select="$emit('select', { notebookId, sectionId: current.section.id, pageId: pageItem.id })"
						@rename="(name) => $emit('rename', { id: pageItem.id, name })"
						@remove="$emit('remove', { id: pageItem.id })" />
				</li>
			</ul>
			<p v-if="current.section.pages.length === 0" class="nb-nav__empty">Noch keine Seiten.</p>
		</section>
	</nav>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import { flattenSections } from '../model.js'
import NavItem from './NavItem.vue'
import NbIcon from './NbIcon.vue'
import SectionList from './SectionList.vue'

const props = defineProps({
	notebooks: { type: Array, required: true },
	notebookId: { type: Number, default: null },
	sectionId: { type: Number, default: null },
	pageId: { type: Number, default: null },
})

const emit = defineEmits(['select', 'create', 'create-notebook', 'rename', 'remove', 'members'])

const openStudents = reactive(new Set())

const currentNotebook = computed(() => props.notebooks.find((n) => n.id === props.notebookId) ?? null)
const current = computed(() => flattenSections(currentNotebook.value).find((e) => e.section.id === props.sectionId) ?? null)

watch(current, (entry) => {
	if (entry?.student) {
		openStudents.add(entry.student.id)
	}
}, { immediate: true })

function isStudentOpen(student) {
	return openStudents.has(student.id)
}

function toggleStudent(student) {
	if (openStudents.has(student.id)) {
		openStudents.delete(student.id)
	} else {
		openStudents.add(student.id)
	}
}

function selectSection(notebook, section) {
	emit('select', { notebookId: notebook.id, sectionId: section.id })
}
</script>
