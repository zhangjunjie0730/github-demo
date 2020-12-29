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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_IssueItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/IssueItem */ "./components/IssueItem/index.jsx");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PageLoading */ "./components/PageLoading/index.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");






var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\detail\\issues.jsx",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











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

var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_14__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var _router$query = router.query,
      owner = _router$query.owner,
      name = _router$query.name;
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["genDetailCacheKey"])(router, {
    services: services
  }));
  var initIssues = services.initIssues,
      labels = services.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      creator = _useState[0],
      setCreator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      issueState = _useState2[0],
      setIssueState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      selectedLabels = _useState3[0],
      setSelectedLabels = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(initIssues),
      issues = _useState4[0],
      setIssues = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      fetching = _useState5[0],
      setFetching = _useState5[1];

  var handleLabelsChange = function handleLabelsChange(selected) {
    return setSelectedLabels(selected);
  };

  var handleSearch = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _yield$request, searchIssues;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(false);
              _context.next = 3;
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_13__["request"])({
                url: "/repos/".concat(owner, "/").concat(name, "/issues").concat(makeQuery(creator, issueState, selectedLabels))
              });

            case 3:
              _yield$request = _context.sent;
              searchIssues = _yield$request.data;
              setIssues(searchIssues);
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
    marginLeft: 20,
    marginTop: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "jsx-1648684937" + " " + "root",
    children: [fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_PageLoading__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_11__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        allowClear: true,
        onChange: setIssueState,
        value: issueState,
        placeholder: "\u72B6\u6001",
        style: selectCommonStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
          value: "all",
          children: "\u5168\u90E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"], {
        allowClear: true,
        mode: "multiple",
        onChange: handleLabelsChange,
        value: selectedLabels,
        placeholder: "Label",
        style: _objectSpread({
          flexGrow: 1,
          width: 200,
          marginn: '0 20px'
        }, selectCommonStyle),
        children: labels.map(function (label) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Select"].Option, {
            value: label.id,
            children: label.name
          }, label.id, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        loading: fetching,
        onClick: handleSearch,
        size: "small",
        type: "primary",
        style: {
          marginRight: 11
        },
        children: "\u641C\u7D22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "issues",
      children: issues.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_IssueItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1648684937",
      children: ".issues.jsx-1648684937{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-1648684937{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdTLEFBR21DLEFBTVQsc0JBTEssa0JBQ0MsbUJBQ0gsZUFJRyxDQUhyQiw0RkFJQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElzc3VlSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lzc3VlSXRlbSc7XHJcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VMb2FkaW5nJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXksIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBjb25zdCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJyc7XHJcbiAgY29uc3Qgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJztcclxuICBsZXQgbGFiZWxTdHIgPSAnJztcclxuICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWA7XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG5cclxuICBpZiAoY3JlYXRvclN0cikgYXJyLnB1c2goY3JlYXRvclN0cik7XHJcbiAgaWYgKHN0YXRlU3RyKSBhcnIucHVzaChzdGF0ZVN0cik7XHJcbiAgaWYgKGxhYmVsU3RyKSBhcnIucHVzaChsYWJlbFN0cik7XHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gO1xyXG59XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENsaWVudENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KSxcclxufSk7XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaW5pdElzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlcztcclxuXHJcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExhYmVscywgc2V0U2VsZWN0ZWRMYWJlbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc3N1ZXMsIHNldElzc3Vlc10gPSB1c2VTdGF0ZShpbml0SXNzdWVzKTtcclxuICBjb25zdCBbZmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVMYWJlbHNDaGFuZ2UgPSBzZWxlY3RlZCA9PiBzZXRTZWxlY3RlZExhYmVscyhzZWxlY3RlZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgZGF0YTogc2VhcmNoSXNzdWVzIH0gPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzJHttYWtlUXVlcnkoY3JlYXRvciwgaXNzdWVTdGF0ZSwgc2VsZWN0ZWRMYWJlbHMpfWAsXHJcbiAgICB9KTtcclxuICAgIHNldElzc3VlcyhzZWFyY2hJc3N1ZXMpO1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbGVjdENvbW1vblN0eWxlID0ge1xyXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgbWFyZ2luTGVmdDogMjAsXHJcbiAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAge2ZldGNoaW5nID8gPFBhZ2VMb2FkaW5nIC8+IDogbnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICB7Lyog562b6YCJ55So5oi3ICovfVxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICAgIHsvKiDnrZvpgInnirbmgIEgKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICB7Lyog562b6YCJ5qCH562+ICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2lubjogJzAgMjBweCcsIC4uLnNlbGVjdENvbW1vblN0eWxlIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaW5pdElzc3VlcyB9LCB7IGRhdGE6IGxhYmVscyB9XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXJ2aWNlczoge1xyXG4gICAgICBpbml0SXNzdWVzLFxyXG4gICAgICBsYWJlbHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXNzdWVzO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\detail\\\\issues.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(Issues, "cfoBO0JarbLvY2E7mrlJGDnd5Ck=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], useCache];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref3) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, initIssues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context2.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_13__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_13__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
            initIssues = _yield$Promise$all2[0].data;
            labels = _yield$Promise$all2[1].data;
            return _context2.abrupt("return", {
              services: {
                initIssues: initIssues,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJvd25lciIsIm5hbWUiLCJnZW5EZXRhaWxDYWNoZUtleSIsImluaXRJc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXMiLCJzZXRJc3N1ZXMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiZmxleEdyb3ciLCJtYXJnaW5uIiwibWFwIiwibGFiZWwiLCJpZCIsIm1hcmdpblJpZ2h0IiwiaXNzdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMs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QTtBQUFBO0FBQUE7QUFBQTtBQUFTeUMsZUFBVCxTQUFTQSxHQUFUO0FBQUEseUJBQ0xBLEdBQUcsQ0FBQ25DLEtBREMsRUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQixFQUNkQyxJQURjLGNBQ2RBLElBRGM7QUFBQTtBQUFBLG1CQUUwQmtDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ2pFbkIsMkRBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWWxCLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q2lDLEdBQUcsQ0FBQ0csR0FBaEQsRUFBcURILEdBQUcsQ0FBQ0ksR0FBekQsQ0FEMEQsRUFFakVyQiwyREFBTyxDQUFDO0FBQUVDLGlCQUFHLG1CQUFZbEIsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDaUMsR0FBRyxDQUFDRyxHQUFoRCxFQUFxREgsR0FBRyxDQUFDSSxHQUF6RCxDQUYwRCxDQUFaLENBRjFCOztBQUFBO0FBQUE7QUFBQTtBQUVkbkMsc0JBRmMsMEJBRXBCaUIsSUFGb0I7QUFFUXZDLGtCQUZSLDBCQUVFdUMsSUFGRjtBQUFBLDhDQU90QjtBQUNMeEIsc0JBQVEsRUFBRTtBQUNSTywwQkFBVSxFQUFWQSxVQURRO0FBRVJ0QixzQkFBTSxFQUFOQTtBQUZRO0FBREwsYUFQc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QjtBQWVlYyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjYxNTE0OTQ0MWYxZDJkOGNkODc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXNzdWVJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXNzdWVJdGVtJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJztcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnO1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnO1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YDtcclxuXHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKTtcclxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKTtcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWA7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2xpZW50Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiBjb250ZXh0ID0+IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpLFxyXG59KTtcclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICAgIG1hcmdpblRvcDogMjAsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICB7ZmV0Y2hpbmcgPyA8UGFnZUxvYWRpbmcgLz4gOiBudWxsfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxyXG4gICAgICAgIHsvKiDnrZvpgInnlKjmiLcgKi99XHJcbiAgICAgICAgPFNlYXJjaFVzZXIgdmFsdWU9e2NyZWF0b3J9IG9uQ2hhbmdlPXtzZXRDcmVhdG9yfSBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9IC8+XHJcbiAgICAgICAgey8qIOetm+mAieeKtuaAgSAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0SXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHZhbHVlPXtpc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxyXG4gICAgICAgICAgc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiY2xvc2VkXCI+Y2xvc2VkPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIHsvKiDnrZvpgInmoIfnrb4gKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbHNDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMYWJlbHN9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhYmVsXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZsZXhHcm93OiAxLCB3aWR0aDogMjAwLCBtYXJnaW5uOiAnMCAyMHB4JywgLi4uc2VsZWN0Q29tbW9uU3R5bGUgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpbml0SXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=