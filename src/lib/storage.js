// @ts-nocheck
import { PUBLIC_SUPABASE_URL } from '$app/env/public';

const BUCKET = '2263_websiteImgs';

/** Public URL for an object in the site's storage bucket, e.g. `website_images/mjd/cover.jpg` */
export const storageUrl = (path) => `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
