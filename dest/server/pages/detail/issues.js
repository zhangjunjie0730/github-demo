module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/detail/issues.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/IssueItem/index.jsx":
/*!****************************************!*\
  !*** ./components/IssueItem/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Markdown */ "./components/Markdown/index.jsx");


var _jsxFileName = "E:\\MyGit\\github-demo\\components\\IssueItem\\index.jsx";






const IssueDetail = ({
  issue
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3344283457" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: issue.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3344283457" + " " + "actions",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        href: issue.html_url,
        target: "_blank",
        children: "\u6253\u5F00issue\u8BA8\u8BBA\u9875\u9762"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3344283457",
      children: ".root.jsx-3344283457{background:#fefefe;padding:20px;}.actions.jsx-3344283457{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXElzc3VlSXRlbVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVTLEFBR2dDLEFBS0YsaUJBQ25CLEVBTGUsYUFDZiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxjb21wb25lbnRzXFxJc3N1ZUl0ZW1cXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0VGltZUZyb21Ob3cgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi9NYXJrZG93bic7XHJcblxyXG5jb25zdCBJc3N1ZURldGFpbCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNYXJrZG93biBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExhYmVsID0gKHsgbGFiZWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuMTVlbSA0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMjcsIDMxLCAzNSwgMC4xMik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIyR7bGFiZWwuY29sb3J9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChzaG93ID0+ICFzaG93KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH0gY2xhc3NOYW1lPVwidmlldy1idG5cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAg5p+l55yLXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAge2lzc3VlLmxhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICAgIDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldFRpbWVGcm9tTm93KGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC52aWV3LWJ0bikge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXNzdWVJdGVtO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\IssueItem\\\\index.jsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

const Label = ({
  label
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4198104231", [label.color]]]) + " " + "label",
      children: [label.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "4198104231",
        dynamic: [label.color],
        children: `.label.__jsx-style-dynamic-selector{margin-left:8px;height:20px;padding:0.15em 4px;font-size:12px;font-weight:600;line-height:15px;border-radius:2px;box-shadow:inset 0 -1px 0 rgba(27,31,35,0.12);background-color:#${label.color};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXElzc3VlSXRlbVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DVyxBQUcrQixnQkFDSixZQUNPLG1CQUNKLGVBQ0MsZ0JBQ0MsaUJBQ0Msa0JBQytCLDhDQUNGLCtDQUNqRCIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxjb21wb25lbnRzXFxJc3N1ZUl0ZW1cXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0VGltZUZyb21Ob3cgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi9NYXJrZG93bic7XHJcblxyXG5jb25zdCBJc3N1ZURldGFpbCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNYXJrZG93biBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9e2lzc3VlLmh0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgIOaJk+W8gGlzc3Vl6K6o6K666aG16Z2iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExhYmVsID0gKHsgbGFiZWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuMTVlbSA0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHJnYmEoMjcsIDMxLCAzNSwgMC4xMik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIyR7bGFiZWwuY29sb3J9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChzaG93ID0+ICFzaG93KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH0gY2xhc3NOYW1lPVwidmlldy1idG5cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAg5p+l55yLXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAge2lzc3VlLmxhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICAgIDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldFRpbWVGcm9tTm93KGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC52aWV3LWJ0bikge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXNzdWVJdGVtO1xyXG4iXX0= */
/*@ sourceURL=E:\\MyGit\\github-demo\\components\\IssueItem\\index.jsx */`
      }, void 0, false, void 0, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const IssueItem = ({
  issue
}) => {
  const {
    0: showDetail,
    1: setShowDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    setShowDetail(show => !show);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2669519729" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2669519729" + " " + "issue",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: toggleShowDetail,
        className: "view-btn",
        type: "primary",
        size: "small",
        children: "\u67E5\u770B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2669519729" + " " + "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          src: issue.user.avatar_url,
          shape: "square",
          size: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2669519729" + " " + "main-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "jsx-2669519729",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-2669519729",
            children: issue.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), issue.labels.map(label => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
            label: label
          }, label.id, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2669519729" + " " + "sub-info",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-2669519729",
            children: ["Updated at ", Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTimeFromNow"])(issue.updated_at)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), showDetail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IssueDetail, {
      issue: issue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2669519729",
      children: ".view-btn{position:absolute;right:10px;top:10px;}.root.jsx-2669519729+.root.jsx-2669519729{border-top:1px solid #eee;}.issue.jsx-2669519729{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2669519729:hover{background:#fafafa;}.main-info.jsx-2669519729>h6.jsx-2669519729{padding-right:40px;font-size:16px;word-break:break-all;}.avatar.jsx-2669519729{margin-right:20px;}.sub-info.jsx-2669519729{margin-bottom:0;}.sub-info.jsx-2669519729>span.jsx-2669519729+span.jsx-2669519729{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXElzc3VlSXRlbVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGUyxBQUcrQixBQUtRLEFBR2IsQUFLTSxBQUdBLEFBS0QsQUFHRixBQUdLLGdCQUZ2QixFQXhCYSxBQXFCYixDQVJBLEFBR2lCLEVBV0UsS0F0Qm5CLEdBSlcsS0FnQlksSUFmdkIsQUEwQmlCLGVBQ2pCLEVBWEEsbUJBVm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xcY29tcG9uZW50c1xcSXNzdWVJdGVtXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFRpbWVGcm9tTm93IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vTWFya2Rvd24nO1xyXG5cclxuY29uc3QgSXNzdWVEZXRhaWwgPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMYWJlbCA9ICh7IGxhYmVsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjE1ZW0gNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDI3LCAzMSwgMzUsIDAuMTIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMke2xhYmVsLmNvbG9yfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSXNzdWVJdGVtID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoc2hvdyA9PiAhc2hvdyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9IGNsYXNzTmFtZT1cInZpZXctYnRuXCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgIOafpeeci1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMubWFwKGxhYmVsID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRUaW1lRnJvbU5vdyhpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCgudmlldy1idG4pIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlSXRlbTtcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\IssueItem\\\\index.jsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (IssueItem);

/***/ }),

/***/ "./components/Markdown/index.jsx":
/*!***************************************!*\
  !*** ./components/Markdown/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! github-markdown-css */ "./node_modules/github-markdown-css/github-markdown.css");
/* harmony import */ var github_markdown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(github_markdown_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ "markdown-it");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\MyGit\\github-demo\\components\\Markdown\\index.jsx";


 // import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/default.css';

 // hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('js', javascript);

function b64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

const md = new markdown_it__WEBPACK_IMPORTED_MODULE_3___default.a({
  html: true,
  // html文字也能正常转义成md
  linkify: true // 带http的可以自动变成链接
  // highlight(str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return hljs.highlight(lang, str, true).value;
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   return ''; // 使用额外的默认转义
  // },

}); // let hljsInited = false;

const Markdown = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  isBase64,
  content
}) => {
  const converted = isBase64 ? b64ToUtf8(content) : content;
  const html = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => md.render(converted), [converted]); // if (!hljsInited && typeof window !== 'undefined') {
  //   hljs.initHighlightingOnLoad();
  //   hljsInited = true;
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "markdown-body",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./components/SearchUser/index.jsx":
/*!*****************************************!*\
  !*** ./components/SearchUser/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\MyGit\\github-demo\\components\\SearchUser\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function SearchUser({
  onChange,
  value,
  style
}) {
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: options,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]); // 对比前后请求id是否相同，如果不同说明网络延迟有多次请求，当前的请求作废

  const lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(0);
  const fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(async (searchValue, fetchId) => {
    setFetching(true);
    setOptions([]);
    const {
      data
    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["request"])({
      url: `/search/users?q=${searchValue}`
    }); // 客户端发送请求就不需要req和res了

    const userOptions = data.items.map(user => ({
      text: user.login,
      value: user.login
    }));

    if (fetchId === lastFetchIdRef.current) {
      setOptions(userOptions);
    } else {
      // 不相等跳过当前请求，继续下一次发送
      setOptions([]);
    }

    setFetching(false);
  }, 500), []);

  const fetchUserBefore = searchValue => {
    lastFetchIdRef.current += 1;
    if (searchValue.trim()) return fetchUser(searchValue, lastFetchIdRef.current);
    return null;
  };

  const handleChange = searchValue => {
    onChange(searchValue);
    setOptions([]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    allowClear: true,
    showSearch: true,
    value: value,
    onChange: handleChange,
    onSearch: fetchUserBefore,
    notFoundContent: fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
      size: "small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 35
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 59
    }, this),
    filterOption: false // 禁用本地搜索
    ,
    placeholder: "\u521B\u5EFA\u8005",
    style: _objectSpread({
      width: 200
    }, style),
    children: options.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      value: option.value,
      children: option.text
    }, option.value, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ }),

/***/ "./node_modules/github-markdown-css/github-markdown.css":
/*!**************************************************************!*\
  !*** ./node_modules/github-markdown-css/github-markdown.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_IssueItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/IssueItem */ "./components/IssueItem/index.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");

