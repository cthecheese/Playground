/*
  Express
*/
var express = require('express')
var app = express()
var Promise = require('bluebird')
var port = 3000
var api = express.Router()

/*
  Bookshelf
*/

var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host     : 'localhost',
    port: '5432',
    user     : 'chunter',
    database : 'itodo',
    charset  : 'utf8'
})
var bookshelf = require('bookhself')(knex)

api.get('/', express.static(__dirname + '/public'))

app.use(express.static('public'))
app.use('/api', api)

app.listen(port)
console.log('Running iToDo Server')
