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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/article/article.js");
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

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * anime.js v3.1.0\n * (c) 2019 Julian Garnier\n * Released under the MIT license\n * animejs.com\n */\n\n// Defaults\n\nvar defaultInstanceSettings = {\n  update: null,\n  begin: null,\n  loopBegin: null,\n  changeBegin: null,\n  change: null,\n  changeComplete: null,\n  loopComplete: null,\n  complete: null,\n  loop: 1,\n  direction: 'normal',\n  autoplay: true,\n  timelineOffset: 0\n};\n\nvar defaultTweenSettings = {\n  duration: 1000,\n  delay: 0,\n  endDelay: 0,\n  easing: 'easeOutElastic(1, .5)',\n  round: 0\n};\n\nvar validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];\n\n// Caching\n\nvar cache = {\n  CSS: {},\n  springs: {}\n};\n\n// Utils\n\nfunction minMax(val, min, max) {\n  return Math.min(Math.max(val, min), max);\n}\n\nfunction stringContains(str, text) {\n  return str.indexOf(text) > -1;\n}\n\nfunction applyArguments(func, args) {\n  return func.apply(null, args);\n}\n\nvar is = {\n  arr: function (a) { return Array.isArray(a); },\n  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },\n  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },\n  svg: function (a) { return a instanceof SVGElement; },\n  inp: function (a) { return a instanceof HTMLInputElement; },\n  dom: function (a) { return a.nodeType || is.svg(a); },\n  str: function (a) { return typeof a === 'string'; },\n  fnc: function (a) { return typeof a === 'function'; },\n  und: function (a) { return typeof a === 'undefined'; },\n  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },\n  rgb: function (a) { return /^rgb/.test(a); },\n  hsl: function (a) { return /^hsl/.test(a); },\n  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },\n  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }\n};\n\n// Easings\n\nfunction parseEasingParameters(string) {\n  var match = /\\(([^)]+)\\)/.exec(string);\n  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];\n}\n\n// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js\n\nfunction spring(string, duration) {\n\n  var params = parseEasingParameters(string);\n  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);\n  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);\n  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);\n  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);\n  var w0 = Math.sqrt(stiffness / mass);\n  var zeta = damping / (2 * Math.sqrt(stiffness * mass));\n  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;\n  var a = 1;\n  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;\n\n  function solver(t) {\n    var progress = duration ? (duration * t) / 1000 : t;\n    if (zeta < 1) {\n      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));\n    } else {\n      progress = (a + b * progress) * Math.exp(-progress * w0);\n    }\n    if (t === 0 || t === 1) { return t; }\n    return 1 - progress;\n  }\n\n  function getDuration() {\n    var cached = cache.springs[string];\n    if (cached) { return cached; }\n    var frame = 1/6;\n    var elapsed = 0;\n    var rest = 0;\n    while(true) {\n      elapsed += frame;\n      if (solver(elapsed) === 1) {\n        rest++;\n        if (rest >= 16) { break; }\n      } else {\n        rest = 0;\n      }\n    }\n    var duration = elapsed * frame * 1000;\n    cache.springs[string] = duration;\n    return duration;\n  }\n\n  return duration ? solver : getDuration;\n\n}\n\n// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function\n\nfunction steps(steps) {\n  if ( steps === void 0 ) steps = 10;\n\n  return function (t) { return Math.round(t * steps) * (1 / steps); };\n}\n\n// BezierEasing https://github.com/gre/bezier-easing\n\nvar bezier = (function () {\n\n  var kSplineTableSize = 11;\n  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);\n\n  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }\n  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }\n  function C(aA1)      { return 3.0 * aA1 }\n\n  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }\n  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }\n\n  function binarySubdivide(aX, aA, aB, mX1, mX2) {\n    var currentX, currentT, i = 0;\n    do {\n      currentT = aA + (aB - aA) / 2.0;\n      currentX = calcBezier(currentT, mX1, mX2) - aX;\n      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }\n    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);\n    return currentT;\n  }\n\n  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {\n    for (var i = 0; i < 4; ++i) {\n      var currentSlope = getSlope(aGuessT, mX1, mX2);\n      if (currentSlope === 0.0) { return aGuessT; }\n      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;\n      aGuessT -= currentX / currentSlope;\n    }\n    return aGuessT;\n  }\n\n  function bezier(mX1, mY1, mX2, mY2) {\n\n    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }\n    var sampleValues = new Float32Array(kSplineTableSize);\n\n    if (mX1 !== mY1 || mX2 !== mY2) {\n      for (var i = 0; i < kSplineTableSize; ++i) {\n        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);\n      }\n    }\n\n    function getTForX(aX) {\n\n      var intervalStart = 0;\n      var currentSample = 1;\n      var lastSample = kSplineTableSize - 1;\n\n      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {\n        intervalStart += kSampleStepSize;\n      }\n\n      --currentSample;\n\n      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);\n      var guessForT = intervalStart + dist * kSampleStepSize;\n      var initialSlope = getSlope(guessForT, mX1, mX2);\n\n      if (initialSlope >= 0.001) {\n        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);\n      } else if (initialSlope === 0.0) {\n        return guessForT;\n      } else {\n        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);\n      }\n\n    }\n\n    return function (x) {\n      if (mX1 === mY1 && mX2 === mY2) { return x; }\n      if (x === 0 || x === 1) { return x; }\n      return calcBezier(getTForX(x), mY1, mY2);\n    }\n\n  }\n\n  return bezier;\n\n})();\n\nvar penner = (function () {\n\n  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)\n\n  var eases = { linear: function () { return function (t) { return t; }; } };\n\n  var functionEasings = {\n    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },\n    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },\n    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },\n    Bounce: function () { return function (t) {\n      var pow2, b = 4;\n      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}\n      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)\n    }; },\n    Elastic: function (amplitude, period) {\n      if ( amplitude === void 0 ) amplitude = 1;\n      if ( period === void 0 ) period = .5;\n\n      var a = minMax(amplitude, 1, 10);\n      var p = minMax(period, .1, 2);\n      return function (t) {\n        return (t === 0 || t === 1) ? t : \n          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);\n      }\n    }\n  };\n\n  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];\n\n  baseEasings.forEach(function (name, i) {\n    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };\n  });\n\n  Object.keys(functionEasings).forEach(function (name) {\n    var easeIn = functionEasings[name];\n    eases['easeIn' + name] = easeIn;\n    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };\n    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : \n      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };\n  });\n\n  return eases;\n\n})();\n\nfunction parseEasings(easing, duration) {\n  if (is.fnc(easing)) { return easing; }\n  var name = easing.split('(')[0];\n  var ease = penner[name];\n  var args = parseEasingParameters(easing);\n  switch (name) {\n    case 'spring' : return spring(easing, duration);\n    case 'cubicBezier' : return applyArguments(bezier, args);\n    case 'steps' : return applyArguments(steps, args);\n    default : return applyArguments(ease, args);\n  }\n}\n\n// Strings\n\nfunction selectString(str) {\n  try {\n    var nodes = document.querySelectorAll(str);\n    return nodes;\n  } catch(e) {\n    return;\n  }\n}\n\n// Arrays\n\nfunction filterArray(arr, callback) {\n  var len = arr.length;\n  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;\n  var result = [];\n  for (var i = 0; i < len; i++) {\n    if (i in arr) {\n      var val = arr[i];\n      if (callback.call(thisArg, val, i, arr)) {\n        result.push(val);\n      }\n    }\n  }\n  return result;\n}\n\nfunction flattenArray(arr) {\n  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);\n}\n\nfunction toArray(o) {\n  if (is.arr(o)) { return o; }\n  if (is.str(o)) { o = selectString(o) || o; }\n  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }\n  return [o];\n}\n\nfunction arrayContains(arr, val) {\n  return arr.some(function (a) { return a === val; });\n}\n\n// Objects\n\nfunction cloneObject(o) {\n  var clone = {};\n  for (var p in o) { clone[p] = o[p]; }\n  return clone;\n}\n\nfunction replaceObjectProps(o1, o2) {\n  var o = cloneObject(o1);\n  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }\n  return o;\n}\n\nfunction mergeObjects(o1, o2) {\n  var o = cloneObject(o1);\n  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }\n  return o;\n}\n\n// Colors\n\nfunction rgbToRgba(rgbValue) {\n  var rgb = /rgb\\((\\d+,\\s*[\\d]+,\\s*[\\d]+)\\)/g.exec(rgbValue);\n  return rgb ? (\"rgba(\" + (rgb[1]) + \",1)\") : rgbValue;\n}\n\nfunction hexToRgba(hexValue) {\n  var rgx = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );\n  var rgb = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  var r = parseInt(rgb[1], 16);\n  var g = parseInt(rgb[2], 16);\n  var b = parseInt(rgb[3], 16);\n  return (\"rgba(\" + r + \",\" + g + \",\" + b + \",1)\");\n}\n\nfunction hslToRgba(hslValue) {\n  var hsl = /hsl\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%\\)/g.exec(hslValue) || /hsla\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%,\\s*([\\d.]+)\\)/g.exec(hslValue);\n  var h = parseInt(hsl[1], 10) / 360;\n  var s = parseInt(hsl[2], 10) / 100;\n  var l = parseInt(hsl[3], 10) / 100;\n  var a = hsl[4] || 1;\n  function hue2rgb(p, q, t) {\n    if (t < 0) { t += 1; }\n    if (t > 1) { t -= 1; }\n    if (t < 1/6) { return p + (q - p) * 6 * t; }\n    if (t < 1/2) { return q; }\n    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }\n    return p;\n  }\n  var r, g, b;\n  if (s == 0) {\n    r = g = b = l;\n  } else {\n    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;\n    var p = 2 * l - q;\n    r = hue2rgb(p, q, h + 1/3);\n    g = hue2rgb(p, q, h);\n    b = hue2rgb(p, q, h - 1/3);\n  }\n  return (\"rgba(\" + (r * 255) + \",\" + (g * 255) + \",\" + (b * 255) + \",\" + a + \")\");\n}\n\nfunction colorToRgb(val) {\n  if (is.rgb(val)) { return rgbToRgba(val); }\n  if (is.hex(val)) { return hexToRgba(val); }\n  if (is.hsl(val)) { return hslToRgba(val); }\n}\n\n// Units\n\nfunction getUnit(val) {\n  var split = /[+-]?\\d*\\.?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);\n  if (split) { return split[1]; }\n}\n\nfunction getTransformUnit(propName) {\n  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }\n  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }\n}\n\n// Values\n\nfunction getFunctionValue(val, animatable) {\n  if (!is.fnc(val)) { return val; }\n  return val(animatable.target, animatable.id, animatable.total);\n}\n\nfunction getAttribute(el, prop) {\n  return el.getAttribute(prop);\n}\n\nfunction convertPxToUnit(el, value, unit) {\n  var valueUnit = getUnit(value);\n  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }\n  var cached = cache.CSS[value + unit];\n  if (!is.und(cached)) { return cached; }\n  var baseline = 100;\n  var tempEl = document.createElement(el.tagName);\n  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;\n  parentEl.appendChild(tempEl);\n  tempEl.style.position = 'absolute';\n  tempEl.style.width = baseline + unit;\n  var factor = baseline / tempEl.offsetWidth;\n  parentEl.removeChild(tempEl);\n  var convertedUnit = factor * parseFloat(value);\n  cache.CSS[value + unit] = convertedUnit;\n  return convertedUnit;\n}\n\nfunction getCSSValue(el, prop, unit) {\n  if (prop in el.style) {\n    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();\n    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';\n    return unit ? convertPxToUnit(el, value, unit) : value;\n  }\n}\n\nfunction getAnimationType(el, prop) {\n  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }\n  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }\n  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }\n  if (el[prop] != null) { return 'object'; }\n}\n\nfunction getElementTransforms(el) {\n  if (!is.dom(el)) { return; }\n  var str = el.style.transform || '';\n  var reg  = /(\\w+)\\(([^)]*)\\)/g;\n  var transforms = new Map();\n  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }\n  return transforms;\n}\n\nfunction getTransformValue(el, propName, animatable, unit) {\n  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);\n  var value = getElementTransforms(el).get(propName) || defaultVal;\n  if (animatable) {\n    animatable.transforms.list.set(propName, value);\n    animatable.transforms['last'] = propName;\n  }\n  return unit ? convertPxToUnit(el, value, unit) : value;\n}\n\nfunction getOriginalTargetValue(target, propName, unit, animatable) {\n  switch (getAnimationType(target, propName)) {\n    case 'transform': return getTransformValue(target, propName, animatable, unit);\n    case 'css': return getCSSValue(target, propName, unit);\n    case 'attribute': return getAttribute(target, propName);\n    default: return target[propName] || 0;\n  }\n}\n\nfunction getRelativeValue(to, from) {\n  var operator = /^(\\*=|\\+=|-=)/.exec(to);\n  if (!operator) { return to; }\n  var u = getUnit(to) || 0;\n  var x = parseFloat(from);\n  var y = parseFloat(to.replace(operator[0], ''));\n  switch (operator[0][0]) {\n    case '+': return x + y + u;\n    case '-': return x - y + u;\n    case '*': return x * y + u;\n  }\n}\n\nfunction validateValue(val, unit) {\n  if (is.col(val)) { return colorToRgb(val); }\n  if (/\\s/g.test(val)) { return val; }\n  var originalUnit = getUnit(val);\n  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;\n  if (unit) { return unitLess + unit; }\n  return unitLess;\n}\n\n// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes\n// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744\n\nfunction getDistance(p1, p2) {\n  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));\n}\n\nfunction getCircleLength(el) {\n  return Math.PI * 2 * getAttribute(el, 'r');\n}\n\nfunction getRectLength(el) {\n  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);\n}\n\nfunction getLineLength(el) {\n  return getDistance(\n    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, \n    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}\n  );\n}\n\nfunction getPolylineLength(el) {\n  var points = el.points;\n  var totalLength = 0;\n  var previousPos;\n  for (var i = 0 ; i < points.numberOfItems; i++) {\n    var currentPos = points.getItem(i);\n    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }\n    previousPos = currentPos;\n  }\n  return totalLength;\n}\n\nfunction getPolygonLength(el) {\n  var points = el.points;\n  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));\n}\n\n// Path animation\n\nfunction getTotalLength(el) {\n  if (el.getTotalLength) { return el.getTotalLength(); }\n  switch(el.tagName.toLowerCase()) {\n    case 'circle': return getCircleLength(el);\n    case 'rect': return getRectLength(el);\n    case 'line': return getLineLength(el);\n    case 'polyline': return getPolylineLength(el);\n    case 'polygon': return getPolygonLength(el);\n  }\n}\n\nfunction setDashoffset(el) {\n  var pathLength = getTotalLength(el);\n  el.setAttribute('stroke-dasharray', pathLength);\n  return pathLength;\n}\n\n// Motion path\n\nfunction getParentSvgEl(el) {\n  var parentEl = el.parentNode;\n  while (is.svg(parentEl)) {\n    if (!is.svg(parentEl.parentNode)) { break; }\n    parentEl = parentEl.parentNode;\n  }\n  return parentEl;\n}\n\nfunction getParentSvg(pathEl, svgData) {\n  var svg = svgData || {};\n  var parentSvgEl = svg.el || getParentSvgEl(pathEl);\n  var rect = parentSvgEl.getBoundingClientRect();\n  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');\n  var width = rect.width;\n  var height = rect.height;\n  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);\n  return {\n    el: parentSvgEl,\n    viewBox: viewBox,\n    x: viewBox[0] / 1,\n    y: viewBox[1] / 1,\n    w: width / viewBox[2],\n    h: height / viewBox[3]\n  }\n}\n\nfunction getPath(path, percent) {\n  var pathEl = is.str(path) ? selectString(path)[0] : path;\n  var p = percent || 100;\n  return function(property) {\n    return {\n      property: property,\n      el: pathEl,\n      svg: getParentSvg(pathEl),\n      totalLength: getTotalLength(pathEl) * (p / 100)\n    }\n  }\n}\n\nfunction getPathProgress(path, progress) {\n  function point(offset) {\n    if ( offset === void 0 ) offset = 0;\n\n    var l = progress + offset >= 1 ? progress + offset : 0;\n    return path.el.getPointAtLength(l);\n  }\n  var svg = getParentSvg(path.el, path.svg);\n  var p = point();\n  var p0 = point(-1);\n  var p1 = point(+1);\n  switch (path.property) {\n    case 'x': return (p.x - svg.x) * svg.w;\n    case 'y': return (p.y - svg.y) * svg.h;\n    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;\n  }\n}\n\n// Decompose value\n\nfunction decomposeValue(val, unit) {\n  // const rgx = /-?\\d*\\.?\\d+/g; // handles basic numbers\n  // const rgx = /[+-]?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?/g; // handles exponents notation\n  var rgx = /[+-]?\\d*\\.?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?/g; // handles exponents notation\n  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';\n  return {\n    original: value,\n    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],\n    strings: (is.str(val) || unit) ? value.split(rgx) : []\n  }\n}\n\n// Animatables\n\nfunction parseTargets(targets) {\n  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];\n  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });\n}\n\nfunction getAnimatables(targets) {\n  var parsed = parseTargets(targets);\n  return parsed.map(function (t, i) {\n    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };\n  });\n}\n\n// Properties\n\nfunction normalizePropertyTweens(prop, tweenSettings) {\n  var settings = cloneObject(tweenSettings);\n  // Override duration if easing is a spring\n  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }\n  if (is.arr(prop)) {\n    var l = prop.length;\n    var isFromTo = (l === 2 && !is.obj(prop[0]));\n    if (!isFromTo) {\n      // Duration divided by the number of tweens\n      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }\n    } else {\n      // Transform [from, to] values shorthand to a valid tween value\n      prop = {value: prop};\n    }\n  }\n  var propArray = is.arr(prop) ? prop : [prop];\n  return propArray.map(function (v, i) {\n    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};\n    // Default delay value should only be applied to the first tween\n    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }\n    // Default endDelay value should only be applied to the last tween\n    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }\n    return obj;\n  }).map(function (k) { return mergeObjects(k, settings); });\n}\n\n\nfunction flattenKeyframes(keyframes) {\n  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })\n  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);\n  var properties = {};\n  var loop = function ( i ) {\n    var propName = propertyNames[i];\n    properties[propName] = keyframes.map(function (key) {\n      var newKey = {};\n      for (var p in key) {\n        if (is.key(p)) {\n          if (p == propName) { newKey.value = key[p]; }\n        } else {\n          newKey[p] = key[p];\n        }\n      }\n      return newKey;\n    });\n  };\n\n  for (var i = 0; i < propertyNames.length; i++) loop( i );\n  return properties;\n}\n\nfunction getProperties(tweenSettings, params) {\n  var properties = [];\n  var keyframes = params.keyframes;\n  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }\n  for (var p in params) {\n    if (is.key(p)) {\n      properties.push({\n        name: p,\n        tweens: normalizePropertyTweens(params[p], tweenSettings)\n      });\n    }\n  }\n  return properties;\n}\n\n// Tweens\n\nfunction normalizeTweenValues(tween, animatable) {\n  var t = {};\n  for (var p in tween) {\n    var value = getFunctionValue(tween[p], animatable);\n    if (is.arr(value)) {\n      value = value.map(function (v) { return getFunctionValue(v, animatable); });\n      if (value.length === 1) { value = value[0]; }\n    }\n    t[p] = value;\n  }\n  t.duration = parseFloat(t.duration);\n  t.delay = parseFloat(t.delay);\n  return t;\n}\n\nfunction normalizeTweens(prop, animatable) {\n  var previousTween;\n  return prop.tweens.map(function (t) {\n    var tween = normalizeTweenValues(t, animatable);\n    var tweenValue = tween.value;\n    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;\n    var toUnit = getUnit(to);\n    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);\n    var previousValue = previousTween ? previousTween.to.original : originalValue;\n    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;\n    var fromUnit = getUnit(from) || getUnit(originalValue);\n    var unit = toUnit || fromUnit;\n    if (is.und(to)) { to = previousValue; }\n    tween.from = decomposeValue(from, unit);\n    tween.to = decomposeValue(getRelativeValue(to, from), unit);\n    tween.start = previousTween ? previousTween.end : 0;\n    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;\n    tween.easing = parseEasings(tween.easing, tween.duration);\n    tween.isPath = is.pth(tweenValue);\n    tween.isColor = is.col(tween.from.original);\n    if (tween.isColor) { tween.round = 1; }\n    previousTween = tween;\n    return tween;\n  });\n}\n\n// Tween progress\n\nvar setProgressValue = {\n  css: function (t, p, v) { return t.style[p] = v; },\n  attribute: function (t, p, v) { return t.setAttribute(p, v); },\n  object: function (t, p, v) { return t[p] = v; },\n  transform: function (t, p, v, transforms, manual) {\n    transforms.list.set(p, v);\n    if (p === transforms.last || manual) {\n      var str = '';\n      transforms.list.forEach(function (value, prop) { str += prop + \"(\" + value + \") \"; });\n      t.style.transform = str;\n    }\n  }\n};\n\n// Set Value helper\n\nfunction setTargetsValue(targets, properties) {\n  var animatables = getAnimatables(targets);\n  animatables.forEach(function (animatable) {\n    for (var property in properties) {\n      var value = getFunctionValue(properties[property], animatable);\n      var target = animatable.target;\n      var valueUnit = getUnit(value);\n      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);\n      var unit = valueUnit || getUnit(originalValue);\n      var to = getRelativeValue(validateValue(value, unit), originalValue);\n      var animType = getAnimationType(target, property);\n      setProgressValue[animType](target, property, to, animatable.transforms, true);\n    }\n  });\n}\n\n// Animations\n\nfunction createAnimation(animatable, prop) {\n  var animType = getAnimationType(animatable.target, prop.name);\n  if (animType) {\n    var tweens = normalizeTweens(prop, animatable);\n    var lastTween = tweens[tweens.length - 1];\n    return {\n      type: animType,\n      property: prop.name,\n      animatable: animatable,\n      tweens: tweens,\n      duration: lastTween.end,\n      delay: tweens[0].delay,\n      endDelay: lastTween.endDelay\n    }\n  }\n}\n\nfunction getAnimations(animatables, properties) {\n  return filterArray(flattenArray(animatables.map(function (animatable) {\n    return properties.map(function (prop) {\n      return createAnimation(animatable, prop);\n    });\n  })), function (a) { return !is.und(a); });\n}\n\n// Create Instance\n\nfunction getInstanceTimings(animations, tweenSettings) {\n  var animLength = animations.length;\n  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };\n  var timings = {};\n  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;\n  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;\n  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;\n  return timings;\n}\n\nvar instanceID = 0;\n\nfunction createNewInstance(params) {\n  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);\n  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);\n  var properties = getProperties(tweenSettings, params);\n  var animatables = getAnimatables(params.targets);\n  var animations = getAnimations(animatables, properties);\n  var timings = getInstanceTimings(animations, tweenSettings);\n  var id = instanceID;\n  instanceID++;\n  return mergeObjects(instanceSettings, {\n    id: id,\n    children: [],\n    animatables: animatables,\n    animations: animations,\n    duration: timings.duration,\n    delay: timings.delay,\n    endDelay: timings.endDelay\n  });\n}\n\n// Core\n\nvar activeInstances = [];\nvar pausedInstances = [];\nvar raf;\n\nvar engine = (function () {\n  function play() { \n    raf = requestAnimationFrame(step);\n  }\n  function step(t) {\n    var activeInstancesLength = activeInstances.length;\n    if (activeInstancesLength) {\n      var i = 0;\n      while (i < activeInstancesLength) {\n        var activeInstance = activeInstances[i];\n        if (!activeInstance.paused) {\n          activeInstance.tick(t);\n        } else {\n          var instanceIndex = activeInstances.indexOf(activeInstance);\n          if (instanceIndex > -1) {\n            activeInstances.splice(instanceIndex, 1);\n            activeInstancesLength = activeInstances.length;\n          }\n        }\n        i++;\n      }\n      play();\n    } else {\n      raf = cancelAnimationFrame(raf);\n    }\n  }\n  return play;\n})();\n\nfunction handleVisibilityChange() {\n  if (document.hidden) {\n    activeInstances.forEach(function (ins) { return ins.pause(); });\n    pausedInstances = activeInstances.slice(0);\n    anime.running = activeInstances = [];\n  } else {\n    pausedInstances.forEach(function (ins) { return ins.play(); });\n  }\n}\n\nif (typeof document !== 'undefined') {\n  document.addEventListener('visibilitychange', handleVisibilityChange);\n}\n\n// Public Instance\n\nfunction anime(params) {\n  if ( params === void 0 ) params = {};\n\n\n  var startTime = 0, lastTime = 0, now = 0;\n  var children, childrenLength = 0;\n  var resolve = null;\n\n  function makePromise(instance) {\n    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });\n    instance.finished = promise;\n    return promise;\n  }\n\n  var instance = createNewInstance(params);\n  var promise = makePromise(instance);\n\n  function toggleInstanceDirection() {\n    var direction = instance.direction;\n    if (direction !== 'alternate') {\n      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';\n    }\n    instance.reversed = !instance.reversed;\n    children.forEach(function (child) { return child.reversed = instance.reversed; });\n  }\n\n  function adjustTime(time) {\n    return instance.reversed ? instance.duration - time : time;\n  }\n\n  function resetTime() {\n    startTime = 0;\n    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);\n  }\n\n  function seekChild(time, child) {\n    if (child) { child.seek(time - child.timelineOffset); }\n  }\n\n  function syncInstanceChildren(time) {\n    if (!instance.reversePlayback) {\n      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }\n    } else {\n      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }\n    }\n  }\n\n  function setAnimationsProgress(insTime) {\n    var i = 0;\n    var animations = instance.animations;\n    var animationsLength = animations.length;\n    while (i < animationsLength) {\n      var anim = animations[i];\n      var animatable = anim.animatable;\n      var tweens = anim.tweens;\n      var tweenLength = tweens.length - 1;\n      var tween = tweens[tweenLength];\n      // Only check for keyframes if there is more than one tween\n      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }\n      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;\n      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);\n      var strings = tween.to.strings;\n      var round = tween.round;\n      var numbers = [];\n      var toNumbersLength = tween.to.numbers.length;\n      var progress = (void 0);\n      for (var n = 0; n < toNumbersLength; n++) {\n        var value = (void 0);\n        var toNumber = tween.to.numbers[n];\n        var fromNumber = tween.from.numbers[n] || 0;\n        if (!tween.isPath) {\n          value = fromNumber + (eased * (toNumber - fromNumber));\n        } else {\n          value = getPathProgress(tween.value, eased * toNumber);\n        }\n        if (round) {\n          if (!(tween.isColor && n > 2)) {\n            value = Math.round(value * round) / round;\n          }\n        }\n        numbers.push(value);\n      }\n      // Manual Array.reduce for better performances\n      var stringsLength = strings.length;\n      if (!stringsLength) {\n        progress = numbers[0];\n      } else {\n        progress = strings[0];\n        for (var s = 0; s < stringsLength; s++) {\n          var a = strings[s];\n          var b = strings[s + 1];\n          var n$1 = numbers[s];\n          if (!isNaN(n$1)) {\n            if (!b) {\n              progress += n$1 + ' ';\n            } else {\n              progress += n$1 + b;\n            }\n          }\n        }\n      }\n      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);\n      anim.currentValue = progress;\n      i++;\n    }\n  }\n\n  function setCallback(cb) {\n    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }\n  }\n\n  function countIteration() {\n    if (instance.remaining && instance.remaining !== true) {\n      instance.remaining--;\n    }\n  }\n\n  function setInstanceProgress(engineTime) {\n    var insDuration = instance.duration;\n    var insDelay = instance.delay;\n    var insEndDelay = insDuration - instance.endDelay;\n    var insTime = adjustTime(engineTime);\n    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);\n    instance.reversePlayback = insTime < instance.currentTime;\n    if (children) { syncInstanceChildren(insTime); }\n    if (!instance.began && instance.currentTime > 0) {\n      instance.began = true;\n      setCallback('begin');\n    }\n    if (!instance.loopBegan && instance.currentTime > 0) {\n      instance.loopBegan = true;\n      setCallback('loopBegin');\n    }\n    if (insTime <= insDelay && instance.currentTime !== 0) {\n      setAnimationsProgress(0);\n    }\n    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {\n      setAnimationsProgress(insDuration);\n    }\n    if (insTime > insDelay && insTime < insEndDelay) {\n      if (!instance.changeBegan) {\n        instance.changeBegan = true;\n        instance.changeCompleted = false;\n        setCallback('changeBegin');\n      }\n      setCallback('change');\n      setAnimationsProgress(insTime);\n    } else {\n      if (instance.changeBegan) {\n        instance.changeCompleted = true;\n        instance.changeBegan = false;\n        setCallback('changeComplete');\n      }\n    }\n    instance.currentTime = minMax(insTime, 0, insDuration);\n    if (instance.began) { setCallback('update'); }\n    if (engineTime >= insDuration) {\n      lastTime = 0;\n      countIteration();\n      if (!instance.remaining) {\n        instance.paused = true;\n        if (!instance.completed) {\n          instance.completed = true;\n          setCallback('loopComplete');\n          setCallback('complete');\n          if (!instance.passThrough && 'Promise' in window) {\n            resolve();\n            promise = makePromise(instance);\n          }\n        }\n      } else {\n        startTime = now;\n        setCallback('loopComplete');\n        instance.loopBegan = false;\n        if (instance.direction === 'alternate') {\n          toggleInstanceDirection();\n        }\n      }\n    }\n  }\n\n  instance.reset = function() {\n    var direction = instance.direction;\n    instance.passThrough = false;\n    instance.currentTime = 0;\n    instance.progress = 0;\n    instance.paused = true;\n    instance.began = false;\n    instance.loopBegan = false;\n    instance.changeBegan = false;\n    instance.completed = false;\n    instance.changeCompleted = false;\n    instance.reversePlayback = false;\n    instance.reversed = direction === 'reverse';\n    instance.remaining = instance.loop;\n    children = instance.children;\n    childrenLength = children.length;\n    for (var i = childrenLength; i--;) { instance.children[i].reset(); }\n    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }\n    setAnimationsProgress(instance.reversed ? instance.duration : 0);\n  };\n\n  // Set Value helper\n\n  instance.set = function(targets, properties) {\n    setTargetsValue(targets, properties);\n    return instance;\n  };\n\n  instance.tick = function(t) {\n    now = t;\n    if (!startTime) { startTime = now; }\n    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);\n  };\n\n  instance.seek = function(time) {\n    setInstanceProgress(adjustTime(time));\n  };\n\n  instance.pause = function() {\n    instance.paused = true;\n    resetTime();\n  };\n\n  instance.play = function() {\n    if (!instance.paused) { return; }\n    if (instance.completed) { instance.reset(); }\n    instance.paused = false;\n    activeInstances.push(instance);\n    resetTime();\n    if (!raf) { engine(); }\n  };\n\n  instance.reverse = function() {\n    toggleInstanceDirection();\n    resetTime();\n  };\n\n  instance.restart = function() {\n    instance.reset();\n    instance.play();\n  };\n\n  instance.reset();\n\n  if (instance.autoplay) { instance.play(); }\n\n  return instance;\n\n}\n\n// Remove targets from animation\n\nfunction removeTargetsFromAnimations(targetsArray, animations) {\n  for (var a = animations.length; a--;) {\n    if (arrayContains(targetsArray, animations[a].animatable.target)) {\n      animations.splice(a, 1);\n    }\n  }\n}\n\nfunction removeTargets(targets) {\n  var targetsArray = parseTargets(targets);\n  for (var i = activeInstances.length; i--;) {\n    var instance = activeInstances[i];\n    var animations = instance.animations;\n    var children = instance.children;\n    removeTargetsFromAnimations(targetsArray, animations);\n    for (var c = children.length; c--;) {\n      var child = children[c];\n      var childAnimations = child.animations;\n      removeTargetsFromAnimations(targetsArray, childAnimations);\n      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }\n    }\n    if (!animations.length && !children.length) { instance.pause(); }\n  }\n}\n\n// Stagger helpers\n\nfunction stagger(val, params) {\n  if ( params === void 0 ) params = {};\n\n  var direction = params.direction || 'normal';\n  var easing = params.easing ? parseEasings(params.easing) : null;\n  var grid = params.grid;\n  var axis = params.axis;\n  var fromIndex = params.from || 0;\n  var fromFirst = fromIndex === 'first';\n  var fromCenter = fromIndex === 'center';\n  var fromLast = fromIndex === 'last';\n  var isRange = is.arr(val);\n  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);\n  var val2 = isRange ? parseFloat(val[1]) : 0;\n  var unit = getUnit(isRange ? val[1] : val) || 0;\n  var start = params.start || 0 + (isRange ? val1 : 0);\n  var values = [];\n  var maxValue = 0;\n  return function (el, i, t) {\n    if (fromFirst) { fromIndex = 0; }\n    if (fromCenter) { fromIndex = (t - 1) / 2; }\n    if (fromLast) { fromIndex = t - 1; }\n    if (!values.length) {\n      for (var index = 0; index < t; index++) {\n        if (!grid) {\n          values.push(Math.abs(fromIndex - index));\n        } else {\n          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;\n          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;\n          var toX = index%grid[0];\n          var toY = Math.floor(index/grid[0]);\n          var distanceX = fromX - toX;\n          var distanceY = fromY - toY;\n          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);\n          if (axis === 'x') { value = -distanceX; }\n          if (axis === 'y') { value = -distanceY; }\n          values.push(value);\n        }\n        maxValue = Math.max.apply(Math, values);\n      }\n      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }\n      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }\n    }\n    var spacing = isRange ? (val2 - val1) / maxValue : val1;\n    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;\n  }\n}\n\n// Timeline\n\nfunction timeline(params) {\n  if ( params === void 0 ) params = {};\n\n  var tl = anime(params);\n  tl.duration = 0;\n  tl.add = function(instanceParams, timelineOffset) {\n    var tlIndex = activeInstances.indexOf(tl);\n    var children = tl.children;\n    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }\n    function passThrough(ins) { ins.passThrough = true; }\n    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }\n    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));\n    insParams.targets = insParams.targets || params.targets;\n    var tlDuration = tl.duration;\n    insParams.autoplay = false;\n    insParams.direction = tl.direction;\n    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);\n    passThrough(tl);\n    tl.seek(insParams.timelineOffset);\n    var ins = anime(insParams);\n    passThrough(ins);\n    children.push(ins);\n    var timings = getInstanceTimings(children, params);\n    tl.delay = timings.delay;\n    tl.endDelay = timings.endDelay;\n    tl.duration = timings.duration;\n    tl.seek(0);\n    tl.reset();\n    if (tl.autoplay) { tl.play(); }\n    return tl;\n  };\n  return tl;\n}\n\nanime.version = '3.1.0';\nanime.speed = 1;\nanime.running = activeInstances;\nanime.remove = removeTargets;\nanime.get = getOriginalTargetValue;\nanime.set = setTargetsValue;\nanime.convertPx = convertPxToUnit;\nanime.path = getPath;\nanime.setDashoffset = setDashoffset;\nanime.stagger = stagger;\nanime.timeline = timeline;\nanime.easing = parseEasings;\nanime.penner = penner;\nanime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (anime);\n\n\n//# sourceURL=webpack:///./node_modules/animejs/lib/anime.es.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"./node_modules/core-js/internals/sloppy-array-method.js\");\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      hide(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar slice = [].slice;\nvar factories = {};\n\nvar construct = function (C, argsLength, args) {\n  if (!(argsLength in factories)) {\n    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');\n  } return factories[argsLength](C, args);\n};\n\n// `Function.prototype.bind` method implementation\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = slice.call(arguments, 1);\n  var boundFunction = function bound(/* args... */) {\n    var args = partArgs.concat(slice.call(arguments));\n    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);\n  };\n  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;\n  return boundFunction;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-bind.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof global == O && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hide.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/parse-float.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/parse-float.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar nativeParseFloat = global.parseFloat;\nvar FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;\n\n// `parseFloat` method\n// https://tc39.github.io/ecma262/#sec-parsefloat-string\nmodule.exports = FORCED ? function parseFloat(string) {\n  var trimmedString = trim(String(string));\n  var result = nativeParseFloat(trimmedString);\n  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;\n} : nativeParseFloat;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar nativeParseInt = global.parseInt;\nvar hex = /^[+-]?0[Xx]/;\nvar FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(String(string));\n  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));\n} : nativeParseInt;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(nativeFunctionToString).split('toString');\n\nshared('inspectSource', function (it) {\n  return nativeFunctionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else hide(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/sloppy-array-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = String(requireObjectCoercible($this));\n    if (TYPE & 1) string = string.replace(ltrim, '');\n    if (TYPE & 2) string = string.replace(rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// a string of all valid unicode whitespaces\n// eslint-disable-next-line max-len\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind */ \"./node_modules/core-js/internals/function-bind.js\");\n\n// `Function.prototype.bind` method\n// https://tc39.github.io/ecma262/#sec-function.prototype.bind\n$({ target: 'Function', proto: true }, {\n  bind: bind\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.github.io/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseFloatImplementation = __webpack_require__(/*! ../internals/parse-float */ \"./node_modules/core-js/internals/parse-float.js\");\n\n// `parseFloat` method\n// https://tc39.github.io/ecma262/#sec-parsefloat-string\n$({ global: true, forced: parseFloat != parseFloatImplementation }, {\n  parseFloat: parseFloatImplementation\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ \"./node_modules/core-js/internals/parse-int.js\");\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != parseIntImplementation }, {\n  parseInt: parseIntImplementation\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    hide(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/article/article.js":
/*!********************************!*\
  !*** ./src/article/article.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init.scss */ \"./src/init.scss\");\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_init_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index/styles/nav.scss */ \"./src/index/styles/nav.scss\");\n/* harmony import */ var _index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_styles_nav_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_styles_slider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index/styles/slider.scss */ \"./src/index/styles/slider.scss\");\n/* harmony import */ var _index_styles_slider_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_styles_slider_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _article_styles_article_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/styles/article.scss */ \"./src/article/styles/article.scss\");\n/* harmony import */ var _article_styles_article_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_article_styles_article_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _article_styles_comment_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/styles/comment.scss */ \"./src/article/styles/comment.scss\");\n/* harmony import */ var _article_styles_comment_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_article_styles_comment_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index/styles/footer.scss */ \"./src/index/styles/footer.scss\");\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index/styles/copyright.scss */ \"./src/index/styles/copyright.scss\");\n/* harmony import */ var _index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_styles_copyright_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_scripts_landing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index/scripts/landing */ \"./src/index/scripts/landing.js\");\n/* harmony import */ var _index_scripts_landing__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_landing__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _article_scripts_article__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../article/scripts/article */ \"./src/article/scripts/article.js\");\n/* harmony import */ var _article_scripts_comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../article/scripts/comment */ \"./src/article/scripts/comment.js\");\n/* harmony import */ var _index_scripts_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../index/scripts/slider */ \"./src/index/scripts/slider.js\");\n/* harmony import */ var _index_scripts_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../index/scripts/footer */ \"./src/index/scripts/footer.js\");\n/* harmony import */ var _index_scripts_footer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_footer__WEBPACK_IMPORTED_MODULE_12__);\n//load styles\n//load styles\n\n\n\n\n\n\n\n //load scripts\n\n\n\n\n\n //load videos\n\n//# sourceURL=webpack:///./src/article/article.js?");

