
<script>
	// @ts-nocheck
	export let data;

	import SplideCarousel from '#lib/components/component_slider.svelte';

	const filled = (value) => (typeof value === 'string' ? value.trim() !== '' : Boolean(value));
	const list = (value) => (Array.isArray(value) ? value : [value]).filter(filled).join(' • ');
</script>

{#if data.project}
	<div class="project-container">
		<h2 class="project-title">{data.project.name}</h2>

		<div class="project-table">
			<div class="project-col">
				<div class="kunye">
					{#if filled(data.project.client)}
						<p><span class="label">Client:</span> {data.project.client}</p>
					{/if}
					{#if filled(data.project.year)}
						<p><span class="label">Year:</span> {data.project.year}</p>
					{/if}
					{#if filled(data.project['roles / scope'])}
						<p><span class="label">Project Scope:</span> {data.project['roles / scope']}</p>
					{/if}
					{#if list(data.project.work_types)}
						<p><span class="label">Work types:</span> {list(data.project.work_types)}</p>
					{/if}
					{#if list(data.project.topics)}
						<p><span class="label">Topics:</span> {list(data.project.topics)}</p>
					{/if}
					{#if filled(data.project.link)}
						<p>
							<span class="label">Link:</span>
							<a href={data.project.link} target="_blank" rel="noreferrer">Go to Project Site</a>
						</p>
					{/if}
				</div>
			</div>

			<div class="project-col">
				<div class="project-content project-text">{@html data.project.html}</div>
				{#if data.project.Collaborators}
					<p class="project-content collaborators">Collaborators: {data.project.Collaborators}</p>
				{/if}
			</div>
		</div>

		<div class="slide-carousel">
			{#if data.imageLinks.length}
				<SplideCarousel images={data.imageLinks} />
			{/if}
		</div>
	</div>
{:else}
	<p>Project does not exist...</p>
{/if}

<style>
	.project-container {
		margin: 2.1875rem 2.1875rem;
	}

	.project-title {
		font-size: 2rem;
		font-family: "Alright Sans Bold", sans-serif;
		color: #444;
		font-weight: 600;
	}

	.project-table {
		display: grid;
		grid-template-columns: 3fr 7fr;
		gap: 3rem;
		margin: 2.1875rem 0 0 0;
		font-size: 0.9rem;
		line-height: 1.5rem;
	}

	@media (max-width: 768px) {
		.project-title {
			font-size: 1.5rem;
			margin: 0.9375rem 0;
		}

		.project-container {
			margin: 1.5625rem 0;
		}

		.project-table {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.slide-carousel {
			margin: 0.9375rem 0 0 0 !important;
		}
	}

	.kunye p {
		margin: 0 0 0.5rem;
		font-size: 1rem;
		line-height: 1.5;
		color: #000;
	}

	.kunye p:last-child {
		margin-bottom: 0;
	}

	.kunye .label {
		font-family: "Alright Sans Bold", sans-serif;
	}

	.kunye a {
		color: inherit;
		text-decoration: underline;
	}

	.project-content {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.project-text :global(p) {
		font-size: 1rem;
	}

	.project-text :global(p) {
		margin: 0 0 1.25rem;
		font-size: 1rem;
	}

	.project-text :global(p:last-child) {
		margin-bottom: 0;
	}

	.project-text :global(a) {
		color: var(--orange);
		text-decoration: underline;
	}

	.project-text :global(strong),
	.project-text :global(b) {
		font-family: "Alright Sans Bold", sans-serif;
		font-weight: 400;
	}

	.project-text :global(em),
	.project-text :global(i) {
		font-style: italic;
	}

	.project-text :global(ul),
	.project-text :global(ol) {
		margin: 0 0 1.25rem;
		padding-left: 1.5rem;
	}

	.project-text :global(li) {
		margin-bottom: 0.25rem;
	}

	.project-text :global(h2),
	.project-text :global(h3) {
		margin: 1.5rem 0 0.5rem;
		font-family: "Alright Sans Bold", sans-serif;
		font-size: 1.25rem;
		font-weight: 400;
	}

	.collaborators {
		margin-top: 0;
	}

	.kunye {
		display: grid;
		gap: 1rem;
	}

	.slide-carousel {
		margin: 3.125rem 2.1875rem 0 2.1875rem;
	}
</style>
