// @ts-nocheck
import { SECRET_URL , SECRET_KEY } from '$env/static/private';

export async function load({ fetch }) {

  // const apikey = 'patCuOGxLzqypnvDX.eb5c1abd0862479183b237900f41cac362edc8996d6a94b4479ecf09a999850c';
  // const url = "https://api.airtable.com/v0/appiTUV8Hr8o5WnyP/Projects?filterByFormula=NOT%28%7Bcode%7D%20%3D%20%27%27%29"

  // Query Airtable
  const projects_res = await fetch( SECRET_URL , {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SECRET_KEY}`
      }  
  });
  let projects = await projects_res.json();

  // extract only the records
  let records = projects.records;

  // sort records by code
  records.sort((a, b) => a.fields.code.localeCompare(b.fields.code));
  // extract only fields, I don't need meta data on the records
  records = records.map(record => record.fields);
  console.log("Data Received from Air table - Reports");

  return {
    props: { records }
  };
}