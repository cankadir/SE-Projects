
<script>
    // @ts-nocheck
    import {page} from '$app/stores';
    import SplideCarousel from '$lib/components/component_slider.svelte'

    import { marked } from 'marked';
    
    // import data from +layout.svelte
    let page_data = $page.data.props.data;

    // get page url
    let url  = $page.url.pathname;
    let urlParts = url.split('/');
    let projectid = urlParts[urlParts.length - 1];

    // filter page data by project id, using shotr_url filed
    let project_data = page_data.filter(project => project.short_url === projectid )[0];
    
    let images = $page.data.imgs;
    let imageLinks = images
        .filter(element => element['name'] !== 'cover.jpg')
        .map(element => {
            let url = `https://mhdoyvmbgsrbsifouhxo.supabase.co/storage/v1/object/public/2263_websiteImgs/website_images/${projectid}/${element['name']}`;
            return url;
        });

</script>

{#if project_data}

    <div class="project-container">
        <!---- title -->
        <h2 class="project-title">{project_data.name}</h2>

        <!---- project Detailed Info -->
        <div class="project-table">

            <!---- Kunye and Text -->
            <div class="project-col">
                <div class="kunye">
                    {#if project_data.client }
                        <div class="project-info"><span class="title">Client:</span> <span class="content">{project_data.client}</span></div>
                    {/if}
                    {#if project_data.year }
                        <div class="project-info"><span class="title">Year:</span> <span class="content">{project_data.year}</span></div>
                    {/if}
                    
                    {#if project_data['roles / scope'] }
                        <div class="project-info"><span class="title">Project Scope:</span> <span class="content">{project_data['roles / scope']}</span></div>
                    {/if}
                    {#if project_data.link }
                            <div class="project-info"><span class="title">Link:</span> <span class="content"><a href="{project_data.link}" target="_blank">Go to Project Site</a></span></div>
                    {/if}
                </div>
            </div>

            <!---- Text -->
            <div class="project-col">
                <p class="project-content" style="margin-bottom:1em">{@html marked.parse(project_data.text)}</p>
                {#if project_data['Collaborators'] }
                        <p class="project-content" id="collab">Collaborators: {project_data.Collaborators}</p>
                {/if}
            </div>
        </div>

        <!---- Images -->
        <div class="slide-carousel">
            {#if images}
                <SplideCarousel images={imageLinks} />
            {/if}
        </div>
    </div>

{:else}
    <p>Project does not exist...</p>
{/if}

<style>
    .project-container{
        margin: 35px 35px;
    }

    .project-title{
        font-size: 32px;
        font-family: "Alright Sans Bold", sans-serif;
        color:#444;
        font-weight: 600;
    }

    .project-table{
        display: grid;
        grid-template-columns: 3fr 7fr;
        gap: 3rem;
        margin: 35px 0 0 0;
        font-size: 0.9rem;
        line-height: 1.5rem;
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
        font-family: "Alright Sans Bold", sans-serif;
        color:#444;
        font-weight: 500;
    }

    .project-content {
        margin: 0;
        padding: 0;
        line-height: 1.5rem;
    }

    .kunye{
        display: grid;
        gap: 1rem;
    }

    .slide-carousel{
        margin: 50px 35px 0 35px;
    }

</style>

 
