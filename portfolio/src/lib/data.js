
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSZkAdwJVMyd8Bx2cbNt1EEc3c9w3SCnGRRpDYn-MswB1nvBWnRoUnMCd8YHmwfDis06USvt-HqdADk/pub?gid=1257598033&single=true&output=tsv';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  return data;

};

let csv_data = fetchData(url);

const PROJECTS_DATA = csv_data.then(data => {
  const rows = data.split('\n');
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

// remove row if code is "code"
PROJECTS_DATA.then(data => {
  data.shift();
  return data;
});

export default PROJECTS_DATA;

