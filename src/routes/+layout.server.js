// @ts-nocheck
import supabase from '$lib/supabaseClient';

export async function load({ fetch }) {

  const { data, error } = await supabase
    .from('2263 website content')
    .select('*')
    .order('code', { ascending: true });;

  return {
    props: { data }
  };
}