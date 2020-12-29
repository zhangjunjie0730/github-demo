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

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
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
      children: ".view-btn{position:absolute;right:10px;top:10px;}.root.jsx-2669519729+.root.jsx-2669519729{border-top:1px solid #eee;}.issue.jsx-2669519729{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2669519729:hover{background:#fafafa;}.main-info.jsx-2669519729>h6.jsx-2669519729{padding-right:40px;font-size:16px;word-break:break-all;}.avatar.jsx-2669519729{margin-right:20px;}.sub-info.jsx-2669519729{margin-bottom:0;}.sub-info.jsx-2669519729>span.jsx-2669519729+span.jsx-2669519729{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXElzc3VlSXRlbVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDUyxBQUcrQixBQUtRLEFBR2IsQUFLTSxBQUdBLEFBS0QsQUFHRixBQUdLLGdCQUZ2QixFQXhCYSxBQXFCYixDQVJBLEFBR2lCLEVBV0UsS0F0Qm5CLEdBSlcsS0FnQlksSUFmdkIsQUEwQmlCLGVBQ2pCLEVBWEEsbUJBVm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xcY29tcG9uZW50c1xcSXNzdWVJdGVtXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0RldGFpbChzaG93ID0+ICFzaG93KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH0gY2xhc3NOYW1lPVwidmlldy1idG5cIiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAg5p+l55yLXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAge2lzc3VlLmxhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICAgIDxMYWJlbCBsYWJlbD17bGFiZWx9IGtleT17bGFiZWwuaWR9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldFRpbWVGcm9tTm93KGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC52aWV3LWJ0bikge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXNzdWVJdGVtO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\IssueItem\\\\index.jsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Jc3N1ZUl0ZW0vaW5kZXguanN4Il0sIm5hbWVzIjpbIklzc3VlSXRlbSIsImlzc3VlIiwidXNlU3RhdGUiLCJzaG93RGV0YWlsIiwic2V0U2hvd0RldGFpbCIsInRvZ2dsZVNob3dEZXRhaWwiLCJ1c2VDYWxsYmFjayIsInNob3ciLCJ1c2VyIiwiYXZhdGFyX3VybCIsInRpdGxlIiwibGFiZWxzIiwibWFwIiwibGFiZWwiLCJpZCIsImdldFRpbWVGcm9tTm93IiwidXBkYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN4QkMsVUFEd0I7QUFBQSxNQUNaQyxhQURZOztBQUcvQixNQUFNQyxnQkFBZ0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3pDRixpQkFBYSxDQUFDLFVBQUFHLElBQUk7QUFBQSxhQUFJLENBQUNBLElBQUw7QUFBQSxLQUFMLENBQWI7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLHNCQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBLDRCQUNFO0FBQUEsMENBQWUsT0FBZjtBQUFBLDhCQUNFLHFFQUFDLDJDQUFEO0FBQVEsZUFBTyxFQUFFRixnQkFBakI7QUFBbUMsaUJBQVMsRUFBQyxVQUE3QztBQUF3RCxZQUFJLEVBQUMsU0FBN0Q7QUFBdUUsWUFBSSxFQUFDLE9BQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFBLDRDQUFlLFFBQWY7QUFBQSwrQkFDRSxxRUFBQywyQ0FBRDtBQUFRLGFBQUcsRUFBRUosS0FBSyxDQUFDTyxJQUFOLENBQVdDLFVBQXhCO0FBQW9DLGVBQUssRUFBQyxRQUExQztBQUFtRCxjQUFJLEVBQUU7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQU9FO0FBQUEsNENBQWUsV0FBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxrQ0FDRTtBQUFBO0FBQUEsc0JBQU9SLEtBQUssQ0FBQ1M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdULEtBQUssQ0FBQ1UsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUFDLEtBQUs7QUFBQSxnQ0FDckIscUVBQUMsS0FBRDtBQUFPLG1CQUFLLEVBQUVBO0FBQWQsZUFBMEJBLEtBQUssQ0FBQ0MsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEcUI7QUFBQSxXQUF0QixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUEsOENBQWEsVUFBYjtBQUFBLGlDQUNFO0FBQUE7QUFBQSxzQ0FBa0JDLGNBQWMsQ0FBQ2QsS0FBSyxDQUFDZSxVQUFQLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFvQkdiLFVBQVUsZ0JBQUcscUVBQUMsV0FBRDtBQUFhLFdBQUssRUFBRUY7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQW1DLElBcEJoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRERCxDQW5FRDs7R0FBTUQsUzs7S0FBQUEsUztBQXFFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy41YmFhM2RhNGQ0ODAyOGM2YWY4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSXNzdWVJdGVtID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFNob3dEZXRhaWwoc2hvdyA9PiAhc2hvdyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9IGNsYXNzTmFtZT1cInZpZXctYnRuXCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgIOafpeeci1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMubWFwKGxhYmVsID0+IChcclxuICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e2xhYmVsfSBrZXk9e2xhYmVsLmlkfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRUaW1lRnJvbU5vdyhpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCgudmlldy1idG4pIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlSXRlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==