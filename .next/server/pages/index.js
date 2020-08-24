module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Layout(props) {
  return __jsx("div", {
    className: "jsx-1286711106" + " " + "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(CustomHead, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1286711106" + " " + "app-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1286711106",
    __self: this
  }, ".layout.jsx-1286711106{width:100%;height:100vh;background-color:var(--color-dim-white);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.app-content.jsx-1286711106{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUdzQixBQU9BLFdBTkUsYUFDMkIsd0NBRTNCLE9BSWYsbUVBSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxGbGFiXFxEZXNrdG9wXFxjb3ZpZC1hbmNob3JcXHdlYi11aVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgPEN1c3RvbUhlYWQgLz5cclxuXHJcbiAgICAgIHsvKiBOYXZiYXIgKi99XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgIHsvKiBBcHAgQ29udGVudCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBTVFlMSU5HIHdpdGggc3R5bGVkLWpzeCAqL31cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGltLXdoaXRlKTtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwLWNvbnRlbnR7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcbi8vIFNldHRpbmcgcGFnZSBoZWFkXHJcbmZ1bmN0aW9uIEN1c3RvbUhlYWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Q292aWQgQW5jaG9yPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2dsb2JhbC5jc3NcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Flab\\\\Desktop\\\\covid-anchor\\\\web-ui\\\\src\\\\components\\\\Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout); // Setting page head

function CustomHead() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Covid Anchor"), __jsx("link", {
    rel: "stylesheet",
    href: "/css/global.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Link.js":
/*!********************************!*\
  !*** ./src/components/Link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\components\\Link.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Link({
  children,
  href
}) {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isActive = pathname === href;
  return __jsx("a", {
    href: href,
    className: "jsx-717004582" + " " + `navbar-link ${isActive && "is-active"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "717004582",
    __self: this
  }, ".navbar-link.jsx-717004582{color:var(--color-tertiary);font-family:Roboto;font-size:16px;font-weight:700;line-height:19px;text-align:center;}.is-active.jsx-717004582{font-size:1.8rem;color:var(--color-secondary);position:relative;}.is-active.jsx-717004582::before{content:\"\";height:1rem;width:1rem;background-color:var(--color-secondary);position:absolute;bottom:-1.5rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcTGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IsQUFHdUMsQUFTWCxBQU1OLFdBQ0MsTUFOaUIsTUFPbEIsS0FoQlEsTUFpQnFCLFlBUHRCLENBVEgsZUFDQyxFQVNsQixVQU9vQixJQWZELGNBZ0JGLEdBZkcsWUFnQlQsTUFmWCxHQWdCNkIsNkZBQzdCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGluayh7IGNoaWxkcmVuLCBocmVmIH0pIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBocmVmO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmsgJHtpc0FjdGl2ZSAmJiBcImlzLWFjdGl2ZVwifWB9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5hdmJhci1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xLjVyZW07XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Flab\\\\Desktop\\\\covid-anchor\\\\web-ui\\\\src\\\\components\\\\Link.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./src/components/Link.js");
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar() {
  return __jsx("nav", {
    className: "jsx-1488694794" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1488694794" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/stories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Stories"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Covid Anchor"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/cases",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Cases")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1488694794",
    __self: this
  }, ".navbar.jsx-1488694794{height:100%;width:12rem;background-color:var(--color-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-1488694794{min-width:38rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}.navbar-link.jsx-1488694794{color:var(--color-tertiary);font-family:Roboto;font-size:16px;font-weight:700;line-height:19px;text-align:center;}.is-active.jsx-1488694794{font-size:1.8rem;color:var(--color-secondary);position:relative;}.is-active.jsx-1488694794::before{content:\"\";height:1rem;width:1rem;background-color:var(--color-secondary);position:absolute;bottom:-1.5rem;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUd1QixBQVVJLEFBT1ksQUFTWCxBQU1OLFdBQ0MsQ0FoQ0EsSUFVQyxDQWdCZ0IsTUFPbEIsQ0FoQzJCLElBZ0JuQixNQWlCcUIsWUFQdEIsQ0FUSCxlQWZGLEFBZ0JHLEVBU2xCLFVBT29CLElBZkQsWUFUYSxFQXlCZixHQWZHLFlBZ0JULE1BZlgsR0FnQjZCLG9CQWxDSixxRUFRRSxJQTJCM0IsMEJBbENxQix5REFRckIsb0NBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxGbGFiXFxEZXNrdG9wXFxjb3ZpZC1hbmNob3JcXHdlYi11aVxcc3JjXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zdG9yaWVzXCI+U3RvcmllczwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkNvdmlkIEFuY2hvcjwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Nhc2VzXCI+Q2FzZXM8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAzOHJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmJhci1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xLjVyZW07XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Flab\\\\Desktop\\\\covid-anchor\\\\web-ui\\\\src\\\\components\\\\Navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Convid Anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Hey! Confused people"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJDdXN0b21IZWFkIiwiTGluayIsImhyZWYiLCJwYXRobmFtZSIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwiTmF2YmFyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCLFNBQ0U7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBSUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFPRTtBQUFBLHdDQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkEsS0FBSyxDQUFDQyxRQUFwQyxDQVBGO0FBQUE7QUFBQTtBQUFBLHFnRUFERjtBQTBCRDs7QUFFY0YscUVBQWYsRSxDQUVBOztBQUNBLFNBQVNHLFVBQVQsR0FBc0I7QUFDcEIsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsaUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7O0FBRUEsU0FBU0MsSUFBVCxDQUFjO0FBQUVGLFVBQUY7QUFBWUc7QUFBWixDQUFkLEVBQWtDO0FBQ2hDLFFBQU07QUFBRUM7QUFBRixNQUFlQyw2REFBUyxFQUE5QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsUUFBUSxLQUFLRCxJQUE5QjtBQUVBLFNBQ0U7QUFBRyxRQUFJLEVBQUVBLElBQVQ7QUFBQSx1Q0FBMkIsZUFBY0csUUFBUSxJQUFJLFdBQVksRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixRQURIO0FBQUE7QUFBQTtBQUFBLHFoRkFERjtBQWlDRDs7QUFFY0UsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7QUFFQSxTQUFTSyxNQUFULEdBQWtCO0FBQ2hCLFNBQ0U7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLDZDQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFLE1BQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsQ0FERjtBQUFBO0FBQUE7QUFBQSx5NEhBREY7QUFzREQ7O0FBRWNBLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBREY7QUFLRDs7QUFFY0EsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNWQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxDdXN0b21IZWFkIC8+XHJcblxyXG4gICAgICB7LyogTmF2YmFyICovfVxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICB7LyogQXBwIENvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICB7LyogU1RZTElORyB3aXRoIHN0eWxlZC1qc3ggKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGF5b3V0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRpbS13aGl0ZSk7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1jb250ZW50e1xyXG4gICAgICAgICAgZmxleC1ncm93OjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxyXG4vLyBTZXR0aW5nIHBhZ2UgaGVhZFxyXG5mdW5jdGlvbiBDdXN0b21IZWFkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvdmlkIEFuY2hvcjwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9nbG9iYWwuY3NzXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGluayh7IGNoaWxkcmVuLCBocmVmIH0pIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBocmVmO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmsgJHtpc0FjdGl2ZSAmJiBcImlzLWFjdGl2ZVwifWB9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5hdmJhci1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xLjVyZW07XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3Rvcmllc1wiPlN0b3JpZXM8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Db3ZpZCBBbmNob3I8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jYXNlc1wiPkNhc2VzPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzhyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pcy1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMS41cmVtO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkNvbnZpZCBBbmNob3JcIj5cclxuICAgICAgPGgxPkhleSEgQ29uZnVzZWQgcGVvcGxlPC9oMT4gXHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9