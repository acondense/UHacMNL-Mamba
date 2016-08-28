// Install request by running "npm install --save request"
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/getAccount',
  qs: { account_no: 'REPLACE_THIS_VALUE' },
  headers: 
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': '4iO2tY3gX3bM2iW7nE7jR1dY6nX2rC3yJ1sO4mF4tV6hJ0eV4',
     'x-ibm-client-id': '9e727db7-3d76-4d3f-a3db-6e5f4e146d4f' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);


 //SAMPLE RESPONSE
 //
 //   {
 //        "account_no": "000000013941",
 //        "currency": "PHP",
 //        "account_name": "UBP 000000013941",
 //        "status": "ACTIVE",
 //        "available_balance": "100000.0000",
 //        "current_balance": "100000.0000"
 //    }