// Put your application javascript here
// require('dotenv').config();
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
    "key": "test",
    "value": 0,
    "type": "integer"
  }
}
*/
// import fetch from 'node-fetch';
// fetch('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/metafiels/count.json', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => {
//     console.log(response)
//     return response.json();
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
const axios = require('axios').default; // with return {count: 0} if there are no metafields
async function run() {
  var options = {
    method: 'GET',
    url: 'https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/count.json',
  };
  axios(options)
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    })
}
run();
// {
//   "metafield": {
//     "namespace": "inventory",
//       "key": "test",
//         "value": 0,
//           "type": "integer"
//   }
// }
