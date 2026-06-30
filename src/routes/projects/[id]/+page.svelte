
<script>
	// @ts-nocheck
	export let data;

	import SplideCarousel from '$lib/components/component_slider.svelte';
</script>

{#if data.project}
	<div class="project-container">
		<h2 class="project-title">{data.project.name}</h2>

		<div class="project-table">
			<div class="project-col">
				<div class="kunye">
					{#if data.project.client}
						<div class="project-info"><span class="title">Client:</span> <span class="content">{data.project.client}</span></div>
					{/if}
					{#if data.project.year}
						<div class="project-info"><span class="title">Year:</span> <span class="content">{data.project.year}</span></div>
					{/if}
					{#if data.project['roles / scope']}
						<div class="project-info"><span class="title">Project Scope:</span> <span class="content">{data.project['roles / scope']}</span></div>
					{/if}
					{#if data.project.link}
						<div class="project-info"><span class="title">Link:</span> <span class="content"><a href="{data.project.link}" target="_blank">Go to Project Site</a></span></div>
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
		margin: 35px 35px;
	}

	.project-title {
		font-size: 32px;
		font-family: "Alright Sans Bold", sans-serif;
		color: #444;
		font-weight: 600;
	}

	.project-table {
		display: grid;
		grid-template-columns: 3fr 7fr;
		gap: 3rem;
		margin: 35px 0 0 0;
		font-size: 0.9rem;
		line-height: 1.5rem;
	}

	@media (max-width: 768px) {
		.project-title {
			font-size: 24px;
			margin: 15px 0px;
		}

		.project-container {
			margin: 25px 0px;
		}

		.project-table {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.kunye {
			gap: 1rem !important;
		}

		.slide-carousel {
			margin: 15px 0px 0 0px !important;
		}
	}

	.project-info > .title {
		font-family: "Alright Sans Bold", sans-serif;
		color: #444;
		font-weight: 500;
	}

	.project-content {
		margin: 0;
		padding: 0;
		line-height: 1.5rem;
	}

	.project-text :global(p:first-child) {
		margin-top: 0;
	}

	.project-text :global(p:last-child) {
		margin-bottom: 1em;
	}

	.collaborators {
		margin-top: 0;
	}

	.kunye {
		display: grid;
		gap: 1rem;
	}

	.slide-carousel {
		margin: 50px 35px 0 35px;
	}
</style>
