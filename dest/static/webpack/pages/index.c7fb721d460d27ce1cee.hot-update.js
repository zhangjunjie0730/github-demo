webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Repo/index.jsx":
/*!***********************************!*\
  !*** ./components/Repo/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


var _jsxFileName = "E:\\MyGit\\github-demo\\components\\Repo\\index.jsx",
    _this = undefined;





var getLicense = function getLicense(license) {
  return license ? "".concat(license.spdx_id, " license") : '';
};

var Repo = function Repo(_ref) {
  var repo = _ref.repo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2226704462" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2226704462" + " " + "basic-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-2226704462" + " " + "repo-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/detail?owner=".concat(repo.owner.login, "&name=").concat(repo.name),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "jsx-2226704462",
            children: repo.full_name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-2226704462" + " " + "repo-desc",
        children: repo.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-2226704462" + " " + "other-info",
        children: [repo.license ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "license",
          children: getLicense(repo.license)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 27
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "last-updated",
          children: repo.updated_at
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "open-issues",
          children: [repo.open_issues_count, " open issues"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2226704462" + " " + "lang-star",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-2226704462" + " " + "lang",
        children: repo.language
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-2226704462" + " " + "stars",
        children: [repo.stargazers_count, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StarFilled"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2226704462",
      children: ".root.jsx-2226704462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.root.jsx-2226704462+.root.jsx-2226704462{border-top:1px solid #eee;padding-top:20px;}.other-info.jsx-2226704462>span.jsx-2226704462+span.jsx-2226704462{margin-left:10px;}.repo-title.jsx-2226704462{font-size:20px;}.lang-star.jsx-2226704462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2226704462>span.jsx-2226704462{width:120px;text-align:right;}.repo-desc.jsx-2226704462{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFJlcG9cXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlMsQUFHMEIsQUFLYSxBQUtULEFBSUYsQUFJRixBQUlELEFBS0EsWUFKSyxBQUtuQixHQWJBLEVBSkEsU0FMbUIsR0FrQm5CLGNBakJBLCtCQU5nQyxBQWtCaEMsbUhBakJBIiwiZmlsZSI6IkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFJlcG9cXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0YXJGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBnZXRMaWNlbnNlID0gbGljZW5zZSA9PiB7XHJcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBSZXBvID0gKHsgcmVwbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwby10aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cmVwby5mdWxsX25hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwby1kZXNjXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm90aGVyLWluZm9cIj5cclxuICAgICAgICAgIHtyZXBvLmxpY2Vuc2UgPyA8c3BhbiBjbGFzc05hbWU9XCJsaWNlbnNlXCI+e2dldExpY2Vuc2UocmVwby5saWNlbnNlKX08L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZFwiPntyZXBvLnVwZGF0ZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1pc3N1ZXNcIj57cmVwby5vcGVuX2lzc3Vlc19jb3VudH0gb3BlbiBpc3N1ZXM8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nLXN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJzXCI+XHJcbiAgICAgICAgICB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fSA8U3RhckZpbGxlZCAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yb290ICsgLnJvb3Qge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm90aGVyLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZXBvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sYW5nLXN0YXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sYW5nLXN0YXIgPiBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVwby1kZXNjIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbztcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\Repo\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Repo;
/* harmony default export */ __webpack_exports__["default"] = (Repo);

var _c;

$RefreshReg$(_c, "Repo");

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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo/index.jsx");




var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();










