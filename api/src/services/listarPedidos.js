const axios = require("axios").default;

const options = {
  method: 'PATCH',
  url: 'https://api.pagar.me/core/v5/orders/or_lR2rJmQi6XHnRpEg',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg=='
  },
};

axios.request(options).then(function (response) {
    // console.log(response);
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

//chk_dDBnQ4xfv2CpGjlE