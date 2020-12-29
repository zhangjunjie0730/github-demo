webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./components/SearchUser/index.jsx":
/*!*****************************************!*\
  !*** ./components/SearchUser/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "E:\\MyGit\\github-demo\\components\\SearchUser\\index.jsx",
    _s = $RefreshSig$();






function SearchUser(_ref) {
  _s();

  var _this = this;

  var onChange = _ref.onChange,
      value = _ref.value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      fetching = _useState[0],
      setFetching = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1]; // 对比前后请求id是否相同，如果不同说明网络延迟有多次请求，当前的请求作废


  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);
  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["debounce"])( /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(searchValue, fetchId) {
      var _yield$request, data, userOptions;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(true);
              setOptions([]);
              _context.next = 4;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["request"])({
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    allowClear: true,
    showSearch: true,
    value: value,
    onChange: handleChange,
    onSearch: fetchUserBefore,
    notFoundContent: fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
      size: "small"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 35
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      children: "not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 59
    }, this),
    filterOption: false // 禁用本地搜索
    ,
    placeholder: "\u521B\u5EFA\u8005",
    style: {
      width: 200
    },
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hVc2VyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hVc2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibGFzdEZldGNoSWRSZWYiLCJ1c2VSZWYiLCJmZXRjaFVzZXIiLCJ1c2VDYWxsYmFjayIsImRlYm91bmNlIiwic2VhcmNoVmFsdWUiLCJmZXRjaElkIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJ1c2VyT3B0aW9ucyIsIml0ZW1zIiwibWFwIiwidXNlciIsInRleHQiLCJsb2dpbiIsImN1cnJlbnQiLCJmZXRjaFVzZXJCZWZvcmUiLCJ0cmltIiwiaGFuZGxlQ2hhbmdlIiwid2lkdGgiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEtBQUQsQ0FERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFBQSxtQkFFVEYsc0RBQVEsQ0FBQyxFQUFELENBRkM7QUFBQSxNQUVoQ0csT0FGZ0M7QUFBQSxNQUV2QkMsVUFGdUIsa0JBR3ZDOzs7QUFDQSxNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQUMsQ0FBRCxDQUE3QjtBQUVBLE1BQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FDM0JDLHVEQUFRO0FBQUEsaU1BQUMsaUJBQU9DLFdBQVAsRUFBb0JDLE9BQXBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUFQseUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUUsd0JBQVUsQ0FBQyxFQUFELENBQVY7QUFGTztBQUFBLHFCQUdnQlEsMERBQU8sQ0FBQztBQUFFQyxtQkFBRyw0QkFBcUJILFdBQXJCO0FBQUwsZUFBRCxDQUh2Qjs7QUFBQTtBQUFBO0FBR0NJLGtCQUhELGtCQUdDQSxJQUhEO0FBR29FO0FBQ3JFQyx5QkFKQyxHQUlhRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSx1QkFBSztBQUFFQyxzQkFBSSxFQUFFRCxJQUFJLENBQUNFLEtBQWI7QUFBb0JyQix1QkFBSyxFQUFFbUIsSUFBSSxDQUFDRTtBQUFoQyxpQkFBTDtBQUFBLGVBQW5CLENBSmI7O0FBTVAsa0JBQUlULE9BQU8sS0FBS04sY0FBYyxDQUFDZ0IsT0FBL0IsRUFBd0M7QUFDdENqQiwwQkFBVSxDQUFDVyxXQUFELENBQVY7QUFDRCxlQUZELE1BRU87QUFDTDtBQUNBWCwwQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNEOztBQUNERix5QkFBVyxDQUFDLEtBQUQsQ0FBWDs7QUFaTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BYUwsR0FiSyxDQURtQixFQWUzQixFQWYyQixDQUE3Qjs7QUFrQkEsTUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQVosV0FBVyxFQUFJO0FBQ3JDTCxrQkFBYyxDQUFDZ0IsT0FBZixJQUEwQixDQUExQjtBQUNBLFFBQUlYLFdBQVcsQ0FBQ2EsSUFBWixFQUFKLEVBQXdCLE9BQU9oQixTQUFTLENBQUNHLFdBQUQsRUFBY0wsY0FBYyxDQUFDZ0IsT0FBN0IsQ0FBaEI7QUFDeEIsV0FBTyxJQUFQO0FBQ0QsR0FKRDs7QUFNQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBZCxXQUFXLEVBQUk7QUFDbENaLFlBQVEsQ0FBQ1ksV0FBRCxDQUFSO0FBQ0FOLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFFQUFDLDJDQUFEO0FBQ0UsY0FBVSxNQURaO0FBRUUsY0FBVSxNQUZaO0FBR0UsU0FBSyxFQUFFTCxLQUhUO0FBSUUsWUFBUSxFQUFFeUIsWUFKWjtBQUtFLFlBQVEsRUFBRUYsZUFMWjtBQU1FLG1CQUFlLEVBQUVyQixRQUFRLGdCQUFHLHFFQUFDLHlDQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU50RDtBQU9FLGdCQUFZLEVBQUUsS0FQaEIsQ0FPdUI7QUFQdkI7QUFRRSxlQUFXLEVBQUMsb0JBUmQ7QUFTRSxTQUFLLEVBQUU7QUFBRXdCLFdBQUssRUFBRTtBQUFULEtBVFQ7QUFBQSxjQVdHdEIsT0FBTyxDQUFDYyxHQUFSLENBQVksVUFBQVMsTUFBTTtBQUFBLDBCQUNqQixxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBa0MsYUFBSyxFQUFFQSxNQUFNLENBQUMzQixLQUFoRDtBQUFBLGtCQUNHMkIsTUFBTSxDQUFDUDtBQURWLFNBQW9CTyxNQUFNLENBQUMzQixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBbEI7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBdERRRixVOztLQUFBQSxVO0FBd0RNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjE1Yzc1ZTVkYmQ2ODQ2ZWI0M2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hVc2VyKHsgb25DaGFuZ2UsIHZhbHVlIH0pIHtcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g5a+55q+U5YmN5ZCO6K+35rGCaWTmmK/lkKbnm7jlkIzvvIzlpoLmnpzkuI3lkIzor7TmmI7nvZHnu5zlu7bov5/mnInlpJrmrKHor7fmsYLvvIzlvZPliY3nmoTor7fmsYLkvZzlup9cclxuICBjb25zdCBsYXN0RmV0Y2hJZFJlZiA9IHVzZVJlZigwKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gdXNlQ2FsbGJhY2soXHJcbiAgICBkZWJvdW5jZShhc3luYyAoc2VhcmNoVmFsdWUsIGZldGNoSWQpID0+IHtcclxuICAgICAgc2V0RmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICAgIHNldE9wdGlvbnMoW10pO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IGAvc2VhcmNoL3VzZXJzP3E9JHtzZWFyY2hWYWx1ZX1gIH0pOyAvLyDlrqLmiLfnq6/lj5HpgIHor7fmsYLlsLHkuI3pnIDopoFyZXHlkoxyZXPkuoZcclxuICAgICAgY29uc3QgdXNlck9wdGlvbnMgPSBkYXRhLml0ZW1zLm1hcCh1c2VyID0+ICh7IHRleHQ6IHVzZXIubG9naW4sIHZhbHVlOiB1c2VyLmxvZ2luIH0pKTtcclxuXHJcbiAgICAgIGlmIChmZXRjaElkID09PSBsYXN0RmV0Y2hJZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0T3B0aW9ucyh1c2VyT3B0aW9ucyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g5LiN55u4562J6Lez6L+H5b2T5YmN6K+35rGC77yM57un57ut5LiL5LiA5qyh5Y+R6YCBXHJcbiAgICAgICAgc2V0T3B0aW9ucyhbXSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyQmVmb3JlID0gc2VhcmNoVmFsdWUgPT4ge1xyXG4gICAgbGFzdEZldGNoSWRSZWYuY3VycmVudCArPSAxO1xyXG4gICAgaWYgKHNlYXJjaFZhbHVlLnRyaW0oKSkgcmV0dXJuIGZldGNoVXNlcihzZWFyY2hWYWx1ZSwgbGFzdEZldGNoSWRSZWYuY3VycmVudCk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBzZWFyY2hWYWx1ZSA9PiB7XHJcbiAgICBvbkNoYW5nZShzZWFyY2hWYWx1ZSk7XHJcbiAgICBzZXRPcHRpb25zKFtdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlbGVjdFxyXG4gICAgICBhbGxvd0NsZWFyXHJcbiAgICAgIHNob3dTZWFyY2hcclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBvblNlYXJjaD17ZmV0Y2hVc2VyQmVmb3JlfVxyXG4gICAgICBub3RGb3VuZENvbnRlbnQ9e2ZldGNoaW5nID8gPFNwaW4gc2l6ZT1cInNtYWxsXCIgLz4gOiA8c3Bhbj5ub3QgZm91bmQ8L3NwYW4+fVxyXG4gICAgICBmaWx0ZXJPcHRpb249e2ZhbHNlfSAvLyDnpoHnlKjmnKzlnLDmkJzntKJcclxuICAgICAgcGxhY2Vob2xkZXI9XCLliJvlu7rogIVcIlxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogMjAwIH19XHJcbiAgICA+XHJcbiAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4gKFxyXG4gICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cclxuICAgICAgICAgIHtvcHRpb24udGV4dH1cclxuICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TZWxlY3Q+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==