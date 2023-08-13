<script>
	import { goto } from '$app/navigation';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email;
	let password;

	const handleSignIn = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			console.log(error);
			return;
		} else {
			console.log(data);
			await goto('/');
		}
	};
</script>

<form on:submit={handleSignIn}>
	<input name="email" bind:value={email} />
	<input type="password" name="password" bind:value={password} />
	<button>Sign up</button>
</form>
