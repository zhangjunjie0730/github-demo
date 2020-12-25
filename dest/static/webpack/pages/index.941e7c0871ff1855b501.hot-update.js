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
        className: "jsx-2226704462" + " " + "repo-desc",
        children: repo.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-2226704462" + " " + "other-info",
        children: [repo.license ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "license",
          children: getLicense(repo.license)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 27
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "last-updated",
          children: repo.updated_at
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-2226704462" + " " + "open-issues",
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
      className: "jsx-2226704462" + " " + "lang-star",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-2226704462" + " " + "lang",
        children: repo.language
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-2226704462" + " " + "stars",
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
      id: "2226704462",
      children: ".root.jsx-2226704462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.root.jsx-2226704462+.root.jsx-2226704462{border-top:1px solid #eee;padding-top:20px;}.other-info.jsx-2226704462>span.jsx-2226704462+span.jsx-2226704462{margin-left:10px;}.repo-title.jsx-2226704462{font-size:20px;}.lang-star.jsx-2226704462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2226704462>span.jsx-2226704462{width:120px;text-align:right;}.repo-desc.jsx-2226704462{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFJlcG9cXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlMsQUFHMEIsQUFLYSxBQUtULEFBSUYsQUFJRixBQUlELEFBS0EsWUFKSyxBQUtuQixHQWJBLEVBSkEsU0FMbUIsR0FrQm5CLGNBakJBLCtCQU5nQyxBQWtCaEMsbUhBakJBIiwiZmlsZSI6IkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXGNvbXBvbmVudHNcXFJlcG9cXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0YXJGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IGdldFRpbWVGcm9tTm93IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgZ2V0TGljZW5zZSA9IGxpY2Vuc2UgPT4ge1xyXG4gIHJldHVybiBsaWNlbnNlID8gYCR7bGljZW5zZS5zcGR4X2lkfSBsaWNlbnNlYCA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgUmVwbyA9ICh7IHJlcG8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0bGVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsP293bmVyPSR7cmVwby5vd25lci5sb2dpbn0mbmFtZT0ke3JlcG8ubmFtZX1gfT5cclxuICAgICAgICAgICAgPGE+e3JlcG8uZnVsbF9uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG8tZGVzY1wiPntyZXBvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XHJcbiAgICAgICAgICB7cmVwby5saWNlbnNlID8gPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPntnZXRMaWNlbnNlKHJlcG8ubGljZW5zZSl9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj57cmVwby51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+e3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1zdGFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxyXG4gICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gPFN0YXJGaWxsZWQgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVwby10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyID4gc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlcG8tZGVzYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG87XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\components\\\\Repo\\\\index.jsx */"
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

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getTimeFromNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromNow", function() { return getTimeFromNow; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var getTimeFromNow = function getTimeFromNow(time) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXBvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0TGljZW5zZSIsImxpY2Vuc2UiLCJzcGR4X2lkIiwiUmVwbyIsInJlcG8iLCJvd25lciIsImxvZ2luIiwibmFtZSIsImZ1bGxfbmFtZSIsImRlc2NyaXB0aW9uIiwidXBkYXRlZF9hdCIsIm9wZW5faXNzdWVzX2NvdW50IiwibGFuZ3VhZ2UiLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZ2V0VGltZUZyb21Ob3ciLCJ0aW1lIiwibW9tZW50IiwiZnJvbU5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDNUIsU0FBT0EsT0FBTyxhQUFNQSxPQUFPLENBQUNDLE9BQWQsZ0JBQWtDLEVBQWhEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLHNCQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBLDRCQUNFO0FBQUEsMENBQWUsWUFBZjtBQUFBLDhCQUNFO0FBQUEsNENBQWMsWUFBZDtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSwwQkFBbUJBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUE5QixtQkFBNENGLElBQUksQ0FBQ0csSUFBakQsQ0FBVjtBQUFBLGlDQUNFO0FBQUE7QUFBQSxzQkFBSUgsSUFBSSxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBQSw0Q0FBYSxXQUFiO0FBQUEsa0JBQTBCSixJQUFJLENBQUNLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQUEsNENBQWEsWUFBYjtBQUFBLG1CQUNHTCxJQUFJLENBQUNILE9BQUwsZ0JBQWU7QUFBQSw4Q0FBZ0IsU0FBaEI7QUFBQSxvQkFBMkJELFVBQVUsQ0FBQ0ksSUFBSSxDQUFDSCxPQUFOO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWYsR0FBNkUsSUFEaEYsZUFFRTtBQUFBLDhDQUFnQixjQUFoQjtBQUFBLG9CQUFnQ0csSUFBSSxDQUFDTTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSw4Q0FBZ0IsYUFBaEI7QUFBQSxxQkFBK0JOLElBQUksQ0FBQ08saUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWNFO0FBQUEsMENBQWUsV0FBZjtBQUFBLDhCQUNFO0FBQUEsNENBQWdCLE1BQWhCO0FBQUEsa0JBQXdCUCxJQUFJLENBQUNRO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsNENBQWdCLE9BQWhCO0FBQUEsbUJBQ0dSLElBQUksQ0FBQ1MsZ0JBRFIsb0JBQzBCLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeURELENBMUREOztLQUFNVixJO0FBNERTQSxtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxJQUFJLEVBQUk7QUFDcEMsU0FBT0MsNkNBQU0sQ0FBQ0QsSUFBRCxDQUFOLENBQWFFLE9BQWIsRUFBUDtBQUNELENBRk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQxZTdjMDg3MWZmMTg1NWI1MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFN0YXJGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IGdldFRpbWVGcm9tTm93IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgZ2V0TGljZW5zZSA9IGxpY2Vuc2UgPT4ge1xyXG4gIHJldHVybiBsaWNlbnNlID8gYCR7bGljZW5zZS5zcGR4X2lkfSBsaWNlbnNlYCA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgUmVwbyA9ICh7IHJlcG8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0bGVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsP293bmVyPSR7cmVwby5vd25lci5sb2dpbn0mbmFtZT0ke3JlcG8ubmFtZX1gfT5cclxuICAgICAgICAgICAgPGE+e3JlcG8uZnVsbF9uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG8tZGVzY1wiPntyZXBvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XHJcbiAgICAgICAgICB7cmVwby5saWNlbnNlID8gPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPntnZXRMaWNlbnNlKHJlcG8ubGljZW5zZSl9PC9zcGFuPiA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj57cmVwby51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+e3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1zdGFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZ1wiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxyXG4gICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gPFN0YXJGaWxsZWQgLz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm9vdCArIC5yb290IHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVwby10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGFuZy1zdGFyID4gc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlcG8tZGVzYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG87XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaW1lRnJvbU5vdyA9IHRpbWUgPT4ge1xyXG4gIHJldHVybiBtb21lbnQodGltZSkuZnJvbU5vdygpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9