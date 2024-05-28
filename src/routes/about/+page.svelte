
<div class="bios">
    <div class="bios-grid">
        <div class="bio-block" id="studio">
            <p class="bio-content">Studio 2263 is a design, data and mapping studio. Our work tackles urban and environmental challenges with creative design and data visualization to communicate complex information to the public. We create custom digital tools and printed documents with a hands-on process, tailored to meet each project’s unique needs.</p>
            <p class="bio-content">Studio 2263, previously at Pratt Institute’s Spatial Analysis and Visualization Initiative (SAVI), collaborates with a variety of organizations around New York City to contribute geospatial analysis and research to projects while designing platforms, tools and systems through which to communicate that work. Current projects involve collaboration with FloodNet to create an interactive tool to engage New York City residents with flood data; projects with the NY State Department of Environmental Conservation and the NY-NJ Harbor and Estuary Program concerning public access and stewardship of the Hudson River Estuary. Both members are co-organizers of the annual data-driven art exhibition to support and promote innovative use of NYC’s Open Data called Data Through Design.</p>

        </div>
        <div class="bio-block" id="sara">
            <div class="photo">
                <img class="bio-photo" src="./images/bio/eichner_photo.jpg" alt="" >
            </div>
            <div class="info">
                <p class="bio-content"><span class="name">Sara Eichner</span> designer and cartographer. Working at the intersection of data analysis and design, she explores creative and pragmatic methods of data interpretation using data visualization and interactive tools to tell the stories found within data and the people they represent.</p>
                <p class="bio-content">Sara has a masters in fine arts in painting from Syracuse University and a certificate in GIS from Pratt institute. She has taught Spatial Thinking, GIS and Design at Pratt Institute to graduate students in the School of Information as well as User Centered Design for GIS in the Pratt School of Continuing and Professional Studies.</p>
            </div>
        </div>
        <div class="bio-block" id="can">
            <div class="photo">
                <img class="bio-photo" src="./images/bio/can_photo.jpg" alt="" >
            </div>
            <div class="info">
                <p class="bio-content"><span class="name">Can Kadir Sucuoglu</span> is a data scientist specializing in data visualization and mapping, originally trained as an architect at the Southern California Institute of Architecture (Sci_Arc). He researches data’s role in urban and built environments and led the Spatial Analytics and Visualization Initiative (SAVI) at Pratt Institute, working on public information communication projects. He teaches data visualization and GIS courses at the Pratt Institute and co-organizes Data Through Design (DxD). In 2016, he co-founded Bits and Bricks in Istanbul, a research group providing data-based design consultancy and exploring digital technologies to improve urban environments. Currently, Can works at Numina, a NYC-based startup collecting data on hyper-local mobility trends.</p>
            </div>
        </div>

    </div>

</div>

<style>
    .bios {
        margin: 5rem auto;
        max-width: 860px;
    }

    .bios-grid {
        display: flex;
        flex-direction: column;
    }

    .bio-block {
        padding: 1.5rem 0;
        display: flex;
        flex-direction: row;
        gap: 3rem;
    }

    #studio {
        padding: 1.5rem 0;
        display: flex;
        flex-direction: column !important;
        gap: 1rem;
    }

    .bio-content {
        margin: 0 0 1rem 0;
        padding: 0;
    }

    .photo{
        max-width: 200px;
        min-width: 200px;
    }

    .bio-photo{
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        height: auto;
    }

    .name {
        font-weight: bold;
    }

    .info > p {
        padding:0 0 1rem 0;
        margin:0;
    }

    

    /* if the screensize is smaller than 720 then hide .photo */
    @media (max-width: 720px) {
        .bio-block {
            flex-direction: column;
            gap: 1rem;
        }

        .photo{
            display: none;
        }
    }



</style>