// Install request by running "npm install --save request"



var request = require("request");

var options = { method: 'POST',
  url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/transfer',
  headers: 
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': '4iO2tY3gX3bM2iW7nE7jR1dY6nX2rC3yJ1sO4mF4tV6hJ0eV4',
     'x-ibm-client-id': '9e727db7-3d76-4d3f-a3db-6e5f4e146d4f' },
  body: 
   { channel_id: 'UHACK_0037',
     transaction_id: '1234567890',
     source_account: '000000020000',
     source_currency: 'php',
     target_account: '000000020001',
     target_currency: 'php',
     amount: 1500.5 },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});