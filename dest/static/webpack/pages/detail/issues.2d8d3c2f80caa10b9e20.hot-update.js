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








function makeQuery(creator, state, labels) {
  var creatorStr = creator ? "creator=".concat(creator) : '';
  var stateStr = state ? "state=".concat(state) : '';
  var labelStr = '';

  if (labels && labels.length > 0) {
    labelStr = "labels=".concat(labels.join(','));
  }

  var arr = [];

  if (creatorStr) {
    arr.push(creatorStr);
  }

  if (stateStr) {
    arr.push(stateStr);
  }

  if (labelStr) {
    arr.push(labelStr);
  }

  return "?".concat(arr.join('&'));
}

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(issues),
      issuesChange = _useState4[0],
      setIssuesChange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
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
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_6__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s(Issues, "a1FTotoDi18ICDbODYVbmiE1/gs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], useCache];
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
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2VuRGV0YWlsQ2FjaGVLZXkiLCJpc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXNDaGFuZ2UiLCJzZXRJc3N1ZXNDaGFuZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwib3duZXIiLCJuYW1lIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDO0FBQ3pDLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxxQkFBY0EsT0FBZCxJQUEwQixFQUFwRDtBQUNB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QUFBLEdBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUI7QUFlZWMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy4yZDhkM2MyZjgwY2FhMTBiOWUyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXksIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBjb25zdCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJyc7XHJcbiAgY29uc3Qgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJztcclxuICBsZXQgbGFiZWxTdHIgPSAnJztcclxuICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSB7XHJcbiAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIHtcclxuICAgIGFyci5wdXNoKGNyZWF0b3JTdHIpO1xyXG4gIH1cclxuICBpZiAoc3RhdGVTdHIpIHtcclxuICAgIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICB9XHJcbiAgaWYgKGxhYmVsU3RyKSB7XHJcbiAgICBhcnIucHVzaChsYWJlbFN0cik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YDtcclxufVxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlc0NoYW5nZSwgc2V0SXNzdWVzQ2hhbmdlXSA9IHVzZVN0YXRlKGlzc3Vlcyk7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gc2VsZWN0ZWQgPT4gc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXNDaGFuZ2Uoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGNhY2hlKGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGNvbnN0IFt7IGRhdGE6IGlzc3VlcyB9LCB7IGRhdGE6IGxhYmVscyB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=