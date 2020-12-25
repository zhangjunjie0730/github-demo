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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


var _jsxFileName = "E:\\MyGit\\github-demo\\components\\Repo\\index.jsx",
    _this = undefined;






var getLicense = function getLicense(license) {
  return license ? "".concat(license.spdx_id, " license") : '';
};

var Repo = function Repo(_ref) {
  var repo = _ref.repo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-371057678" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-371057678" + " " + "basic-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-371057678" + " " + "repo-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/detail?owner=".concat(repo.owner.login, "&name=").concat(repo.name),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "jsx-371057678",
            children: repo.full_name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-371057678" + " " + "repo-desc",
        children: repo.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-371057678" + " " + "other-info",
        children: [repo.license ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-371057678" + " " + "license",
          children: getLicense(repo.license)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 27
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-371057678" + " " + "last-updated",
          children: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTimeFromNow"])(repo.updated_at)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-371057678" + " " + "open-issues",
          children: [repo.open_issues_count, " open issues"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-371057678" + " " + "lang-star",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-371057678" + " " + "lang",
        children: repo.language
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-371057678" + " " + "stars",
        children: [repo.stargazers_count, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StarFilled"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 35
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "371057678",
      children: ".root.jsx-371057678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.root.jsx-371057678+.root.jsx-371057678{border-top:1px solid #eee;padding-top:20px;}.other-info.jsx-371057678>span.jsx-371057678+span.jsx-371057678{margin-left:10px;}.repo-title.jsx-371057678{font-size:20px;}.lang-star.jsx-371057678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-371057678>span.jsx-371057678{width:120px;text-align:right;}..jsx-371057678{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFJlcG9cXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlMsQUFHMEIsQUFJYSxBQUlULEFBR0YsQUFHRixBQUdELEFBSUEsWUFISyxBQUluQixHQVZBLEVBSEEsU0FKbUIsR0FjbkIsY0FiQSwrQkFMZ0MsQUFjaEMsbUhBYkEiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xcY29tcG9uZW50c1xcUmVwb1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgU3RhckZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgZ2V0VGltZUZyb21Ob3cgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5jb25zdCBnZXRMaWNlbnNlID0gbGljZW5zZSA9PiB7XHJcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBSZXBvID0gKHsgcmVwbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwby10aXRsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9PlxyXG4gICAgICAgICAgICA8YT57cmVwby5mdWxsX25hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwby1kZXNjXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm90aGVyLWluZm9cIj5cclxuICAgICAgICAgIHtyZXBvLmxpY2Vuc2UgPyA8c3BhbiBjbGFzc05hbWU9XCJsaWNlbnNlXCI+e2dldExpY2Vuc2UocmVwby5saWNlbnNlKX08L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZFwiPntnZXRUaW1lRnJvbU5vdyhyZXBvLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+e3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1zdGFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxyXG4gICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gPFN0YXJGaWxsZWQgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb290ICsgLnJvb3Qge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwby10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sYW5nLXN0YXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxhbmctc3RhciA+IHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG87XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\Repo\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBvL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJnZXRMaWNlbnNlIiwibGljZW5zZSIsInNwZHhfaWQiLCJSZXBvIiwicmVwbyIsIm93bmVyIiwibG9naW4iLCJuYW1lIiwiZnVsbF9uYW1lIiwiZGVzY3JpcHRpb24iLCJnZXRUaW1lRnJvbU5vdyIsInVwZGF0ZWRfYXQiLCJvcGVuX2lzc3Vlc19jb3VudCIsImxhbmd1YWdlIiwic3RhcmdhemVyc19jb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDNUIsU0FBT0EsT0FBTyxhQUFNQSxPQUFPLENBQUNDLE9BQWQsZ0JBQWtDLEVBQWhEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFO0FBQUEsdUNBQWUsTUFBZjtBQUFBLDRCQUNFO0FBQUEseUNBQWUsWUFBZjtBQUFBLDhCQUNFO0FBQUEsMkNBQWMsWUFBZDtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSwwQkFBbUJBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUE5QixtQkFBNENGLElBQUksQ0FBQ0csSUFBakQsQ0FBVjtBQUFBLGlDQUNFO0FBQUE7QUFBQSxzQkFBSUgsSUFBSSxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBQSwyQ0FBYSxXQUFiO0FBQUEsa0JBQTBCSixJQUFJLENBQUNLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQUEsMkNBQWEsWUFBYjtBQUFBLG1CQUNHTCxJQUFJLENBQUNILE9BQUwsZ0JBQWU7QUFBQSw2Q0FBZ0IsU0FBaEI7QUFBQSxvQkFBMkJELFVBQVUsQ0FBQ0ksSUFBSSxDQUFDSCxPQUFOO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWYsR0FBNkUsSUFEaEYsZUFFRTtBQUFBLDZDQUFnQixjQUFoQjtBQUFBLG9CQUFnQ1MsNkRBQWMsQ0FBQ04sSUFBSSxDQUFDTyxVQUFOO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLDZDQUFnQixhQUFoQjtBQUFBLHFCQUErQlAsSUFBSSxDQUFDUSxpQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBY0U7QUFBQSx5Q0FBZSxXQUFmO0FBQUEsOEJBQ0U7QUFBQSwyQ0FBZ0IsTUFBaEI7QUFBQSxrQkFBd0JSLElBQUksQ0FBQ1M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwyQ0FBZ0IsT0FBaEI7QUFBQSxtQkFDR1QsSUFBSSxDQUFDVSxnQkFEUixvQkFDMEIscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtREQsQ0FwREQ7O0tBQU1YLEk7QUFzRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiN2UwNDJkZjUyYmFhMDdiMjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBTdGFyRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBnZXRUaW1lRnJvbU5vdyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmNvbnN0IGdldExpY2Vuc2UgPSBsaWNlbnNlID0+IHtcclxuICByZXR1cm4gbGljZW5zZSA/IGAke2xpY2Vuc2Uuc3BkeF9pZH0gbGljZW5zZWAgOiAnJztcclxufTtcclxuXHJcbmNvbnN0IFJlcG8gPSAoeyByZXBvIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWMtaW5mb1wiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvLXRpdGxlXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbD9vd25lcj0ke3JlcG8ub3duZXIubG9naW59Jm5hbWU9JHtyZXBvLm5hbWV9YH0+XHJcbiAgICAgICAgICAgIDxhPntyZXBvLmZ1bGxfbmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvLWRlc2NcIj57cmVwby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3RoZXItaW5mb1wiPlxyXG4gICAgICAgICAge3JlcG8ubGljZW5zZSA/IDxzcGFuIGNsYXNzTmFtZT1cImxpY2Vuc2VcIj57Z2V0TGljZW5zZShyZXBvLmxpY2Vuc2UpfTwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC11cGRhdGVkXCI+e2dldFRpbWVGcm9tTm93KHJlcG8udXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1pc3N1ZXNcIj57cmVwby5vcGVuX2lzc3Vlc19jb3VudH0gb3BlbiBpc3N1ZXM8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nLXN0YXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJzXCI+XHJcbiAgICAgICAgICB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fSA8U3RhckZpbGxlZCAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3QgKyAucm9vdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBvLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxhbmctc3RhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGFuZy1zdGFyID4gc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==