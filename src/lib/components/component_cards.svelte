<script>
// @ts-nocheck
    export let project;
</script>


<div class="card" style="background-image: url('{project['cover image'][0].thumbnails.large.url}');"  >
    <div class="tint">
        <p>{project.name}</p>
        <a id="tolink" href="projects/{project.short_url}"><span class="link"></span></a>
    </div>
</div>

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
        height:auto;
        aspect-ratio: 4/2.5;
        cursor: pointer;
        object-fit: cover;
        background-size: cover;
        background-position: top center;
        box-sizing: border-box;
    }

    .card p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        display: none;
        color: white;
        font-size: 1.1em;
        font-weight: bold;
        pointer-events: none;
        margin: auto;
    }

    .card:hover p {
        display: block;
        transition: linear 0.2s;
    }

    .tint{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--orange);
        filter:opacity(0);
        padding: 3rem;
        box-sizing: border-box;
    }

    .tint:hover {
        filter: opacity(0.85);
        transition: linear 0.2s;
    }



</style>

