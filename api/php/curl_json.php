<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.pagar.me/core/v5/orders",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "
  {
    \"items\":[{
      \"amount\":2200,
      \"description\":\"rastreador\",
      \"quantity\":1,
      \"code\":\"1\"
    }],
    \"customer\":{
        \"code\":\"1\",
        \"document\":\"11111111111\",
        \"address\":{
          \"country\":\"BR\",
          \"state\":\"PR\",
          \"city\":\"Curitiba\",
          \"zip_code\":\"81570170\",
          \"line_1\":\"4, Machado de assis, Uberaba\",
          \"line_2\":\"casa\"
          },
          \"name\":\"Francisco\",
          \"type\":\"individual\",
          \"email\":\"test@test.com\",
          \"document_type\":\"CPF\",
          \"phones\":{
            \"mobile_phone\":{
              \"country_code\":\"55\",
              \"area_code\":\"21\",
              \"number\":\"000000000\"
            }}
      },
          \"payments\":[{
            \"payment_method\":\"checkout\",
              \"checkout\":{
              \"accepted_payment_methods\":[\"credit_card\",\"boleto\",\"bank_transfer\",\"debit_card\",\"pix\"],
                \"customer_editable\":\"false\",
            \"boleto\":{
              \"due_at\":\"2022/06/28T09:07:50Z\"
            },
          \"success_url\":\"https://www.nps-solutions.com.br\",
          \"debit_card\":{
            \"authentication\":{
              \"statement_descriptor\":\"Desc na fatura\",
              \"type\":\"threed_secure\",
              \"threed_secure\":{
                \"mpi\":\"acquirer\",
                \"success_url\":\"https://www.nps-solutions.com.br\"}}},
          \"bank_transfer\":{\"bank\":[\"033\",\"001\",\"104\",\"237\",\"341\"]},
          \"credit_card\":{
            \"capture\":\"true\",
            \"operation_type\":\"auth_and_capture\",
            \"statement_descriptor\":\"rastreador\"
          }
          }}]
  }",
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Authorization: Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg==",
    "Content-Type: application/json"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}