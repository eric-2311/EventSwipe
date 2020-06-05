/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/event_swipe.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/event_swipe.jsx":
/*!**********************************!*\
  !*** ./frontend/event_swipe.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/eric/Desktop/EventSwipe/frontend/event_swipe.jsx: Unexpected token (27:1)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m    \u001b[90m// window.login = login;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m    \u001b[90m// window.logout = logout;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m    \u001b[90m// window.getState = store.getState;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m    window\u001b[33m.\u001b[39mgetState \u001b[33m=\u001b[39m store\u001b[33m.\u001b[39mgetState\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:746:17)\n    at Object.raiseWithData (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:739:17)\n    at Object.raise (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:733:17)\n    at Object.unexpected (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Object.jsxParseIdentifier (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4412:12)\n    at Object.jsxParseNamespacedName (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4422:23)\n    at Object.jsxParseElementName (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4519:22)\n    at Object.jsxParseElementAt (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4552:33)\n    at Object.jsxParseElement (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4626:17)\n    at Object.parseExprAtom (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4633:19)\n    at Object.parseExprSubscripts (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Object.parseMaybeUnary (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Object.parseExprOps (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Object.parseMaybeConditional (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Object.parseMaybeAssign (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Object.parseExpression (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9386:23)\n    at Object.parseStatementContent (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:11285:23)\n    at Object.parseStatement (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Object.parseBlockBody (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Object.parseBlock (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Object.parseFunctionBody (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Object.parseArrowExpression (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:10677:10)\n    at Object.parseParenAndDistinguishExpression (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:10295:12)\n    at Object.parseExprAtom (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:10007:21)\n    at Object.parseExprAtom (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:4638:20)\n    at Object.parseExprSubscripts (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Object.parseMaybeUnary (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Object.parseExprOps (/home/eric/Desktop/EventSwipe/node_modules/@babel/parser/lib/index.js:9506:23)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map