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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_IssueItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/IssueItem */ "./components/IssueItem/index.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





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

var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_12__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["genDetailCacheKeyStrate"])(context);
  }
}),
    cache = _initClientCache.cache,
    useCache = _initClientCache.useCache;

var Issues = function Issues(_ref) {
  _s();

  var services = _ref.services;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var _router$query = router.query,
      owner = _router$query.owner,
      name = _router$query.name;
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["genDetailCacheKey"])(router, {
    services: services
  }));
  var initIssues = services.initIssues,
      labels = services.labels;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      creator = _useState[0],
      setCreator = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      issueState = _useState2[0],
      setIssueState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      selectedLabels = _useState3[0],
      setSelectedLabels = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initIssues),
      issues = _useState4[0],
      setIssues = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
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
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_11__["request"])({
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
    marginLeft: 20
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "jsx-1648684937" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        allowClear: true,
        onChange: setIssueState,
        value: issueState,
        placeholder: "\u72B6\u6001",
        style: selectCommonStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "all",
          children: "\u5168\u90E8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
            value: label.id,
            children: label.name
          }, label.id, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "issues",
      children: issues.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_IssueItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "1648684937",
      children: ".issues.jsx-1648684937{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-1648684937{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdTLEFBR21DLEFBTVQsc0JBTEssa0JBQ0MsbUJBQ0gsZUFJRyxDQUhyQiw0RkFJQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElzc3VlSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lzc3VlSXRlbSc7XHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcic7XHJcbmltcG9ydCB7IGdlbkRldGFpbENhY2hlS2V5LCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBpbml0Q2xpZW50Q2FjaGUgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSB7XHJcbiAgY29uc3QgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnO1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJyc7XHJcbiAgbGV0IGxhYmVsU3RyID0gJyc7XHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoID4gMCkgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gO1xyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIGFyci5wdXNoKGNyZWF0b3JTdHIpO1xyXG4gIGlmIChzdGF0ZVN0cikgYXJyLnB1c2goc3RhdGVTdHIpO1xyXG4gIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpO1xyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YDtcclxufVxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIsIHsgc2VydmljZXMgfSkpO1xyXG5cclxuICBjb25zdCB7IGluaXRJc3N1ZXMsIGxhYmVscyB9ID0gc2VydmljZXM7XHJcblxyXG4gIGNvbnN0IFtjcmVhdG9yLCBzZXRDcmVhdG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzc3VlU3RhdGUsIHNldElzc3VlU3RhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRMYWJlbHMsIHNldFNlbGVjdGVkTGFiZWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdElzc3Vlcyk7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gc2VsZWN0ZWQgPT4gc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXMoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICB7Lyog562b6YCJ55So5oi3ICovfVxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICAgIHsvKiDnrZvpgInnirbmgIEgKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICB7Lyog562b6YCJ5qCH562+ICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2lubjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpbml0SXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\detail\\\\issues.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(Issues, "cfoBO0JarbLvY2E7mrlJGDnd5Ck=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], useCache];
});

