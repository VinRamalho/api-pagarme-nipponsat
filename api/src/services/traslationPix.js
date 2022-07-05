//AQUI É PARA OBTER COBRANÇAS COMO CREDITO, DEBITO E BOLETO
//URL BASE: https://api.pagar.me/core/v5/charges/

const axios = require("axios").default;


const options = {
    method: 'GET',
    url: 'https://api.pagar.me/core/v5/transactions/tran_6kvB5jYcAlTbEYXo',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg=='
    },
  };
  

  axios.request(options).then(function (response) {
    console.log(response.data);
    // console.log(response.data.gateway_response);
    // console.log(response.data.last_transaction.additional_information);
    console.log('deu boa!');
  }).catch(function (error) {
    console.error(error.response.data);
    console.log('deu ruim');
  });