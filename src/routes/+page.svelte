<script>
	// @ts-nocheck
	export let data;

	import { flip } from 'svelte/animate';
	import CARDS from '#lib/components/component_cards.svelte';

	const key = (term) => term.trim().toLowerCase();
	const terms = (project) =>
		[...new Set([...(project.work_types ?? []), ...(project.topics ?? [])].map(key))];

	function unique(values) {
		const byKey = new Map();
		for (const value of values) {
			const label = value.trim();
			if (label) byKey.set(label.toLowerCase(), label);
		}
		return [...byKey.values()].sort((a, b) => a.localeCompare(b));
	}

	let selected = [];

	const toggle = (term) => {
		const k = key(term);
		selected = selected.includes(k) ? selected.filter((s) => s !== k) : [...selected, k];
	};

	const rank = (project) => terms(project).filter((term) => selected.includes(term)).length;

	$: projects = data?.projects ?? [];
	$: workTypes = unique(projects.flatMap((project) => project.work_types ?? []));
	$: topics = unique(projects.flatMap((project) => project.topics ?? []));
	$: visible = projects.filter((project) => project.name);
	// Supabase already ordered by `code`, and sort is stable, so ties keep that order
	$: ordered = selected.length ? [...visible].sort((a, b) => rank(b) - rank(a)) : visible;
</script>

<div class="title-content">
	<h1>Research-led. Design-driven.</h1>
	<p>Studio 2263 is a principal-led studio in Brooklyn that brings together spatial analysis, data science, and design. We help environmental, civic, and research organizations work through complex questions: framing them, structuring the data, finding out what it actually shows, and turning that into maps, visualizations, and tools people can use. We work directly with our clients from discovery through delivery, and we do our best work on projects where the questions are still taking shape.</p>

	<div id="explore">
		<h2>Explore project samples, select a category below</h2>

		<div class="selectors">
			<span class="filter">Work Type:</span>
			{#each workTypes as workType, i}
				<button
					class="filter-selection"
					aria-pressed={selected.includes(key(workType))}
					on:click={() => toggle(workType)}>{workType}</button
				>
				{#if i !== workTypes.length - 1}&nbsp;•&nbsp;{/if}
			{/each}
		</div>

		<div class="selectors">
			<span class="filter">Topics:</span>
			{#each topics as topic, i}
				<button
					class="filter-selection"
					aria-pressed={selected.includes(key(topic))}
					on:click={() => toggle(topic)}>{topic}</button
				>
				{#if i !== topics.length - 1}&nbsp;•&nbsp;{/if}
			{/each}
		</div>

		{#if selected.length}
			<button class="filter-clear" on:click={() => (selected = [])}>Clear selection</button>
		{/if}
	</div>
</div>

{#if visible.length}
	<div class="projects-grid">
		{#each ordered as project (project.short_url)}
			<div class="card-slot" animate:flip={{ duration: 350 }}>
				<CARDS {project} />
			</div>
		{/each}
	</div>
{/if}

<style>
	.title-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		width: 100%;
		max-width: 70rem;
		padding: 5rem 0;
		color: #000;
	}

	.title-content > p,
	#explore {
		box-sizing: border-box;
		padding: 0.625rem;
	}

	.title-content > p {
		margin: 0;
		font-size: 1.25rem;
	}

	h1 {
		margin: 0;
		font-family: 'Alright Sans Bold', sans-serif;
		font-size: 2.5rem;
		line-height: normal;
	}

	h2 {
		margin: 0;
		font-family: 'Alright Sans Bold', sans-serif;
		font-size: 1.5rem;
		line-height: 1.5;
	}

	#explore {
		font-size: 1.25rem;
		line-height: 1.5;
	}

	.selectors + .selectors {
		margin-top: 1.5rem;
	}

	.filter {
		margin-right: 0.25rem;
		font-family: 'Alright Sans Bold', sans-serif;
	}

	.filter-selection,
	.filter-clear {
		margin: 0;
		padding: 0;
		border: none;
		background: none;
		color: inherit;
		cursor: pointer;
	}

	.filter-selection {
		transition: color 0.15s ease;
	}

	.filter-selection:hover,
	.filter-selection[aria-pressed='true'] {
		color: #ff7300;
		font-family: 'Alright Sans Bold', sans-serif;
	}

	.filter-clear {
		margin-top: 0.75rem;
		font-size: 1rem;
		color: #ff7300;
	}

	.filter-clear:hover {
		text-decoration: underline;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	@media (max-width: 760px) {
		.title-content {
			padding: 1.5rem 0;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

