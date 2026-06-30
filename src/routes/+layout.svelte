<script>
	import './styles.css';
	import Navbar from '$lib/components/component_navbar.svelte';
	import Footer from '$lib/components/component_footer.svelte';
	import '@fontsource-variable/source-sans-3';

	let { children } = $props();
</script>

<div class="app">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
