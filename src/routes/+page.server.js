// @ts-nocheck

import {SECRET_URL} from "$env/static/private"

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  console.log("Fetching Data");
  return data;

};

let csv_data = fetchData(SECRET_URL);

let PROJECTS_DATA = csv_data.then(data => {
  const rows = data.split('\n');
  console.log("Formatting Data");
  const projects = rows.map(row => {

    const columns = row.split('\t');
    const project = {
      code: columns[0],
      short_url: columns[1],
      name: columns[2],
      projects: columns[3],
      link: columns[4],
      other_links: columns[5],
      subtitle: columns[6],
      year: columns[7],
      collaborators: columns[8],
      client: columns[9],
      roles: columns[10],
      tools: columns[11],
      text: columns[12],
      image_folder: columns[13],
      images: columns.slice(14, 24)
    }
    return project;
  });
  return projects;
});

PROJECTS_DATA = PROJECTS_DATA.then(data => {
  data.shift();
  data = data.filter(project => project.code != 'x');
  console.log("Filtering Data");
  return data;
});

export async function load({ params }) {
  console.log("Loading Data");
  const projects = await PROJECTS_DATA;
  return {
    props: { projects }
  };
}