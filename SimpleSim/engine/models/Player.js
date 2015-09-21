/**
 * Holds all base information for a player
 */

export default class Player {
  /**
   * Simplest constructor, will simply assign a name to a player.
   *
   * @param {string} name The name of the player
   */
  constructor(name){
    this.name = name;
    this.wallet = new Wallet(currencyList.listOfCurrencies);
  }

  /**
   * Views the wallet of the player
   * @todo Set viewing of wallet to have it's own handler
   */
  viewWallet(){
    console.log(this.wallet.view());
  }
}
