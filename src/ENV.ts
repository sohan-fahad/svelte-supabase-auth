import { env } from '$env/dynamic/public';

export const ENV = {
    SUPABASE_URL: env.PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: env.PUBLIC_SUPABASE_ANON_KEY
};