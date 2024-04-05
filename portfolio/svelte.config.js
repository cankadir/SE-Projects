// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        },
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			entries: ['/projects/soh','/projects/dot-transit-map','/projects/waba','/projects/panorama','/projects/bushwickinlet','/projects/seamucus','/projects/wtocny','/projects/floodnetwatch', '/projects/hep', '/projects/hap','/projects/sitexsite','/projects/sitexsite','/projects/saline']
			}
		}
	};

export default config;
