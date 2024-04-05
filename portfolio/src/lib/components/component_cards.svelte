<script>
// @ts-nocheck
    export let project;

</script>

{#if project.images[0] !== ""}
    <div class="card" style="background-image: url('images/{project.image_folder}/{project.images[0]}');"  >
        <p>{project.name}</p>
        <a id="tolink" href="projects/{project.short_url}"><span class="link"></span></a>
    </div>
    
{:else}
    <div class="card">
        <!-- from p only on hover -->
        <p>{project.name}</p>
    </div>
{/if}


<style>
    .link {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .card {
        position: relative;
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

