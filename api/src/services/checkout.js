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
    items:[
       {
          amount:2990,
          description:'Chaveiro do Tesseract',
          quantity:1
       }
    ],
    customer:{
       name:'Tony Stark',
       email:'tstark@avengers.com'
    },
    payments:[
       {
          payment_method:'checkout',
          amount:2000,
          checkout: {
            customer_editable : false,
            skip_checkout_success_page: true,
            accepted_payment_methods: [ 'credit_card', 'boleto', 'bank_transfer', 'voucher','debit_card'],
            accepted_multi_payment_methods: [
                     ['credit_card','credit_card'],
                     ['credit_card','boleto']
                     ],
            success_url: 'htpps://www.nps-solutions.com.br',
            bank_transfer: {
              'bank': ['237', '001', '341']
            },
            boleto: {
              bank: '033',
              instructions: 'Pagar até o vencimento',
              due_at: '2022-07-25T00:00:00Z'
          },
            credit_card: {
               capture: true,
               statement_descriptor: 'Desc na fatura',
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
            },voucher:{
                 capture: true,
                 statement_descriptor: 'pagarme'
            },
           debit_card: {
              authentication:{
                statement_descriptor: 'Desc na fatura',
                type:'threed_secure',
                threed_secure:{
                  mpi:'acquirer',
                  success_url:'http://www.pagar.me'
                }
              }
            }
          }
       }
    ]
    }
};

axios.request(options).then(function (response) {
  console.log(response.data);
  console.log('Deu boa')
}).catch(function (error) {
  console.error(error.response.data);
//   console.log(error.request.data.errors);//{ request.data }
  console.log('a Solicitação falhou');
});