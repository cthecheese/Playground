/**
 * The base wallet that holds onto a player's currencies
 */

export default class Wallet {
  /**
   * Generates an array of JSON objects filled with currencies.
   *
   * @param {object} currencies List of Currency from CurrenyList
   */
  constructor(currencies) {
    this.currencies = {};

    for(var currency in currencies){
      this.currencies[currencies[currency]] = 0;
    }
  }

  incrementCurrency(currency, value){
    var theCurrency = currencyList.list[currency];
    this.currencies[currency] += theCurrency.add(value);
  }

  decrementCurrrency(currency, value){
    var theCurrency = currencyList.list[currency];
    this.currencies[currency] -= theCurrency.subtract(value);
  }

  view(){
    return this.currencies;
  }
}
