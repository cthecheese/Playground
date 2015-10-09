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

	var ssCurrencyHandler = __webpack_require__(1);

	ssCurrencyHandler.getPluginDetails();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CurrencyHandler = __webpack_require__(2);

	var ssCurrencyHandler = Object.create(CurrencyHandler);
	var config = {
	  name: 'Simple Sim CurrencyHandler',
	  author: 'Colby Hunter',
	  description: 'Default CurrencyHandler for Simple Sim'
	};

	CurrencyHandler.initialize(config);

	ssCurrencyHandler.getInformation = function () {
	  CurrencyHandler.getPluginDetails();
	};

	module.exports = ssCurrencyHandler;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var CurrencyHandler = {
	  initialize: function initialize(config) {
	    this.name = config.name;
	    this.author = config.author;
	    this.description = config.description;
	  },
	  getPluginDetails: function getPluginDetails() {
	    console.log('Plugin Name: ' + this.name);
	    console.log('Author: ' + this.author);
	    console.log('Description: ' + this.description);
	  }
	};

	module.exports = CurrencyHandler;

/***/ }
/******/ ]);