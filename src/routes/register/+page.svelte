<script>
	import { goto } from '$app/navigation';
	import { AuthApiError } from '@supabase/supabase-js';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email;
	let password;

	const handleSignUp = async () => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});

		if (error) {
			console.log(error);
		} else {
			console.log(data);
			await goto('/');
		}
	};
</script>

<form on:submit={handleSignUp}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button>Sign up</button>
</form>
