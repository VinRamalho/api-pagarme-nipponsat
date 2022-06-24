//PARA OBTER TODOS OS CLIENTES USE O METODO 'GET' COM A URL:
//https://api.pagar.me/core/v5/customers/{ID}
//PARA EDITAR USE O METODO 'PUT'

const axios = require("axios").default;


const options = {

  
    method: 'GET',
    url: 'https://api.pagar.me/core/v5/charges/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg=='
    },
  };
  
  axios.request(options).then(function (response) {
      // console.log(response);
    console.log(response.data);
    console.log('deu boa!');
  }).catch(function (error) {
    console.error(error.response.data);
    console.log('deu ruim');
  });