var main = require("./lib/main");
var _ = require("underscore");
var express = require("express");
var app = express();
var port = process.env.VCAP_APP_PORT || 8080;
var options;
var shortOptions;
var envOptions = {};
var path    = require("path");
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
  res.render(path.join(__dirname+'/views/goal/index.html'));
});

app.get('/startup/dashboard',function(req,res){
  res.render(path.join(__dirname+'/views/dashboard/index.html'));
});

app.get('/goal',function(req,res){
  res.render(path.join(__dirname+'/views/goal/index.html'));
});

app.get('/loan-page',function(req,res){
  res.render(path.join(__dirname+'/views/loan-page/index.html'));
});

app.get('/postroute',function(req,res){
  // res.render(path.join(__dirname+'/views/loan-page/index.html'));
  
          var request = require("request");

        var options = { method: 'POST',
          url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/transfer',
          headers: 
           { accept: 'application/json',
             'content-type': 'application/json',
             'x-ibm-client-secret': 'E5fE3jP2tY2vC6yU0lA0dK4yE7vL4tH3jU4gC2sF0yB2jI1uL6',
              'x-ibm-client-id': 'b4e5be45-2893-4766-88a2-f90454cf56e1'  },
          body: req.query,
          json: true };

        request(options, function (error, response, body) {
          if (error) return console.error('Failed: %s', error.message);
          res.send(body);

          // console.log('Success: ', body);
        });
});

app.get('/loanroute',function(req,res){
  // res.render(path.join(__dirname+'/views/loan-page/index.html'));
  
          var request = require("request");

        var options = { method: 'POST',
          url: 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/transfer',
          headers: 
           { accept: 'application/json',
             'content-type': 'application/json',
             'x-ibm-client-secret': 'E5fE3jP2tY2vC6yU0lA0dK4yE7vL4tH3jU4gC2sF0yB2jI1uL6',
              'x-ibm-client-id': 'b4e5be45-2893-4766-88a2-f90454cf56e1'  },
          body: req.query,
          json: true };

        request(options, function (error, response, body) {
          if (error) return console.error('Failed: %s', error.message);
          res.send(body);

          // console.log('Success: ', body);
        });
});

require("cf-deployment-tracker-client").track();

// Guide Part 1 - loading the To-Do without Cloudant.
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});





// Guide Part 2 - Using Cloudant
/*
 if (process.env.PORT != null) {
        envOptions.port = process.env.PORT;
    }
    options = _.defaults(envOptions, {
        db: 'cloudant'
    });
    return main.start(options);
 */
