<script>
	// @ts-nocheck
	export let data;
	import CARDS from "$lib/components/component_cards.svelte";

</script>

<div class="title-content">
	<p>Studio 2263 works at the intersection of data science, research and design. User-centered, human-centered design drives accessible communication and extends the reach and impact of positive, mission driven work. Studio 2263 specializes in building creative data visualization and cartography as well as custom built tools tailored to meet the unique needs of each project and to  clarify complex issues and research. All projects begin and end with a deep understanding of the data.</p>
</div>


{#if data.props.projects}
	 
	<div class="projects-grid">
		{#each  data.props.projects as project}
			{#if project.name } 
				<CARDS {project}/>
			{/if}
		{/each}
	</div>
{/if}

<style>
	.title-content{
		padding: 5rem 0;
		width: 66%;
	}

</style>