var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_5___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Index = function Index(_ref) {
  _s();

  var userRepos = _ref.userRepos,
      starred = _ref.starred;
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (store) {
    return store.user;
  }); // 未登录时

  if (!user || !user.id) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-4197889563" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "jsx-4197889563",
        children: "\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "4197889563",
        children: ".root.jsx-4197889563{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUcwQixhQUNBLDBFQUNTLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbyc7XHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyB1c2VyUmVwb3MsIHN0YXJyZWQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS51c2VyKTtcclxuXHJcbiAgLy8g5pyq55m75b2V5pe2XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7mgqjov5jmsqHmnInnmbvlvZU8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBhdmF0YXJfdXJsLCBsb2dpbiwgbmFtZSwgYmlvLCBlbWFpbCB9ID0gdXNlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFibGUgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbFRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJsZS5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbyk9PigpfVxyXG4gICAgICAgICAgPC9UYWJsZS5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Z2xvYmFsKC5pY29uLWVtYWlsKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YTogdXNlclJlcG9zIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YTogc3RhcnJlZCB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyUmVwb3MsXHJcbiAgICBzdGFycmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4KTtcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this);
  }

  var avatar_url = user.avatar_url,
      login = user.login,
      name = user.name,
      bio = user.bio,
      email = user.email;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-343846767" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-343846767" + " " + "user-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: avatar_url,
        alt: "user avatar",
        className: "jsx-343846767" + " " + "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "login",
        children: login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "name",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "bio",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "jsx-343846767" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MailOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          href: "mailto:".concat(email),
          className: "jsx-343846767",
          children: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "343846767",
      children: ".root.jsx-343846767{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-343846767{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:200px;margin-right:40px;}.login.jsx-343846767{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-343846767{font-size:16px;color:#777;}.bio.jsx-343846767{margin-top:20px;color:#333;}.avatar.jsx-343846767{width:100%;border-radius:5px;}.user-repos.jsx-343846767{-webkit-flex:1;-ms-flex:1;flex:1;}.icon-email{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERTLEFBRzBCLEFBTUMsQUFRRSxBQU1ELEFBS0MsQUFLTCxBQUtKLEFBSVcsV0FSQSxJQVZQLENBTkksQUFXSixFQWNiLFFBbEJBLENBS0EsRUFLQSxFQWhCa0IsRUFvQmxCLGNBbkJBLFNBVmUsa0JBTlUsd0RBT0QscURBTlAsZUFDakIsVUFNYyxZQUNNLGtCQUNwQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbyc7XHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyB1c2VyUmVwb3MsIHN0YXJyZWQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS51c2VyKTtcclxuXHJcbiAgLy8g5pyq55m75b2V5pe2XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7mgqjov5jmsqHmnInnmbvlvZU8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBhdmF0YXJfdXJsLCBsb2dpbiwgbmFtZSwgYmlvLCBlbWFpbCB9ID0gdXNlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFibGUgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbFRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJsZS5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbyk9PigpfVxyXG4gICAgICAgICAgPC9UYWJsZS5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Z2xvYmFsKC5pY29uLWVtYWlsKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YTogdXNlclJlcG9zIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIGNvbnN0IHsgZGF0YTogc3RhcnJlZCB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyUmVwb3MsXHJcbiAgICBzdGFycmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4KTtcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(Index, "ODc3cjw/vvoWaLFqHWcEGODyOfo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, _reduxStore$getState, user, _yield$request, userRepos, _yield$request2, starred;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            _reduxStore$getState = reduxStore.getState(), user = _reduxStore$getState.user;

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {});

          case 4:
            _context.next = 6;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 6:
            _yield$request = _context.sent;
            userRepos = _yield$request.data;
            _context.next = 10;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 10:
            _yield$request2 = _context.sent;
            starred = _yield$request2.data;
            return _context.abrupt("return", {
              userRepos: userRepos,
              starred: starred
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Index));

var _c, _c2;

