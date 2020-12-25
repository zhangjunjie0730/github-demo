webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _utils_withReduxApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/withReduxApp */ "./utils/withReduxApp.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading/index.jsx");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // Component对应pages的每个页面

function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps,
      reduxStore = props.reduxStore;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var startLoading = function startLoading() {
    return setLoading(true);
  };

  var stopLoading = function stopLoading() {
    return setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeStart', startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', stopLoading);
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeError', stopLoading);
    return function () {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeStart', startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeComplete', stopLoading);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeError', stopLoading);
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: reduxStore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_PageLoading__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(MyApp, "bp7W7BLZaxNmS0ceaCBH82+KoGQ=");

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
    var Component, pageProps;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = appContext.Component;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(appContext);

          case 5:
            pageProps = _context.sent;

          case 6:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_utils_withReduxApp__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdXhTdG9yZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdGFydExvYWRpbmciLCJzdG9wTG9hZGluZyIsInVzZUVmZmVjdCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwib2ZmIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsIndpdGhSZWR1eEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDWkMsU0FEWSxHQUN5QkQsS0FEekIsQ0FDWkMsU0FEWTtBQUFBLE1BQ0RDLFNBREMsR0FDeUJGLEtBRHpCLENBQ0RFLFNBREM7QUFBQSxNQUNVQyxVQURWLEdBQ3lCSCxLQUR6QixDQUNVRyxVQURWOztBQUFBLGtCQUdVQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdiQyxPQUhhO0FBQUEsTUFHSkMsVUFISTs7QUFLcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNRCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQXJCOztBQUNBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUYsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxHQUFwQjs7QUFFQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNMLFlBQXJDO0FBQ0FHLHNEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLFdBQXhDO0FBQ0FFLHNEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNKLFdBQXJDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hFLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NOLFlBQXRDO0FBQ0FHLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLFdBQXpDO0FBQ0FFLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NMLFdBQXRDO0FBQ0QsS0FKRDtBQUtELEdBVFEsQ0FBVDtBQVdBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFTCxVQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsaUJBQ0dFLE9BQU8saUJBQUkscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURkLGVBRUUscUVBQUMsU0FBRCxvQkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBM0JRSCxLOztLQUFBQSxLOztBQTZCVEEsS0FBSyxDQUFDZSxlQUFOO0FBQUEsOExBQXdCLGlCQUFNQyxVQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkZCxxQkFEYyxHQUNBYyxVQURBLENBQ2RkLFNBRGM7QUFFbEJDLHFCQUZrQixHQUVOLEVBRk07O0FBQUEsaUJBSWxCRCxTQUFTLENBQUNhLGVBSlE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFLRmIsU0FBUyxDQUFDYSxlQUFWLENBQTBCQyxVQUExQixDQUxFOztBQUFBO0FBS3BCYixxQkFMb0I7O0FBQUE7QUFBQSw2Q0FRZjtBQUFFQSx1QkFBUyxFQUFUQTtBQUFGLGFBUmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2UscUVBQUFjLG1FQUFZLENBQUNqQixLQUFELENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDgzNmIwMTBjNDMzNjBlOTQ5N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB3aXRoUmVkdXhBcHAgZnJvbSAnLi4vdXRpbHMvd2l0aFJlZHV4QXBwJztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMb2FkaW5nJztcblxuLy8gQ29tcG9uZW505a+55bqUcGFnZXPnmoTmr4/kuKrpobXpnaJcbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtsb2FkaW5nICYmIDxQYWdlTG9hZGluZyAvPn1cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgYXBwQ29udGV4dCA9PiB7XG4gIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBhcHBDb250ZXh0O1xuICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhBcHAoTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==