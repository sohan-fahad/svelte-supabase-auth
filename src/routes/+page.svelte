<script>
	export let data;

	let { supabase } = data;

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};

	const getUsers = async () => {
		const { data } = await supabase.from('Users').select('*');

		console.log(data);
	};

	const googleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline',
					prompt: 'consent'
				}
			}
		});

		console.log(data, 'data');
		console.log(error);
	};
</script>

<div>
	{#if data.session}
		<button on:click={handleSignOut}>Logout</button>
		<button on:click={getUsers}>get user data</button>
	{:else}
		<div>
			<button on:click={googleLogin}>googl signin</button>
			<a href="/login">Login</a>
			<a href="/register">Sing up</a>
		</div>
	{/if}
</div>