/***/ }),

/***/ "./src/article/scripts/article.js":
/*!****************************************!*\
  !*** ./src/article/scripts/article.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/utilities */ \"./src/utilities/utilities.js\");\n //tabs\n//--------------------------------------------\n//--------------------------------------------\n//--------------------------------------------\n// let tabsWrapper = document.querySelector('main aside #tabs_popular') ;\n// let tabsTriggers = tabsWrapper.querySelectorAll('li') ;\n// let tabs = tabsWrapper.querySelectorAll('#tabs_content > div') ;\n// tabsTriggers.forEach(tabTrigger => {\n//     tabTrigger.addEventListener('click',activateTab) ;\n// })\n// function activateTab(e){\n//     tabsTriggers.forEach(tabTrigger => {\n//         if(this != tabTrigger) tabTrigger.classList.remove('active') ;\n//         else this.classList.add('active') ;\n//     })\n//     let targetTabID = this.getAttribute('data-target') ;\n//     tabs.forEach(tab => {\n//         if(tab.getAttribute('id') != targetTabID) tab.classList.remove('active') ;\n//         else tab.classList.add('active') ;\n//     })\n// }\n//ellipses\n//--------------------------------------------\n//--------------------------------------------\n//--------------------------------------------\n\nvar ellipses = document.querySelectorAll('.ellipse');\n_utilities_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkEllipse(ellipses);\n\n//# sourceURL=webpack:///./src/article/scripts/article.js?");

