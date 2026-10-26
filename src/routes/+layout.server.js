// @ts-nocheck
import { createSupabase } from '#lib/supabaseClient.js';

export async function load({ fetch }) {
	const supabase = await createSupabase(fetch);

	const { data } = await supabase
		.from('2263 website content')
		.select('*')
		.order('code', { ascending: true });

	return {
		projects: data ?? []
	};
}
