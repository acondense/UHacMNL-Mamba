// Install request by running "npm install --save request"
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/payment',
  headers: 
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': 'I4iO2tY3gX3bM2iW7nE7jR1dY6nX2rC3yJ1sO4mF4tV6hJ0eV4',
     'x-ibm-client-id': '9e727db7-3d76-4d3f-a3db-6e5f4e146d4f' },
  body: 
   { channel_id: 'BLUEMIX',
     transaction_id: '1234567891',
     source_account: '000000020000',
     source_currency: 'php',
     biller_id: 'TELCO',
     reference1: '000000000A',
     reference2: '000000000B',
     reference3: '000000000C',
     amount: 1500.5 },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});

//sample respone
//{
//   "channel_id": "BLUEMIX",
//   "transaction_id": "1234567891",
//   "status": "S",
//   "confirmation_no": "P00000000083",
//   "error_message": ""
// }