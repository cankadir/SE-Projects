import { marked } from 'marked';
import { createSupabase } from '$lib/supabaseClient';

const STORAGE_BASE =
	'https://mhdoyvmbgsrbsifouhxo.supabase.co/storage/v1/object/public/2263_websiteImgs/website_images';

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
			html: marked.parse(match.text ?? '')
		},
		imageLinks
	};
}
