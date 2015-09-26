/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * The base currency handler. Every Currency Handler should extend off this class.
	 * @example
	 * class MyCurrencyHandler extends CurrencyHandler(){ ... }
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CurrencyHandler = (function () {
	  /**
	   * This is the simplest constructor a currency handler
	   * can have.
	   *
	   * @param {string} currency The name of the currency to be handled
	   */

	  function CurrencyHandler(currency) {
	    _classCallCheck(this, CurrencyHandler);

	    /** @type {string} */
	    this.currencyToHandle = currency;
	  }

	  /**
	   * Returns manipulated currency value to be added to current currencyToHandle
	   *
	   * @param {number} value The base value that is being manipulated
	   * @return {number} mValue The manipulated value
	   */

	  _createClass(CurrencyHandler, [{
	    key: "incrementCurrency",
	    value: function incrementCurrency(value) {
	      var mValues = value;
	      return mValues;
	    }
	  }, {
	    key: "decrementCurrrency",
	    value: function decrementCurrrency(value) {
	      var mValue = value;
	      return mValue;
	    }
	  }]);

	  return CurrencyHandler;
	})();

	exports["default"] = CurrencyHandler;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Base class for all buildings
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var props = {
	  'name': '', // Name of the building
	  'owner': '' };

	// Name of owner

	var Building = (function () {
	  function Building() {
	    _classCallCheck(this, Building);
	  }

	  _createClass(Building, [{
	    key: 'constuctor',
	    value: function constuctor(buildProps) {}
	  }]);

	  return Building;
	})();

	exports['default'] = Building;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * The base class for Currency. It is unwise to modify this file, rather it is
	 * better to extend the class and perform any modifications there.
	 * WARNING: No currency manipulation should be done in this file! That is why
	 * handlers were created! The Currency class is a base class that allows SimpleSim
	 * to connect with the rest of the base engine. Please reconsider any thoughts
	 * about modifying this file.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Currency = (function () {
	  /**
	   * This constructor will assign the designated name and use the default
	   * CurrencyHandler.
	   *
	   * @param {string} name The name of the currency being created
	   */

	  function Currency(name, handler) {
	    _classCallCheck(this, Currency);

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

	  _createClass(Currency, [{
	    key: 'add',
	    value: function add(value) {
	      return this.handler.incrementCurrency(value);
	    }
	  }, {
	    key: 'subtract',
	    value: function subtract(value) {
	      return this.handler.decrementCurrrency(value);
	    }
	  }]);

	  return Currency;
	})();

	exports['default'] = Currency;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Holds on to the list of all currencies implemented in-game
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CurrencyList = (function () {
	  /**
	   * Default constuctor that simply creates an empty object to be populated
	   */

	  function CurrencyList() {
	    _classCallCheck(this, CurrencyList);

	    this.list = {};
	  }

	  /**
	   * Returns an array of all currencies implemented in-game
	   * @return {array}
	   */

	  _createClass(CurrencyList, [{
	    key: "addCurrency",

	    /**
	     * Allows you to add a currency into the game
	     *
	     * @param {Currency} The currency to be added to the list
	     */
	    value: function addCurrency(currency) {
	      this.list[currency.name] = currency;
	    }
	  }, {
	    key: "listOfCurrencies",
	    get: function get() {
	      var arr = [];
	      for (var currency in this.list) {
	        arr.push(currency);
	      }
	      return arr;
	    }
	  }]);

	  return CurrencyList;
	})();

	exports["default"] = CurrencyList;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Holds all base information for a player
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = (function () {
	  /**
	   * Simplest constructor, will simply assign a name to a player.
	   *
	   * @param {string} name The name of the player
	   */

	  function Player(name) {
	    _classCallCheck(this, Player);

	    this.name = name;
	    this.wallet = new Wallet(currencyList.listOfCurrencies);
	  }

	  /**
	   * Views the wallet of the player
	   * @todo Set viewing of wallet to have it's own handler
	   */

	  _createClass(Player, [{
	    key: "viewWallet",
	    value: function viewWallet() {
	      console.log(this.wallet.view());
	    }
	  }]);

	  return Player;
	})();

	exports["default"] = Player;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * The base wallet that holds onto a player's currencies
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Wallet = (function () {
	  /**
	   * Generates an array of JSON objects filled with currencies.
	   *
	   * @param {object} currencies List of Currency from CurrenyList
	   */

	  function Wallet(currencies) {
	    _classCallCheck(this, Wallet);

	    this.currencies = {};

	    for (var currency in currencies) {
	      this.currencies[currencies[currency]] = 0;
	    }
	  }

	  _createClass(Wallet, [{
	    key: "incrementCurrency",
	    value: function incrementCurrency(currency, value) {
	      var theCurrency = currencyList.list[currency];
	      this.currencies[currency] += theCurrency.add(value);
	    }
	  }, {
	    key: "decrementCurrrency",
	    value: function decrementCurrrency(currency, value) {
	      var theCurrency = currencyList.list[currency];
	      this.currencies[currency] -= theCurrency.subtract(value);
	    }
	  }, {
	    key: "view",
	    value: function view() {
	      return this.currencies;
	    }
	  }]);

	  return Wallet;
	})();

	exports["default"] = Wallet;
	module.exports = exports["default"];

/***/ }
/******/ ]);