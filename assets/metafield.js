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

async function axiosCheckValue() {
const { data: checkResponse } = await axios.get('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields.json');
value = checkResponse['metafields'][0]['value'];
idNumber = checkResponse['metafields'][0]['id'];
return [value, idNumber]
}
// A funtion to delete metafields for bacon product for testing
async function axiosDeleteMetafield() {
  const metafieldIdToDeleteArray = await axiosCheckValue();
  deleteId = metafieldIdToDeleteArray[1]
  const { data: response } = await axios.delete(`https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/${deleteId}.json`) // chance number before .json to whatever the current id is.
  console.log(response)
  console.log('Metafield deleted.')
}
async function axiosNewMetafield() {
  const { data: postResponse } = await axios.post('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields.json', {
    "metafield": {
      "namespace": "global",
      "key": "test",
      "value": 0,
      "type": "number_integer"
    }
  })
  console.log(postResponse)
  let metafieldID = postResponse['metafield']['id']
  let metafieldValue = postResponse['metafield']['value']
  return [metafieldID, metafieldValue]
}
async function axiosGetMetafieldCount() {
  try {
    const { data: response } = await axios.get('https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/count.json') //use data destructuring to get data from the promise object
    console.log("This is the count of the metafields for Bacon product: ", response['count']);
    response['count'] //when the count of metafields is zero, create a new one
    if (response['count'] === 0) {
      console.log("Making POST request to create metafield because there are 0")
      // Calling axiosNewMetafield creates new metafield
      axiosNewMetafield();
      console.log('New Metafield created:')
    } else {
      console.log("Making PUT request to update metafield value because metafield already exists");
      // Get the metafield id and value to use for the PUT request
      let metafieldArray = await axiosCheckValue();
      // is an array [metafieldID, metafieldValue]
      console.log('This is the metafield ID and metafield value we using to update the metafield value:', metafieldArray)
      // axios metafield PUT to add one to the value
       metaValue = metafieldArray[0]
       metaID = metafieldArray[1]
       metaValue += 1
      const { data: putResponse } = await axios.put(`https://aa429cff3713812e45b04ef7d83c3c30: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@teslazonda.myshopify.com/admin/api/2021-07/products/6958978400416/metafields/${metaID}.json`, {
        "metafield": {
          "id": metaID,
          "value": metaValue,
          "type": "number_integer"
        }
      })
      console.log(putResponse);
    }
  }

  catch (error) {
    console.log(error);
  }
}
axiosGetMetafieldCount();
