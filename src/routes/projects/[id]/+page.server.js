// @ts-nocheck
import { marked } from 'marked';
import { createSupabase } from '#lib/supabaseClient.js';

const STORAGE_BASE =
	'https://mhdoyvmbgsrbsifouhxo.supabase.co/storage/v1/object/public/2263_websiteImgs/website_images';

// marked always emits links as `<a href="...">`, so this is safe to key on
const markdown = (text) =>
	marked
		.parse(text, { breaks: true })
		.replaceAll('<a href="', '<a target="_blank" rel="noreferrer" href="');

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, parent }) {
	const { id } = params;
	const { projects } = await parent();
	const match = projects.find((entry) => entry.short_url === id);

	const supabase = await createSupabase(fetch);
	const { data: imgs } = await supabase.storage.from('2263_websiteImgs').list(`website_images/${id}`);

	const imageLinks = (imgs ?? [])
		.filter((file) => file.name !== 'cover.jpg')
		.map((file) => `${STORAGE_BASE}/${id}/${file.name}`);

	if (!match) {
		return { project: null, imageLinks };
	}

	return {
		project: {
			...match,
			html: markdown(match.text ?? '')
		},
		imageLinks
	};
}
