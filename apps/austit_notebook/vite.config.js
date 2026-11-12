/**
 * SPDX-FileCopyrightText: 2026 austit.de
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// Builds js/notebook.mjs and css/notebook.css, the files loaded by PageController.
export default defineConfig({
	plugins: [vue()],
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
	build: {
		outDir: '.',
		emptyOutDir: false,
		sourcemap: false,
		cssCodeSplit: false,
		lib: {
			entry: 'src/main.js',
			formats: ['es'],
			fileName: () => 'js/notebook.mjs',
			cssFileName: 'css/notebook',
		},
		rollupOptions: {
			output: {
				codeSplitting: false,
				assetFileNames: 'css/notebook[extname]',
			},
		},
	},
})
