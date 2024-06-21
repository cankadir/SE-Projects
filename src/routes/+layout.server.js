// @ts-nocheck
import { SECRET_URL , SECRET_KEY } from '$env/static/private';

export async function load({ fetch }) {

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