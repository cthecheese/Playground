/**
 * The base class for Currency. It is unwise to modify this file, rather it is
 * better to extend the class and perform any modifications there.
 * WARNING: No currency manipulation should be done in this file! That is why
 * handlers were created! The Currency class is a base class that allows SimpleSim
 * to connect with the rest of the base engine. Please reconsider any thoughts
 * about modifying this file.
 */

export default class Currency{
  /**
   * This constructor will assign the designated name and use the default
   * CurrencyHandler.
   *
   * @param {string} name The name of the currency being created
   */
  constructor(name, handler){
    /** @type {string} */
    this.name = name;
    /** @type {CurrencyHandler} */
    this.handler = typeof handler == 'undefined' ? new CurrencyHandler(this.name) : handler;
  }

  /**
   * Calls the CurrencyHandler's incrementCurrency method to determine how much
   * currency should be added to the existing amount.
   *
   * @param {number} value The base value before manipluation done by
   * the CurrencyHandler.
   * @return {number} The amount of currency to be added
   */
  add(value){
    return this.handler.incrementCurrency(value);
  }

  subtract(value){
    return this.handler.decrementCurrrency(value);
  }
}
