import { browser } from '$app/environment';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY } from '$env/static/public';

/** @param {typeof fetch} fetch */
export async function createSupabase(fetch) {
	/** @type {import('@supabase/supabase-js').SupabaseClientOptions} */
	const options = {
		global: { fetch }
	};

	if (!browser) {
		const { default: ws } = await import('ws');
		options.realtime = { transport: ws };
	}

	return createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY, options);
}
