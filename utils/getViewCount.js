const axios = require('axios');

const url = 'http//localhost:7000/news/get-views';

module.exports = function getViewCount(id) {
  console.log('gatsby-getviews: ' + id);
  return new Promise((resolve, reject) => {
    axios.get(`${url}/${id}`)
    .then(response => {
      const { views } = response.data;
      console.log(views);
      resolve(views);
    })
    .catch(err => {
      console.log(err.message);
      reject(err);
    });
  });
};
