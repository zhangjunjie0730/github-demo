webpackHotUpdate_N_E("pages/detail",{

/***/ "./pages/detail/index.jsx":
/*!********************************!*\
  !*** ./pages/detail/index.jsx ***!
  \********************************/
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
/* harmony import */ var _components_DetailLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DetailLayout */ "./components/DetailLayout/index.jsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Markdown */ "./components/Markdown/index.jsx");




var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\index.jsx",
    _s = $RefreshSig$();








var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_6__["default"])({
  genCacheKeyStrate: _utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKeyStrate"]
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

function Detail(_ref) {
  _s();

  var readme = _ref.readme;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKey"])(router), {
    readme: readme
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isBase64: true,
    content: readme.content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

_s(Detail, "8JhvFu5bAz2+TziAaRl0Dnts1Fw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], useCache];
});

_c = Detail;
Detail.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, owner, name, req, res, _yield$request, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name, req = ctx.req, res = ctx.res;
            _context.next = 4;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/readme")
            }, req, res);

          case 4:
            _yield$request = _context.sent;
            data = _yield$request.data;
            return _context.abrupt("return", {
              readme: data
            });

          case 7:
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_components_DetailLayout__WEBPACK_IMPORTED_MODULE_4__["default"])(Detail));

var _c, _c2;

$RefreshReg$(_c, "Detail");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbml0Q2xpZW50Q2FjaGUiLCJnZW5DYWNoZUtleVN0cmF0ZSIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIkRldGFpbCIsInJlYWRtZSIsInJvdXRlciIsInVzZVJvdXRlciIsImdlbkRldGFpbENhY2hlS2V5IiwiY29udGVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwib3duZXIiLCJuYW1lIiwicmVxIiwicmVzIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJEZXRhaWxMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3VCQUU0QkEsbUVBQWUsQ0FBQztBQUMxQ0MsbUJBQWlCLEVBQUVDLDhEQUF1QkE7QUFEQSxDQUFELEM7SUFBbkNDLEssb0JBQUFBLEs7SUFBT0MsUSxvQkFBQUEsUTs7QUFJZixTQUFTQyxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUosVUFBUSxDQUFDSyxnRUFBaUIsQ0FBQ0YsTUFBRCxDQUFsQixFQUE0QjtBQUFFRCxVQUFNLEVBQU5BO0FBQUYsR0FBNUIsQ0FBUjtBQUVBLHNCQUFPLHFFQUFDLDREQUFEO0FBQVUsWUFBUSxNQUFsQjtBQUFtQixXQUFPLEVBQUVBLE1BQU0sQ0FBQ0k7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBTFFMLE07VUFDUUcscUQsRUFDZkosUTs7O0tBRk9DLE07QUFPVEEsTUFBTSxDQUFDTSxlQUFQLEdBQXlCUixLQUFLO0FBQUEsK0xBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTUyxlQUFULFNBQVNBLEdBQVQ7QUFBQSx5QkFLekJBLEdBTHlCLENBRTNCQyxLQUYyQixFQUVsQkMsS0FGa0IsY0FFbEJBLEtBRmtCLEVBRVhDLElBRlcsY0FFWEEsSUFGVyxFQUczQkMsR0FIMkIsR0FLekJKLEdBTHlCLENBRzNCSSxHQUgyQixFQUkzQkMsR0FKMkIsR0FLekJMLEdBTHlCLENBSTNCSyxHQUoyQjtBQUFBO0FBQUEsbUJBT05DLDBEQUFPLENBQUM7QUFBRUMsaUJBQUcsbUJBQVlMLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q0MsR0FBNUMsRUFBaURDLEdBQWpELENBUEQ7O0FBQUE7QUFBQTtBQU9yQkcsZ0JBUHFCLGtCQU9yQkEsSUFQcUI7QUFBQSw2Q0FTdEI7QUFDTGQsb0JBQU0sRUFBRWM7QUFESCxhQVRzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlCO0FBY2UscUVBQUFDLHdFQUFZLENBQUNoQixNQUFELENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC44ZjFhOWVjODdkYjM4NTc0MzJhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRGV0YWlsTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsTGF5b3V0JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBpbml0Q2xpZW50Q2FjaGUgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUsIGdlbkRldGFpbENhY2hlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93bic7XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENsaWVudENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgcmVhZG1lIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIpLCB7IHJlYWRtZSB9KTtcclxuXHJcbiAgcmV0dXJuIDxNYXJrZG93biBpc0Jhc2U2NCBjb250ZW50PXtyZWFkbWUuY29udGVudH0gLz47XHJcbn1cclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IG93bmVyLCBuYW1lIH0sXHJcbiAgICByZXEsXHJcbiAgICByZXMsXHJcbiAgfSA9IGN0eDtcclxuXHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vcmVhZG1lYCB9LCByZXEsIHJlcyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZWFkbWU6IGRhdGEsXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxMYXlvdXQoRGV0YWlsKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==