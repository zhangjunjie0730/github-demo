webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/UserAvatar/UserAvatar.jsx":
/*!**********************************************!*\
  !*** ./components/UserAvatar/UserAvatar.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _jsxFileName = "E:\\MyGit\\github-demo\\components\\UserAvatar\\UserAvatar.jsx",
    _this = undefined;





var UserAvatar = function UserAvatar(_ref) {
  var router = _ref.router,
      user = _ref.user,
      onLogout = _ref.onLogout;

  // 用户下拉菜单
  var UserDropdown = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return onLogout();
        },
        type: "link",
        children: "\u767B\u51FA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: user && user.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: UserDropdown,
      placement: "bottomCenter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        size: 40,
        src: user.avatar_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      placement: "bottom",
      title: "\u70B9\u51FB\u8FDB\u884C\u767B\u5F55",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/prepare-auth?url=".concat(router.asPath),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          size: 40,
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 37
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_c = UserAvatar;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(UserAvatar));

var _c, _c2;

$RefreshReg$(_c, "UserAvatar");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyQXZhdGFyL1VzZXJBdmF0YXIuanN4Il0sIm5hbWVzIjpbIlVzZXJBdmF0YXIiLCJyb3V0ZXIiLCJ1c2VyIiwib25Mb2dvdXQiLCJVc2VyRHJvcGRvd24iLCJpZCIsImF2YXRhcl91cmwiLCJhc1BhdGgiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNqRDtBQUNBLE1BQU1DLFlBQVksZ0JBQ2hCLHFFQUFDLHlDQUFEO0FBQUEsMkJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsNkJBQ0UscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsUUFBUSxFQUFkO0FBQUEsU0FBakI7QUFBbUMsWUFBSSxFQUFDLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjs7QUFVQSxzQkFDRTtBQUFBLGNBQ0dELElBQUksSUFBSUEsSUFBSSxDQUFDRyxFQUFiLGdCQUNDLHFFQUFDLDZDQUFEO0FBQVUsYUFBTyxFQUFFRCxZQUFuQjtBQUFpQyxlQUFTLEVBQUMsY0FBM0M7QUFBQSw2QkFDRSxxRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBRSxFQUFkO0FBQWtCLFdBQUcsRUFBRUYsSUFBSSxDQUFDSTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQUtDLHFFQUFDLDRDQUFEO0FBQVMsZUFBUyxFQUFDLFFBQW5CO0FBQTRCLFdBQUssRUFBQyxzQ0FBbEM7QUFBQSw2QkFDRTtBQUFHLFlBQUksOEJBQXVCTCxNQUFNLENBQUNNLE1BQTlCLENBQVA7QUFBQSwrQkFDRSxxRUFBQywyQ0FBRDtBQUFRLGNBQUksRUFBRSxFQUFkO0FBQWtCLGNBQUksZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KLG1CQURGO0FBZUQsQ0EzQkQ7O0tBQU1QLFU7QUE2QlMscUVBQUFRLDhEQUFVLENBQUNSLFVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hODc4YzFmODY3Zjc1OTlkNjIyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIERyb3Bkb3duLCBNZW51LCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IFVzZXJBdmF0YXIgPSAoeyByb3V0ZXIsIHVzZXIsIG9uTG9nb3V0IH0pID0+IHtcclxuICAvLyDnlKjmiLfkuIvmi4noj5zljZVcclxuICBjb25zdCBVc2VyRHJvcGRvd24gPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTG9nb3V0KCl9IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICDnmbvlh7pcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VyICYmIHVzZXIuaWQgPyAoXHJcbiAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e1VzZXJEcm9wZG93bn0gcGxhY2VtZW50PVwiYm90dG9tQ2VudGVyXCI+XHJcbiAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cclxuICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwi54K55Ye76L+b6KGM55m75b2VXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9PlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFVzZXJBdmF0YXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9