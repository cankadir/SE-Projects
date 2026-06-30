<script>
// @ts-nocheck
	import { onMount } from 'svelte';

	export let project;

	let mounted = false;
	let loaded = false;
	let imgEl;

	const src = `https://mhdoyvmbgsrbsifouhxo.supabase.co/storage/v1/object/public/2263_websiteImgs/website_images/${project['short_url']}/cover.jpg`;

	onMount(() => {
		mounted = true;
	});

	$: if (mounted && imgEl?.complete && imgEl.naturalWidth > 0) {
		loaded = true;
	}
</script>

<div class="card">
	{#if !loaded}
		<div class="card-loader" aria-hidden="true">
			<div class="spinner"></div>
		</div>
	{/if}
	{#if mounted}
		<img
			bind:this={imgEl}
			class="card-img"
			class:loaded
			{src}
			alt=""
			aria-hidden="true"
			on:load={() => (loaded = true)}
			on:error={() => (loaded = true)}
		/>
	{/if}
	<div class="tint">
		<p>{project.name}</p>
		<a id="tolink" href="projects/{project.short_url}" aria-label="View {project.name}"><span class="link"></span></a>
	</div>
</div>

<style>
	.card {
		position: relative;
		height: auto;
		aspect-ratio: 4/2.5;
		cursor: pointer;
		box-sizing: border-box;
		overflow: hidden;
		background-color: hsl(0, 0%, 90%);
	}

	.card-loader {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsl(0, 0%, 90%);
		z-index: 0;
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

	.card-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0;
		transition: opacity 0.25s ease;
	}

	.card-img.loaded {
		opacity: 1;
	}

	.link {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.card p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		display: none;
		color: white;
		font-size: 1.1em;
		font-weight: bold;
		pointer-events: none;
		margin: auto;
	}

	.card:hover p {
		display: block;
		transition: linear 0.2s;
	}

	.tint {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: var(--orange);
		filter: opacity(0);
		padding: 3rem;
		box-sizing: border-box;
	}

	.tint:hover {
		filter: opacity(0.85);
		transition: linear 0.2s;
	}
</style>
