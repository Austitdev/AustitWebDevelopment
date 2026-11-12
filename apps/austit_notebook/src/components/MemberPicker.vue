<!--
 - SPDX-FileCopyrightText: 2026 austit.de
 - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="nb-members">
		<label class="nb-field">
			<span>Personen oder Gruppen (z. B. eine Klasse) hinzufügen</span>
			<input v-model="search" type="search" placeholder="Name oder Gruppe suchen …" @input="onSearch">
		</label>

		<ul v-if="results.length > 0" class="nb-members__results">
			<li v-for="result in results" :key="result.type + ':' + result.id">
				<span class="nb-members__name">
					{{ result.name }}
					<small>{{ result.type === 'group' ? 'Gruppe' : result.id }}</small>
				</span>
				<button type="button" class="nb-button" @click="add(result, 'student')">als Schüler:in</button>
				<button type="button" class="nb-button" @click="add(result, 'teacher')">als Lehrkraft</button>
			</li>
		</ul>
		<p v-else-if="search.trim().length >= 2 && !searching" class="nb-muted">Keine Treffer.</p>

		<h3 class="nb-members__heading">Mitglieder</h3>
		<p v-if="modelValue.length === 0" class="nb-muted">Noch keine Mitglieder. Du selbst bist automatisch Lehrkraft.</p>
		<ul class="nb-members__list">
			<li v-for="member in modelValue" :key="member.type + ':' + member.id">
				<span class="nb-members__name">
					{{ member.name ?? member.id }}
					<small>{{ member.type === 'group' ? 'Gruppe' : member.id }}</small>
				</span>
				<select :value="member.role" :aria-label="'Rolle von ' + (member.name ?? member.id)" @change="setRole(member, $event.target.value)">
					<option value="student">Schüler:in</option>
					<option value="teacher">Lehrkraft</option>
				</select>
				<button type="button" class="nb-icon-button" :aria-label="(member.name ?? member.id) + ' entfernen'" @click="remove(member)">×</button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../api.js'

const props = defineProps({
	modelValue: { type: Array, required: true },
})

const emit = defineEmits(['update:modelValue', 'error'])

const search = ref('')
const results = ref([])
const searching = ref(false)
let timer = null

function onSearch() {
	clearTimeout(timer)
	timer = setTimeout(async () => {
		const term = search.value.trim()
		if (term.length < 2) {
			results.value = []
			return
		}
		searching.value = true
		try {
			const known = new Set(props.modelValue.map((m) => m.type + ':' + m.id))
			results.value = (await api.searchPrincipals(term)).results.filter((r) => !known.has(r.type + ':' + r.id))
		} catch (error) {
			emit('error', error.message)
		} finally {
			searching.value = false
		}
	}, 250)
}

function add(principal, role) {
	emit('update:modelValue', [...props.modelValue, { ...principal, role }])
	results.value = results.value.filter((r) => r !== principal)
}

function setRole(member, role) {
	emit('update:modelValue', props.modelValue.map((m) => m === member ? { ...m, role } : m))
}

function remove(member) {
	emit('update:modelValue', props.modelValue.filter((m) => m !== member))
}
</script>
