webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./components/IssueItem/index.jsx":
/*!****************************************!*\
  !*** ./components/IssueItem/index.jsx ***!
  \****************************************/
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


var _jsxFileName = "E:\\MyGit\\github-demo\\components\\IssueItem\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var IssueItem = function IssueItem(_ref) {
  _s();

  var issue = _ref.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1];

  var toggleShowDetail = useCallback(function () {
    setShowDetail(function (show) {
      return !show;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2669519729" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2669519729" + " " + "issue",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: toggleShowDetail,
        className: "view-btn",
        type: "primary",
        size: "small",
        children: "\u67E5\u770B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2669519729" + " " + "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          src: issue.user.avatar_url,
          shape: "square",
          size: 50
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2669519729" + " " + "main-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "jsx-2669519729",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-2669519729",
            children: issue.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), issue.labels.map(function (label) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
              label: label
            }, label.id, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-2669519729" + " " + "sub-info",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "jsx-2669519729",
            children: ["Updated at ", getTimeFromNow(issue.updated_at)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), showDetail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IssueDetail, {
      issue: issue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2669519729",
      children: ".view-btn{position:absolute;right:10px;top:10px;}.root.jsx-2669519729+.root.jsx-2669519729{border-top:1px solid #eee;}.issue.jsx-2669519729{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2669519729:hover{background:#fafafa;}.main-info.jsx-2669519729>h6.jsx-2669519729{padding-right:40px;font-size:16px;word-break:break-all;}.avatar.jsx-2669519729{margin-right:20px;}.sub-info.jsx-2669519729{margin-bottom:0;}.sub-info.jsx-2669519729>span.jsx-2669519729+span.jsx-2669519729{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXElzc3VlSXRlbVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDUyxBQUcrQixBQUtRLEFBR2IsQUFLTSxBQUdBLEFBS0QsQUFHRixBQUdLLGdCQUZ2QixFQXhCYSxBQXFCYixDQVJBLEFBR2lCLEVBV0UsS0F0Qm5CLEdBSlcsS0FnQlksSUFmdkIsQUEwQmlCLGVBQ2pCLEVBWEEsbUJBVm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xcY29tcG9uZW50c1xcSXNzdWVJdGVtXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElzc3VlSXRlbSA9ICh7IGlzc3VlIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKHNob3cgPT4gIXNob3cpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfSBjbGFzc05hbWU9XCJ2aWV3LWJ0blwiIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICDmn6XnnItcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICB7aXNzdWUubGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgICAgPExhYmVsIGxhYmVsPXtsYWJlbH0ga2V5PXtsYWJlbC5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0VGltZUZyb21Ob3coaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLnZpZXctYnRuKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb290ICsgLnJvb3Qge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZUl0ZW07XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\IssueItem\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_s(IssueItem, "LTT526Ou6O4hV61O48R6pcPiPec=");

_c = IssueItem;
/* harmony default export */ __webpack_exports__["default"] = (IssueItem);

var _c;

$RefreshReg$(_c, "IssueItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Jc3N1ZUl0ZW0vaW5kZXguanN4Il0sIm5hbWVzIjpbIklzc3VlSXRlbSIsImlzc3VlIiwidXNlU3RhdGUiLCJzaG93RGV0YWlsIiwic2V0U2hvd0RldGFpbCIsInRvZ2dsZVNob3dEZXRhaWwiLCJ1c2VDYWxsYmFjayIsInNob3ciLCJ1c2VyIiwiYXZhdGFyX3VybCIsInRpdGxlIiwibGFiZWxzIiwibWFwIiwibGFiZWwiLCJpZCIsImdldFRpbWVGcm9tTm93IiwidXBkYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN4QkMsVUFEd0I7QUFBQSxNQUNaQyxhQURZOztBQUcvQixNQUFNQyxnQkFBZ0IsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDekNGLGlCQUFhLENBQUMsVUFBQUcsSUFBSTtBQUFBLGFBQUksQ0FBQ0EsSUFBTDtBQUFBLEtBQUwsQ0FBYjtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsOEJBQ0UscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVGLGdCQUFqQjtBQUFtQyxpQkFBUyxFQUFDLFVBQTdDO0FBQXdELFlBQUksRUFBQyxTQUE3RDtBQUF1RSxZQUFJLEVBQUMsT0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUEsNENBQWUsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLDJDQUFEO0FBQVEsYUFBRyxFQUFFSixLQUFLLENBQUNPLElBQU4sQ0FBV0MsVUFBeEI7QUFBb0MsZUFBSyxFQUFDLFFBQTFDO0FBQW1ELGNBQUksRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBT0U7QUFBQSw0Q0FBZSxXQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLGtDQUNFO0FBQUE7QUFBQSxzQkFBT1IsS0FBSyxDQUFDUztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR1QsS0FBSyxDQUFDVSxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLGdDQUNyQixxRUFBQyxLQUFEO0FBQU8sbUJBQUssRUFBRUE7QUFBZCxlQUEwQkEsS0FBSyxDQUFDQyxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURxQjtBQUFBLFdBQXRCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBQSw4Q0FBYSxVQUFiO0FBQUEsaUNBQ0U7QUFBQTtBQUFBLHNDQUFrQkMsY0FBYyxDQUFDZCxLQUFLLENBQUNlLFVBQVAsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQW9CR2IsVUFBVSxnQkFBRyxxRUFBQyxXQUFEO0FBQWEsV0FBSyxFQUFFRjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBbUMsSUFwQmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNERELENBbkVEOztHQUFNRCxTOztLQUFBQSxTO0FBcUVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjAzNWU4N2I3OGQxZmRiOTcxYmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElzc3VlSXRlbSA9ICh7IGlzc3VlIH0pID0+IHtcclxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93RGV0YWlsKHNob3cgPT4gIXNob3cpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfSBjbGFzc05hbWU9XCJ2aWV3LWJ0blwiIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICDmn6XnnItcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICB7aXNzdWUubGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgICAgPExhYmVsIGxhYmVsPXtsYWJlbH0ga2V5PXtsYWJlbC5pZH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0VGltZUZyb21Ob3coaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPiA6IG51bGx9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLnZpZXctYnRuKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb290ICsgLnJvb3Qge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=