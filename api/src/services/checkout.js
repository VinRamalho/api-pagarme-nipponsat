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
    items: [
      {amount: 2990,
        code: '1',
        description: 'Chaveiro do Tesseract',
        quantity: 1
      }
    ],
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
    // expires_in: 60,
    payments:[
       {
          payment_method:'checkout',
          amount:2990,
          checkout: {
            customer_editable : false,
            skip_checkout_success_page: false,
            accepted_payment_methods: [ 'credit_card', 'boleto', 'bank_transfer', 'debit_card', 'pix'],
            accepted_multi_payment_methods: [
                     ['credit_card','credit_card'],
                     ['credit_card','boleto']
                     ],
            success_url: 'https://www.nps-solutions.com.br',
            bank_transfer: {
              bank: ['237', '001', '341']
            },
            boleto: {
              instructions: 'Pagar até o vencimento',
              due_at: '2022/06/28T09:07:50Z'
          },
            credit_card: {
               capture: true,
               statement_descriptor: 'rasre',
               operation_type: 'auth_and_capture',
               threed_secure:{
                mpi:'acquirer',
                redirect_url:'https://www.nps-solutions.com.br'
              }
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
  // const urlSucesso = response.data.checkouts;
  // console.log(urlSucesso);
  console.log('Deu boa')
}).catch(function (error) {
  // console.error(error.response.data);
  console.error(error.response.data);
//   console.log(error.request.data.errors);//{ request.data }
  console.log('deu ruim');
});

// voucher:{
//   capture: true,
//   statement_descriptor: 'pagarme'
// },