_c = Issues;
Issues.getInitialProps = cache( /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var ctx, _ctx$query, owner, name, _yield$Promise$all, _yield$Promise$all2, initIssues, labels;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context2.next = 4;
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_11__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_11__["request"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJvd25lciIsIm5hbWUiLCJnZW5EZXRhaWxDYWNoZUtleSIsImluaXRJc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXMiLCJzZXRJc3N1ZXMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZmxleEdyb3ciLCJtYXJnaW5uIiwibWFwIiwibGFiZWwiLCJpZCIsIm1hcmdpblJpZ2h0IiwiaXNzdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDO0FBQ3pDLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxxQkFBY0EsT0FBZCxJQUEwQixFQUFwRDtBQUNBLE1BQU1JLFFBQVEsR0FBR0gsS0FBSyxtQkFBWUEsS0FBWixJQUFzQixFQUE1QztBQUNBLE1BQUlJLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUgsTUFBTSxJQUFJQSxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUNELFFBQVEsb0JBQWFILE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLEdBQVosQ0FBYixDQUFSO0FBRWpDLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBRUEsTUFBSUwsVUFBSixFQUFnQkssR0FBRyxDQUFDQyxJQUFKLENBQVNOLFVBQVQ7QUFDaEIsTUFBSUMsUUFBSixFQUFjSSxHQUFHLENBQUNDLElBQUosQ0FBU0wsUUFBVDtBQUNkLE1BQUlDLFFBQUosRUFBY0csR0FBRyxDQUFDQyxJQUFKLENBQVNKLFFBQVQ7QUFFZCxvQkFBV0csR0FBRyxDQUFDRCxJQUFKLENBQVMsR0FBVCxDQUFYO0FBQ0Q7O3VCQUUyQkcsb0VBQWUsQ0FBQztBQUMxQ0MsbUJBQWlCLEVBQUUsMkJBQUFDLE9BQU87QUFBQSxXQUFJQyx1RUFBdUIsQ0FBQ0QsT0FBRCxDQUEzQjtBQUFBO0FBRGdCLENBQUQsQztJQUFuQ0UsSyxvQkFBQUEsSztJQUFPQyxRLG9CQUFBQSxROztBQUlmLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0Isc0JBRVBELE1BQU0sQ0FBQ0UsS0FGQTtBQUFBLE1BRXZCQyxLQUZ1QixpQkFFdkJBLEtBRnVCO0FBQUEsTUFFaEJDLElBRmdCLGlCQUVoQkEsSUFGZ0I7QUFHL0JQLFVBQVEsQ0FBQ1EsaUVBQWlCLENBQUNMLE1BQUQsRUFBUztBQUFFRCxZQUFRLEVBQVJBO0FBQUYsR0FBVCxDQUFsQixDQUFSO0FBSCtCLE1BS3ZCTyxVQUx1QixHQUtBUCxRQUxBLENBS3ZCTyxVQUx1QjtBQUFBLE1BS1h0QixNQUxXLEdBS0FlLFFBTEEsQ0FLWGYsTUFMVzs7QUFBQSxrQkFPRHVCLHNEQUFRLEVBUFA7QUFBQSxNQU94QnpCLE9BUHdCO0FBQUEsTUFPZjBCLFVBUGU7O0FBQUEsbUJBUUtELHNEQUFRLEVBUmI7QUFBQSxNQVF4QkUsVUFSd0I7QUFBQSxNQVFaQyxhQVJZOztBQUFBLG1CQVNhSCxzREFBUSxDQUFDLEVBQUQsQ0FUckI7QUFBQSxNQVN4QkksY0FUd0I7QUFBQSxNQVNSQyxpQkFUUTs7QUFBQSxtQkFVSEwsc0RBQVEsQ0FBQ0QsVUFBRCxDQVZMO0FBQUEsTUFVeEJPLE1BVndCO0FBQUEsTUFVaEJDLFNBVmdCOztBQUFBLG1CQVdDUCxzREFBUSxDQUFDLEtBQUQsQ0FYVDtBQUFBLE1BV3hCUSxRQVh3QjtBQUFBLE1BV2RDLFdBWGM7O0FBWS9CLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFdBQUlOLGlCQUFpQixDQUFDTSxRQUFELENBQXJCO0FBQUEsR0FBbkM7O0FBRUEsTUFBTUMsWUFBWTtBQUFBLGlNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJILHlCQUFXLENBQUMsS0FBRCxDQUFYO0FBRG1CO0FBQUEscUJBRWtCSSwyREFBTyxDQUFDO0FBQzNDQyxtQkFBRyxtQkFBWWxCLEtBQVosY0FBcUJDLElBQXJCLG9CQUFtQ3ZCLFNBQVMsQ0FBQ0MsT0FBRCxFQUFVMkIsVUFBVixFQUFzQkUsY0FBdEIsQ0FBNUM7QUFEd0MsZUFBRCxDQUZ6Qjs7QUFBQTtBQUFBO0FBRUxXLDBCQUZLLGtCQUVYQyxJQUZXO0FBS25CVCx1QkFBUyxDQUFDUSxZQUFELENBQVQ7QUFDQU4seUJBQVcsQ0FBQyxLQUFELENBQVg7O0FBTm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpHLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBU0EsTUFBTUssaUJBQWlCLEdBQUc7QUFDeEJDLGFBQVMsRUFBRSxZQURhO0FBRXhCQyxTQUFLLEVBQUUsR0FGaUI7QUFHeEJDLGNBQVUsRUFBRTtBQUhZLEdBQTFCO0FBTUEsc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxRQUFmO0FBQUEsOEJBRUUscUVBQUMsOERBQUQ7QUFBWSxhQUFLLEVBQUU3QyxPQUFuQjtBQUE0QixnQkFBUSxFQUFFMEIsVUFBdEM7QUFBa0QsYUFBSyxFQUFFZ0I7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBSUUscUVBQUMsMkNBQUQ7QUFDRSxrQkFBVSxNQURaO0FBRUUsZ0JBQVEsRUFBRWQsYUFGWjtBQUdFLGFBQUssRUFBRUQsVUFIVDtBQUlFLG1CQUFXLEVBQUMsY0FKZDtBQUtFLGFBQUssRUFBRWUsaUJBTFQ7QUFBQSxnQ0FPRSxxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBZSxlQUFLLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRSxxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBZSxlQUFLLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRSxxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBZSxlQUFLLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFnQkUscUVBQUMsMkNBQUQ7QUFDRSxrQkFBVSxNQURaO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxnQkFBUSxFQUFFUCxrQkFIWjtBQUlFLGFBQUssRUFBRU4sY0FKVDtBQUtFLG1CQUFXLEVBQUMsT0FMZDtBQU1FLGFBQUssRUFBRTtBQUFFaUIsa0JBQVEsRUFBRSxDQUFaO0FBQWVGLGVBQUssRUFBRSxHQUF0QjtBQUEyQkcsaUJBQU8sRUFBRTtBQUFwQyxTQU5UO0FBQUEsa0JBUUc3QyxNQUFNLENBQUM4QyxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDhCQUNmLHFFQUFDLDJDQUFELENBQVEsTUFBUjtBQUFlLGlCQUFLLEVBQUVBLEtBQUssQ0FBQ0MsRUFBNUI7QUFBQSxzQkFDR0QsS0FBSyxDQUFDM0I7QUFEVCxhQUFxQzJCLEtBQUssQ0FBQ0MsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQThCRSxxRUFBQywyQ0FBRDtBQUNFLGVBQU8sRUFBRWpCLFFBRFg7QUFFRSxlQUFPLEVBQUVJLFlBRlg7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLFlBQUksRUFBQyxTQUpQO0FBS0UsYUFBSyxFQUFFO0FBQUVjLHFCQUFXLEVBQUU7QUFBZixTQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBeUNFO0FBQUEsMENBQWUsUUFBZjtBQUFBLGdCQUNHcEIsTUFBTSxDQUFDaUIsR0FBUCxDQUFXLFVBQUFJLEtBQUs7QUFBQSw0QkFDZixxRUFBQyw2REFBRDtBQUEwQixlQUFLLEVBQUVBO0FBQWpDLFdBQWdCQSxLQUFLLENBQUNGLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0E1RkQ7O0dBQU1sQyxNO1VBQ1dHLHFELEVBRWZKLFE7OztLQUhJQyxNO0FBOEZOQSxNQUFNLENBQUNxQyxlQUFQLEdBQXlCdkMsS0FBSztBQUFBLCtMQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3dDLGVBQVQsU0FBU0EsR0FBVDtBQUFBLHlCQUNMQSxHQUFHLENBQUNsQyxLQURDLEVBQ3JCQyxLQURxQixjQUNyQkEsS0FEcUIsRUFDZEMsSUFEYyxjQUNkQSxJQURjO0FBQUE7QUFBQSxtQkFFMEJpQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNqRWxCLDJEQUFPLENBQUM7QUFBRUMsaUJBQUcsbUJBQVlsQixLQUFaLGNBQXFCQyxJQUFyQjtBQUFMLGFBQUQsRUFBNENnQyxHQUFHLENBQUNHLEdBQWhELEVBQXFESCxHQUFHLENBQUNJLEdBQXpELENBRDBELEVBRWpFcEIsMkRBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWWxCLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q2dDLEdBQUcsQ0FBQ0csR0FBaEQsRUFBcURILEdBQUcsQ0FBQ0ksR0FBekQsQ0FGMEQsQ0FBWixDQUYxQjs7QUFBQTtBQUFBO0FBQUE7QUFFZGxDLHNCQUZjLDBCQUVwQmlCLElBRm9CO0FBRVF2QyxrQkFGUiwwQkFFRXVDLElBRkY7QUFBQSw4Q0FPdEI7QUFDTHhCLHNCQUFRLEVBQUU7QUFDUk8sMEJBQVUsRUFBVkEsVUFEUTtBQUVSdEIsc0JBQU0sRUFBTkE7QUFGUTtBQURMLGFBUHNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUI7QUFlZWMscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL2lzc3Vlcy4yZjkyMDk1YzA4ODEyNzJiYzUxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElzc3VlSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lzc3VlSXRlbSc7XHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcic7XHJcbmltcG9ydCB7IGdlbkRldGFpbENhY2hlS2V5LCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBpbml0Q2xpZW50Q2FjaGUgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSB7XHJcbiAgY29uc3QgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnO1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJyc7XHJcbiAgbGV0IGxhYmVsU3RyID0gJyc7XHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoID4gMCkgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gO1xyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIGFyci5wdXNoKGNyZWF0b3JTdHIpO1xyXG4gIGlmIChzdGF0ZVN0cikgYXJyLnB1c2goc3RhdGVTdHIpO1xyXG4gIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpO1xyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YDtcclxufVxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICB1c2VDYWNoZShnZW5EZXRhaWxDYWNoZUtleShyb3V0ZXIsIHsgc2VydmljZXMgfSkpO1xyXG5cclxuICBjb25zdCB7IGluaXRJc3N1ZXMsIGxhYmVscyB9ID0gc2VydmljZXM7XHJcblxyXG4gIGNvbnN0IFtjcmVhdG9yLCBzZXRDcmVhdG9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2lzc3VlU3RhdGUsIHNldElzc3VlU3RhdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRMYWJlbHMsIHNldFNlbGVjdGVkTGFiZWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdElzc3Vlcyk7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gc2VsZWN0ZWQgPT4gc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXMoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICB7Lyog562b6YCJ55So5oi3ICovfVxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICAgIHsvKiDnrZvpgInnirbmgIEgKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICB7Lyog562b6YCJ5qCH562+ICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2lubjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpbml0SXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=