var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx";










function makeQuery(creator, state, labels) {
  const creatorStr = creator ? `creator=${creator}` : '';
  const stateStr = state ? `state=${state}` : '';
  let labelStr = '';
  if (labels && labels.length > 0) labelStr = `labels=${labels.join(',')}`;
  const arr = [];
  if (creatorStr) arr.push(creatorStr);
  if (stateStr) arr.push(stateStr);
  if (labelStr) arr.push(labelStr);
  return `?${arr.join('&')}`;
}

const {
  cache,
  useCache
} = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_9__["default"])({
  genCacheKeyStrate: context => Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKeyStrate"])(context)
});

const Issues = ({
  services
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    owner,
    name
  } = router.query;
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKey"])(router, {
    services
  }));
  const {
    initIssues,
    labels
  } = services;
  const {
    0: creator,
    1: setCreator
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const {
    0: issueState,
    1: setIssueState
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const {
    0: selectedLabels,
    1: setSelectedLabels
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const {
    0: issues,
    1: setIssues
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initIssues);
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);

  const handleLabelsChange = selected => setSelectedLabels(selected);

  const handleSearch = async () => {
    setFetching(true);
    const {
      data: searchIssues
    } = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
      url: `/repos/${owner}/${name}/issues${makeQuery(creator, issueState, selectedLabels)}`
    });
    setIssues(searchIssues);
    setFetching(false);
  };

  const selectCommonStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-4001140427" + " " + "root",
    children: [fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-4001140427" + " " + "spin",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-4001140427" + " " + "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        allowClear: true,
        onChange: setIssueState,
        value: issueState,
        placeholder: "\u72B6\u6001",
        style: selectCommonStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
          value: "all",
          children: "\u5168\u90E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        allowClear: true,
        mode: "multiple",
        onChange: handleLabelsChange,
        value: selectedLabels,
        placeholder: "Label",
        style: {
          flexGrow: 1,
          width: 200,
          margin: '0 20px'
        },
        children: labels.map(label => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, {
          value: label.id,
          children: label.name
        }, label.id, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        loading: fetching,
        onClick: handleSearch,
        size: "small",
        type: "primary",
        style: {
          marginRight: 11
        },
        children: "\u641C\u7D22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-4001140427" + " " + "issues",
      children: issues.map(issue => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_IssueItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        issue: issue
      }, issue.id, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4001140427",
      children: ".search.jsx-4001140427{margin-top:20px;}.issues.jsx-4001140427{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-4001140427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.spin.jsx-4001140427{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(255,255,255,0.3);z-index:10000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEdTLEFBRzZCLEFBR00sQUFNVCxBQUlFLGVBQ1IsQ0FiVCxNQUdvQixBQVdaLE1BQ0UsUUFDQyxJQVpVLEtBYU4sY0FaRyxlQUlHLENBSHJCLDRDQVl5QixnREFSekIsbURBU3FCLDZGQUNpQixpQ0FDdEIsY0FDaEIiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJc3N1ZUl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Jc3N1ZUl0ZW0nO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJztcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnO1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnO1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YDtcclxuXHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKTtcclxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKTtcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWA7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2xpZW50Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiBjb250ZXh0ID0+IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpLFxyXG59KTtcclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXMoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAge2ZldGNoaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BpblwiPlxyXG4gICAgICAgICAgPFNwaW4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIOetm+mAieeUqOaItyAqL31cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgICB7Lyog562b6YCJ54q25oCBICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgdmFsdWU9e2lzc3VlU3RhdGV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIOetm+mAieagh+etviAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNwaW4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaW5pdElzc3VlcyB9LCB7IGRhdGE6IGxhYmVscyB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpbml0SXNzdWVzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXNzdWVzO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\detail\\\\issues.jsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined);
};

Issues.getInitialProps = cache(async ({
  ctx
}) => {
  const {
    owner,
    name
  } = ctx.query;
  const [{
    data: initIssues
  }, {
    data: labels
  }] = await Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
    url: `/repos/${owner}/${name}/issues`
  }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
    url: `/repos/${owner}/${name}/labels`
  }, ctx.req, ctx.res)]);
  return {
    services: {
      initIssues,
      labels
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Issues);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const isServer = true;
const GITHUB_BASE_URL = 'https://api.github.com'; // 服务端环境需要手动拼接url

async function requestGithub(method, url, data, headers) {
  if (!url) {
    throw new Error('url must be provided');
  }

  const result = await axios({
    method,
    url: `${GITHUB_BASE_URL}${url}`,
    data,
    headers
  });
  return result;
}

async function request({
  method = 'GET',
  url,
  data = {}
}, req, res) {
  if (isServer) {
    const {
      session
    } = req;
    const {
      githubAuth
    } = session || {};
    const {
      access_token,
      token_type
    } = githubAuth || {};
    const headers = {};

    if (access_token) {
      headers.Authorization = `${token_type} ${access_token}`;
    } // 服务端走requestGithub方法，
    // 补全api的前缀


    const serverResult = await requestGithub(method, url, data, headers);
    return serverResult;
  } // 客户端需要拼接github前缀 让koa的server可以识别并代理


  const clientResult = await axios({
    method,
    url: `/github${url}`,
    data
  });
  return clientResult;
}

module.exports = {
  request,
  requestGithub
};

/***/ }),

