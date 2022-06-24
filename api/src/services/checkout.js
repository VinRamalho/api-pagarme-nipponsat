const axios = require("axios").default;
// const datetime = require('node-datetime');
// const dt = datetime.create();
// const formatted = dt.format('d/m/Y H:M:S');
// const addDay = formatted.offsetInDays(1);
// console.log(addDay);

const options = {
  method: 'POST',
  url: 'https://api.pagar.me/core/v5/orders/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg=='
  },
  data: {
    items:[
       {
          amount:10,
          description:'Chaveiro do Tesseract',
          quantity:1
       }
    ],
    customer:{
       name:'Tony Stark',
       email:'tstark@avengers.com',
       type: 'individual',
       document: '01234567890',
       phones: {
           home_phone: {
               country_code: '55',
               number: '22180513',
               area_code: '21'
           },
      },
    },
    // expires_in: 60,
    payments:[
       {
          payment_method:'checkout',
          amount:10,
          checkout: {
            customer_editable : false,
            skip_checkout_success_page: true,
            accepted_payment_methods: [ 'credit_card', 'boleto', 'bank_transfer', 'debit_card', 'pix'],
            accepted_multi_payment_methods: [
                     ['credit_card','credit_card'],
                     ['credit_card','boleto']
                     ],
            success_url: 'https://www.nps-solutions.com.br',
            bank_transfer: {
              'bank': ['237', '001', '341']
            },
            boleto: {
              bank: ['033', '001', '104', '237', '341'],
              instructions: 'Pagar até o vencimento',
              due_at: '2022/06/25T09:07:50Z'
          },
            credit_card: {
               capture: true,
               statement_descriptor: 'Pague a fatura',
               installments: [
                 {
                   number: 1,
                   total: 2000
                 },
                 {
                   number: 2,
                   total: 2500
                 }
              ]
            },
           debit_card: {
              authentication:{
                statement_descriptor: 'Desc na fatura',
                type:'threed_secure',
                threed_secure:{
                  mpi:'acquirer',
                  success_url:'https://www.nps-solutions.com.br'
                }
              }
            },
            pix: {
              expires_in: 1800,
              additional_information: [
                  {
                      name: "Quantidade",
                      value: "2"
                  }
              ]
            }
          }
       }
    ]
    }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  // console.log(response.data);
  console.log('Deu boa')
}).catch(function (error) {
  console.error(error.response.data);
//   console.log(error.request.data.errors);//{ request.data }
  console.log('a Solicitação falhou');
});

// voucher:{
//   capture: true,
//   statement_descriptor: 'pagarme'
// },