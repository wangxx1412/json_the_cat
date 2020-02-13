const axios = require("axios");

const fetchBreedDescription = async function(breed, callback) {
  await axios
    .get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
    .then(function(response) {
      // handle success
      if (response.data.length === 0) {
        const error = "Breed not found";
        callback(error, null);
      } else {
        callback(null, response.data[0].description);
        return response.data;
      }
    })
    .catch(function(error) {
      callback(error, null);
    });
};

module.exports = { fetchBreedDescription };
