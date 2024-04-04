<script>
// @ts-nocheck

    export let project;

    let cover_image;
    if (project.images[0] !== ""){
        cover_image = '/images/' +  project.image_folder + "/" + project.images[0];
    }
    // portfolio\src\lib\images\FBIP\FBIP_1.jpg
    console.log( project.name , cover_image )

    function handleClick(event) {
        // when div is clicked, navigate to the project page
        console.log('clicked', project.name);
        window.location.href = '/projects/' + project.short_url;
    }

</script>

{#if cover_image}
    <div class="card" style="background-image: url('{cover_image}');" on:click={handleClick} on:keydown={handleClick} >
        <p>{project.name}</p>
    </div>
    
{:else}
    <div class="card">
        <p>{project.name}</p>
    </div>
{/if}


<style>
    .card {
        width: 225px;
        height: 225px;
        background-color: #f0f0f0;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }
</style>

