<script>

import PROJECTS_DATA from "$lib/data";
import CARDS from "$lib/components/component_cards.svelte";

</script>

<div class="title-content">
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt totam minus nam nobis quasi voluptatem illum delectus ab dicta vero numquam officia libero, ut perspiciatis laudantium tempora qui asperiores.</p>
</div>

{#await PROJECTS_DATA}
	<p>loading...</p>
{:then data} 

	<div class="projects-grid">
		{#each data as project}
			{#if project.name } 
				<CARDS {project}/>
			{/if}
		{/each}
	</div>

{/await}



<style>
	.title-content{
		padding: 1rem 0;
	}
</style>