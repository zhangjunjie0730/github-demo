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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



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
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', stopLoading);
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', stopLoading);
    return function () {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeStart', startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeComplete', stopLoading);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.off('routeChangeError', stopLoading);
    };
  });

  var loadingSpin = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-577353162" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "577353162",
      children: ".root.jsx-577353162{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(255,255,255,0.3);z-index:10000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFBhZ2VMb2FkaW5nXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUcwQixlQUNSLE9BQ0QsTUFDRSxRQUNDLFNBQ0ksMEVBQ1UsbUdBQ0osNkZBQ2lCLGlDQUN0QixjQUNoQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxjb21wb25lbnRzXFxQYWdlTG9hZGluZ1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBQYWdlTG9hZGluZyA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBzdGFydExvYWRpbmcpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHN0b3BMb2FkaW5nKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBzdG9wTG9hZGluZyk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc3RvcExvYWRpbmcpO1xyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIHN0b3BMb2FkaW5nKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvYWRpbmdTcGluID0gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxTcGluIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gPD57bG9hZGluZyAmJiBsb2FkaW5nU3Bpbn08Lz47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\PageLoading\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlTG9hZGluZy9pbmRleC5qc3giXSwibmFtZXMiOlsiUGFnZUxvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnRMb2FkaW5nIiwic3RvcExvYWRpbmciLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm9mZiIsImxvYWRpbmdTcGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxLQUFELENBRGQ7QUFBQSxNQUNqQkMsT0FEaUI7QUFBQSxNQUNSQyxVQURROztBQUd4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1ELFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsR0FBckI7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNRixVQUFVLENBQUMsS0FBRCxDQUFoQjtBQUFBLEdBQXBCOztBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsWUFBckM7QUFDQUcsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0osV0FBeEM7QUFDQUUsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0osV0FBckM7QUFDQSxXQUFPLFlBQU07QUFDWEUsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ04sWUFBdEM7QUFDQUcsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLHFCQUFsQixFQUF5Q0wsV0FBekM7QUFDQUUsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0wsV0FBdEM7QUFDRCxLQUpEO0FBS0QsR0FUUSxDQUFUOztBQVdBLE1BQU1NLFdBQVcsZ0JBQ2Y7QUFBQSx1Q0FBZSxNQUFmO0FBQUEsNEJBQ0UscUVBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGOztBQW9CQSxzQkFBTztBQUFBLGNBQUdULE9BQU8sSUFBSVM7QUFBZCxtQkFBUDtBQUNELENBdENEOztHQUFNWCxXOztLQUFBQSxXO0FBdUNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjI4ZWNkYTNkNWRiNjNmYWZhZWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IFBhZ2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyh0cnVlKTtcclxuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc3RvcExvYWRpbmcpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIHN0b3BMb2FkaW5nKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKTtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzdG9wTG9hZGluZyk7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgc3RvcExvYWRpbmcpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9hZGluZ1NwaW4gPSAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFNwaW4gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5yb290IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiA8Pntsb2FkaW5nICYmIGxvYWRpbmdTcGlufTwvPjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=