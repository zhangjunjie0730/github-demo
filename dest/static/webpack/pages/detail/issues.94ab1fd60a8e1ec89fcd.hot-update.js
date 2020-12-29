webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./pages/detail/issues.jsx":
/*!*********************************!*\
  !*** ./pages/detail/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx",
    _this = undefined,
    _s = $RefreshSig$();









function makeQuery(creator, state, labels) {
  var creatorStr = creator ? "creator=".concat(creator) : '';
  var stateStr = state ? "state=".concat(state) : '';
  var labelStr = '';
  if (labels && labels.length > 0) labelStr = "labels=".concat(labels.join(','));
  var arr = [];
  if (creatorStr) arr.push(creatorStr);
  if (stateStr) arr.push(stateStr);
  if (labelStr) arr.push(labelStr);
  return "?".concat(arr.join('&'));
}

var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_10__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_8__["genDetailCacheKey"])(router, {
    services: services
  }));
  var issues = services.issues,
      labels = services.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      creator = _useState[0],
      setCreator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      issueState = _useState2[0],
      setIssueState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      selectedLabels = _useState3[0],
      setSelectedLabels = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(issues),
      issuesChange = _useState4[0],
      setIssuesChange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      fetching = _useState5[0],
      setFetching = _useState5[1];

  var handleLabelsChange = function handleLabelsChange(selected) {
    return setSelectedLabels(selected);
  };

  var handleSearch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _yield$request, searchIssues;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(false);
              _context.next = 3;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
                url: "/repos/".concat(owner, "/").concat(name, "/issues").concat(makeQuery(creator, issueState, selectedLabels))
              });

            case 3:
              _yield$request = _context.sent;
              searchIssues = _yield$request.data;
              setIssuesChange(searchIssues);
              setFetching(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearch() {
      return _ref2.apply(this, arguments);
    };
  }();

  var selectCommonStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "root",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
        allowClear: true,
        onChange: setIssueState,
        value: issueState,
        placeholder: "\u72B6\u6001",
        style: selectCommonStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
          value: "all",
          children: "\u5168\u90E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
        allowClear: true,
        mode: "multiple",
        onChange: handleLabelsChange,
        value: selectedLabels,
        placeholder: "Label",
        style: {
          flexGrow: 1,
          width: 200,
          marginn: '0 20px'
        },
        children: labels.map(function (label) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
            value: label.id,
            children: label.name
          }, label.id, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(Issues, "a1FTotoDi18ICDbODYVbmiE1/gs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], useCache];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, issues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context2.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
            issues = _yield$Promise$all2[0].data;
            labels = _yield$Promise$all2[1].data;
            return _context2.abrupt("return", {
              services: {
                issues: issues,
                labels: labels
              }
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2VuRGV0YWlsQ2FjaGVLZXkiLCJpc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXNDaGFuZ2UiLCJzZXRJc3N1ZXNDaGFuZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwib3duZXIiLCJuYW1lIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZmxleEdyb3ciLCJtYXJnaW5uIiwibWFwIiwibGFiZWwiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5IiwiUHJvbWlzZSIsImFsbCIsInJlcSIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLEtBQTVCLEVBQW1DQyxNQUFuQyxFQUEyQztBQUN6QyxNQUFN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cUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy45NGFiMWZkNjBhOGUxZWM4OWZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcic7XHJcbmltcG9ydCB7IGdlbkRldGFpbENhY2hlS2V5LCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBpbml0Q2xpZW50Q2FjaGUgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSB7XHJcbiAgY29uc3QgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnO1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJyc7XHJcbiAgbGV0IGxhYmVsU3RyID0gJyc7XHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoID4gMCkgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gO1xyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIGFyci5wdXNoKGNyZWF0b3JTdHIpO1xyXG4gIGlmIChzdGF0ZVN0cikgYXJyLnB1c2goc3RhdGVTdHIpO1xyXG4gIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpO1xyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YDtcclxufVxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlc0NoYW5nZSwgc2V0SXNzdWVzQ2hhbmdlXSA9IHVzZVN0YXRlKGlzc3Vlcyk7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gc2VsZWN0ZWQgPT4gc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXNDaGFuZ2Uoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICB7Lyog562b6YCJ55So5oi3ICovfVxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICAgIHsvKiDnrZvpgInnirbmgIEgKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICB7Lyog562b6YCJ5qCH562+ICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2lubjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGlzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==