/***/ }),

/***/ "./src/article/scripts/comment.js":
/*!****************************************!*\
  !*** ./src/article/scripts/comment.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ \"./node_modules/core-js/modules/es.function.bind.js\");\n/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar commentWrapper = document.querySelector('#comments'); //Show #user_comment\n//-----------------------------------------------------------\n//-----------------------------------------------------------\n\nvar addCommentBtn = commentWrapper.querySelector('.add_comment');\nvar addComment = commentWrapper.querySelector('#user_comment');\nvar addCommentHeight = addComment.clientHeight;\naddComment.classList.add('hide');\naddCommentBtn.addEventListener('click', toggleAddComment);\n\nfunction toggleAddComment(e) {\n  addComment.classList.add('addTransition');\n  addComment.classList.toggle('show');\n  if (addComment.classList.contains('show')) addComment.style.height = \"\".concat(addCommentHeight, \"px\");else addComment.style.height = \"\".concat(0, \"px\");\n} //likes\n//----------------------------------------------------------\n//----------------------------------------------------------\n\n\nvar likes = commentWrapper.querySelectorAll('.comment .content .likes i.fa-heart');\nlikes.forEach(function (like) {\n  like.addEventListener('click', toggleLike);\n});\n\nfunction toggleLike(e) {\n  this.classList.toggle('far');\n  this.classList.toggle('fas');\n  this.classList.toggle('red');\n  var likesNum = this.parentElement.querySelector('p');\n  if (this.classList.contains('fas')) likesNum.textContent = parseInt(likesNum.textContent) + 1;else likesNum.textContent = parseInt(likesNum.textContent) - 1;\n} //reply\n//----------------------------------------------------------\n//----------------------------------------------------------\n\n\nvar replySample = commentWrapper.querySelector('.comment > .reply');\nvar replyHeight = replySample.clientHeight;\ncommentWrapper.querySelectorAll('.comment .reply').forEach(function (reply) {\n  reply.classList.add('hide');\n});\nvar replyTriggers = commentWrapper.querySelectorAll('.comment .content .likes_reply .reply');\nreplyTriggers.forEach(function (replyTrigger) {\n  replyTrigger.addEventListener('click', toggleReply);\n});\n\nfunction toggleReply(e) {\n  var targetID = \"#\".concat(this.getAttribute('data-target'));\n  var target = commentWrapper.querySelector(targetID);\n  target.classList.add('addTransition');\n  target.classList.toggle('show');\n  if (target.classList.contains('show')) target.style.height = \"\".concat(replyHeight, \"px\");else target.style.height = \"\".concat(0, \"px\");\n} //add comment form validation\n//----------------------------------------------------------\n//----------------------------------------------------------\n\n\nvar addCommentForm = document.forms['user_comment'];\nvar addCommentName = addCommentForm['name'];\nvar addCommentEmail = addCommentForm['email'];\nvar addCommentContent = addCommentForm['comment_content'];\naddCommentForm.addEventListener('submit', submitAddComment);\n\nfunction submitAddComment(e) {\n  e.preventDefault();\n  if (addCommentValidate()) this.submit();\n}\n\nfunction addCommentValidate() {\n  return addCommentNameValidate() && addCommentEmailValidate() && addCommentContentValidate();\n}\n\nfunction addCommentNameValidate() {\n  if (addCommentName.checkValidity()) {\n    addCommentName.classList.remove('error');\n    addCommentName.removeEventListener('input', monitorAddCommentName);\n    return true;\n  } else if (addCommentName.validity.valueMissing) {\n    addCommentName.classList.add('error');\n    addCommentName.addEventListener('input', monitorAddCommentName);\n  }\n}\n\nfunction monitorAddCommentName(e) {\n  if (!this.validity.valueMissing) addCommentName.classList.remove('error');else addCommentName.classList.add('error');\n}\n\nfunction addCommentEmailValidate() {\n  if (addCommentEmail.checkValidity()) {\n    addCommentEmail.classList.remove('error');\n    addCommentEmail.removeEventListener('input', monitorAddCommentEmail);\n    return true;\n  } else if (addCommentEmail.validity.valueMissing || addCommentEmail.validity.typeMismatch) {\n    addCommentEmail.classList.add('error');\n    addCommentEmail.addEventListener('input', monitorAddCommentEmail);\n  }\n}\n\nfunction monitorAddCommentEmail(e) {\n  if (!this.validity.valueMissing && !this.validity.typeMismatch) {\n    this.classList.remove('error');\n  } else {\n    this.classList.add('error');\n  }\n}\n\nfunction addCommentContentValidate() {\n  if (addCommentContent.checkValidity()) {\n    addCommentContent.classList.remove('error');\n    addCommentContent.removeEventListener('input', monitorAddCommentContent);\n    return true;\n  } else if (addCommentContent.validity.valueMissing) {\n    addCommentContent.classList.add('error');\n    addCommentContent.addEventListener('input', monitorAddCommentContent);\n  }\n}\n\nfunction monitorAddCommentContent(e) {\n  if (!this.validity.valueMissing) this.classList.remove('error');else this.classList.add('error');\n} //reply comment form validation\n//----------------------------------------------------------\n//----------------------------------------------------------\n\n\nfunction ReplyForm(elm) {\n  this.elm = elm;\n  this.replyText = this.elm.querySelector('textarea');\n  this.elm.addEventListener('submit', this.submitHandler.bind(this));\n}\n\nReplyForm.prototype.submitHandler = function (e) {\n  e.preventDefault();\n  if (this.validate()) this.elm.submit();\n};\n\nReplyForm.prototype.validate = function () {\n  if (this.replyText.checkValidity()) {\n    this.replyText.classList.remove('error');\n    this.replyText.removeEventListener('input', this);\n    return true;\n  } else if (this.replyText.validity.valueMissing) {\n    this.replyText.classList.add('error');\n    this.replyText.addEventListener('input', this);\n  }\n};\n\nReplyForm.prototype.handleEvent = function (e) {\n  if (!this.replyText.validity.valueMissing) this.replyText.classList.remove('error');else this.replyText.classList.add('error');\n};\n\ncommentWrapper.querySelectorAll('.comment > form').forEach(function (reply) {\n  new ReplyForm(reply);\n});\n\n//# sourceURL=webpack:///./src/article/scripts/comment.js?");

/***/ }),

