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

