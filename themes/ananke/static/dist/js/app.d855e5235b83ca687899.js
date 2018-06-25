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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');
function _classCallCheck(t, i) {
  if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}var Sticky = function () {
  function t() {
    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};_classCallCheck(this, t), this.selector = i, this.elements = [], this.version = "1.2.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = { wrap: e.wrap || !1, marginTop: e.marginTop || 0, stickyFor: e.stickyFor || 0, stickyClass: e.stickyClass || null, stickyContainer: e.stickyContainer || "body" }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run();
  }return t.prototype.run = function () {
    var t = this,
        i = setInterval(function () {
      if ("complete" === document.readyState) {
        clearInterval(i);var e = document.querySelectorAll(t.selector);t.forEach(e, function (i) {
          return t.renderElement(i);
        });
      }
    }, 10);
  }, t.prototype.renderElement = function (t) {
    var i = this;t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect = this.getRectangle(t), "img" === t.tagName.toLowerCase() && (t.onload = function () {
      return t.sticky.rect = i.getRectangle(t);
    }), t.sticky.wrap && this.wrapElement(t), this.activate(t);
  }, t.prototype.wrapElement = function (t) {
    t.insertAdjacentHTML("beforebegin", "<span></span>"), t.previousSibling.appendChild(t);
  }, t.prototype.activate = function (t) {
    t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t);
  }, t.prototype.initResizeEvents = function (t) {
    var i = this;t.sticky.resizeListener = function () {
      return i.onResizeEvents(t);
    }, window.addEventListener("resize", t.sticky.resizeListener);
  }, t.prototype.destroyResizeEvents = function (t) {
    window.removeEventListener("resize", t.sticky.resizeListener);
  }, t.prototype.onResizeEvents = function (t) {
    this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t);
  }, t.prototype.initScrollEvents = function (t) {
    var i = this;t.sticky.scrollListener = function () {
      return i.onScrollEvents(t);
    }, window.addEventListener("scroll", t.sticky.scrollListener);
  }, t.prototype.destroyScrollEvents = function (t) {
    window.removeEventListener("scroll", t.sticky.scrollListener);
  }, t.prototype.onScrollEvents = function (t) {
    t.sticky.active && this.setPosition(t);
  }, t.prototype.setPosition = function (t) {
    this.css(t, { position: "", width: "", top: "", left: "" }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, { display: "block", width: t.sticky.rect.width + "px", height: t.sticky.rect.height + "px" }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? this.css(t, { position: "fixed", top: t.sticky.rect.top + "px", left: t.sticky.rect.left + "px", width: t.sticky.rect.width + "px" }) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, { position: "fixed", width: t.sticky.rect.width + "px", left: t.sticky.rect.left + "px" }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, { top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height) + "px" })) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, { top: t.sticky.marginTop + "px" }))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, { position: "", width: "", top: "", left: "" }), t.sticky.wrap && this.css(t.parentNode, { display: "", width: "", height: "" })));
  }, t.prototype.update = function () {
    var t = this;this.forEach(this.elements, function (i) {
      i.sticky.rect = t.getRectangle(i), i.sticky.container.rect = t.getRectangle(i.sticky.container), t.activate(i), t.setPosition(i);
    });
  }, t.prototype.destroy = function () {
    var t = this;this.forEach(this.elements, function (i) {
      t.destroyResizeEvents(i), t.destroyScrollEvents(i), delete i.sticky;
    });
  }, t.prototype.getStickyContainer = function (t) {
    for (var i = t.parentNode; !i.hasAttribute("data-sticky-container") && !i.parentNode.querySelector(t.sticky.stickyContainer) && i !== this.body;) {
      i = i.parentNode;
    }return i;
  }, t.prototype.getRectangle = function (t) {
    this.css(t, { position: "", width: "", top: "", left: "" });var i = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth),
        e = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight),
        s = 0,
        o = 0;do {
      s += t.offsetTop || 0, o += t.offsetLeft || 0, t = t.offsetParent;
    } while (t);return { top: s, left: o, width: i, height: e };
  }, t.prototype.getViewportSize = function () {
    return { width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) };
  }, t.prototype.updateScrollTopPosition = function () {
    this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
  }, t.prototype.forEach = function (t, i) {
    for (var e = 0, s = t.length; e < s; e++) {
      i(t[e]);
    }
  }, t.prototype.css = function (t, i) {
    for (var e in i) {
      i.hasOwnProperty(e) && (t.style[e] = i[e]);
    }
  }, t;
}();!function (t, i) {
   true ? module.exports = i : "function" == typeof define && define.amd ? define([], i) : t.Sticky = i;
}(undefined, Sticky);

/***/ })
/******/ ]);