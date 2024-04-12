

<script >

    // @ts-nocheck
    export let images;
    export let folder;
    
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment';
    
    // base from paths
    import { base } from '$app/paths';

    let carousel;
  
    // remove elements from the array that are ""
    console.log( folder );
    console.log(images);
    images = images.filter(function (el) { return el != "";});
    images = images.filter(function (el) { return el != "\r"; });

    // Carousel Buttons
    const handleNextClick = () => { carousel.goToNext()}
    const handlePrevClick = () => { carousel.goToPrev() }

</script>

{#await images}
	<p>images are loading...</p>
{:then images} 


    <div class="project-images">


        {#if browser}
            <button class="prev-button" on:click={handlePrevClick}>&#10094;</button>
            <Carousel bind:this={carousel} arrows={false} itemsToShow={1} itemsToScroll={1} loop={true} >
                {#each images as image, index}
                    {#if index >0 }
                        <img class='carousel-images' src="{base}/images/{folder}/{image}" alt="project"/>
                    {/if}
                {/each}
            </Carousel>
            <button class="next-button" on:click={handleNextClick}>&#10095;</button>

        {/if}

    </div>

{/await}

<style>

    .project-images{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .prev-button, .next-button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 25px;
        z-index: 100;
    }

    .prev-button{
        left: 0;
    }

    .next-button{
        right: 0;
    }

    .carousel-images{
        object-fit: contain;
        width: 100%;
        height: 100%;
        max-height: 640px !important;
    }

</style>