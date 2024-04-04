
<script>
    import {page} from '$app/stores';
    import SplideCarousel from '$lib/components/component_slider.svelte'
    
    let filtered_data;
    
    // get data from main page which is PORHECTS_DATA after it loads
    import PROJECTS_DATA from "$lib/data";
    // filter data to get the project with the id that matches the id in the url
    PROJECTS_DATA.then(data => {
        filtered_data = data.filter(project => project.short_url === $page.params.id );
        filtered_data = filtered_data[0];

        // console.log(filtered_data);
    });


</script>

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
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem;
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

    .project-images{
        margin: 0 auto;
    }

</style>


