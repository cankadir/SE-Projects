// @ts-nocheck
import { createSupabase } from '#lib/supabaseClient.js';

export async function load({ fetch }) {
	const supabase = await createSupabase(fetch);

	// only the fields the listing and filters need; the full row (text) is fetched per project
	const { data } = await supabase
		.from('2263 website content')
		.select('name, short_url, code, work_types, topics')
		.order('code', { ascending: true });

	return {
		projects: data ?? []
	};
}