$RefreshReg$(_c, "Index");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldExpY2Vuc2UiLCJsaWNlbnNlIiwic3BkeF9pZCIsIlJlcG8iLCJyZXBvIiwib3duZXIiLCJsb2dpbiIsIm5hbWUiLCJmdWxsX25hbWUiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZWRfYXQiLCJvcGVuX2lzc3Vlc19jb3VudCIsImxhbmd1YWdlIiwic3RhcmdhemVyc19jb3VudCIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJJbmRleCIsInVzZXJSZXBvcyIsInN0YXJyZWQiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsImlkIiwiT0FVVEhfVVJMIiwiYXZhdGFyX3VybCIsImJpbyIsImVtYWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVkdXhTdG9yZSIsImdldFN0YXRlIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLE9BQU8sRUFBSTtBQUM1QixTQUFPQSxPQUFPLGFBQU1BLE9BQU8sQ0FBQ0MsT0FBZCxnQkFBa0MsRUFBaEQ7QUFDRCxDQUZEOztBQUlBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekIsc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxZQUFmO0FBQUEsOEJBQ0U7QUFBQSw0Q0FBYyxZQUFkO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLDBCQUFtQkEsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQTlCLG1CQUE0Q0YsSUFBSSxDQUFDRyxJ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QUFBQTtBQUFBOztBQUFBLDZDQUdiLEVBSGE7O0FBQUE7QUFBQTtBQUFBLG1CQUtZUywwREFBTyxDQUN2QztBQUNFQyxpQkFBRyxFQUFFO0FBRFAsYUFEdUMsRUFJdkNKLEdBQUcsQ0FBQ0ssR0FKbUMsRUFLdkNMLEdBQUcsQ0FBQ00sR0FMbUMsQ0FMbkI7O0FBQUE7QUFBQTtBQUtSakIscUJBTFEsa0JBS2RrQixJQUxjO0FBQUE7QUFBQSxtQkFZVUosMERBQU8sQ0FDckM7QUFDRUMsaUJBQUcsRUFBRTtBQURQLGFBRHFDLEVBSXJDSixHQUFHLENBQUNLLEdBSmlDLEVBS3JDTCxHQUFHLENBQUNNLEdBTGlDLENBWmpCOztBQUFBO0FBQUE7QUFZUmhCLG1CQVpRLG1CQVlkaUIsSUFaYztBQUFBLDZDQW1CZjtBQUNMbEIsdUJBQVMsRUFBVEEsU0FESztBQUVMQyxxQkFBTyxFQUFQQTtBQUZLLGFBbkJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlCZSxxRUFBQWtCLDhEQUFVLENBQUNwQixLQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3ZmI3MjFkNDYwZDI3Y2UxY2VlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBTdGFyRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgZ2V0TGljZW5zZSA9IGxpY2Vuc2UgPT4ge1xyXG4gIHJldHVybiBsaWNlbnNlID8gYCR7bGljZW5zZS5zcGR4X2lkfSBsaWNlbnNlYCA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgUmVwbyA9ICh7IHJlcG8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0bGVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsP293bmVyPSR7cmVwby5vd25lci5sb2dpbn0mbmFtZT0ke3JlcG8ubmFtZX1gfT5cclxuICAgICAgICAgICAgPGE+e3JlcG8uZnVsbF9uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG8tZGVzY1wiPntyZXBvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XHJcbiAgICAgICAgICB7cmVwby5saWNlbnNlID8gPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPntnZXRMaWNlbnNlKHJlcG8ubGljZW5zZSl9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj57cmVwby51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+e3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1zdGFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxyXG4gICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gPFN0YXJGaWxsZWQgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVwby10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyID4gc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlcG8tZGVzYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG87XHJcbiIsImltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nO1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgdXNlclJlcG9zLCBzdGFycmVkIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcblxyXG4gIC8vIOacqueZu+W9leaXtlxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5oKo6L+Y5rKh5pyJ55m75b2VPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYXZhdGFyX3VybCwgbG9naW4sIG5hbWUsIGJpbywgZW1haWwgfSA9IHVzZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17YXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e2xvZ2lufTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPntiaW99PC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICA8TWFpbE91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYmxlIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFibGUuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8pPT4oKX1cclxuICAgICAgICAgIDwvVGFibGUuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOmdsb2JhbCguaWNvbi1lbWFpbCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICBjb25zdCB7IGRhdGE6IHVzZXJSZXBvcyB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGE6IHN0YXJyZWQgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlclJlcG9zLFxyXG4gICAgc3RhcnJlZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=