/***/ "./utils/client-cache.js":
/*!*******************************!*\
  !*** ./utils/client-cache.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initClientCache; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const isServer = true;
const DEFAULT_CACHE_KEY = 'cache';
function initClientCache({
  lruConfig = {},
  genCacheKeyStrate
} = {}) {
  // 默认10分钟缓存
  const _ref = lruConfig || {},
        {
    maxAge = 1000 * 60 * 10
  } = _ref,
        restConfig = _objectWithoutProperties(_ref, ["maxAge"]);

  const lruCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1___default.a(_objectSpread({
    maxAge
  }, restConfig));

  function getCacheKey(context) {
    return genCacheKeyStrate ? genCacheKeyStrate(context) : DEFAULT_CACHE_KEY;
  }

  function cache(fn) {
    // 服务端不能保留缓存 会在多个用户之间共享
    if (isServer) return fn;
    return async (...args) => {
      const key = getCacheKey(...args);
      const cached = lruCache.get(key);
      if (cached) return cached;
      const result = await fn(...args);
      lruCache.set(key, result);
      return result;
    };
  }

  function setCache(key, cachedData) {
    lruCache.set(key, cachedData);
  } // 允许客户端外部手动设置缓存数据


  function useCache(key, cachedData) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!isServer) setCache(key, cachedData);
    }, []);
  }

  return {
    cache,
    useCache,
    setCache
  };
}

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getTimeFromNow, genDetailCacheKey, genDetailCacheKeyStrate, genCacheKeyByQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromNow", function() { return getTimeFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genDetailCacheKey", function() { return genDetailCacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genDetailCacheKeyStrate", function() { return genDetailCacheKeyStrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCacheKeyByQuery", function() { return genCacheKeyByQuery; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getTimeFromNow = time => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
};
const genDetailCacheKey = ctx => {
  const {
    query,
    pathname
  } = ctx;
  const {
    owner,
    name
  } = query;
  return `${pathname}-${owner}-${name}`;
};
const genDetailCacheKeyStrate = context => {
  const {
    ctx
  } = context;
  return genDetailCacheKey(ctx);
};
const genCacheKeyByQuery = query => {
  return Object.keys(query).reduce((prev, curr) => {
    prev += query[curr];
    return prev;
  }, '');
};

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Jc3N1ZUl0ZW0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFya2Rvd24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoVXNlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC1jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJscnUtY2FjaGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZG93bi1pdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSXNzdWVEZXRhaWwiLCJpc3N1ZSIsImJvZHkiLCJodG1sX3VybCIsIkxhYmVsIiwibGFiZWwiLCJjb2xvciIsIm5hbWUiLCJJc3N1ZUl0ZW0iLCJzaG93RGV0YWlsIiwic2V0U2hvd0RldGFpbCIsInVzZVN0YXRlIiwidG9nZ2xlU2hvd0RldGFpbCIsInVzZUNhbGxiYWNrIiwic2hvdyIsInVzZXIiLCJhdmF0YXJfdXJsIiwidGl0bGUiLCJsYWJlbHMiLCJtYXAiLCJpZCIsImdldFRpbWVGcm9tTm93IiwidXBkYXRlZF9hdCIsImI2NFRvVXRmOCIsInN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJtZCIsIk1hcmtkb3duSXQiLCJodG1sIiwibGlua2lmeSIsIk1hcmtkb3duIiwibWVtbyIsImlzQmFzZTY0IiwiY29udGVudCIsImNvbnZlcnRlZCIsInVzZU1lbW8iLCJyZW5kZXIiLCJfX2h0bWwiLCJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInN0eWxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibGFzdEZldGNoSWRSZWYiLCJ1c2VSZWYiLCJmZXRjaFVzZXIiLCJkZWJvdW5jZSIsInNlYXJjaFZhbHVlIiwiZmV0Y2hJZCIsImRhdGEiLCJyZXF1ZXN0IiwidXJsIiwidXNlck9wdGlvbnMiLCJpdGVtcyIsInRleHQiLCJsb2dpbiIsImN1cnJlbnQiLCJmZXRjaFVzZXJCZWZvcmUiLCJ0cmltIiwiaGFuZGxlQ2hhbmdlIiwid2lkdGgiLCJvcHRpb24iLCJtYWtlUXVlcnkiLCJjcmVhdG9yIiwic3RhdGUiLCJjcmVhdG9yU3RyIiwic3RhdGVTdHIiLCJsYWJlbFN0ciIsImxlbmd0aCIsImpvaW4iLCJhcnIiLCJwdXNoIiwiY2FjaGUiLCJ1c2VDYWNoZSIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiSXNzdWVzIiwic2VydmljZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvd25lciIsInF1ZXJ5IiwiZ2VuRGV0YWlsQ2FjaGVLZXkiLCJpbml0SXNzdWVzIiwic2V0Q3JlYXRvciIsImlzc3VlU3RhdGUiLCJzZXRJc3N1ZVN0YXRlIiwic2VsZWN0ZWRMYWJlbHMiLCJzZXRTZWxlY3RlZExhYmVscyIsImlzc3VlcyIsInNldElzc3VlcyIsImhhbmRsZUxhYmVsc0NoYW5nZSIsInNlbGVjdGVkIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoSXNzdWVzIiwic2VsZWN0Q29tbW9uU3R5bGUiLCJhbGlnblNlbGYiLCJtYXJnaW5MZWZ0IiwiZmxleEdyb3ciLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIlByb21pc2UiLCJhbGwiLCJyZXEiLCJyZXMiLCJheGlvcyIsInJlcXVpcmUiLCJpc1NlcnZlciIsIkdJVEhVQl9CQVNFX1VSTCIsInJlcXVlc3RHaXRodWIiLCJtZXRob2QiLCJoZWFkZXJzIiwiRXJyb3IiLCJyZXN1bHQiLCJzZXNzaW9uIiwiZ2l0aHViQXV0aCIsImFjY2Vzc190b2tlbiIsInRva2VuX3R5cGUiLCJBdXRob3JpemF0aW9uIiwic2VydmVyUmVzdWx0IiwiY2xpZW50UmVzdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIkRFRkFVTFRfQ0FDSEVfS0VZIiwibHJ1Q29uZmlnIiwibWF4QWdlIiwicmVzdENvbmZpZyIsImxydUNhY2hlIiwiTFJVIiwiZ2V0Q2FjaGVLZXkiLCJmbiIsImFyZ3MiLCJrZXkiLCJjYWNoZWQiLCJnZXQiLCJzZXQiLCJzZXRDYWNoZSIsImNhY2hlZERhdGEiLCJ1c2VFZmZlY3QiLCJ0aW1lIiwibW9tZW50IiwiZnJvbU5vdyIsInBhdGhuYW1lIiwiZ2VuQ2FjaGVLZXlCeVF1ZXJ5IiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInByZXYiLCJjdXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtC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QWI7QUFDQSxXQUFPRCxJQUFQO0FBQ0QsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlELENBTE0sQzs7Ozs7Ozs7Ozs7QUNqQlAsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3hcIik7XG4iLCJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFRpbWVGcm9tTm93IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vTWFya2Rvd24nO1xyXG5cclxuY29uc3QgSXNzdWVEZXRhaWwgPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8TWFya2Rvd24gY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICDmiZPlvIBpc3N1ZeiuqOiuuumhtemdolxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMYWJlbCA9ICh7IGxhYmVsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICB7bGFiZWwubmFtZX1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjE1ZW0gNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCByZ2JhKDI3LCAzMSwgMzUsIDAuMTIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMke2xhYmVsLmNvbG9yfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSXNzdWVJdGVtID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoc2hvdyA9PiAhc2hvdyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9IGNsYXNzTmFtZT1cInZpZXctYnRuXCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgIOafpeeci1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMubWFwKGxhYmVsID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRUaW1lRnJvbU5vdyhpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCgudmlldy1idG4pIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlSXRlbTtcclxuIiwiaW1wb3J0IHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdnaXRodWItbWFya2Rvd24tY3NzJztcclxuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSAnbWFya2Rvd24taXQnO1xyXG4vLyBpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2hpZ2hsaWdodCc7XHJcbi8vIGltcG9ydCBqYXZhc2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnO1xyXG4vLyBpbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZGVmYXVsdC5jc3MnO1xyXG5pbXBvcnQgJ2dpdGh1Yi1tYXJrZG93bi1jc3MnO1xyXG5cclxuLy8gaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgamF2YXNjcmlwdCk7XHJcbi8vIGhsanMucmVnaXN0ZXJMYW5ndWFnZSgnanMnLCBqYXZhc2NyaXB0KTtcclxuXHJcbmZ1bmN0aW9uIGI2NFRvVXRmOChzdHIpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShhdG9iKHN0cikpKTtcclxufVxyXG5cclxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCh7XHJcbiAgaHRtbDogdHJ1ZSwgLy8gaHRtbOaWh+Wtl+S5n+iDveato+W4uOi9rOS5ieaIkG1kXHJcbiAgbGlua2lmeTogdHJ1ZSwgLy8g5bimaHR0cOeahOWPr+S7peiHquWKqOWPmOaIkOmTvuaOpVxyXG4gIC8vIGhpZ2hsaWdodChzdHIsIGxhbmcpIHtcclxuICAvLyAgIGlmIChsYW5nICYmIGhsanMuZ2V0TGFuZ3VhZ2UobGFuZykpIHtcclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHQobGFuZywgc3RyLCB0cnVlKS52YWx1ZTtcclxuICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiAnJzsgLy8g5L2/55So6aKd5aSW55qE6buY6K6k6L2s5LmJXHJcbiAgLy8gfSxcclxufSk7XHJcblxyXG4vLyBsZXQgaGxqc0luaXRlZCA9IGZhbHNlO1xyXG5jb25zdCBNYXJrZG93biA9IG1lbW8oKHsgaXNCYXNlNjQsIGNvbnRlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnZlcnRlZCA9IGlzQmFzZTY0ID8gYjY0VG9VdGY4KGNvbnRlbnQpIDogY29udGVudDtcclxuICBjb25zdCBodG1sID0gdXNlTWVtbygoKSA9PiBtZC5yZW5kZXIoY29udmVydGVkKSwgW2NvbnZlcnRlZF0pO1xyXG5cclxuICAvLyBpZiAoIWhsanNJbml0ZWQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAvLyAgIGhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xyXG4gIC8vICAgaGxqc0luaXRlZCA9IHRydWU7XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XHJcbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duO1xyXG4iLCJpbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKHsgb25DaGFuZ2UsIHZhbHVlLCBzdHlsZSB9KSB7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOWvueavlOWJjeWQjuivt+axgmlk5piv5ZCm55u45ZCM77yM5aaC5p6c5LiN5ZCM6K+05piO572R57uc5bu26L+f5pyJ5aSa5qyh6K+35rGC77yM5b2T5YmN55qE6K+35rGC5L2c5bqfXHJcbiAgY29uc3QgbGFzdEZldGNoSWRSZWYgPSB1c2VSZWYoMCk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKHNlYXJjaFZhbHVlLCBmZXRjaElkKSA9PiB7XHJcbiAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICBzZXRPcHRpb25zKFtdKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBgL3NlYXJjaC91c2Vycz9xPSR7c2VhcmNoVmFsdWV9YCB9KTsgLy8g5a6i5oi356uv5Y+R6YCB6K+35rGC5bCx5LiN6ZyA6KaBcmVx5ZKMcmVz5LqGXHJcbiAgICAgIGNvbnN0IHVzZXJPcHRpb25zID0gZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoeyB0ZXh0OiB1c2VyLmxvZ2luLCB2YWx1ZTogdXNlci5sb2dpbiB9KSk7XHJcblxyXG4gICAgICBpZiAoZmV0Y2hJZCA9PT0gbGFzdEZldGNoSWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNldE9wdGlvbnModXNlck9wdGlvbnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOS4jeebuOetiei3s+i/h+W9k+WJjeivt+axgu+8jOe7p+e7reS4i+S4gOasoeWPkemAgVxyXG4gICAgICAgIHNldE9wdGlvbnMoW10pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckJlZm9yZSA9IHNlYXJjaFZhbHVlID0+IHtcclxuICAgIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQgKz0gMTtcclxuICAgIGlmIChzZWFyY2hWYWx1ZS50cmltKCkpIHJldHVybiBmZXRjaFVzZXIoc2VhcmNoVmFsdWUsIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xyXG4gICAgb25DaGFuZ2Uoc2VhcmNoVmFsdWUpO1xyXG4gICAgc2V0T3B0aW9ucyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RcclxuICAgICAgYWxsb3dDbGVhclxyXG4gICAgICBzaG93U2VhcmNoXHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgb25TZWFyY2g9e2ZldGNoVXNlckJlZm9yZX1cclxuICAgICAgbm90Rm91bmRDb250ZW50PXtmZXRjaGluZyA/IDxTcGluIHNpemU9XCJzbWFsbFwiIC8+IDogPHNwYW4+bm90IGZvdW5kPC9zcGFuPn1cclxuICAgICAgZmlsdGVyT3B0aW9uPXtmYWxzZX0gLy8g56aB55So5pys5Zyw5pCc57SiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwi5Yib5bu66ICFXCJcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgLi4uc3R5bGUgfX1cclxuICAgID5cclxuICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAge29wdGlvbi50ZXh0fVxyXG4gICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L1NlbGVjdD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIFNlbGVjdCwgU3BpbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXNzdWVJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXNzdWVJdGVtJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXksIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBjb25zdCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJyc7XHJcbiAgY29uc3Qgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJztcclxuICBsZXQgbGFiZWxTdHIgPSAnJztcclxuICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWA7XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG5cclxuICBpZiAoY3JlYXRvclN0cikgYXJyLnB1c2goY3JlYXRvclN0cik7XHJcbiAgaWYgKHN0YXRlU3RyKSBhcnIucHVzaChzdGF0ZVN0cik7XHJcbiAgaWYgKGxhYmVsU3RyKSBhcnIucHVzaChsYWJlbFN0cik7XHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gO1xyXG59XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENsaWVudENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KSxcclxufSk7XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaW5pdElzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlcztcclxuXHJcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExhYmVscywgc2V0U2VsZWN0ZWRMYWJlbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc3N1ZXMsIHNldElzc3Vlc10gPSB1c2VTdGF0ZShpbml0SXNzdWVzKTtcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVMYWJlbHNDaGFuZ2UgPSBzZWxlY3RlZCA9PiBzZXRTZWxlY3RlZExhYmVscyhzZWxlY3RlZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIHtmZXRjaGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5cIj5cclxuICAgICAgICAgIDxTcGluIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIHsvKiDnrZvpgInnlKjmiLcgKi99XHJcbiAgICAgICAgPFNlYXJjaFVzZXIgdmFsdWU9e2NyZWF0b3J9IG9uQ2hhbmdlPXtzZXRDcmVhdG9yfSBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9IC8+XHJcbiAgICAgICAgey8qIOetm+mAieeKtuaAgSAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHZhbHVlPXtpc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiY2xvc2VkXCI+Y2xvc2VkPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIHsvKiDnrZvpgInmoIfnrb4gKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbHNDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMYWJlbHN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCB3aWR0aDogMjAwLCBtYXJnaW46ICcwIDIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcGluIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IFt7IGRhdGE6IGluaXRJc3N1ZXMgfSwgeyBkYXRhOiBsYWJlbHMgfV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgaW5pdElzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlcztcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5cclxuY29uc3QgR0lUSFVCX0JBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xyXG5cclxuLy8g5pyN5Yqh56uv546v5aKD6ZyA6KaB5omL5Yqo5ou85o6ldXJsXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpIHtcclxuICBpZiAoIXVybCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1cmwgbXVzdCBiZSBwcm92aWRlZCcpO1xyXG4gIH1cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBtZXRob2QsXHJcbiAgICB1cmw6IGAke0dJVEhVQl9CQVNFX1VSTH0ke3VybH1gLFxyXG4gICAgZGF0YSxcclxuICAgIGhlYWRlcnMsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QoeyBtZXRob2QgPSAnR0VUJywgdXJsLCBkYXRhID0ge30gfSwgcmVxLCByZXMpIHtcclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbiB9ID0gcmVxO1xyXG4gICAgY29uc3QgeyBnaXRodWJBdXRoIH0gPSBzZXNzaW9uIHx8IHt9O1xyXG4gICAgY29uc3QgeyBhY2Nlc3NfdG9rZW4sIHRva2VuX3R5cGUgfSA9IGdpdGh1YkF1dGggfHwge307XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge307XHJcbiAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGAke3Rva2VuX3R5cGV9ICR7YWNjZXNzX3Rva2VufWA7XHJcbiAgICB9XHJcbiAgICAvLyDmnI3liqHnq6/otbByZXF1ZXN0R2l0aHVi5pa55rOV77yMXHJcbiAgICAvLyDooaXlhahhcGnnmoTliY3nvIBcclxuICAgIGNvbnN0IHNlcnZlclJlc3VsdCA9IGF3YWl0IHJlcXVlc3RHaXRodWIobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcnMpO1xyXG4gICAgcmV0dXJuIHNlcnZlclJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIOWuouaIt+err+mcgOimgeaLvOaOpWdpdGh1YuWJjee8gCDorqlrb2HnmoRzZXJ2ZXLlj6/ku6Xor4bliKvlubbku6PnkIZcclxuICBjb25zdCBjbGllbnRSZXN1bHQgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBtZXRob2QsXHJcbiAgICB1cmw6IGAvZ2l0aHViJHt1cmx9YCxcclxuICAgIGRhdGEsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNsaWVudFJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcmVxdWVzdCxcclxuICByZXF1ZXN0R2l0aHViLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IERFRkFVTFRfQ0FDSEVfS0VZID0gJ2NhY2hlJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENsaWVudENhY2hlKHsgbHJ1Q29uZmlnID0ge30sIGdlbkNhY2hlS2V5U3RyYXRlIH0gPSB7fSkge1xyXG4gIC8vIOm7mOiupDEw5YiG6ZKf57yT5a2YXHJcbiAgY29uc3QgeyBtYXhBZ2UgPSAxMDAwICogNjAgKiAxMCwgLi4ucmVzdENvbmZpZyB9ID0gbHJ1Q29uZmlnIHx8IHt9O1xyXG5cclxuICBjb25zdCBscnVDYWNoZSA9IG5ldyBMUlUoe1xyXG4gICAgbWF4QWdlLFxyXG4gICAgLi4ucmVzdENvbmZpZyxcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoY29udGV4dCkge1xyXG4gICAgcmV0dXJuIGdlbkNhY2hlS2V5U3RyYXRlID8gZ2VuQ2FjaGVLZXlTdHJhdGUoY29udGV4dCkgOiBERUZBVUxUX0NBQ0hFX0tFWTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhY2hlKGZuKSB7XHJcbiAgICAvLyDmnI3liqHnq6/kuI3og73kv53nlZnnvJPlrZgg5Lya5Zyo5aSa5Liq55So5oi35LmL6Ze05YWx5LqrXHJcbiAgICBpZiAoaXNTZXJ2ZXIpIHJldHVybiBmbjtcclxuXHJcbiAgICByZXR1cm4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gZ2V0Q2FjaGVLZXkoLi4uYXJncyk7XHJcbiAgICAgIGNvbnN0IGNhY2hlZCA9IGxydUNhY2hlLmdldChrZXkpO1xyXG4gICAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oLi4uYXJncyk7XHJcbiAgICAgIGxydUNhY2hlLnNldChrZXksIHJlc3VsdCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Q2FjaGUoa2V5LCBjYWNoZWREYXRhKSB7XHJcbiAgICBscnVDYWNoZS5zZXQoa2V5LCBjYWNoZWREYXRhKTtcclxuICB9XHJcblxyXG4gIC8vIOWFgeiuuOWuouaIt+err+WklumDqOaJi+WKqOiuvue9rue8k+WtmOaVsOaNrlxyXG4gIGZ1bmN0aW9uIHVzZUNhY2hlKGtleSwgY2FjaGVkRGF0YSkge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc1NlcnZlcikgc2V0Q2FjaGUoa2V5LCBjYWNoZWREYXRhKTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjYWNoZSxcclxuICAgIHVzZUNhY2hlLFxyXG4gICAgc2V0Q2FjaGUsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGltZUZyb21Ob3cgPSB0aW1lID0+IHtcclxuICByZXR1cm4gbW9tZW50KHRpbWUpLmZyb21Ob3coKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5EZXRhaWxDYWNoZUtleSA9IGN0eCA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSwgcGF0aG5hbWUgfSA9IGN0eDtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBxdWVyeTtcclxuICByZXR1cm4gYCR7cGF0aG5hbWV9LSR7b3duZXJ9LSR7bmFtZX1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlID0gY29udGV4dCA9PiB7XHJcbiAgY29uc3QgeyBjdHggfSA9IGNvbnRleHQ7XHJcbiAgcmV0dXJuIGdlbkRldGFpbENhY2hlS2V5KGN0eCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuQ2FjaGVLZXlCeVF1ZXJ5ID0gcXVlcnkgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhxdWVyeSkucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XHJcbiAgICBwcmV2ICs9IHF1ZXJ5W2N1cnJdO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbiAgfSwgJycpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJscnUtY2FjaGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2Rvd24taXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=