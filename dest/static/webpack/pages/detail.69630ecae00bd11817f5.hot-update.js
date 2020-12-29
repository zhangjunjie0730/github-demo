webpackHotUpdate_N_E("pages/detail",{

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getTimeFromNow, genDetailCacheKey, genDetailCacheKeyStrate, genCacheKeyByQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFromNow", function() { return getTimeFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genDetailCacheKey", function() { return genDetailCacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genDetailCacheKeyStrate", function() { return genDetailCacheKeyStrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCacheKeyByQuery", function() { return genCacheKeyByQuery; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var getTimeFromNow = function getTimeFromNow(time) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
};
var genDetailCacheKey = function genDetailCacheKey(ctx) {
  var query = ctx.query,
      pathname = ctx.pathname;
  var owner = query.owner,
      name = query.name;
  return "".concat(pathname, "-").concat(owner, "-").concat(name);
};
var genDetailCacheKeyStrate = function genDetailCacheKeyStrate(context) {
  var ctx = context.ctx;
  return genDetailCacheKey(ctx);
};
var genCacheKeyByQuery = function genCacheKeyByQuery(query) {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0VGltZUZyb21Ob3ciLCJ0aW1lIiwibW9tZW50IiwiZnJvbU5vdyIsImdlbkRldGFpbENhY2hlS2V5IiwiY3R4IiwicXVlcnkiLCJwYXRobmFtZSIsIm93bmVyIiwibmFtZSIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkNhY2hlS2V5QnlRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLElBQUksRUFBSTtBQUNwQyxTQUFPQyw2Q0FBTSxDQUFDRCxJQUFELENBQU4sQ0FBYUUsT0FBYixFQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsR0FBRyxFQUFJO0FBQUEsTUFDOUJDLEtBRDhCLEdBQ1ZELEdBRFUsQ0FDOUJDLEtBRDhCO0FBQUEsTUFDdkJDLFFBRHVCLEdBQ1ZGLEdBRFUsQ0FDdkJFLFFBRHVCO0FBQUEsTUFFOUJDLEtBRjhCLEdBRWRGLEtBRmMsQ0FFOUJFLEtBRjhCO0FBQUEsTUFFdkJDLElBRnVCLEdBRWRILEtBRmMsQ0FFdkJHLElBRnVCO0FBR3RDLG1CQUFVRixRQUFWLGNBQXNCQyxLQUF0QixjQUErQkMsSUFBL0I7QUFDRCxDQUpNO0FBTUEsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFBQyxPQUFPLEVBQUk7QUFBQSxNQUN4Q04sR0FEd0MsR0FDaENNLE9BRGdDLENBQ3hDTixHQUR3QztBQUVoRCxTQUFPRCxpQkFBaUIsQ0FBQ0MsR0FBRCxDQUF4QjtBQUNELENBSE07QUFLQSxJQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFOLEtBQUssRUFBSSxDQUFFLENBQXRDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC42OTYzMGVjYWUwMGJkMTE4MTdmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpbWVGcm9tTm93ID0gdGltZSA9PiB7XHJcbiAgcmV0dXJuIG1vbWVudCh0aW1lKS5mcm9tTm93KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuRGV0YWlsQ2FjaGVLZXkgPSBjdHggPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnksIHBhdGhuYW1lIH0gPSBjdHg7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gcXVlcnk7XHJcbiAgcmV0dXJuIGAke3BhdGhuYW1lfS0ke293bmVyfS0ke25hbWV9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSA9IGNvbnRleHQgPT4ge1xyXG4gIGNvbnN0IHsgY3R4IH0gPSBjb250ZXh0O1xyXG4gIHJldHVybiBnZW5EZXRhaWxDYWNoZUtleShjdHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbkNhY2hlS2V5QnlRdWVyeSA9IHF1ZXJ5ID0+IHt9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9