webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_7__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
    children: "issues"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, _this);
};

_s(Issues, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, issues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_yield$Promise$all, 2);
            issues = _yield$Promise$all2[0].data;
            labels = _yield$Promise$all2[1].data;
            return _context.abrupt("return", {
              services: {
                issues: issues,
                labels: labels
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsiaW5pdENsaWVudENhY2hlIiwiZ2VuQ2FjaGVLZXlTdHJhdGUiLCJjb250ZXh0IiwiZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUiLCJjYWNoZSIsInVzZUNhY2hlIiwiSXNzdWVzIiwic2VydmljZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIm93bmVyIiwibmFtZSIsIlByb21pc2UiLCJhbGwiLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwicmVzIiwiaXNzdWVzIiwiZGF0YSIsImxhYmVscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7dUJBRTRCQSxtRUFBZSxDQUFDO0FBQzFDQyxtQkFBaUIsRUFBRSwyQkFBQUMsT0FBTztBQUFBLFdBQUlDLHNFQUF1QixDQUFDRCxPQUFELENBQTNCO0FBQUE7QUFEZ0IsQ0FBRCxDO0lBQW5DRSxLLG9CQUFBQSxLO0lBQU9DLFEsb0JBQUFBLFE7O0FBSWYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUhEOztHQUFNSCxNO1VBQ1dHLHFEOzs7S0FEWEgsTTtBQUtOQSxNQUFNLENBQUNJLGVBQVAsR0FBeUJOLEtBQUs7QUFBQSwrTEFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNPLGVBQVQsU0FBU0EsR0FBVDtBQUFBLHlCQUNMQSxHQUFHLENBQUNDLEtBREMsRUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQixFQUNkQyxJQURjLGNBQ2RBLElBRGM7QUFBQTtBQUFBLG1CQUVzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDN0RDLDBEQUFPLENBQUM7QUFBRUMsaUJBQUcsbUJBQVlMLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q0gsR0FBRyxDQUFDUSxHQUFoRCxFQUFxRFIsR0FBRyxDQUFDUyxHQUF6RCxDQURzRCxFQUU3REgsMERBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWUwsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDSCxHQUFHLENBQUNRLEdBQWhELEVBQXFEUixHQUFHLENBQUNTLEdBQXpELENBRnNELENBQVosQ0FGdEI7O0FBQUE7QUFBQTtBQUFBO0FBRWRDLGtCQUZjLDBCQUVwQkMsSUFGb0I7QUFFSUMsa0JBRkosMEJBRUZELElBRkU7QUFBQSw2Q0FPdEI7QUFDTGYsc0JBQVEsRUFBRTtBQUNSYyxzQkFBTSxFQUFOQSxNQURRO0FBRVJFLHNCQUFNLEVBQU5BO0FBRlE7QUFETCxhQVBzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlCO0FBZWVqQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjBhMjgzNWM5YmVkOTZmODUyZDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiA8c3Bhbj5pc3N1ZXM8L3NwYW4+O1xyXG59O1xyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IFt7IGRhdGE6IGlzc3VlcyB9LCB7IGRhdGE6IGxhYmVscyB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=