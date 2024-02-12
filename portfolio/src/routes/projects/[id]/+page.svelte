
<script>
    import {page} from '$app/stores';

    let filtered_data;
    
    // get data from main page which is PORHECTS_DATA after it loads
    import PROJECTS_DATA from "$lib/data";
    // filter data to get the project with the id that matches the id in the url
    PROJECTS_DATA.then(data => {
        filtered_data = data.filter(project => project.short_url === $page.params.id );
        filtered_data = filtered_data[0];
    });

    
    

</script>

{#if filtered_data}
    <h2>{filtered_data.name}</h2>
    <p>{filtered_data.text}</p>
{/if}


