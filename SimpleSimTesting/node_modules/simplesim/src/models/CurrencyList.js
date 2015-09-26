/**
 * Holds on to the list of all currencies implemented in-game
 */

export default class CurrencyList{
  /**
   * Default constuctor that simply creates an empty object to be populated
   */
  constructor(){
    this.list = {};
  }
  /**
   * Returns an array of all currencies implemented in-game
   * @return {array}
   */
  get listOfCurrencies(){
    var arr = [];
    for(var currency in this.list){
      arr.push(currency);
    }
    return arr;
  }

  /**
   * Allows you to add a currency into the game
   *
   * @param {Currency} The currency to be added to the list
   */
  addCurrency(currency){
    this.list[currency.name] = currency;
  }
}
