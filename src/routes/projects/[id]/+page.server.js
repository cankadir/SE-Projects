// @ts-nocheck
import { marked } from 'marked';
import { createSupabase } from '#lib/supabaseClient.js';
import { storageUrl } from '#lib/storage.js';

// marked always emits links as `<a href="...">`, so this is safe to key on
const markdown = (text) =>
	marked
		.parse(text, { breaks: true })
		.replaceAll('<a href="', '<a target="_blank" rel="noreferrer" href="');

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const { id } = params;
	const supabase = await createSupabase(fetch);

	const [{ data: rows }, { data: imgs }] = await Promise.all([
		supabase.from('2263 website content').select('*').eq('short_url', id).limit(1),
		supabase.storage.from('2263_websiteImgs').list(`website_images/${id}`)
	]);

	const match = rows?.[0];

	const imageLinks = (imgs ?? [])
		.filter((file) => file.name !== 'cover.jpg')
		.map((file) => storageUrl(`website_images/${id}/${file.name}`));

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
