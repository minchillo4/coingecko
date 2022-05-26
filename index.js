const axios = require('axios');

const url = "https://api.coingecko.com/api/v3/ping"

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(url);

  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});
