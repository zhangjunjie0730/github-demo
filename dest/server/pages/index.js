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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\index.jsx";




const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_2___default()();

const Index = props => {
  console.log('index.redux', props.userInfo);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "index"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
}; // Index.getInitialProps = async context => {
//   console.log('index页面的context', context);
//   // const result = await api.request({ url: `/user/repos` }, ctx.req, ctx.res);
//   // return {
//   //   userRepos: result.data,
//   //   ctx,
//   // };
//   return context;
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => ({
  user: state.user
}))(Index));

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInB1YmxpY1J1bnRpbWVDb25maWciLCJnZXRDb25maWciLCJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29ubmVjdCIsInN0YXRlIiwidXNlciIsImF4aW9zIiwicmVxdWlyZSIsImlzU2VydmVyIiwiR0lUSFVCX0JBU0VfVVJMIiwicmVxdWVzdEdpdGh1YiIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwiRXJyb3IiLCJyZXN1bHQiLCJyZXF1ZXN0IiwicmVxIiwicmVzIiwic2Vzc2lvbiIsImdpdGh1YkF1dGgiLCJhY2Nlc3NfdG9rZW4iLCJ0b2tlbl90eXBlIiwiQXV0aG9yaXphdGlvbiIsInNlcnZlclJlc3VsdCIsImNsaWVudFJlc3VsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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WUFBUDtBQUNEOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZlgsU0FEZTtBQUVmUDtBQUZlLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDNUNBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2luZGV4LnJlZHV4JywgcHJvcHMudXNlckluZm8pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5pbmRleDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnaW5kZXjpobXpnaLnmoRjb250ZXh0JywgY29udGV4dCk7XHJcbi8vICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IGAvdXNlci9yZXBvc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyk7XHJcbi8vICAgLy8gcmV0dXJuIHtcclxuLy8gICAvLyAgIHVzZXJSZXBvczogcmVzdWx0LmRhdGEsXHJcbi8vICAgLy8gICBjdHgsXHJcbi8vICAgLy8gfTtcclxuLy8gICByZXR1cm4gY29udGV4dDtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHsgdXNlcjogc3RhdGUudXNlciB9KSkoSW5kZXgpO1xyXG4iLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5jb25zdCBHSVRIVUJfQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbSc7XHJcblxyXG4vLyDmnI3liqHnq6/njq/looPpnIDopoHmiYvliqjmi7zmjqV1cmxcclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEdpdGh1YihtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycykge1xyXG4gIGlmICghdXJsKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybCBtdXN0IGJlIHByb3ZpZGVkJyk7XHJcbiAgfVxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgIG1ldGhvZCxcclxuICAgIHVybDogYCR7R0lUSFVCX0JBU0VfVVJMfSR7dXJsfWAsXHJcbiAgICBkYXRhLFxyXG4gICAgaGVhZGVycyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCh7IG1ldGhvZCA9ICdHRVQnLCB1cmwsIGRhdGEgPSB7fSB9LCByZXEsIHJlcykge1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSByZXE7XHJcbiAgICBjb25zdCB7IGdpdGh1YkF1dGggfSA9IHNlc3Npb24gfHwge307XHJcbiAgICBjb25zdCB7IGFjY2Vzc190b2tlbiwgdG9rZW5fdHlwZSB9ID0gZ2l0aHViQXV0aCB8fCB7fTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYCR7dG9rZW5fdHlwZX0gJHthY2Nlc3NfdG9rZW59YDtcclxuICAgIH1cclxuICAgIC8vIOacjeWKoeerr+i1sHJlcXVlc3RHaXRodWLmlrnms5XvvIxcclxuICAgIC8vIOihpeWFqGFwaeeahOWJjee8gFxyXG4gICAgY29uc3Qgc2VydmVyUmVzdWx0ID0gYXdhaXQgcmVxdWVzdEdpdGh1YihtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVycyk7XHJcbiAgICByZXR1cm4gc2VydmVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8g5a6i5oi356uv6ZyA6KaB5ou85o6lZ2l0aHVi5YmN57yAIOiuqWtvYeeahHNlcnZlcuWPr+S7peivhuWIq+W5tuS7o+eQhlxyXG4gIGNvbnN0IGNsaWVudFJlc3VsdCA9IGF3YWl0IGF4aW9zKHtcclxuICAgIG1ldGhvZCxcclxuICAgIHVybDogYC9naXRodWIke3VybH1gLFxyXG4gICAgZGF0YSxcclxuICB9KTtcclxuICByZXR1cm4gY2xpZW50UmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICByZXF1ZXN0LFxyXG4gIHJlcXVlc3RHaXRodWIsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9