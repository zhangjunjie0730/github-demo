webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/PageLoading/index.jsx":
/*!******************************************!*\
  !*** ./components/PageLoading/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "E:\\MyGit\\github-demo\\components\\PageLoading\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var PageLoading = function PageLoading() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var startLoading = function startLoading() {
    return setLoading(true);
  };

  var stopLoading = function stopLoading() {
    return setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);
    return function () {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  });

  var loadingSpin = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-577353162" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "577353162",
      children: ".root.jsx-577353162{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(255,255,255,0.3);z-index:10000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFBhZ2VMb2FkaW5nXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUcwQixlQUNSLE9BQ0QsTUFDRSxRQUNDLFNBQ0ksMEVBQ1UsbUdBQ0osNkZBQ2lCLGlDQUN0QixjQUNoQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxjb21wb25lbnRzXFxQYWdlTG9hZGluZ1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGFnZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzdG9wTG9hZGluZyk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2FkaW5nU3BpbiA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8U3BpbiAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIDw+e2xvYWRpbmcgJiYgbG9hZGluZ1NwaW59PC8+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\PageLoading\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTG9hZGluZy9pbmRleC5qc3giXSwibmFtZXMiOlsiUGFnZUxvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnRMb2FkaW5nIiwic3RvcExvYWRpbmciLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm9mZiIsImxvYWRpbmdTcGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQ2pCQyxPQURpQjtBQUFBLE1BQ1JDLFVBRFE7O0FBR3hCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUQsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxHQUFyQjs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1GLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsR0FBcEI7O0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNMLFlBQXJDO0FBQ0FHLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0osV0FBeEM7QUFDQUUsVUFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDSixXQUFyQztBQUNBLFdBQU8sWUFBTTtBQUNYRSxZQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NOLFlBQXRDO0FBQ0FHLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0wsV0FBekM7QUFDQUUsWUFBTSxDQUFDQyxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDTCxXQUF0QztBQUNELEtBSkQ7QUFLRCxHQVRRLENBQVQ7O0FBV0EsTUFBTU0sV0FBVyxnQkFDZjtBQUFBLHVDQUFlLE1BQWY7QUFBQSw0QkFDRSxxRUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7O0FBb0JBLHNCQUFPO0FBQUEsY0FBR1QsT0FBTyxJQUFJUztBQUFkLG1CQUFQO0FBQ0QsQ0F0Q0Q7O0dBQU1YLFc7O0tBQUFBLFc7QUF1Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGJkOWUzZjA5MGU1ZmJmZTRiYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBhZ2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyh0cnVlKTtcclxuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc3RvcExvYWRpbmcpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIHN0b3BMb2FkaW5nKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzdG9wTG9hZGluZyk7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9hZGluZ1NwaW4gPSAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFNwaW4gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiA8Pntsb2FkaW5nICYmIGxvYWRpbmdTcGlufTwvPjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=