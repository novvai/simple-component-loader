(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Component"] = factory();
	else
		root["Component"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/helpers.js":
/*!***************************!*\
  !*** ./source/helpers.js ***!
  \***************************/
/*! exports provided: e, findIn, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIn\", function() { return findIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/**\n * Retrieve element node from the DOM\n */\nfunction e(selector) {\n  var fetchedDOM = document.querySelectorAll(selector),\n      elemCount = fetchedDOM.length;\n  return elemCount == 1 ? fetchedDOM[0] : elemCount > 1 ? fetchedDOM : null;\n}\n/**\n * Retrieve element node from the DOM\n */\n\nfunction findIn(el, selector) {\n  var fetchedDOM = el.querySelectorAll(selector),\n      elemCount = fetchedDOM.length;\n  return elemCount == 1 ? fetchedDOM[0] : elemCount > 1 ? fetchedDOM : null;\n}\n/**\n * Retrieve element node from the DOM\n */\n\nfunction createElement(htmlString) {\n  var template = document.createElement('div');\n  htmlString = htmlString.trim(); // Never return a text node of whitespace as the result\n\n  template.innerHTML = htmlString;\n  return template;\n}\n\n//# sourceURL=webpack://Component/./source/helpers.js?");

/***/ }),

/***/ "./source/main.js":
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _simple_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-component-loader */ \"./source/simple-component-loader.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./source/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.component = new _simple_component_loader__WEBPACK_IMPORTED_MODULE_0__[\"NvComponentLoader\"]();\n    this.meta = {\n      title: \"\",\n      description: \"\",\n      keywords: \"\"\n    };\n    this.metaSelectors = ['meta[name=\"keywords\"]', 'title', 'meta[name=\"description\"]'];\n    this.template = \"\";\n    this.componentVariables = {};\n    this.container = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"e\"])('[data-bi-location=\"app\"]');\n    this.setupObserver();\n  }\n  /**\n   * Set custom container if needed\n   * \n   * @param {string} location \n   */\n\n\n  _createClass(Component, [{\n    key: \"setContainer\",\n    value: function setContainer(location) {\n      this.container = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"e\"])(\"[data-bi-location=\\\"\".concat(location, \"\\\"]\"));\n    }\n    /**\n     * Start Execution of the load script\n     */\n\n  }, {\n    key: \"make\",\n    value: function make() {\n      return this.renderContent();\n    }\n    /** PRIVATE */\n\n    /**\n     * Callback when all element are loaded\n     */\n\n  }, {\n    key: \"loaded\",\n    value: function loaded() {} // Attach custom event handler\n\n    /** \n     * Observer that will execute when all elements are rendered\n     */\n\n  }, {\n    key: \"setupObserver\",\n    value: function setupObserver() {\n      var _this = this;\n\n      this.observer = new MutationObserver(function (mutation, observer) {\n        _this.loaded();\n\n        _this.observer.disconnect();\n      });\n    }\n  }, {\n    key: \"renderContent\",\n    value: function renderContent() {\n      var _this2 = this;\n\n      this.component.load(this.template).then(function (result) {\n        _this2.template = result;\n\n        _this2.makeFromTemplate();\n\n        _this2.iterateTemplate();\n\n        _this2.addMeta();\n\n        _this2.addToContainer();\n\n        _this2.attachHandlers();\n      });\n    }\n    /**\n     * Replace all single level template variables and create HTML nodes\n     */\n\n  }, {\n    key: \"makeFromTemplate\",\n    value: function makeFromTemplate() {\n      for (var key in this.componentVariables) {\n        this.template = this.template.replace(\"@|\".concat(key, \"|@\"), this.componentVariables[key]);\n      }\n\n      this.template = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.template);\n    }\n    /**\n     * Find elements that are placeholders for iteratable object\n     * use the placeholder as template, iterate through all values and fill that template with different values\n     * lastly append to the parent object and pass to the template\n     */\n\n  }, {\n    key: \"iterateTemplate\",\n    value: function iterateTemplate() {\n      var _this3 = this;\n\n      var iteratebleElements = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"findIn\"])(this.template, '[data-bi-for]');\n\n      if (iteratebleElements === null) {\n        return;\n      }\n\n      if (iteratebleElements.length == undefined) {\n        iteratebleElements = [iteratebleElements];\n      }\n\n      iteratebleElements.forEach(function (e) {\n        var tmp = document.createElement(\"div\");\n        var parent = e.parentNode;\n        tmp.appendChild(e);\n        var cp = tmp.firstChild.innerHTML;\n\n        try {\n          _this3.componentVariables[e.getAttribute('data-bi-for')].forEach(function (el) {\n            var component = cp;\n\n            for (var key in el) {\n              component = component.replace(\"@|\".concat(key, \"|@\"), el[key]);\n            }\n\n            parent.appendChild(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(component).firstChild);\n          });\n        } catch (er) {\n          console.error(\"Template variable has been specified, but no Component variable is provided : \".concat(e.getAttribute('data-bi-for')));\n        }\n      });\n    }\n    /**\n     * Attach custom behaviour to  elements givin flexability of work\n     * Find all elements with data attribute [data-bi-trigger]\n     * attach to the element method specified under data-bi-trigger\n     * \n     * example : div data-bi-trigger=\"load\"\n     * will attach to that div click listener with callback method *load*\n     */\n\n  }, {\n    key: \"attachHandlers\",\n    value: function attachHandlers() {\n      var _this4 = this;\n\n      var handlerElements = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"findIn\"])(this.container, '[data-bi-trigger]');\n\n      if (handlerElements === null) {\n        return;\n      }\n\n      if (handlerElements.length === undefined) {\n        handlerElements = [handlerElements];\n      }\n\n      handlerElements.forEach(function (handler) {\n        var handlerMethod = handler.getAttribute('data-bi-trigger');\n\n        try {\n          handler.addEventListener('click', _this4[handlerMethod].bind(_this4));\n        } catch (e) {\n          console.error(\"The method \\\"\".concat(handlerMethod, \"\\\" that you try to invoke does not exist, you can add such behaviour using .addHandler(handlerName, callback)\"));\n        }\n      });\n    }\n    /**\n     * Clears the content for the container and fills the container with new data\n     */\n\n  }, {\n    key: \"addToContainer\",\n    value: function addToContainer() {\n      var _this5 = this;\n\n      this.observer.observe(this.container, {\n        childList: true\n      });\n      this.container.innerHTML = \"\";\n      this.template.childNodes.forEach(function (node) {\n        _this5.container.appendChild(node);\n      });\n    }\n    /**\n     * Adds Selector\n     * \n     * @param {String|null} selector \n     */\n\n  }, {\n    key: \"appendMetaSelectors\",\n    value: function appendMetaSelectors() {\n      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (selector == null || selector == undefined) {\n        return this;\n      }\n\n      this.metaSelectors.push();\n      return this;\n    }\n    /** \n     * Add meta information if its given\n     */\n\n  }, {\n    key: \"addMeta\",\n    value: function addMeta() {\n      var _this6 = this;\n\n      this.metaSelectors.forEach(function (metaTag) {\n        var elem = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"e\"])(metaTag);\n\n        if (elem != null) {\n          if (metaTag === 'title') {\n            elem.innerHTML = _this6.meta.hasOwnProperty(metaTag) ? _this6.meta[metaTag] : \"\";\n          } else {\n            var metaContent = _this6.meta[elem.getAttribute('name')];\n\n            if (metaContent != null && metaContent != undefined) {\n              elem.setAttribute('content', metaContent);\n            }\n          }\n        }\n      });\n    }\n  }]);\n\n  return Component;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack://Component/./source/main.js?");

