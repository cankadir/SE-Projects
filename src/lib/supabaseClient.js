import { createClient } from '@supabase/supabase-js';
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY } from '$env/static/public';

const supabase = createClient( PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY );

export default supabase;