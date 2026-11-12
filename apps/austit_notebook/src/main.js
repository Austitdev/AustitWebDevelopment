/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const mount = document.getElementById('austit-notebook')
if (mount) {
	createApp(App).mount(mount)
}
