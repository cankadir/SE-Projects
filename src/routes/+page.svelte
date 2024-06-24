<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import CARDS from "$lib/components/component_cards.svelte";
	$: data = $page.data;
</script>

<div class="title-content">
	<p>Studio 2263 works at the intersection of data science, research and design. User and human-centered design drives accessible communication and extends the impact of positive, mission-driven work. Studio 2263 specializes in building creative data visualization and cartography as well as custom built tools tailored to meet the unique needs of each project and to clarify complex issues and research.</p>
</div>


{#if data.props.records}
	<div class="projects-grid">
		{#each  data.props.records as project}
			{#if project.name } 
				<CARDS {project}/>
			{/if}
		{/each}
	</div>
{:else}
	<p>loading...</p>
{/if}

<style>
	.title-content{
		padding: 5rem 0;
		width: 66%;
	}

</style>