// Put your application javascript here
/*Retrieve a count of metafields that belong to a Product resource

GET / admin / api / 2021 - 07 / products / 632910392 / metafields / count.json
response:

HTTP/1.1 200 OK
{
  "count": 2
}
*/
// If above return a count of zero, then we should vreate a new metafield


/* Create a new metafield for a Product resource

POST /admin/api/2021-07/products/632910392/metafields.json
response:

{
  "metafield": {
    "namespace": "inventory",
    "key": "warehouse",
    "value": 25,
    "type": "number_integer"
  }
}
*/

fetch('/admin/api/2021-07/products/6958978400416/metafields/count.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
