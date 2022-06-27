const axios = require("axios").default;
//PARA PEGAR UM PEDIDO USE O METODO 'GET'
//PARA FECHAR UM PEDIDO USE O METODO 'PATCH':
//(https://api.pagar.me/core/v5/orders/{ID}/closed) 


const options = {

  
  method: 'GET',
  url: 'https://api.pagar.me/core/v5/orders/or_L0Da71rflfJY1BjM',
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

//or_MrE1p9xt4FyaYomB