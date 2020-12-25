webpackHotUpdate_N_E("pages/search",{

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
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJyb3V0ZXIiLCJyZXBvcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNvcnQiLCJsYW5nIiwib3JkZXIiLCJwYWdlIiwidG90YWxfY291bnQiLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF1QjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLEtBQXRCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLGdCQUFPRCxNQUFNLENBQUNJLEtBQVAsQ0FBYUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QsQ0FQRDs7S0FBTUwsTTs7QUFTTkEsTUFBTSxDQUFDTSxlQUFQO0FBQUEsK0xBQXlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFUO0FBQUEseUJBQzZCQSxHQUFHLENBQUNGLEtBRGpDLEVBQ2ZBLEtBRGUsY0FDZkEsS0FEZSxFQUNSRyxJQURRLGNBQ1JBLElBRFEsRUFDRkMsSUFERSxjQUNGQSxJQURFLGdDQUNJQyxLQURKLEVBQ0lBLEtBREosaUNBQ1ksTUFEWixxQkFDb0JDLElBRHBCLGNBQ29CQSxJQURwQjs7QUFBQSxnQkFFbEJOLEtBRmtCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQUVKO0FBQUVILG1CQUFLLEVBQUU7QUFBRVUsMkJBQVcsRUFBRTtBQUFmO0FBQVQsYUFGSTs7QUFBQTtBQUluQkMsdUJBSm1CLGdCQUlDUixLQUpEO0FBS3ZCSSxnQkFBSSxLQUFLSSxXQUFXLHdCQUFpQkosSUFBakIsQ0FBaEIsQ0FBSjtBQUNBRCxnQkFBSSxLQUFLSyxXQUFXLG9CQUFhTCxJQUFiLG9CQUEyQkUsS0FBM0IsQ0FBaEIsQ0FBSjtBQUNBQyxnQkFBSSxLQUFLRSxXQUFXLG9CQUFhRixJQUFiLENBQWhCLENBQUo7QUFQdUI7QUFBQSxtQkFTRkcsMERBQU8sQ0FDMUI7QUFDRUMsaUJBQUcsZ0NBQXlCRixXQUF6QjtBQURMLGFBRDBCLEVBSTFCTixHQUFHLENBQUNTLEdBSnNCLEVBSzFCVCxHQUFHLENBQUNVLEdBTHNCLENBVEw7O0FBQUE7QUFTakJDLGtCQVRpQjtBQUFBLDZDQWdCaEI7QUFDTGhCLG1CQUFLLEVBQUVnQixNQUFNLENBQUNDO0FBRFQsYUFoQmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXFCZSxxRUFBQUMsOERBQVUsQ0FBQ3BCLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjAzOTY5MjRiZTBkMDk1MjZhYjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuLy8gY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbi8vICAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlTdHJhdGUoY29udGV4dC5jdHgucXVlcnkpLFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHJvdXRlciwgcmVwb3MgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdzZWFyY2gnLCByZXBvcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPntyb3V0ZXIucXVlcnkucXVlcnl9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyID0gJ2Rlc2MnLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuIHsgcmVwb3M6IHsgdG90YWxfY291bnQ6IDAgfSB9O1xyXG5cclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gIHNvcnQgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9YCk7XHJcbiAgcGFnZSAmJiAocXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==