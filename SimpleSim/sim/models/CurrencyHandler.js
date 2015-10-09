var CurrencyHandler = {
  initialize(config){
    this.name = config.name
    this.author = config.author
    this.description = config.description
  },
  getPluginDetails(){
    console.log('Plugin Name: ' + this.name)
    console.log('Author: ' + this.author)
    console.log('Description: ' + this.description)
  }
}

module.exports = CurrencyHandler
