
<script>
    // @ts-nocheck
    import {page} from '$app/stores';
    import SplideCarousel from '$lib/components/component_slider.svelte'
    import PROJECTS_DATA from '$lib/data';

    import { onMount } from 'svelte';
    let page_data = {};
    let filtered_data;

    onMount(() => {

        console.log("filtered_data is here ");
        console.log(PROJECTS_DATA);

	    let page_url = $page.url.pathname

	    // take the last part of the url which is the id
        let id = page_url.substring(page_url.lastIndexOf('/') + 1);
        console.log(id);

        console.log("page_data is here ");
        page_data = PROJECTS_DATA.then(data => {
            data = data.filter(project => project.short_url === id );
            return data[0];
        });

        console.log(page_data);
        
    });

    // let filtered_data;
    
    // // get data from main page which is PORHECTS_DATA after it loads
    // import PROJECTS_DATA from "$lib/data";
    // // filter data to get the project with the id that matches the id in the url
    // PROJECTS_DATA.then(data => {
    //     filtered_data = data.filter(project => project.short_url === $page.params.id );
    //     filtered_data = filtered_data[0];
    // });

</script>

<!-- await page_data then -->
{#await page_data}
    <p>Loading...</p>
{:then page_data}
    <h1>{page_data.client}</h1>
    <p>{page_data.projects}</p>

{/await}


<!-- 
<div class="project-container">
    {#if filtered_data}
        <h2 class="project-title">{filtered_data.name}</h2>

        <div class="project-table">
            <div class="project-info"><span class="title">Client:</span> <span class="content">{filtered_data.client}</span></div>
            {#if filtered_data.collaborators !== '' }
                <div class="project-info"><span class="title">Client:</span> <span class="content">{filtered_data.client}</span></div>
            {/if}
            {#if filtered_data.roles !== '' }
            <div class="project-info"><span class="title">Roles:</span> <span class="content">{filtered_data.roles}</span></div>
            {/if}
            {#if filtered_data.tools !== ''}
                <div class="project-info"><span class="title">Tools:</span> <span class="content">{filtered_data.tools}</span></div>
            {/if}
            {#if filtered_data.link !== ''}
                <div class="project-info"><span class="title">Link:</span> <span class="content"><a href="{filtered_data.link}" target="_blank">Go to Project Site</a></span></div>
            {/if}
        </div>

        <p class="project-content">{filtered_data.text}</p>

        <SplideCarousel folder={filtered_data.image_folder} images={filtered_data.images} />

    {/if}
</div>


<style>
    .project-container{
        max-width: 1200px;
    }

    .project-title{
        font-size: 2rem;
        font-weight: bold;
    }

    .project-table{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .project-info > .title{
        font-weight: bold;
    }

</style>

 -->
