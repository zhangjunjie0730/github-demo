webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_9__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKey"])(router, {
    services: services
  }));
  var issues = services.issues,
      labels = services.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      creator = _useState[0],
      setCreator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      issueState = _useState2[0],
      setIssueState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      selectedLabels = _useState3[0],
      setSelectedLabels = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(issues),
      issuesChange = _useState4[0],
      setIssuesChange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      fetching = _useState5[0],
      setFetching = _useState5[1];

  var handleLabelsChange = function handleLabelsChange(selected) {
    return setSelectedLabels(selected);
  };

  var handleSearch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(false);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearch() {
      return _ref2.apply(this, arguments);
    };
  }();

  var selectCommonStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "root",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "search",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Issues, "a1FTotoDi18ICDbODYVbmiE1/gs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], useCache];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, issues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context2.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
            issues = _yield$Promise$all2[0].data;
            labels = _yield$Promise$all2[1].data;
            return _context2.abrupt("return", {
              services: {
                issues: issues,
                labels: labels
              }
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (Issues);

var _c;

$RefreshReg$(_c, "Issues");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsiaW5pdENsaWVudENhY2hlIiwiZ2VuQ2FjaGVLZXlTdHJhdGUiLCJjb250ZXh0IiwiZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUiLCJjYWNoZSIsInVzZUNhY2hlIiwiSXNzdWVzIiwic2VydmljZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZW5EZXRhaWxDYWNoZUtleSIsImlzc3VlcyIsImxhYmVscyIsInVzZVN0YXRlIiwiY3JlYXRvciIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXNDaGFuZ2UiLCJzZXRJc3N1ZXNDaGFuZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJzZWxlY3RDb21tb25TdHlsZSIsImFsaWduU2VsZiIsIndpZHRoIiwibWFyZ2luTGVmdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwib3duZXIiLCJuYW1lIiwiUHJvbWlzZSIsImFsbCIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7dUJBRTRCQSxtRUFBZSxDQUFDO0FBQzFDQyxtQkFBaUIsRUFBRSwyQkFBQUMsT0FBTztBQUFBLFdBQUlDLHNFQUF1QixDQUFDRCxPQUFELENBQTNCO0FBQUE7QUFEZ0IsQ0FBRCxDO0lBQW5DRSxLLG9CQUFBQSxLO0lBQU9DLFEsb0JBQUFBLFE7O0FBSWYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0Is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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QjtBQWVlTixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLmE4MmU3MzZhYzgzMTNmNzQ4MGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENsaWVudENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KSxcclxufSk7XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpc3N1ZXMsIGxhYmVscyB9ID0gc2VydmljZXM7XHJcblxyXG4gIGNvbnN0IFtjcmVhdG9yLCBzZXRDcmVhdG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzc3VlU3RhdGUsIHNldElzc3VlU3RhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRMYWJlbHMsIHNldFNlbGVjdGVkTGFiZWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNzdWVzQ2hhbmdlLCBzZXRJc3N1ZXNDaGFuZ2VdID0gdXNlU3RhdGUoaXNzdWVzKTtcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVMYWJlbHNDaGFuZ2UgPSBzZWxlY3RlZCA9PiBzZXRTZWxlY3RlZExhYmVscyhzZWxlY3RlZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IFt7IGRhdGE6IGlzc3VlcyB9LCB7IGRhdGE6IGxhYmVscyB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=