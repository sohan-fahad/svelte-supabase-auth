import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { Handle } from "@sveltejs/kit";
import { ENV } from "./ENV";

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseKey: ENV.SUPABASE_ANON_KEY,
        supabaseUrl: ENV.SUPABASE_URL,
        event
    })

    /**
   * a little helper that is written for convenience so that instead
   * of calling `const { data: { session } } = await supabase.auth.getSession()`
   * you just call this `await getSession()`
   */

    event.locals.getSession = async () => {
        const { data: { session } } = await event.locals.supabase.auth.getSession();

        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}