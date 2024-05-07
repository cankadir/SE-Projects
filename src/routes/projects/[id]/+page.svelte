
<script>
    // @ts-nocheck
    import {page} from '$app/stores';
    import SplideCarousel from '$lib/components/component_slider.svelte'

    // import data from higher the index page
    let data = $page.data;
    let page_data = data.props.projects.filter(project => project.short_url === $page.params.id )[0];
    let images= page_data.images;

</script>


{#if page_data}

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
                
                <p class="project-content" style="margin-bottom:1em">{page_data.text}</p>
                
                {#if page_data.collaborators !== '' }
                        <p class="project-content" id="collab">Collaborators: {page_data.collaborators}</p>
                {/if}
            </div>
        </div>

        <!---- Images -->
        <div class="slide-carousel">
            
            {#if images}
                <SplideCarousel images={images} folder={page_data.image_folder} />
            {/if}
        </div>
        
    </div>
{/if}



<style>
    .project-container{
        margin: 35px 35px;
    }

    .project-title{
        font-size: 32px;
        font-family: "Alright Sans Bold", sans-serif;
        color:#444;
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
        font-weight: bold;
        color:#444;
    }

    .project-content {
        margin: 0;
        padding: 0;
        line-height: 1.5rem;
    }

    .project-content > p{
        margin: 0;
        padding: 0;
    }

    .kunye{
        display: grid;
        gap: 1rem;
    }

    .slide-carousel{
        margin: 50px 35px 0 35px;
    }

</style>

 
