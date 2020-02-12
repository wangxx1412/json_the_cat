const axios = require("axios");

const breed = process.argv[2];
// Make a request for a user with a given ID
axios
  .get(`https://api.thecatewapi.com/v1/breeds/search?q=${breed}`)
  .then(function(response) {
    // handle success
    if (response.data.length === 0) {
      console.log("Haven't found any breeds");
    } else {
      console.log(`Breed: ${response.data}`);
    }
  })
  .catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log("Error", error.message);
    }
  })
  .finally(function() {
    // always executed
  });
