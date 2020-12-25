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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _utils_withReduxApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/withReduxApp */ "./utils/withReduxApp.js");




var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // Component对应pages的每个页面

function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps,
      reduxStore = props.reduxStore;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: reduxStore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_utils_withReduxApp__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdXhTdG9yZSIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJ3aXRoUmVkdXhBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUEsTUFDWkMsU0FEWSxHQUN5QkQsS0FEekIsQ0FDWkMsU0FEWTtBQUFBLE1BQ0RDLFNBREMsR0FDeUJGLEtBRHpCLENBQ0RFLFNBREM7QUFBQSxNQUNVQyxVQURWLEdBQ3lCSCxLQUR6QixDQUNVRyxVQURWO0FBR3BCLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQSxVQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztLQVZRSCxLOztBQVlUQSxLQUFLLENBQUNLLGVBQU47QUFBQSw4TEFBd0IsaUJBQU1DLFVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RKLHFCQURjLEdBQ0FJLFVBREEsQ0FDZEosU0FEYztBQUVsQkMscUJBRmtCLEdBRU4sRUFGTTs7QUFBQSxpQkFJbEJELFNBQVMsQ0FBQ0csZUFKUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUtGSCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJDLFVBQTFCLENBTEU7O0FBQUE7QUFLcEJILHFCQUxvQjs7QUFBQTtBQUFBLDZDQVFmO0FBQUVBLHVCQUFTLEVBQVRBO0FBQUYsYUFSZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXZSxxRUFBQUksbUVBQVksQ0FBQ1AsS0FBRCxDQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmViNWFiOGE0OTg1MTUwNWFiMzI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2l0aFJlZHV4QXBwIGZyb20gJy4uL3V0aWxzL3dpdGhSZWR1eEFwcCc7XG5cbi8vIENvbXBvbmVudOWvueW6lHBhZ2Vz55qE5q+P5Liq6aG16Z2iXG5mdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBhcHBDb250ZXh0ID0+IHtcbiAgY29uc3QgeyBDb21wb25lbnQgfSA9IGFwcENvbnRleHQ7XG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eEFwcChNeUFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9