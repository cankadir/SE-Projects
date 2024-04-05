<script>
// @ts-nocheck

    export let project;

    let cover_image;
    if (project.images[0] !== ""){
        cover_image = '/images/' +  project.image_folder + "/" + project.images[0];
    }
    // portfolio\src\lib\images\FBIP\FBIP_1.jpg
    // console.log( project.name , cover_image )

    function handleClick(event) {
        // when div is clicked, navigate to the project page
        window.location.href = '/projects/' + project.short_url;
    }

</script>

{#if cover_image}
    <div class="card" style="background-image: url('{cover_image}');" on:click={handleClick} on:keydown={handleClick} >
        <p>{project.name}</p>
    </div>
    
{:else}
    <div class="card">
        <!-- from p only on hover -->
        <p>{project.name}</p>
    </div>
{/if}


<style>
    .card {
        height: 225px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        object-fit: cover;
        background-size: cover;
        background-position: center;
        padding: 1rem;
        box-sizing: border-box;
    }

    .card:hover {
        filter: opacity(0.6);
        transition: linear 0.2s;
    }

    .card p {
        display: none;
        color: white;
        font-size: 1.5em;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        pointer-events: none;
    }

    .card:hover p {
        display: block;
        transition: linear 0.2s;
    }

    

</style>

