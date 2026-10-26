
<div class="bios">
    <div class="bios-grid">
        <div class="bio-block" id="studio">
            <p class="bio-content">We partner with organizations to investigate complex environmental, civic, and spatial questions. Working closely with our clients, we help frame the questions, structure and analyze the data, and translate the findings into maps, visualizations, digital tools, and publications that support understanding and decision making.</p>
            <p class="bio-content">Projects begin with the research context, the available data, and the people the work is meant to serve. We fit our analytical methods, design approach, and technical setup to each project instead of applying a standard process. Our work ranges from public data platforms and regional planning resources to scientific reports, exhibitions, and archaeological research, using sources as varied as monitoring data, census records, remote sensing, photogrammetry, and century-old survey plans.</p>
            <p class="bio-content">Our clients include environmental organizations, public agencies, and research institutions doing hard, important work in the public interest. Studio 2263 is a certified NYC Women-Owned Business Enterprise (WBE).</p>
            <p class="bio-content">Studio 2263 is principal-led. Clients work directly with both of us from discovery through delivery, so the thinking behind the analysis carries through to the design and the build. When a project calls for more, we bring in collaborators we know and trust, such as stakeholder engagement specialists, developers, and subject experts, and shape the team around the work.</p>

        </div>
        <div class="bio-block" id="sara">
            <div class="photo">
                <img class="bio-photo" src="./images/bio/eichner_photo.jpg" alt="" >
            </div>
            <div class="info">
                <p class="bio-content"><span class="name">Sara Eichner</span>leads design and data visualization at Studio 2263. She shapes how research questions are framed, how data becomes legible, and how findings reach the people they’re meant to serve, working closely with Can from the first look at the data through the final design. Her work spans watershed stewardship, climate resilience, regional planning, and cultural heritage, from the Hudson Estuary to a 16-county planning region in the Southeast and the archaeological site of MohenjoDaro, working with Pratt Institute’s Laboratory for Integrated Archaeological Visualization and Heritage</p>
                <p class="bio-content">Before co-founding the studio, Sara spent fifteen years as a visual artist and graphic designer in New York City. She began specializing in GIS, spatial analysis, and UX design in 2017 at Pratt Institute’s Spatial Analysis and Visualization Initiative (SAVI), and has taught GIS for Designers at Cooper Union; Spatial Thinking, GIS and Design, and UX Design for GIS at Pratt Institute. She co-organizes Data Through Design, an annual data art exhibition during NYC Open Data Week.</p>
            </div>
        </div>
        <div class="bio-block" id="can">
            <div class="photo">
                <img class="bio-photo" src="./images/bio/can_photo.jpg" alt="" >
            </div>
            <div class="info">
                <p class="bio-content"><span class="name">Can Kadir Sucuoglu</span> leads data science and GIS at Studio 2263. He structures the data pipelines, analysis, and interactive platforms behind the studio’s work, where analytical rigor and visual craft carry equal weight. With twelve years of experience working with data, he approaches analysis with a designer’s mindset, exploring and iterating until the method fits both the question and the audience.</p>
                <p class="bio-content">Before co-founding the studio, Can directed Pratt Institute’s Spatial Analysis and Visualization Initiative (SAVI), where he taught GIS, data visualization, and mapping, and he co-founded Bits ‘n Bricks, an Istanbul research group that worked with municipalities on data-driven urban strategies. He trained as an architect at SCI-Arc. He currently teaches at the School of Visual Arts.  An open data advocate, he co-organizes Data Through Design.</p>
            </div>
        </div>

    </div>

</div>

<style>
    .bios {
        margin: 5rem auto;
        max-width: 53.75rem;
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
        margin: 0;
        padding: 0;
    }

    .photo{
        max-width: 12.5rem;
        min-width: 12.5rem;
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