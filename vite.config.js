import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			compilerOptions: {
				compatibility: {
					componentApi: 4
				}
			}
		})
	],
	server: {
		// /mnt/c on WSL does not emit reliable fs events; without polling Vite serves stale modules
		watch: { usePolling: true, interval: 1000 }
	}
});