/***/ "./src/article/styles/article.scss":
/*!*****************************************!*\
  !*** ./src/article/styles/article.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/article/styles/article.scss?");

/***/ }),

/***/ "./src/article/styles/comment.scss":
/*!*****************************************!*\
  !*** ./src/article/styles/comment.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/article/styles/comment.scss?");

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

/***/ "./src/index/scripts/slider.js":
/*!*************************************!*\
  !*** ./src/index/scripts/slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ \"./node_modules/core-js/modules/es.function.bind.js\");\n/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ \"./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/utilities */ \"./src/utilities/utilities.js\");\n\n\n\n\n\n //let util.getStyle = (el,prop) => window.getComputedStyle(el,null).getPropertyValue(prop) ;\n\nfunction Slider(slider) {\n  this.slider = slider;\n  this.slide = this.slider.querySelector('.slide');\n  this.offset = parseInt(_utilities_utilities__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getStyle(this.slide, 'width')) + parseInt(_utilities_utilities__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getStyle(this.slide, 'margin-right')) + parseInt(_utilities_utilities__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getStyle(this.slide, 'margin-left'));\n  this.movement = 0;\n  this.slidesNum = this.slider.querySelectorAll('.slide').length;\n  this.slidesInViewport = Math.floor(window.innerWidth / this.offset);\n  this.currSlideIndex = this.slidesInViewport; //start from 1\n\n  this.firstSlide = true;\n  this.lastSlide = false;\n  this.prevBtn = this.slider.parentElement.querySelector('button.prev');\n  this.nextBtn = this.slider.parentElement.querySelector('button.next');\n  this.prevBtn.addEventListener('click', this.prevSlide.bind(this));\n  this.nextBtn.addEventListener('click', this.nextSlide.bind(this));\n}\n\nSlider.prototype.prevSlide = function (e) {\n  if (this.currSlideIndex == this.slidesInViewport) this.firstSlide = true;else this.firstSlide = false;\n\n  if (!this.firstSlide) {\n    this.currSlideIndex--;\n    this.movement -= this.offset;\n    this.animation(-this.movement, 400);\n  } else {\n    this.currSlideIndex = this.slidesNum;\n    this.movement = this.slidesNum * this.offset - window.innerWidth > 0 ? this.slidesNum * this.offset - window.innerWidth : 0;\n    this.animation(-this.movement, 1000);\n  }\n};\n\nSlider.prototype.nextSlide = function (e) {\n  if (this.currSlideIndex == this.slidesNum) this.lastSlide = true;else this.lastSlide = false;\n\n  if (!this.lastSlide) {\n    this.currSlideIndex++;\n    this.movement += this.offset;\n    this.animation(-this.movement, 400);\n  } else {\n    this.currSlideIndex = this.slidesInViewport;\n    this.movement = 0;\n    this.animation(this.movement, 1000);\n  }\n};\n\nSlider.prototype.animation = function (val, time) {\n  Object(animejs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    targets: this.slider,\n    duration: time,\n    right: val,\n    easing: 'linear',\n    direction: 'normal',\n    loop: 1\n  });\n};\n\nvar sliders = [];\ndocument.querySelectorAll('.slider').forEach(function (slider) {\n  sliders.push(new Slider(slider));\n});\n\n//# sourceURL=webpack:///./src/index/scripts/slider.js?");

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

