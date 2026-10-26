<script>
	import './styles.css';
	import Navbar from '#lib/components/component_navbar.svelte';
	import Footer from '#lib/components/component_footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
