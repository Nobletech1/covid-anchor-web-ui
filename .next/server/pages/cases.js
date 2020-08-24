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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/cases.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Case.js":
/*!********************************!*\
  !*** ./src/components/Case.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\components\\Case.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Case({
  caseData
}) {
  return __jsx("div", {
    className: "jsx-3678409372" + " " + "case",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3678409372",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, caseData.country), __jsx("p", {
    className: "jsx-3678409372",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Total Cases:", caseData.c), __jsx("p", {
    className: "jsx-3678409372",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Active Cases:", caseData.active), __jsx("p", {
    className: "jsx-3678409372",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Recovered Cases:", caseData.recovered), __jsx("p", {
    className: "jsx-3678409372",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Death Cases:", caseData.deaths), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3678409372",
    __self: this
  }, ".case.jsx-3678409372{height:30rem;padding:3rem;background-color:var(--color-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcQ2FzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVWSxBQUdjLGFBQ0EsYUFDeUIsc0NBRXBDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xcY29tcG9uZW50c1xcQ2FzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENhc2Uoe2Nhc2VEYXRhfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VcIj5cclxuICAgICAgICAgICAgPGgyPntjYXNlRGF0YS5jb3VudHJ5fTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlRvdGFsIENhc2VzOntjYXNlRGF0YS5jfTwvcD5cclxuICAgICAgICAgICAgPHA+QWN0aXZlIENhc2VzOntjYXNlRGF0YS5hY3RpdmV9PC9wPlxyXG4gICAgICAgICAgICA8cD5SZWNvdmVyZWQgQ2FzZXM6e2Nhc2VEYXRhLnJlY292ZXJlZH08L3A+XHJcbiAgICAgICAgICAgIDxwPkRlYXRoIENhc2VzOntjYXNlRGF0YS5kZWF0aHN9PC9wPlxyXG4gey8qIFN0eWxpbmcgKi99XHJcblxyXG48c3R5bGUganN4PntgXHJcbiAgIC5jYXNle1xyXG4gaGVpZ2h0OjMwcmVtO1xyXG4gcGFkZGluZzozcmVtO1xyXG4gYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgfVxyXG4gICAgIGB9PC9zdHlsZT5cclxuIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Flab\\\\Desktop\\\\covid-anchor\\\\web-ui\\\\src\\\\components\\\\Case.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Case);

/***/ }),

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

/***/ "./src/pages/cases.js":
/*!****************************!*\
  !*** ./src/pages/cases.js ***!
  \****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Case */ "./src/components/Case.js");
var _jsxFileName = "C:\\Users\\Flab\\Desktop\\covid-anchor\\web-ui\\src\\pages\\cases.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Cases({
  cases
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Cases | Convid Anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    lassName: "content",
    className: "jsx-2905193838",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "jsx-2905193838",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "Cases Page"), __jsx("div", {
    className: "jsx-2905193838" + " " + "cases",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, cases.map((item, key) => __jsx(_components_Case__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: key,
    caseData: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 34
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2905193838",
    __self: this
  }, ".content.jsx-2905193838{width:100%;height:100%;}.cases.jsx-2905193838{font-size:20px;color:green;width:100%;height:100%;display:grid;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:4rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(30rem,1fr));gap:4rem;-webkit-animation:anim-jsx-2905193838;animation:anim-jsx-2905193838;-webkit-animation-duration:5s;animation-duration:5s;}@-webkit-keyframes anim-jsx-2905193838{0%{opacity:0;}100%{opacity:1;-webkit-transform:translateY(-60%);-ms-transform:translateY(-60%);transform:translateY(-60%);}}@keyframes anim-jsx-2905193838{0%{opacity:0;}100%{opacity:1;-webkit-transform:translateY(-60%);-ms-transform:translateY(-60%);transform:translateY(-60%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xccGFnZXNcXGNhc2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCbUIsQUFHNkIsQUFPSSxBQWdCTixBQUlDLFVBRlosQUFJQSxDQTVCYyxJQU9BLFFBSmIsSUFLWSxXQUNDLFlBQ0MsYUFDRCx3Q0FpQmIsK0JBaEJjLGFBQ0EsYUFDNEMseURBQ2hELFNBQ00sb0VBQ08sb0RBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRmxhYlxcRGVza3RvcFxcY292aWQtYW5jaG9yXFx3ZWItdWlcXHNyY1xccGFnZXNcXGNhc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX1mcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IENhc2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FzZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDYXNlcyh7Y2FzZXN9KSB7XHJcbiByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIkNhc2VzIHwgQ29udmlkIEFuY2hvclwiPlxyXG4gICAgIDxkaXYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgIDxoMT5DYXNlcyBQYWdlPC9oMT5cclxuICAgICB7LyogTGlzdCBvZiBjYXNlcyAqL31cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VzXCI+XHJcbiAgICAgICBcclxuICAgICAgIHtjYXNlcy5tYXAoKGl0ZW0sIGtleSkgPT4gPENhc2Uga2V5PXtrZXl9Y2FzZURhdGE9e2l0ZW19Lz4pfVxyXG4gICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgIHsvKiBTdHlsaW5nICovfVxyXG5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXNlc3tcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6MTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzo0cmVtO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoYXV0by1maXQsbWlubWF4KDMwcmVtLDFmcikpO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6NHJlbTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOmFuaW07XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo1cztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFuaW17XHJcbiAgICAgICAgICAgICAgIDAle1xyXG4gICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcclxuXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTYwJSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gR2V0IENhc2VzXHJcbmNvbnN0IENhc2VfQVBJPVwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goQ2FzZV9BUEkpO1xyXG4gIGNvbnN0IGNhc2VzID1hd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXNlcyxcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhc2VzO1xyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Flab\\\\Desktop\\\\covid-anchor\\\\web-ui\\\\src\\\\pages\\\\cases.js */")));
} // Get Cases


