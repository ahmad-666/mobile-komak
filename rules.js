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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rules/rules.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/index/scripts/footer.js":
/*!*************************************!*\
  !*** ./src/index/scripts/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// let modalsTrigger = document.querySelectorAll('.modal_trigger');\n// let modals = document.querySelectorAll('.modal') ;\n// let currOpenModal = null ;\n// modalsTrigger.forEach(modalTrigger=>{\n//     modalTrigger.addEventListener('click',toggleModal) ;\n// })\n// function toggleModal(e){\n//     e.stopPropagation();\n//     modals.forEach(modal => {\n//         modal.classList.remove('show') ;\n//     })\n//     let modalID = `#${this.getAttribute('id')}_modal` ;\n//     let modal = document.querySelector(modalID) ;\n//     modal.classList.add('show') ;\n//     currOpenModal = modal ;\n//     document.addEventListener('click',docHandler) ;\n// }\n// function docHandler(e){\n//     let clickedElm = e.target ;\n//     if(!currOpenModal.contains(clickedElm)) {\n//         currOpenModal.classList.remove('show') ;\n//         document.removeEventListener('click',docHandler) ;\n//     }\n// }\n\n//# sourceURL=webpack:///./src/index/scripts/footer.js?");

/***/ }),

/***/ "./src/index/scripts/landing.js":
/*!**************************************!*\
  !*** ./src/index/scripts/landing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navbar = document.querySelector('nav');\nwindow.addEventListener('scroll', function (e) {\n  if (window.scrollY > navbar.clientHeight) navbar.classList.add('fix-style');else navbar.classList.remove('fix-style');\n});\n\n//# sourceURL=webpack:///./src/index/scripts/landing.js?");

/***/ }),

/***/ "./src/index/styles/copyright.scss":
/*!*****************************************!*\
  !*** ./src/index/styles/copyright.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\"};\n\n//# sourceURL=webpack:///./src/index/styles/copyright.scss?");

/***/ }),

/***/ "./src/index/styles/footer.scss":
/*!**************************************!*\
  !*** ./src/index/styles/footer.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/index/styles/footer.scss?");

/***/ }),

/***/ "./src/index/styles/nav.scss":
/*!***********************************!*\
  !*** ./src/index/styles/nav.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/index/styles/nav.scss?");

/***/ }),

/***/ "./src/init.scss":
/*!***********************!*\
  !*** ./src/init.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/init.scss?");

/***/ }),

/***/ "./src/rules/rules.js":
/*!****************************!*\
  !*** ./src/rules/rules.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init.scss */ \"./src/init.scss\");\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_init_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index/styles/nav.scss */ \"./src/index/styles/nav.scss\");\n/* harmony import */ var _index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rules_styles_rules_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/styles/rules.scss */ \"./src/rules/styles/rules.scss\");\n/* harmony import */ var _rules_styles_rules_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rules_styles_rules_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index/styles/footer.scss */ \"./src/index/styles/footer.scss\");\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/styles/copyright.scss */ \"./src/index/styles/copyright.scss\");\n/* harmony import */ var _index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_scripts_landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index/scripts/landing */ \"./src/index/scripts/landing.js\");\n/* harmony import */ var _index_scripts_landing__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_landing__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rules_scripts_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/scripts/rules */ \"./src/rules/scripts/rules.js\");\n/* harmony import */ var _rules_scripts_rules__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_rules_scripts_rules__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_scripts_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index/scripts/footer */ \"./src/index/scripts/footer.js\");\n/* harmony import */ var _index_scripts_footer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_footer__WEBPACK_IMPORTED_MODULE_8__);\n//load styles\n\n\n\n\n\n //load scripts\n\n\n\n //load videos\n\n//# sourceURL=webpack:///./src/rules/rules.js?");

/***/ }),

/***/ "./src/rules/scripts/rules.js":
/*!************************************!*\
  !*** ./src/rules/scripts/rules.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/rules/scripts/rules.js?");

/***/ }),

/***/ "./src/rules/styles/rules.scss":
/*!*************************************!*\
  !*** ./src/rules/styles/rules.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/rules/styles/rules.scss?");

/***/ })

/******/ });