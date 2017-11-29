const axios = require('axios');
const chalk = require('chalk');

const url = 'http://localhost:7000/news/v1/get-views';

let viewIdMap = {};

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  axios
    .get(`${url}/all-mapped`)
    .then(response => {
      viewIdMap = response.data;
    })
    .catch(err => {
      console.log(err.message);
      throw err;
    });
} else {
  console.log(
    chalk.cyan(`
  gatsby is not running in production, view counts will be
  simulated using random numbers (1 - 1,000,000)
  `)
  );
}

function getDevViewCount() {
  return Math.floor(Math.random() * 1000000) + 1;
}

function getProdViewCount(id) {
  return id in viewIdMap ? viewIdMap[id] : 1;
}

module.exports = isProduction ? getProdViewCount : getDevViewCount;
