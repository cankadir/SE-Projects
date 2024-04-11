
<script>
    // @ts-nocheck
    import {page} from '$app/stores';
    import SplideCarousel from '$lib/components/component_slider.svelte'
    import PROJECTS_DATA from '$lib/data';
    import { onMount } from 'svelte';
    
    let page_data=[];
    let images=[];

    onMount(() => {

	    let page_url = $page.url.pathname

	    // take the last part of the url which is the id
        let id = page_url.substring(page_url.lastIndexOf('/') + 1);

        page_data = PROJECTS_DATA.then(data => {
            data = data.filter(project => project.short_url === id );
            return data[0];
        });
        images = page_data.then(data => {
            return data.images;
        });

    });


</script>

<!-- await page_data then -->
{#await page_data}
    <p>Loading...</p>
{:then page_data}

    <div class="project-container">
        <h2 class="project-title">{page_data.name}</h2>

        <div class="project-table">
            {#if page_data.client !== '' }
                <div class="project-info"><span class="title">Client:</span> <span class="content">{page_data.client}</span></div>
            {/if}
            {#if page_data.year !== '' }
                <div class="project-info"><span class="title">Year:</span> <span class="content">{page_data.year}</span></div>
            {/if}
            {#if page_data.collaborators !== '' }
                <div class="project-info"><span class="title">Collaborators:</span> <span class="content">{page_data.collaborators}</span></div>
            {/if}
            {#if page_data.roles !== '' }
                <div class="project-info"><span class="title">Roles:</span> <span class="content">{page_data.roles}</span></div>
            {/if}
            {#if page_data.link !== ''}
                    <div class="project-info"><span class="title">Link:</span> <span class="content"><a href="{page_data.link}" target="_blank">Go to Project Site</a></span></div>
            {/if}

            <p class="project-content">{page_data.text}</p>
            
            {#await images}
                <p>loading images...</p>
            {:then imgs} 
                <SplideCarousel images={imgs} folder={page_data.image_folder} />
            {/await}
        </div>
    </div>
{/await}



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

 
