<script>
	import './styles.css';
	import Navbar from '$lib/components/component_navbar.svelte';
	import '@fontsource-variable/source-sans-3';
</script>

<div class="app">
	<Navbar title="Studio 2263" />


	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 1280px;
		margin: 0 auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
