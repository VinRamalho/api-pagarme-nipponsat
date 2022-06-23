const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://api.pagar.me/core/v5/orders/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg=='
  },
  data: {
    customer: {
      code: 'null',
      document: '11304917908',
      name: 'Tony Stark',
      email: 'avengerstark@ligadajustica.com.br',
      type: 'individual'
    },
    items: [{amount: 2990, description: 'Chaveiro do Tesseract', quantity: 1}],
    payments: [
      {
        credit_card: {
          card: {cvv: '123', number: '4000000000000010',  exp_month: 1, exp_year: 1},
          installments: 1,
          statement_descriptor: 'AVENGERS',
          card_id: 'card_oqyg5aZuP2zK1dja'
        },
        payment_method: 'credit_card'
      }
    ]
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  console.log('É rapaz... parace que  deu boa!')
}).catch(function (error) {
  console.error(error);
  console.log('deu ruim de novo...')
});