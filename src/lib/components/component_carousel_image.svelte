<script>
// @ts-nocheck
	import { onMount } from 'svelte';

	export let src;

	let loaded = false;
	let imgEl;

	onMount(() => {
		if (imgEl?.complete && imgEl.naturalWidth > 0) {
			loaded = true;
		}
	});
</script>

<div class="slide-wrap" class:is-loaded={loaded}>
	{#if !loaded}
		<div class="slide-loader" aria-hidden="true">
			<div class="spinner"></div>
		</div>
	{/if}
	<img
		bind:this={imgEl}
		class="carousel-images"
		class:loaded
		{src}
		alt="project"
		on:load={() => (loaded = true)}
		on:error={() => (loaded = true)}
	/>
</div>

<style>
	.slide-wrap {
		position: relative;
		width: 100%;
	}

	.slide-wrap:not(.is-loaded) {
		min-height: 40rem;
	}

	.slide-loader {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsl(0, 0%, 90%);
		z-index: 1;
	}

	.spinner {
		width: 2rem;
		height: 2rem;
		border: 3px solid hsl(0, 0%, 82%);
		border-top-color: var(--orange);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.carousel-images {
		object-fit: contain;
		width: 100%;
		height: 100%;
		max-height: 40rem !important;
		opacity: 0;
		transition: opacity 0.25s ease;
	}

	.carousel-images.loaded {
		opacity: 1;
	}
</style>
