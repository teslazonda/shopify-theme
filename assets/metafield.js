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
const axios = require('axios').default; // with return {count: 0} if there are no metafields
// axios.get('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/count.json')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     return response.data
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
async function axiosTest() { // perhaps have a nested async for POST
  try {
    const { data: response } = await axios.get('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/count.json') //use data destructuring to get data from the promise object
    console.log(response);
    response['count'] //when the count of metafields is zero, create a new one
    if (response['count'] === 0) {
      // An Axios POST Here
    }
  }

  catch (error) {
    console.log(error);
  }
}
axiosTest();
// console.log(lst)
// {
//   "metafield": {
//     "namespace": "inventory",
//       "key": "test",
//         "value": 0,
//           "type": "integer"
//   }
// }
