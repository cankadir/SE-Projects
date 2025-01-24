import supabase from '$lib/supabaseClient';

export async function load({ fetch, params }) {
    
    const { id } = params;

    const { data, error } = await supabase
        .storage
        .from("2263_websiteImgs")
        .list( `website_images/${id}` );

    return {
        imgs: data
    }

}