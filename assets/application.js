// Put your application javascript here
// Use the cart API to make the AJAX request?
jQuery.post('/cart/add.js', {
  items: [
    {
      quantity: 1,
      id: 1,
      properties: {
        'cart_index': 'Should be number of items in cart'
      }
    }
  ]
});
// const addItemToCart = (event) => {
//   fetch("/cart/add.js", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at local_names.default
//     });
// };

// const input = document.querySelector("#search");
// input.addEventListener("keyup", searchAlgoliaPlaces);
