<script>
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	// let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		console.log(session);
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />
