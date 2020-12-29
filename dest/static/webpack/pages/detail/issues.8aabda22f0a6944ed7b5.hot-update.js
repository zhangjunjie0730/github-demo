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
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2VuRGV0YWlsQ2FjaGVLZXkiLCJpc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXNDaGFuZ2UiLCJzZXRJc3N1ZXNDaGFuZ2UiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwib3duZXIiLCJuYW1lIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDO0FBQ3pDLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxxQkFBY0EsT0FBZCxJQUEwQixFQUFwRDtBQUNBLE1BQU1JLFFBQVEsR0FBR0gsS0FBSyxtQkFBWUEsS0FBWixJQUFzQixFQUE1QztBQUNBLE1BQUlJLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUgsTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUNELFFBQVEsb0JBQWFILE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLEdBQVosQ0FBYixDQUFSO0FBRWpDLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBRUEsTUFBSUwsVUFBSixFQUFnQkssR0FBRyxDQUFDQyxJQUFKLENBQVNOLFVBQVQ7QUFDaEIsTUFBSUMsUUFBSixFQUFjSSxHQUFHLENBQUNDLElBQUosQ0FBU0wsUUFBVDtBQUNkLE1BQUlDLFFBQUosRUFBY0csR0FBRyxDQUFDQyxJQUFKLENBQVNKLFFBQVQ7QUFFZCxvQkFBV0csR0FBRyxDQUFDRCxJQUFKLENBQVMsR0FBVCxDQUFYO0FBQ0Q7O3VCQUUyQkcsb0VBQWUsQ0FBQztBQUMxQ0MsbUJBQWlCLEVBQUUsMkJBQUFDLE9BQU87QUFBQSxXQUFJQyxzRUFBdUIsQ0FBQ0QsT0FBRCxDQUEzQjtBQUFBO0FBRGdCLENBQUQsQztJQUFuQ0UsSyxvQkFBQUEsSztJQUFPQyxRLG9CQUFBQSxROztBQUlmLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUosVUFBUSxDQUFDSyxnRUFBaUIsQ0FBQ0YsTUFBRCxFQUFTO0FBQUVELFlBQVEsRUFBUkE7QUFBRixHQUFULENBQWxCLENBQVI7QUFGK0IsTUFJdkJJLE1BSnVCLEdBSUpKLFFBSkksQ0FJdkJJLE1BSnVCO0FBQUEsTUFJZm5CLE1BSmUsR0FJSmUsUUFKSSxDQUlmZixNQUplOztBQUFBLGtCQU1Eb0Isc0RBQVEsRUFOUDtBQUFBLE1BTXhCdEIsT0FOd0I7QUFBQSxNQU1mdUIsVUFOZTs7QUFBQSxtQkFPS0Qsc0RBQVEsRUFQYjtBQUFBLE1BT3hCRSxVQVB3QjtBQUFBLE1BT1pDLGFBUFk7O0FBQUEsbUJBUWFILHNEQUFRLENBQUMsRUFBRCxDQVJyQjtBQUFBLE1BUXhCSSxjQVJ3QjtBQUFBLE1BUVJDLGlCQVJROztBQUFBLG1CQVNTTCxzREFBUSxDQUFDRCxNQUFELENBVGpCO0FBQUEsTUFTeEJPLFlBVHdCO0FBQUEsTUFTVkMsZUFUVTs7QUFBQSxtQkFVQ1Asc0RBQVEsQ0FBQyxLQUFELENBVlQ7QUFBQSxNQVV4QlEsUUFWd0I7QUFBQSxNQVVkQyxXQVZjOztBQVcvQixNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxXQUFJTixpQkFBaUIsQ0FBQ00sUUFBRCxDQUFyQjtBQUFBLEdBQW5DOztBQUVBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CSCx5QkFBVyxDQUFDLEtBQUQsQ0FBWDtBQURtQjtBQUFBLHFCQUVrQkksMERBQU8sQ0FBQztBQUMzQ0MsbUJBQUcsbUJBQVlDLEtBQVosY0FBcUJDLElBQXJCLG9CQUFtQ3ZDLFNBQVMsQ0FBQ0MsT0FBRCxFQUFVd0IsVUFBVixFQUFzQkUsY0FBdEIsQ0FBNUM7QUFEd0MsZUFBRCxDQUZ6Qjs7QUFBQTtBQUFBO0FBRUxhLDBCQUZLLGtCQUVYQyxJQUZXO0FBS25CWCw2QkFBZSxDQUFDVSxZQUFELENBQWY7QUFDQVIseUJBQVcsQ0FBQyxLQUFELENBQVg7O0FBTm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpHLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBU0EsTUFBTU8saUJBQWlCLEdBQUc7QUFDeEJDLGFBQVMsRUFBRSxZQURhO0FBRXhCQyxTQUFLLEVBQUUsR0FGaUI7QUFHeEJDLGNBQVUsRUFBRTtBQUhZLEdBQTFCO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFFRSxxRUFBQyw4REFBRDtBQUFZLGFBQUssRUFBRTVDLE9BQW5CO0FBQTRCLGdCQUFRLEVBQUV1QixVQUF0QztBQUFrRCxhQUFLLEVBQUVrQjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQywyQ0FBRDtBQUNFLGtCQUFVLE1BRFo7QUFFRSxnQkFBUSxFQUFFaEIsYUFGWjtBQUdFLGFBQUssRUFBRUQsVUFIVDtBQUlFLG1CQUFXLEVBQUMsY0FKZDtBQUtFLGFBQUssRUFBRWlCLGlCQUxUO0FBQUEsZ0NBT0UscUVBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQWUsZUFBSyxFQUFDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUUscUVBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQWUsZUFBSyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0UscUVBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQWUsZUFBSyxFQUFDLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQS9DRDs7R0FBTXpCLE07VUFDV0cscUQsRUFDZkosUTs7O0tBRklDLE07QUFpRE5BLE1BQU0sQ0FBQzZCLGVBQVAsR0FBeUIvQixLQUFLO0FBQUEsK0xBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTZ0MsZUFBVCxTQUFTQSxHQUFUO0FBQUEseUJBQ0xBLEdBQUcsQ0FBQ0MsS0FEQyxFQUNyQlYsS0FEcUIsY0FDckJBLEtBRHFCLEVBQ2RDLElBRGMsY0FDZEEsSUFEYztBQUFBO0FBQUEsbUJBRXNCVSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUM3RGQsMERBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWUMsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDUSxHQUFHLENBQUNJLEdBQWhELEVBQXFESixHQUFHLENBQUNLLEdBQXpELENBRHNELEVBRTdEaEIsMERBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWUMsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDUSxHQUFHLENBQUNJLEdBQWhELEVBQXFESixHQUFHLENBQUNLLEdBQXpELENBRnNELENBQVosQ0FGdEI7O0FBQUE7QUFBQTtBQUFBO0FBRWQ5QixrQkFGYywwQkFFcEJtQixJQUZvQjtBQUVJdEMsa0JBRkosMEJBRUZzQyxJQUZFO0FBQUEsOENBT3RCO0FBQ0x2QixzQkFBUSxFQUFFO0FBQ1JJLHNCQUFNLEVBQU5BLE1BRFE7QUFFUm5CLHNCQUFNLEVBQU5BO0FBRlE7QUFETCxhQVBzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTlCO0FBZWVjLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuOGFhYmRhMjJmMGE2OTQ0ZWQ3YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJztcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnO1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnO1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YDtcclxuXHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKTtcclxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKTtcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWA7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2xpZW50Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiBjb250ZXh0ID0+IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpLFxyXG59KTtcclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIsIHsgc2VydmljZXMgfSkpO1xyXG5cclxuICBjb25zdCB7IGlzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlcztcclxuXHJcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExhYmVscywgc2V0U2VsZWN0ZWRMYWJlbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc3N1ZXNDaGFuZ2UsIHNldElzc3Vlc0NoYW5nZV0gPSB1c2VTdGF0ZShpc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzQ2hhbmdlKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIOetm+mAieeUqOaItyAqL31cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHZhbHVlPXtpc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiY2xvc2VkXCI+Y2xvc2VkPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGlzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==