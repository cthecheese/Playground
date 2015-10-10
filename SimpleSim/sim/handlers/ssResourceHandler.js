var ResourceHandler = require('../models/ResourceHandler.js')
var ssResourceHandler = Object.create(ResourceHandler)

let config = {
  name: 'Simple Sim ResourceHandler',
  author: 'Colby Hunter',
  description: 'Default ResourceHandler for Simple Sim'
}

ssResourceHandler.initialize(config)

ssResourceHandler.getInformation = function(){
  ssResourceHandler.getPluginDetails()
}

ssResourceHandler.incrementResource = function(base){
  return base + 1
}

ssResourceHandler.decrementCurrrency = function(base){
  if(base - 1)
    return base - 1
}

module.exports = ssResourceHandler