/***/ "./src/index/styles/slider.scss":
/*!**************************************!*\
  !*** ./src/index/styles/slider.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"primaryColor\":\"#06ccf8\",\"blueColor1\":\"#009CFF\",\"blueColor2\":\"#003DBB\",\"purpleColor1\":\"#6956D8\",\"purpleColor2\":\"#9090C5\",\"greenColor1\":\"#6BFBCE\",\"greenColor2\":\"#1EC198\",\"redColor1\":\"#FF5198\",\"redColor2\":\"#e74a4a\",\"orangeColor1\":\"#FF846C\",\"orangeColor2\":\"#ff8f00\",\"paleColor\":\"#f4f3f7\",\"whiteColor1\":\"#f8f8f8\",\"whiteColor2\":\"#fbfbfb\",\"greyColor\":\"#b9b9c1\",\"greyColor2\":\"#86878e\",\"darkColor\":\"#2d2d31\",\"darkBlue\":\"#5d6174\",\"shadowColor\":\"rgba(70, 69, 85, 0.3)\",\"blackFilter\":\"rgba(30, 30, 30, 0.8)\",\"dist1\":\"0.5em\",\"dist2\":\"1em\",\"dist3\":\"2em\",\"dist4\":\"4em\",\"mayVar\":\"40vw\",\"font-s\":\"0.6em\",\"font-m\":\"0.8em\",\"font-l\":\"1em\",\"font-xl\":\"1.2em\",\"font-xxl\":\"2em\",\"font-special\":\"1.6em\",\"sectionsDist\":\"4em\"};\n\n//# sourceURL=webpack:///./src/index/styles/slider.scss?");

/***/ }),

/***/ "./src/init.scss":
/*!***********************!*\
  !*** ./src/init.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/init.scss?");

/***/ }),

/***/ "./src/utilities/utilities.js":
/*!************************************!*\
  !*** ./src/utilities/utilities.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ \"./node_modules/core-js/modules/es.parse-float.js\");\n/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar getStyle = function getStyle(el, prop) {\n  return window.getComputedStyle(el, null).getPropertyValue(prop);\n};\n\nfunction checkEllipse(elms) {\n  elms.forEach(function (elm) {\n    var parent = elm.parentElement;\n    var threshold = parseFloat(window.getComputedStyle(parent, null).getPropertyValue('max-height'));\n    if (parent.scrollHeight > threshold) elm.style.display = \"block\";\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getStyle: getStyle,\n  checkEllipse: checkEllipse\n});\n\n//# sourceURL=webpack:///./src/utilities/utilities.js?");

/***/ })

/******/ });