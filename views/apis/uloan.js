// Install request by running "npm install --save request"
var request = require("request");

var options = { method: 'GET',
  url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/Loans/compute',
  qs: 
   { principal: 'REPLACE_THIS_VALUE',
     interest: 'REPLACE_THIS_VALUE',
     noy: 'REPLACE_THIS_VALUE' },
  headers: 
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': 'REPLACE_THIS_KEY',
     'x-ibm-client-id': 'REPLACE_THIS_KEY' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});

//sample response
// //{
//   "principal": 500000,
//   "noy": 10,
//   "interest": 6.5,
//   "total": 5677.4,
//   "income": 14193.5
// }