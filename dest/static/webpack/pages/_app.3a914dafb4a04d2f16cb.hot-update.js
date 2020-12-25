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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = withRedux(MyApp));

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

/***/ }),

/***/ "./utils/with-redux-app.js":
false,

/***/ "./utils/withReduxApp.js":
/*!*******************************!*\
  !*** ./utils/withReduxApp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");






var _jsxFileName = "E:\\MyGit\\github-demo\\utils\\withReduxApp.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** 这个HOC的意义
 * 因为服务端执行了getInitialProps之后，返回给客户端的是序列化的字符串
 * redux里面有很多方法，不适合序列化存储
 * 所以在getInitialProps之后返回initialReduxState
 * 再通过initialReduxState去创建完整的store
 * 但是为了性能，客户端每次执行该方法的时候都去找一下window对象里面时候已经有了store
 */



var isServer = false;
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'; // 存储在window中表示window已经有了store

function getOrCreateStore(initialState) {
  if (isServer) {
    // 服务端执行时都重新创建一个store
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}
/**
 * !!注意函数组件不成功！
 */


var withReduxApp = function withReduxApp(Comp) {
  var withReduxApp = function withReduxApp(props) {
    var Component = props.Component,
        pageProps = props.pageProps,
        initialReduxState = props.initialReduxState,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["Component", "pageProps", "initialReduxState"]);

    var reduxStore = getOrCreateStore(initialReduxState);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Comp, _objectSpread(_objectSpread({}, rest), {}, {
      Component: Component,
      pageProps: pageProps,
      reduxStore: reduxStore
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, _this);
  };

  withReduxApp.getInitialProps = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
      var reduxStore, req, session, appProps;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isServer) {
                req = ctx.ctx.req;
                session = req.session;

                if (session && session.userInfo) {
                  reduxStore = getOrCreateStore({
                    user: session.userInfo
                  });
                } else {
                  reduxStore = getOrCreateStore();
                }
              } else {
                reduxStore = getOrCreateStore();
              }

              ctx.reduxStore = reduxStore;
              appProps = {};

              if (!(typeof Comp.getInitialProps === 'function')) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return Comp.getInitialProps(ctx);

            case 6:
              appProps = _context.sent;

            case 7:
              return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
                initialReduxState: reduxStore.getState()
              }));

            case 8:
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

  return withReduxApp;
};

/* harmony default export */ __webpack_exports__["default"] = (withReduxApp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2l0aFJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZWR1eFN0b3JlIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0Iiwid2l0aFJlZHV4IiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ3aXRoUmVkdXhBcHAiLCJDb21wIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJyZXN0IiwiY3R4IiwicmVxIiwic2Vzc2lvbiIsInVzZXJJbmZvIiwidXNlciIsImFwcFByb3BzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQ1pDLFNBRFksR0FDeUJELEtBRHpCLENBQ1pDLFNBRFk7QUFBQSxNQUNEQyxTQURDLEdBQ3lCRixLQUR6QixDQUNERSxTQURDO0FBQUEsTUFDVUMsVUFEVixHQUN5QkgsS0FEekIsQ0FDVUcsVUFEVjs7QUFBQSxrQkFHVUMsc0RBQVEsQ0FBQyxLQUFELENBSGxCO0FBQUEsTUFHYkMsT0FIYTtBQUFBLE1BR0pDLFVBSEk7O0FBS3BCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUQsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxH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QSwrRUEyQnhCQSxRQTNCd0I7QUE0QjNCUCxpQ0FBaUIsRUFBRXRCLFVBQVUsQ0FBQzhCLFFBQVg7QUE1QlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0NBLFNBQU9WLFlBQVA7QUFDRCxDQXhDRDs7QUF5Q2VBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2E5MTRkYWZiNGEwNGQyZjE2Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB3aXRoUmVkdXhBcHAgZnJvbSAnLi4vdXRpbHMvd2l0aFJlZHV4QXBwJztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VMb2FkaW5nJztcblxuLy8gQ29tcG9uZW505a+55bqUcGFnZXPnmoTmr4/kuKrpobXpnaJcbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHtsb2FkaW5nICYmIDxQYWdlTG9hZGluZyAvPn1cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgYXBwQ29udGV4dCA9PiB7XG4gIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBhcHBDb250ZXh0O1xuICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoTXlBcHApO1xuIiwiLyoqIOi/meS4qkhPQ+eahOaEj+S5iVxyXG4gKiDlm6DkuLrmnI3liqHnq6/miafooYzkuoZnZXRJbml0aWFsUHJvcHPkuYvlkI7vvIzov5Tlm57nu5nlrqLmiLfnq6/nmoTmmK/luo/liJfljJbnmoTlrZfnrKbkuLJcclxuICogcmVkdXjph4zpnaLmnInlvojlpJrmlrnms5XvvIzkuI3pgILlkIjluo/liJfljJblrZjlgqhcclxuICog5omA5Lul5ZyoZ2V0SW5pdGlhbFByb3Bz5LmL5ZCO6L+U5ZueaW5pdGlhbFJlZHV4U3RhdGVcclxuICog5YaN6YCa6L+HaW5pdGlhbFJlZHV4U3RhdGXljrvliJvlu7rlrozmlbTnmoRzdG9yZVxyXG4gKiDkvYbmmK/kuLrkuobmgKfog73vvIzlrqLmiLfnq6/mr4/mrKHmiafooYzor6Xmlrnms5XnmoTml7blgJnpg73ljrvmib7kuIDkuIt3aW5kb3flr7nosaHph4zpnaLml7blgJnlt7Lnu4/mnInkuoZzdG9yZVxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBpbml0aWFsaXplU3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcclxuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX18gPSAnX19ORVhUX1JFRFVYX1NUT1JFX18nOyAvLyDlrZjlgqjlnKh3aW5kb3fkuK3ooajnpLp3aW5kb3flt7Lnu4/mnInkuoZzdG9yZVxyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIC8vIOacjeWKoeerr+aJp+ihjOaXtumDvemHjeaWsOWIm+W7uuS4gOS4qnN0b3JlXHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIGlmICghd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSkge1xyXG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXTtcclxufVxyXG5cclxuLyoqXHJcbiAqICEh5rOo5oSP5Ye95pWw57uE5Lu25LiN5oiQ5Yqf77yBXHJcbiAqL1xyXG5jb25zdCB3aXRoUmVkdXhBcHAgPSBDb21wID0+IHtcclxuICBjb25zdCB3aXRoUmVkdXhBcHAgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBpbml0aWFsUmVkdXhTdGF0ZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsUmVkdXhTdGF0ZSk7XHJcbiAgICByZXR1cm4gPENvbXAgey4uLnJlc3R9IENvbXBvbmVudD17Q29tcG9uZW50fSBwYWdlUHJvcHM9e3BhZ2VQcm9wc30gcmVkdXhTdG9yZT17cmVkdXhTdG9yZX0gLz47XHJcbiAgfTtcclxuXHJcbiAgd2l0aFJlZHV4QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgICBsZXQgcmVkdXhTdG9yZTtcclxuXHJcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGN0eDogeyByZXEgfSxcclxuICAgICAgfSA9IGN0eDtcclxuICAgICAgY29uc3QgeyBzZXNzaW9uIH0gPSByZXE7XHJcbiAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlckluZm8pIHtcclxuICAgICAgICByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSh7XHJcbiAgICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXJJbmZvLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xyXG5cclxuICAgIGxldCBhcHBQcm9wcyA9IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBhcHBQcm9wcyA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB3aXRoUmVkdXhBcHA7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==