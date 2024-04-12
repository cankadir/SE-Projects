
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
        <!---- title -->
        <h2 class="project-title">{page_data.name}</h2>

        <!---- project Detailed Info -->
        <div class="project-table">

            <!---- Kunye and Text -->
            <div class="project-col">
                <div class="kunye">
                    {#if page_data.client !== '' }
                        <div class="project-info"><span class="title">Client:</span> <span class="content">{page_data.client}</span></div>
                    {/if}
                    {#if page_data.year !== '' }
                        <div class="project-info"><span class="title">Year:</span> <span class="content">{page_data.year}</span></div>
                    {/if}
                    
                    {#if page_data.roles !== '' }
                        <div class="project-info"><span class="title">Project Scope:</span> <span class="content">{page_data.roles}</span></div>
                    {/if}
                    {#if page_data.link !== ''}
                            <div class="project-info"><span class="title">Link:</span> <span class="content"><a href="{page_data.link}" target="_blank">Go to Project Site</a></span></div>
                    {/if}
                </div>
            </div>

            <!---- Text -->
            <div class="project-col">
                <p class="project-content" style="margin-bottom:0.5em">{page_data.text}</p>
                {#if page_data.collaborators !== '' }
                        <p class="project-content">Collaborators: {page_data.collaborators}</p>
                {/if}
            </div>
        </div>

        <!---- Images -->
        <div class="slide-carousel">
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
        margin: 35px 35px;
    }

    .project-title{
        font-size: 32px;
        font-weight: bolder;
        font-family: "Alright Sans Black", sans-serif;
    }

    .project-table{
        display: grid;
        grid-template-columns: 3fr 7fr;
        gap: 3rem;
        margin: 35px 0 0 0;
    }

    @media (max-width: 768px){

        .project-title{
            font-size: 24px;
            margin: 15px 0px
        }

        .project-container{
            margin: 25px 0px;
        }
        .project-table{
            grid-template-columns: 1fr;
            gap:1rem;
        }

        .kunye{
            gap: 1rem !important;
        }

        .slide-carousel{
            margin: 15px 0px 0 0px !important;
        }
    }

    .project-info > .title{
        font-weight: bold;
    }

    .project-content {
        margin: 0;
        line-height: 1.5rem;
    }

    .kunye{
        display: grid;
        gap: 1.75rem;
    }

    .slide-carousel{
        margin: 35px 35px 0 35px;
    }

</style>

 
