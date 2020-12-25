webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/PageLoading/index.jsx":
/*!******************************************!*\
  !*** ./components/PageLoading/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "E:\\MyGit\\github-demo\\components\\PageLoading\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var PageLoading = function PageLoading() {
  _s();

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var startLoading = function startLoading() {
    return setLoading(true);
  };

  var stopLoading = function stopLoading() {
    return setLoading(false);
  };

  useEffect(function () {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);
    return function () {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  });

  var loadingSpin = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "jsx-577353162" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "577353162",
      children: ".root.jsx-577353162{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(255,255,255,0.3);z-index:10000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFBhZ2VMb2FkaW5nXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUcwQixlQUNSLE9BQ0QsTUFDRSxRQUNDLFNBQ0ksMEVBQ1UsbUdBQ0osNkZBQ2lCLGlDQUN0QixjQUNoQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxjb21wb25lbnRzXFxQYWdlTG9hZGluZ1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgUGFnZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzdG9wTG9hZGluZyk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2FkaW5nU3BpbiA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8U3BpbiAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIDw+e2xvYWRpbmcgJiYgbG9hZGluZ1NwaW59PC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\PageLoading\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: loading && loadingSpin
  }, void 0, false);
};

_s(PageLoading, "bp7W7BLZaxNmS0ceaCBH82+KoGQ=");

_c = PageLoading;
/* harmony default export */ __webpack_exports__["default"] = (PageLoading);

var _c;

$RefreshReg$(_c, "PageLoading");

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

/***/ }),

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




var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // Component对应pages的每个页面

function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps,
      reduxStore = props.reduxStore; // const [loading, setLoading] = useState(false);
  // const startLoading = () => setLoading(true);
  // const stopLoading = () => setLoading(false);
  // useEffect(() => {
  //   Router.events.on('routeChangeStart', startLoading);
  //   Router.events.on('routeChangeComplete', stopLoading);
  //   Router.events.on('routeChangeError', stopLoading);
  //   return () => {
  //     Router.events.off('routeChangeStart', startLoading);
  //     Router.events.off('routeChangeComplete', stopLoading);
  //     Router.events.off('routeChangeError', stopLoading);
  //   };
  // });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: reduxStore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTG9hZGluZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiUGFnZUxvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnRMb2FkaW5nIiwic3RvcExvYWRpbmciLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm9mZiIsImxvYWRpbmdTcGluIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0Iiwid2l0aFJlZHV4QXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsUUFBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBO0FBQUEsTUFDakJDLE9BRGlCO0FBQUEsTUFDUkMsVUFEUTs7QUFHeEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNRCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQXJCOztBQUNBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUYsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxHQUFwQjs7QUFFQUcsV0FBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDTCxZQUFyQztBQUNBRyxVQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLFdBQXhDO0FBQ0FFLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0osV0FBckM7QUFDQSxXQUFPLFlBQU07QUFDWEUsWUFBTSxDQUFDQyxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDTixZQUF0QztBQUNBRyxZQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLFdBQXpDO0FBQ0FFLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0wsV0FBdEM7QUFDRCxLQUpEO0FBS0QsR0FUUSxDQUFUOztBQVdBLE1BQU1NLFdBQVcsZ0JBQ2Y7QUFBQSx1Q0FBZSxNQUFmO0FBQUEsNEJBQ0UscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGOztBQW9CQSxzQkFBTztBQUFBLGNBQUdULE9BQU8sSUFBSVM7QUFBZCxtQkFBUDtBQUNELENBdENEOztHQUFNWCxXOztLQUFBQSxXO0FBdUNTQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxTQUFTWSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQSxNQUNaQyxTQURZLEdBQ3lCRCxLQUR6QixDQUNaQyxTQURZO0FBQUEsTUFDREMsU0FEQyxHQUN5QkYsS0FEekIsQ0FDREUsU0FEQztBQUFBLE1BQ1VDLFVBRFYsR0FDeUJILEtBRHpCLENBQ1VHLFVBRFYsRUFHcEI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVBLFVBQWpCO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFFRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0tBM0JRSCxLOztBQTZCVEEsS0FBSyxDQUFDSyxlQUFOO0FBQUEsOExBQXdCLGlCQUFNQyxVQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkSixxQkFEYyxHQUNBSSxVQURBLENBQ2RKLFNBRGM7QUFFbEJDLHFCQUZrQixHQUVOLEVBRk07O0FBQUEsaUJBSWxCRCxTQUFTLENBQUNHLGVBSlE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFLRkgsU0FBUyxDQUFDRyxlQUFWLENBQTBCQyxVQUExQixDQUxFOztBQUFBO0FBS3BCSCxxQkFMb0I7O0FBQUE7QUFBQSw2Q0FRZjtBQUFFQSx1QkFBUyxFQUFUQTtBQUFGLGFBUmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV2UscUVBQUFJLG1FQUFZLENBQUNQLEtBQUQsQ0FBM0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNDI2ZTQ1OTU5ODNiZTkwOTI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgUGFnZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzdG9wTG9hZGluZyk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2FkaW5nU3BpbiA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8U3BpbiAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIDw+e2xvYWRpbmcgJiYgbG9hZGluZ1NwaW59PC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcclxuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHdpdGhSZWR1eEFwcCBmcm9tICcuLi91dGlscy93aXRoUmVkdXhBcHAnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xuXG4vLyBDb21wb25lbnTlr7nlupRwYWdlc+eahOavj+S4qumhtemdolxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9ID0gcHJvcHM7XG5cbiAgLy8gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XG4gIC8vIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcbiAgLy8gICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc3RvcExvYWRpbmcpO1xuICAvLyAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcbiAgLy8gICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc3RvcExvYWRpbmcpO1xuICAvLyAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XG4gIC8vICAgfTtcbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgey8qIHtsb2FkaW5nICYmIDxQYWdlTG9hZGluZyAvPn0gKi99XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGFwcENvbnRleHQgPT4ge1xuICBjb25zdCB7IENvbXBvbmVudCB9ID0gYXBwQ29udGV4dDtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4QXBwKE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=