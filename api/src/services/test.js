// <?php

// $curl = curl_init();

// curl_setopt_array($curl, [
//   CURLOPT_URL => "https://api.pagar.me/core/v5/orders",
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => "",
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 30,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => "POST",
//   CURLOPT_POSTFIELDS => "{\"items\":[{\"amount\":2200,\"description\":\"rastreador\",\"quantity\":1,\"code\":\"1\"}],\"customer\":{\"code\":\"null\",\"document\":\"113044917908\",\"phones\":{\"home_phone\":{\"country_code\":\"55\",\"area_code\":\"21\",\"number\":\"22180513\"},\"mobile_phone\":{\"country_code\":\"55\",\"area_code\":\"41\",\"number\":\"997987818\"}},\"name\":\"Josevaldo\",\"type\":\"individual\",\"email\":\"test@test.com\",\"document_type\":\"CPF\"},\"payments\":[{\"checkout\":{\"customer_editable\":\"false\",\"accepted_payment_methods\":[\"credit_card\",\"boleto\",\"bank_transfer\",\"debit_card\",\"pix\"],\"boleto\":{\"bank\":[\"033\",\"001\",\"104\",\"237\",\"341\"]}},\"payment_method\":\"checkout\"}]}",
//   CURLOPT_HTTPHEADER => [
//     "Accept: application/json",
//     "Authorization: Basic c2tfdGVzdF92ZTkzZHdjOExJd2JqMVlWOg==",
//     "Content-Type: application/json"
//   ],
// ]);

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
//   echo "cURL Error #:" . $err;
// } else {
//   echo $response;
// }