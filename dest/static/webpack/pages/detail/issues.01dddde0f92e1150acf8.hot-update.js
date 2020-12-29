webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./components/SearchUser/index.jsx":
/*!*****************************************!*\
  !*** ./components/SearchUser/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "E:\\MyGit\\github-demo\\components\\SearchUser\\index.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SearchUser(_ref) {
  _s();

  var _this = this;

  var onChange = _ref.onChange,
      value = _ref.value,
      style = _ref.style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1]; // 对比前后请求id是否相同，如果不同说明网络延迟有多次请求，当前的请求作废


  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(0);
  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_5__["debounce"])( /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(searchValue, fetchId) {
      var _yield$request, data, userOptions;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(true);
              setOptions([]);
              _context.next = 4;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__["request"])({
                url: "/search/users?q=".concat(searchValue)
              });

            case 4:
              _yield$request = _context.sent;
              data = _yield$request.data;
              // 客户端发送请求就不需要req和res了
              userOptions = data.items.map(function (user) {
                return {
                  text: user.login,
                  value: user.login
                };
              });

              if (fetchId === lastFetchIdRef.current) {
                setOptions(userOptions);
              } else {
                // 不相等跳过当前请求，继续下一次发送
                setOptions([]);
              }

              setFetching(false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(), 500), []);

  var fetchUserBefore = function fetchUserBefore(searchValue) {
    lastFetchIdRef.current += 1;
    if (searchValue.trim()) return fetchUser(searchValue, lastFetchIdRef.current);
    return null;
  };

  var handleChange = function handleChange(searchValue) {
    onChange(searchValue);
    setOptions([]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    allowClear: true,
    showSearch: true,
    value: value,
    onChange: handleChange,
    onSearch: fetchUserBefore,
    notFoundContent: fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Spin"], {
      size: "small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 35
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      children: "not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 59
    }, this),
    filterOption: false // 禁用本地搜索
    ,
    placeholder: "\u521B\u5EFA\u8005",
    style: _objectSpread({
      width: 200
    }, style),
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
        value: option.value,
        children: option.text
      }, option.value, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(SearchUser, "t7221cDBBqotOs9CBcLoV0ghUdo=");

_c = SearchUser;
/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

var _c;

$RefreshReg$(_c, "SearchUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInN0eWxlIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsYXN0RmV0Y2hJZFJlZiIsInVzZVJlZiIsImZldGNoVXNlciIsInVzZUNhbGxiYWNrIiwiZGVib3VuY2UiLCJzZWFyY2hWYWx1ZSIsImZldGNoSWQiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsInVzZXJPcHRpb25zIiwiaXRlbXMiLCJtYXAiLCJ1c2VyIiwidGV4dCIsImxvZ2luIiwiY3VycmVudCIsImZldGNoVXNlckJlZm9yZSIsInRyaW0iLCJoYW5kbGVDaGFuZ2UiLCJ3aWR0aCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxPQUFnRDtBQUFBOztBQUFBOztBQUFBLE1BQTFCQyxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNkQyxzREFBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ3ZDQyxRQUR1QztBQUFBLE1BQzdCQyxXQUQ2Qjs7QUFBQSxtQkFFaEJGLHNEQUFRLENBQUMsRUFBRCxDQUZRO0FBQUEsTUFFdkNHLE9BRnVDO0FBQUEsTUFFOUJDLFVBRjhCLGtCQUc5Qzs7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBN0I7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQzNCQyx1REFBUTtBQUFBLGlNQUFDLGlCQUFPQyxXQUFQLEVBQW9CQyxPQUFwQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BULHlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FFLHdCQUFVLENBQUMsRUFBRCxDQUFWO0FBRk87QUFBQSxxQkFHZ0JRLDBEQUFPLENBQUM7QUFBRUMsbUJBQUcsNEJBQXFCSCxXQUFyQjtBQUFMLGVBQUQsQ0FIdkI7O0FBQUE7QUFBQTtBQUdDSSxrQkFIRCxrQkFHQ0EsSUFIRDtBQUdvRTtBQUNyRUMseUJBSkMsR0FJYUQsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFBQyxJQUFJO0FBQUEsdUJBQUs7QUFBRUMsc0JBQUksRUFBRUQsSUFBSSxDQUFDRSxLQUFiO0FBQW9CdEIsdUJBQUssRUFBRW9CLElBQUksQ0FBQ0U7QUFBaEMsaUJBQUw7QUFBQSxlQUFuQixDQUpiOztBQU1QLGtCQUFJVCxPQUFPLEtBQUtOLGNBQWMsQ0FBQ2dCLE9BQS9CLEVBQXdDO0FBQ3RDakIsMEJBQVUsQ0FBQ1csV0FBRCxDQUFWO0FBQ0QsZUFGRCxNQUVPO0FBQ0w7QUFDQVgsMEJBQVUsQ0FBQyxFQUFELENBQVY7QUFDRDs7QUFDREYseUJBQVcsQ0FBQyxLQUFELENBQVg7O0FBWk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWFMLEdBYkssQ0FEbUIsRUFlM0IsRUFmMkIsQ0FBN0I7O0FBa0JBLE1BQU1vQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFaLFdBQVcsRUFBSTtBQUNyQ0wsa0JBQWMsQ0FBQ2dCLE9BQWYsSUFBMEIsQ0FBMUI7QUFDQSxRQUFJWCxXQUFXLENBQUNhLElBQVosRUFBSixFQUF3QixPQUFPaEIsU0FBUyxDQUFDRyxXQUFELEVBQWNMLGNBQWMsQ0FBQ2dCLE9BQTdCLENBQWhCO0FBQ3hCLFdBQU8sSUFBUDtBQUNELEdBSkQ7O0FBTUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQWQsV0FBVyxFQUFJO0FBQ2xDYixZQUFRLENBQUNhLFdBQUQsQ0FBUjtBQUNBTixjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSxxRUFBQywyQ0FBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLGNBQVUsTUFGWjtBQUdFLFNBQUssRUFBRU4sS0FIVDtBQUlFLFlBQVEsRUFBRTBCLFlBSlo7QUFLRSxZQUFRLEVBQUVGLGVBTFo7QUFNRSxtQkFBZSxFQUFFckIsUUFBUSxnQkFBRyxxRUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxnQkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOdEQ7QUFPRSxnQkFBWSxFQUFFLEtBUGhCLENBT3VCO0FBUHZCO0FBUUUsZUFBVyxFQUFDLG9CQVJkO0FBU0UsU0FBSztBQUFJd0IsV0FBSyxFQUFFO0FBQVgsT0FBbUIxQixLQUFuQixDQVRQO0FBQUEsY0FXR0ksT0FBTyxDQUFDYyxHQUFSLENBQVksVUFBQVMsTUFBTTtBQUFBLDBCQUNqQixxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBa0MsYUFBSyxFQUFFQSxNQUFNLENBQUM1QixLQUFoRDtBQUFBLGtCQUNHNEIsTUFBTSxDQUFDUDtBQURWLFNBQW9CTyxNQUFNLENBQUM1QixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBbEI7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBdERRRixVOztLQUFBQSxVO0FBd0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjAxZGRkZGUwZjkyZTExNTBhY2Y4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKHsgb25DaGFuZ2UsIHZhbHVlLCBzdHlsZSB9KSB7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIOWvueavlOWJjeWQjuivt+axgmlk5piv5ZCm55u45ZCM77yM5aaC5p6c5LiN5ZCM6K+05piO572R57uc5bu26L+f5pyJ5aSa5qyh6K+35rGC77yM5b2T5YmN55qE6K+35rGC5L2c5bqfXHJcbiAgY29uc3QgbGFzdEZldGNoSWRSZWYgPSB1c2VSZWYoMCk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZGVib3VuY2UoYXN5bmMgKHNlYXJjaFZhbHVlLCBmZXRjaElkKSA9PiB7XHJcbiAgICAgIHNldEZldGNoaW5nKHRydWUpO1xyXG4gICAgICBzZXRPcHRpb25zKFtdKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBgL3NlYXJjaC91c2Vycz9xPSR7c2VhcmNoVmFsdWV9YCB9KTsgLy8g5a6i5oi356uv5Y+R6YCB6K+35rGC5bCx5LiN6ZyA6KaBcmVx5ZKMcmVz5LqGXHJcbiAgICAgIGNvbnN0IHVzZXJPcHRpb25zID0gZGF0YS5pdGVtcy5tYXAodXNlciA9PiAoeyB0ZXh0OiB1c2VyLmxvZ2luLCB2YWx1ZTogdXNlci5sb2dpbiB9KSk7XHJcblxyXG4gICAgICBpZiAoZmV0Y2hJZCA9PT0gbGFzdEZldGNoSWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHNldE9wdGlvbnModXNlck9wdGlvbnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOS4jeebuOetiei3s+i/h+W9k+WJjeivt+axgu+8jOe7p+e7reS4i+S4gOasoeWPkemAgVxyXG4gICAgICAgIHNldE9wdGlvbnMoW10pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckJlZm9yZSA9IHNlYXJjaFZhbHVlID0+IHtcclxuICAgIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQgKz0gMTtcclxuICAgIGlmIChzZWFyY2hWYWx1ZS50cmltKCkpIHJldHVybiBmZXRjaFVzZXIoc2VhcmNoVmFsdWUsIGxhc3RGZXRjaElkUmVmLmN1cnJlbnQpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xyXG4gICAgb25DaGFuZ2Uoc2VhcmNoVmFsdWUpO1xyXG4gICAgc2V0T3B0aW9ucyhbXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWxlY3RcclxuICAgICAgYWxsb3dDbGVhclxyXG4gICAgICBzaG93U2VhcmNoXHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgb25TZWFyY2g9e2ZldGNoVXNlckJlZm9yZX1cclxuICAgICAgbm90Rm91bmRDb250ZW50PXtmZXRjaGluZyA/IDxTcGluIHNpemU9XCJzbWFsbFwiIC8+IDogPHNwYW4+bm90IGZvdW5kPC9zcGFuPn1cclxuICAgICAgZmlsdGVyT3B0aW9uPXtmYWxzZX0gLy8g56aB55So5pys5Zyw5pCc57SiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwi5Yib5bu66ICFXCJcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IDIwMCwgLi4uc3R5bGUgfX1cclxuICAgID5cclxuICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiAoXHJcbiAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxyXG4gICAgICAgICAge29wdGlvbi50ZXh0fVxyXG4gICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L1NlbGVjdD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hVc2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9