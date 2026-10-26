import { browser } from '$app/env';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY } from '$app/env/public';

/** @param {typeof fetch} fetch */
export async function createSupabase(fetch) {
	/** @type {import('@supabase/supabase-js').SupabaseClientOptions<'public'>} */
	const options = {
		global: { fetch }
	};

	if (!browser) {
		const { default: ws } = await import('ws');
		// node `ws` satisfies the runtime shape; its typings miss the DOM signature
		options.realtime = { transport: /** @type {any} */ (ws) };
	}

	return createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY, options);
}
