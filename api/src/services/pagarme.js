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
      type: 'individual',
      phones: {
        home_phone: {
            country_code: '55',
            number: '22180513',
            area_code: '21'
        },
        mobile_phone: {
          country_code: '55',
          area_code: '41',
          number: '997987818'}
      }
    },
    items: [
      {amount: 2990,
        code: '1',
        description: 'Chaveiro do Tesseract',
        quantity: 1
      }],
    payments: [
      {
        payment_method: 'credit_card',
        credit_card: {
          recurrence: false,
          installments: 1,
          statement_descriptor: 'AVENGERS',
            card: {
              number: '4000000000000010',
              holder_name: 'Tony Stark',
              exp_month: 1,
              exp_year: 30,
              cvv: '123',
              billing_address: {
                  line_1: '10880, Malibu Point, Malibu Central',
                  zip_code: '90265',
                  city: 'Malibu',
                  state: 'CA',
                  country: 'US'                
              }
          }
        }
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