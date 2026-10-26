import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY } from '$app/env/public';

/** @param {typeof fetch} fetch */
export async function createSupabase(fetch) {
	/** @type {import('@supabase/supabase-js').SupabaseClientOptions<'public'>} */
	const options = {
		global: { fetch }
	};

	return createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY, options);
}
