<script>
	// @ts-nocheck
	export let data;
	import CARDS from "$lib/components/component_cards.svelte";

</script>

<div class="title-content">
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt totam minus nam nobis quasi voluptatem illum delectus ab dicta vero numquam officia libero, ut perspiciatis laudantium tempora qui asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt totam minus nam nobis quasi voluptatem illum delectus ab dicta vero numquam officia libero, ut perspiciatis laudantium tempora qui asperiores.</p>
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
		padding: 2.5rem 0;
		width: 66%;
	}

</style>