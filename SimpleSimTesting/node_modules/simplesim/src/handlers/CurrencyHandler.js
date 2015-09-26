/**
 * The base currency handler. Every Currency Handler should extend off this class.
 * @example
 * class MyCurrencyHandler extends CurrencyHandler(){ ... }
 */

export default class CurrencyHandler{
  /**
   * This is the simplest constructor a currency handler
   * can have.
   *
   * @param {string} currency The name of the currency to be handled
   */
  constructor(currency){
    /** @type {string} */
    this.currencyToHandle = currency;
  }

  /**
   * Returns manipulated currency value to be added to current currencyToHandle
   *
   * @param {number} value The base value that is being manipulated
   * @return {number} mValue The manipulated value
   */
  incrementCurrency(value){
    var mValues = value;
    return mValues;
  }

  decrementCurrrency(value){
    var mValue = value;
    return mValue;
  }
}
