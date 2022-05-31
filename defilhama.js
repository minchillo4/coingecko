const axios = require('axios')
const agora = new Date().getTime()
const fs = require("fs");



                                    // get data

function getBTCData() {
    return axios.get(`https://api.llama.fi/charts/Ethereum`,{responseType: 'blob',});
  }
  
  function getETHData() {
    const ethDay0 = 1438840799
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${ethDay0}&to=${agora}`,{responseType: 'blob',});
  }

  function getAVAXData() {
    const avaxDay0 = 1600731083;
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${avaxDay0}&to=${agora}`,{responseType: 'blob',});
  }

  function getMATICData() {
    const maticDay0 = 1556321789
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${maticDay0}&to=${agora}`,{responseType: 'blob',});
  }

  function getLINKData() {
    const linkDay0 = 1510184189
    return axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${linkDay0}&to=${agora}`,{responseType: 'blob',});
  }
  
  
  Promise.all([getBTCData()])
    .then(function (results) {
      const perm = results[1];
      const rows = results[0].data
      var csv = rows;

  

      console.log(rows);
    fs.writeFileSync(".dadosmarotos3.csv",JSON.stringify(csv));
}); 
                          