/***/ }),

/***/ "./source/simple-component-loader.js":
/*!*******************************************!*\
  !*** ./source/simple-component-loader.js ***!
  \*******************************************/
/*! exports provided: NvComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NvComponentLoader\", function() { return NvComponentLoader; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NvComponentLoader =\n/*#__PURE__*/\nfunction () {\n  function NvComponentLoader() {\n    _classCallCheck(this, NvComponentLoader);\n  }\n\n  _createClass(NvComponentLoader, [{\n    key: \"load\",\n    value: function load(componentPath) {\n      var _this = this;\n\n      this.normalize(componentPath);\n      return new Promise(function (resolve, reject) {\n        var xhttp = new XMLHttpRequest();\n\n        xhttp.onreadystatechange = function () {\n          if (this.readyState == 4 && this.status == 200) {\n            resolve(this.responseText);\n          }\n        };\n\n        xhttp.open(\"GET\", _this.componentPath, true);\n        xhttp.send();\n      });\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize(path) {\n      this.componentPath = path;\n      var p = this.componentPath.split('.');\n\n      try {\n        if (p[p.length - 1] !== 'html') {\n          this.componentPath = \"\".concat(this.componentPath, \".html\");\n        }\n      } catch (e) {\n        console.log(e);\n      }\n    }\n  }]);\n\n  return NvComponentLoader;\n}();\n\n//# sourceURL=webpack://Component/./source/simple-component-loader.js?");

/***/ })

/******/ })["default"];
});