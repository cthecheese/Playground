var express = require('express')
var router = express.Router()
var User = require('../models/Users')
var Task = require('../models/Tasks')

router.get('/', function(req, res){
  new User().fetch().then(function(user){
    res.send(user)
  })
})

router.get('/users', function(req, res){

})

module.exports = router;
