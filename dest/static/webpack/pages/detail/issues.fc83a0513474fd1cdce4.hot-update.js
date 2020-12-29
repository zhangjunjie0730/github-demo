webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_9__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["genDetailCacheKey"])(router, {
    services: services
  }));
  var issues = services.issues,
      labels = services.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      creator = _useState[0],
      setCreator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      issueState = _useState2[0],
      setIssueState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      selectedLabels = _useState3[0],
      setSelectedLabels = _useState3[1];

  var selectCommonStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "root",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "search",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Issues, "M/1Kye0Mzfc8Bl4KapwGmXcFbI0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], useCache];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, issues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_yield$Promise$all, 2);
            issues = _yield$Promise$all2[0].data;
            labels = _yield$Promise$all2[1].data;
            return _context.abrupt("return", {
              services: {
                issues: issues,
                labels: labels
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (Issues);

var _c;

$RefreshReg$(_c, "Issues");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsiaW5pdENsaWVudENhY2hlIiwiZ2VuQ2FjaGVLZXlTdHJhdGUiLCJjb250ZXh0IiwiZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUiLCJjYWNoZSIsInVzZUNhY2hlIiwiSXNzdWVzIiwic2VydmljZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZW5EZXRhaWxDYWNoZUtleSIsImlzc3VlcyIsImxhYmVscyIsInVzZVN0YXRlIiwiY3JlYXRvciIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJzZWxlY3RDb21tb25TdHlsZSIsImFsaWduU2VsZiIsIndpZHRoIiwibWFyZ2luTGVmdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Iiwib3duZXIiLCJuYW1lIiwiUHJvbWlzZSIsImFsbCIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7dUJBRTRCQSxtRUFBZSxDQUFDO0FBQzFDQyxtQkFBaUIsRUFBRSwyQkFBQUMsT0FBTztBQUFBLFdBQUlDLHNFQUF1QixDQUFDRCxPQUFELENBQTNCO0FBQUE7QUFEZ0IsQ0FBRCxDO0lBQW5DRSxLLG9CQUFBQSxLO0lBQU9DLFEsb0JBQUFBLFE7O0FBSWYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBSixVQUFRLENBQUNLLGdFQUFpQixDQUFDRixNQUFELEVBQVM7QUFBRUQsWUFBUSxFQUFSQTtBQUFGLEdBQVQsQ0FBbEIsQ0FBUjtBQUYrQixNQUl2QkksTUFKdUIsR0FJSkosUUFKSSxDQUl2QkksTUFKdUI7QUFBQSxNQUlmQyxNQUplLEdBSUpMLFFBSkksQ0FJZkssTUFKZTs7QUFBQSxrQkFNREMsc0RBQVEsRUFOUDtBQUFBLE1BTXhCQyxPQU53QjtBQUFBLE1BTWZDLFVBTmU7O0FBQUEsbUJBT0tGLHNEQUFRLEVBUGI7QUFBQSxNQU94QkcsVUFQd0I7QUFBQSxNQU9aQyxhQVBZOztBQUFBLG1CQVFhSixzREFBUSxDQUFDLEVBQUQsQ0FSckI7QUFBQSxNQVF4QkssY0FSd0I7QUFBQSxNQVFSQyxpQkFSUTs7QUFVL0IsTUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJDLGFBQVMsRUFBRSxZQURhO0FBRXhCQyxTQUFLLEVBQUUsR0FGaUI7QUFHeEJDLGNBQVUsRUFBRTtBQUhZLEdBQTFCO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRSxxRUFBQyw4REFBRDtBQUFZLGFBQUssRUFBRVQsT0FBbkI7QUFBNEIsZ0JBQVEsRUFBRUMsVUFBdEM7QUFBa0QsYUFBSyxFQUFFSztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBdkJEOztHQUFNZCxNO1VBQ1dHLHFELEVBQ2ZKLFE7OztLQUZJQyxNO0FBeUJOQSxNQUFNLENBQUNrQixlQUFQLEdBQXlCcEIsS0FBSztBQUFBLCtMQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3FCLGVBQVQsU0FBU0EsR0FBVDtBQUFBLHlCQUNMQSxHQUFHLENBQUNDLEtBREMsRUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQixFQUNkQyxJQURjLGNBQ2RBLElBRGM7QUFBQTtBQUFBLG1CQUVzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FDN0RDLDBEQUFPLENBQUM7QUFBRUMsaUJBQUcsbUJBQVlMLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q0gsR0FBRyxDQUFDUSxHQUFoRCxFQUFxRFIsR0FBRyxDQUFDUyxHQUF6RCxDQURzRCxFQUU3REgsMERBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWUwsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDSCxHQUFHLENBQUNRLEdBQWhELEVBQXFEUixHQUFHLENBQUNTLEdBQXpELENBRnNELENBQVosQ0FGdEI7O0FBQUE7QUFBQTtBQUFBO0FBRWR2QixrQkFGYywwQkFFcEJ3QixJQUZvQjtBQUVJdkIsa0JBRkosMEJBRUZ1QixJQUZFO0FBQUEsNkNBT3RCO0FBQ0w1QixzQkFBUSxFQUFFO0FBQ1JJLHNCQUFNLEVBQU5BLE1BRFE7QUFFUkMsc0JBQU0sRUFBTkE7QUFGUTtBQURMLGFBUHNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUI7QUFlZU4scUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy5mYzgzYTA1MTM0NzRmZDFjZGNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXksIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdENvbW1vblN0eWxlID0ge1xyXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgbWFyZ2luTGVmdDogMjAsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGlzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==