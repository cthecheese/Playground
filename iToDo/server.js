/*
  Express
*/
var express = require('express')
var app = express()
var Promise = require('bluebird')
var bodyParser = require('body-parser')

var port = 3000
var api = require('./routes/api')

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

api.get('/', express.static(__dirname + '/public'))

app.use(express.static('public'))
app.use('/api', api)

app.listen(port)
console.log('Running iToDo Server')
