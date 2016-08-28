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

app.get('/dashboard',function(req,res){
  res.render(path.join(__dirname+'/views/dashboard/index.html'));
});

app.get('/goal',function(req,res){
  res.render(path.join(__dirname+'/views/goal/index.html'));
});

app.get('/loan-page',function(req,res){
  res.render(path.join(__dirname+'/views/goal/index.html'));
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
