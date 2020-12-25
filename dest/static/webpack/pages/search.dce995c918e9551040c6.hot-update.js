webpackHotUpdate_N_E("pages/search",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * github oath配置
 */
var GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
var SCOPE = 'user';
var github = {
  request_token_url: 'https://github.com/login/oauth/access_token',
  client_id: '887cd757babf66918d15',
  client_secret: '06f3566a26818a93176ca0a13ec48d8addf3341d'
};
var LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Vue', 'React'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Starts',
  sort: 'stars',
  order: 'desc'
}, {
  name: 'Fewest Starts',
  sort: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  sort: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  sort: 'forks',
  order: 'asc'
}];
module.exports = {
  github: github,
  GITHUB_OAUTH_URL: GITHUB_OAUTH_URL,
  OAUTH_URL: "".concat(GITHUB_OAUTH_URL, "?client_id=").concat(github.client_id, "&scope=").concat(SCOPE),
  LANGUAGES: LANGUAGES,
  SORT_TYPES: SORT_TYPES
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/search.jsx":
/*!**************************!*\
  !*** ./pages/search.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/client-cache */ "./utils/client-cache.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\search.jsx",
    _this = undefined;





/**
 * search条件：
 * sort: 排序方式
 * order: 排序升降顺序
 * lang: 仓库开发主语言
 * page: 分页
 */
// const { cache, useCache } = initCache({
//   genCacheKeyStrate: context => genCacheKeyStrate(context.ctx.query),
// });

var Search = function Search(_ref) {
  var router = _ref.router,
      repos = _ref.repos;
  console.log('search', repos);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      children: router.query.query
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = Search;

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, query, sort, lang, _ctx$query$order, order, page, queryString, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, _ctx$query$order = _ctx$query.order, order = _ctx$query$order === void 0 ? 'desc' : _ctx$query$order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            queryString = "?q=".concat(query);
            lang && (queryString += "+language:".concat(lang));
            sort && (queryString += "&sort=".concat(sort, "&order=").concat(order));
            page && (queryString += "&page=".concat(page));
            _context.next = 10;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["request"])({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Search));

var _c, _c2;

$RefreshReg$(_c, "Search");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanN4Il0sIm5hbWVzIjpbIkdJVEhVQl9PQVVUSF9VUkwiLCJTQ09QRSIsImdpdGh1YiIsInJlcXVlc3RfdG9rZW5fdXJsIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsIkxBTkdVQUdFUyIsIlNPUlRfVFlQRVMiLCJuYW1lIiwic29ydCIsIm9yZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIk9BVVRIX1VSTCIsIlNlYXJjaCIsInJvdXRlciIsInJlcG9zIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwibGFuZyIsInBhZ2UiLCJ0b3RhbF9jb3VudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsInJlc3VsdCIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRywwQ0FBekI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsTUFBZDtBQUVBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxtQkFBaUIsRUFBRSw2Q0FETjtBQUViQyxXQUFTLEVBQUUsc0JBRkU7QUFHYkMsZUFBYSxFQUFFO0FBSEYsQ0FBZjtBQU1BLElBQU1DLFNBQVMsR0FBRyxDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLFlBQTlCLEVBQTRDLE1BQTVDLEVBQW9ELEtBQXBELEVBQTJELE9BQTNELENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLE1BQUksRUFBRTtBQURSLENBRGlCLEVBSWpCO0FBQ0VBLE1BQUksRUFBRSxhQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBSmlCLEVBU2pCO0FBQ0VGLE1BQUksRUFBRSxlQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBVGlCLEVBY2pCO0FBQ0VGLE1BQUksRUFBRSxZQURSO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBZGlCLEVBbUJqQjtBQUNFRixNQUFJLEVBQUUsY0FEUjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQW5CaUIsQ0FBbkI7QUEwQkFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmVixRQUFNLEVBQU5BLE1BRGU7QUFFZkYsa0JBQWdCLEVBQWhCQSxnQkFGZTtBQUdmYSxXQUFTLFlBQUtiLGdCQUFMLHdCQUFtQ0UsTUFBTSxDQUFDRSxTQUExQyxvQkFBNkRILEtBQTdELENBSE07QUFJZkssV0FBUyxFQUFUQSxTQUplO0FBS2ZDLFlBQVUsRUFBVkE7QUFMZSxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBdUI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUF0QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQkFBT0QsTUFBTSxDQUFDSSxLQUFQLENBQWFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBUEQ7O0tBQU1MLE07O0FBU05BLE1BQU0sQ0FBQ00sZUFBUDtBQUFBLCtMQUF5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVDtBQUFBLHlCQUM2QkEsR0FBRyxDQUFDRixLQURqQyxFQUNmQSxLQURlLGNBQ2ZBLEtBRGUsRUFDUlYsSUFEUSxjQUNSQSxJQURRLEVBQ0ZhLElBREUsY0FDRkEsSUFERSxnQ0FDSVosS0FESixFQUNJQSxLQURKLGlDQUNZLE1BRFoscUJBQ29CYSxJQURwQixjQUNvQkEsSUFEcEI7O0FBQUEsZ0JBRWxCSixLQUZrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FFSjtBQUFFSCxtQkFBSyxFQUFFO0FBQUVRLDJCQUFXLEVBQUU7QUFBZjtBQUFULGFBRkk7O0FBQUE7QUFJbkJDLHVCQUptQixnQkFJQ04sS0FKRDtBQUt2QkcsZ0JBQUksS0FBS0csV0FBVyx3QkFBaUJILElBQWpCLENBQWhCLENBQUo7QUFDQWIsZ0JBQUksS0FBS2dCLFdBQVcsb0JBQWFoQixJQUFiLG9CQUEyQkMsS0FBM0IsQ0FBaEIsQ0FBSjtBQUNBYSxnQkFBSSxLQUFLRSxXQUFXLG9CQUFhRixJQUFiLENBQWhCLENBQUo7QUFQdUI7QUFBQSxtQkFTRkcsMERBQU8sQ0FDMUI7QUFDRUMsaUJBQUcsZ0NBQXlCRixXQUF6QjtBQURMLGFBRDBCLEVBSTFCSixHQUFHLENBQUNPLEdBSnNCLEVBSzFCUCxHQUFHLENBQUNRLEdBTHNCLENBVEw7O0FBQUE7QUFTakJDLGtCQVRpQjtBQUFBLDZDQWdCaEI7QUFDTGQsbUJBQUssRUFBRWMsTUFBTSxDQUFDQztBQURULGFBaEJnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFxQmUscUVBQUFDLDhEQUFVLENBQUNsQixNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC5kY2U5OTVjOTE4ZTk1NTEwNDBjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGdpdGh1YiBvYXRo6YWN572uXHJcbiAqL1xyXG5cclxuY29uc3QgR0lUSFVCX09BVVRIX1VSTCA9ICdodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplJztcclxuY29uc3QgU0NPUEUgPSAndXNlcic7XHJcblxyXG5jb25zdCBnaXRodWIgPSB7XHJcbiAgcmVxdWVzdF90b2tlbl91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuJyxcclxuICBjbGllbnRfaWQ6ICc4ODdjZDc1N2JhYmY2NjkxOGQxNScsXHJcbiAgY2xpZW50X3NlY3JldDogJzA2ZjM1NjZhMjY4MThhOTMxNzZjYTBhMTNlYzQ4ZDhhZGRmMzM0MWQnLFxyXG59O1xyXG5cclxuY29uc3QgTEFOR1VBR0VTID0gWydKYXZhU2NyaXB0JywgJ0hUTUwnLCAnQ1NTJywgJ1R5cGVTY3JpcHQnLCAnSmF2YScsICdWdWUnLCAnUmVhY3QnXTtcclxuY29uc3QgU09SVF9UWVBFUyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnQmVzdCBNYXRjaCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnTW9zdCBTdGFydHMnLFxyXG4gICAgc29ydDogJ3N0YXJzJyxcclxuICAgIG9yZGVyOiAnZGVzYycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmV3ZXN0IFN0YXJ0cycsXHJcbiAgICBzb3J0OiAnc3RhcnMnLFxyXG4gICAgb3JkZXI6ICdhc2MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ01vc3QgRm9ya3MnLFxyXG4gICAgc29ydDogJ2ZvcmtzJyxcclxuICAgIG9yZGVyOiAnZGVzYycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRmV3ZXN0IEZvcmtzJyxcclxuICAgIHNvcnQ6ICdmb3JrcycsXHJcbiAgICBvcmRlcjogJ2FzYycsXHJcbiAgfSxcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdpdGh1YixcclxuICBHSVRIVUJfT0FVVEhfVVJMLFxyXG4gIE9BVVRIX1VSTDogYCR7R0lUSFVCX09BVVRIX1VSTH0/Y2xpZW50X2lkPSR7Z2l0aHViLmNsaWVudF9pZH0mc2NvcGU9JHtTQ09QRX1gLFxyXG4gIExBTkdVQUdFUyxcclxuICBTT1JUX1RZUEVTLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIFNPUlRfVFlQRVMgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuLy8gY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbi8vICAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlTdHJhdGUoY29udGV4dC5jdHgucXVlcnkpLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHJvdXRlciwgcmVwb3MgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdzZWFyY2gnLCByZXBvcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPntyb3V0ZXIucXVlcnkucXVlcnl9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyID0gJ2Rlc2MnLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuIHsgcmVwb3M6IHsgdG90YWxfY291bnQ6IDAgfSB9O1xyXG5cclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gIHNvcnQgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9YCk7XHJcbiAgcGFnZSAmJiAocXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==