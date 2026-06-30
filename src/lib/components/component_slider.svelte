<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import CarouselImage from '$lib/components/component_carousel_image.svelte';

	export let images = [];

	let Carousel = null;
	let mounted = false;
	let carousel;

	onMount(async () => {
		Carousel = (await import('svelte-carousel')).default;
		mounted = true;
	});

	const handleNextClick = () => carousel?.goToNext();
	const handlePrevClick = () => carousel?.goToPrev();
</script>

<div class="project-images">
	{#if mounted && Carousel}
		<button class="prev-button" on:click={handlePrevClick} aria-label="Previous image">&#10094;</button>
		<svelte:component
			this={Carousel}
			bind:this={carousel}
			arrows={false}
			itemsToShow={1}
			itemsToScroll={1}
			loop={true}
		>
			{#each images as image}
				<CarouselImage src={image} />
			{/each}
		</svelte:component>
		<button class="next-button" on:click={handleNextClick} aria-label="Next image">&#10095;</button>
	{:else}
		<div class="gallery-placeholder" aria-hidden="true">
			<div class="spinner"></div>
		</div>
	{/if}
</div>

<style>
	.project-images {
		position: relative;
		width: 100%;
	}

	.gallery-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 640px;
		background-color: hsl(0, 0%, 90%);
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

	.prev-button,
	.next-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		cursor: pointer;
		padding: 10px;
		font-size: 25px;
		z-index: 100;
	}

	.prev-button {
		left: 0;
	}

	.next-button {
		right: 0;
	}
</style>
