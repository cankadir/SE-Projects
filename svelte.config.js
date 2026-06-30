import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		compatibility: {
			componentApi: 4
		}
	},
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		env: {
			dir: "./"
		},
	}
};

export default config;