const Case_API = "http://localhost:5000";
async function getStaticProps() {
  const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(Case_API);
  const cases = await response.json();
  return {
    props: {
      cases
    }
  };
}
;
/* harmony default export */ __webpack_exports__["default"] = (Cases);

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Nhc2VzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQ2FzZSIsImNhc2VEYXRhIiwiY291bnRyeSIsImMiLCJhY3RpdmUiLCJyZWNvdmVyZWQiLCJkZWF0aHMiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiQ3VzdG9tSGVhZCIsIkxpbmsiLCJocmVmIiwicGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsIk5hdmJhciIsIkNhc2VzIiwiY2FzZXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiQ2FzZV9BUEkiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBekIsQ0FGSCxDQUhBO0FBQUE7QUFBQTtBQUFBLHc5SEFERCxDQURIO0FBc0RBLEMsQ0FJRDs7O0FBQ0EsTUFBTUUsUUFBUSxHQUFDLHVCQUFmO0FBQ08sZUFBZUMsY0FBZixHQUErQjtBQUNyQyxRQUFNQyxRQUFRLEdBQUMsTUFBTUMseURBQUssQ0FBQ0gsUUFBRCxDQUExQjtBQUNDLFFBQU1KLEtBQUssR0FBRSxNQUFNTSxRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFFQSxTQUFPO0FBQ0xsQixTQUFLLEVBQUU7QUFDTFU7QUFESztBQURGLEdBQVA7QUFLRDtBQUFBO0FBQ2NELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDOUVBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2Nhc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvY2FzZXMuanNcIik7XG4iLCJmdW5jdGlvbiBDYXNlKHtjYXNlRGF0YX0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgIDxoMj57Y2FzZURhdGEuY291bnRyeX08L2gyPlxyXG4gICAgICAgICAgICA8cD5Ub3RhbCBDYXNlczp7Y2FzZURhdGEuY308L3A+XHJcbiAgICAgICAgICAgIDxwPkFjdGl2ZSBDYXNlczp7Y2FzZURhdGEuYWN0aXZlfTwvcD5cclxuICAgICAgICAgICAgPHA+UmVjb3ZlcmVkIENhc2VzOntjYXNlRGF0YS5yZWNvdmVyZWR9PC9wPlxyXG4gICAgICAgICAgICA8cD5EZWF0aCBDYXNlczp7Y2FzZURhdGEuZGVhdGhzfTwvcD5cclxuIHsvKiBTdHlsaW5nICovfVxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG4gICAuY2FzZXtcclxuIGhlaWdodDozMHJlbTtcclxuIHBhZGRpbmc6M3JlbTtcclxuIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gIH1cclxuICAgICBgfTwvc3R5bGU+XHJcbiA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc2U7IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxDdXN0b21IZWFkIC8+XHJcblxyXG4gICAgICB7LyogTmF2YmFyICovfVxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICB7LyogQXBwIENvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICB7LyogU1RZTElORyB3aXRoIHN0eWxlZC1qc3ggKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGF5b3V0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRpbS13aGl0ZSk7XHJcblxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcC1jb250ZW50e1xyXG4gICAgICAgICAgZmxleC1ncm93OjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxyXG4vLyBTZXR0aW5nIHBhZ2UgaGVhZFxyXG5mdW5jdGlvbiBDdXN0b21IZWFkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNvdmlkIEFuY2hvcjwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9nbG9iYWwuY3NzXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTGluayh7IGNoaWxkcmVuLCBocmVmIH0pIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhuYW1lID09PSBocmVmO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmsgJHtpc0FjdGl2ZSAmJiBcImlzLWFjdGl2ZVwifWB9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5hdmJhci1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlzLWFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC0xLjVyZW07XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIi4vTGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3Rvcmllc1wiPlN0b3JpZXM8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Db3ZpZCBBbmNob3I8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jYXNlc1wiPkNhc2VzPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMzhyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pcy1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMS41cmVtO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfWZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgQ2FzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXNlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENhc2VzKHtjYXNlc30pIHtcclxuIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQ2FzZXMgfCBDb252aWQgQW5jaG9yXCI+XHJcbiAgICAgPGRpdiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgPGgxPkNhc2VzIFBhZ2U8L2gxPlxyXG4gICAgIHsvKiBMaXN0IG9mIGNhc2VzICovfVxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzZXNcIj5cclxuICAgICAgIFxyXG4gICAgICAge2Nhc2VzLm1hcCgoaXRlbSwga2V5KSA9PiA8Q2FzZSBrZXk9e2tleX1jYXNlRGF0YT17aXRlbX0vPil9XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgey8qIFN0eWxpbmcgKi99XHJcblxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhc2Vze1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzoxO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjRyZW07XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMzByZW0sMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgIGdhcDo0cmVtO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246YW5pbTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYW5pbXtcclxuICAgICAgICAgICAgICAgMCV7XHJcbiAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNjAlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBHZXQgQ2FzZXNcclxuY29uc3QgQ2FzZV9BUEk9XCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiBjb25zdCByZXNwb25zZT1hd2FpdCBmZXRjaChDYXNlX0FQSSk7XHJcbiAgY29uc3QgY2FzZXMgPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNhc2VzLFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FzZXM7XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=