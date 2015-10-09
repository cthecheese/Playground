var CurrencyHandler = require('../models/CurrencyHandler.js')

var ssCurrencyHandler = Object.create(CurrencyHandler)
let config = {
  name: 'Simple Sim CurrencyHandler',
  author: 'Colby Hunter',
  description: 'Default CurrencyHandler for Simple Sim'
}

CurrencyHandler.initialize(config)

ssCurrencyHandler.getInformation = function(){
  CurrencyHandler.getPluginDetails()
}

module.exports = ssCurrencyHandler
