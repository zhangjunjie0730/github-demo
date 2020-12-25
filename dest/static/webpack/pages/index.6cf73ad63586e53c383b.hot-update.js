webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Index = function Index(_ref) {
  _s();

  var userRepos = _ref.userRepos,
      starred = _ref.starred;
  var user = useSelector(function (store) {
    return store.user;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      children: "index"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Index, "ODc3cjw/vvoWaLFqHWcEGODyOfo=", true);

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
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["request"])({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 6:
            _yield$request = _context.sent;
            userRepos = _yield$request.data;
            _context.next = 10;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_5__["request"])({
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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJJbmRleCIsInVzZXJSZXBvcyIsInN0YXJyZWQiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlZHV4U3RvcmUiLCJnZXRTdGF0ZSIsImlkIiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImRhdGEiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztpQkFFZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztBQUVSLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4QyxNQUFNQyxJQUFJLEdBQUdDLFdBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixJQUFWO0FBQUEsR0FBTixDQUF4QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBUEQ7O0dBQU1ILEs7O0tBQUFBLEs7O0FBUU5BLEtBQUssQ0FBQ00sZUFBTjtBQUFBLCtMQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVCxFQUFjQyxVQUFkLFNBQWNBLFVBQWQ7QUFBQSxtQ0FDTEEsVUFBVSxDQUFDQyxRQUFYLEVBREssRUFDZE4sSUFEYyx3QkFDZEEsSUFEYzs7QUFBQSxrQkFFbEIsQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ08sRUFGRztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FHYixFQUhhOztBQUFBO0FBQUE7QUFBQSxtQkFLWUMsMERBQU8sQ0FDdkM7QUFDRUMsaUJBQUcsRUFBRTtBQURQLGFBRHVDLEVBSXZDTCxHQUFHLENBQUNNLEdBSm1DLEVBS3ZDTixHQUFHLENBQUNPLEdBTG1DLENBTG5COztBQUFBO0FBQUE7QUFLUmIscUJBTFEsa0JBS2RjLElBTGM7QUFBQTtBQUFBLG1CQVlVSiwwREFBTyxDQUNyQztBQUNFQyxpQkFBRyxFQUFFO0FBRFAsYUFEcUMsRUFJckNMLEdBQUcsQ0FBQ00sR0FKaUMsRUFLckNOLEdBQUcsQ0FBQ08sR0FMaUMsQ0FaakI7O0FBQUE7QUFBQTtBQVlSWixtQkFaUSxtQkFZZGEsSUFaYztBQUFBLDZDQW1CZjtBQUNMZCx1QkFBUyxFQUFUQSxTQURLO0FBRUxDLHFCQUFPLEVBQVBBO0FBRkssYUFuQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUJlLHFFQUFBYyw4REFBVSxDQUFDaEIsS0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2Y3M2FkNjM1ODZlNTNjMzgzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgdXNlclJlcG9zLCBzdGFycmVkIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPmluZGV4PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCByZWR1eFN0b3JlIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKTtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyUmVwb3MgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhOiBzdGFycmVkIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9zdGFycmVkJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZXBvcyxcclxuICAgIHN0YXJyZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9