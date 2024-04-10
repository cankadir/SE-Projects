import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: '200.html',
        }),

		paths: {
            base: dev ? "" : "/SE-Projects",
        },

		// prerender: { entries: ['/projects/soh','/projects/dot-transit-map','/projects/waba','/projects/panorama','/projects/bushwickinlet','/projects/seamucus','/projects/wtocny','/projects/floodnetwatch', '/projects/hep', '/projects/hap','/projects/sitexsite','/projects/sitexsite','/projects/saline'] }
	}
};

export default config;
