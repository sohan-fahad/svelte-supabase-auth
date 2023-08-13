
export const load = async ({ locals: { getSession } }) => {

    // To make the session available across the UI, including pages and layouts, it is crucial to pass the session as a parameter in the root layout's server load function.
    return {
        session: await getSession()
    }
};