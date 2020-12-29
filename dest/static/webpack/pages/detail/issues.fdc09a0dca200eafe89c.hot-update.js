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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(issues),
      issuesChange = _useState4[0],
      setIssuesChange = _useState4[1];

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
                url: "/repos/".concat(owner, "/").concat(name, "/issuesChange").concat(makeQuery(creator, issueState, selectedLabels))
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
    className: "jsx-1648684937" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
            lineNumber: 84,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-1648684937" + " " + "issues",
      children: issuesChange.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_IssueItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "1648684937",
      children: ".issues.jsx-1648684937{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-1648684937{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dTLEFBR21DLEFBTVQsc0JBTEssa0JBQ0MsbUJBQ0gsZUFJRyxDQUhyQiw0RkFJQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElzc3VlSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lzc3VlSXRlbSc7XHJcbmltcG9ydCBTZWFyY2hVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVXNlcic7XHJcbmltcG9ydCB7IGdlbkRldGFpbENhY2hlS2V5LCBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBpbml0Q2xpZW50Q2FjaGUgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuXHJcbmZ1bmN0aW9uIG1ha2VRdWVyeShjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSB7XHJcbiAgY29uc3QgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnO1xyXG4gIGNvbnN0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJyc7XHJcbiAgbGV0IGxhYmVsU3RyID0gJyc7XHJcbiAgaWYgKGxhYmVscyAmJiBsYWJlbHMubGVuZ3RoID4gMCkgbGFiZWxTdHIgPSBgbGFiZWxzPSR7bGFiZWxzLmpvaW4oJywnKX1gO1xyXG5cclxuICBjb25zdCBhcnIgPSBbXTtcclxuXHJcbiAgaWYgKGNyZWF0b3JTdHIpIGFyci5wdXNoKGNyZWF0b3JTdHIpO1xyXG4gIGlmIChzdGF0ZVN0cikgYXJyLnB1c2goc3RhdGVTdHIpO1xyXG4gIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpO1xyXG5cclxuICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YDtcclxufVxyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDbGllbnRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUoY29udGV4dCksXHJcbn0pO1xyXG5cclxuY29uc3QgSXNzdWVzID0gKHsgc2VydmljZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUNhY2hlKGdlbkRldGFpbENhY2hlS2V5KHJvdXRlciwgeyBzZXJ2aWNlcyB9KSk7XHJcblxyXG4gIGNvbnN0IHsgaW5pdElzc3VlcywgbGFiZWxzIH0gPSBzZXJ2aWNlcztcclxuXHJcbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaXNzdWVTdGF0ZSwgc2V0SXNzdWVTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZExhYmVscywgc2V0U2VsZWN0ZWRMYWJlbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc3N1ZXNDaGFuZ2UsIHNldElzc3Vlc0NoYW5nZV0gPSB1c2VTdGF0ZShpc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNDaGFuZ2Uke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzQ2hhbmdlKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIOetm+mAieeUqOaItyAqL31cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgICB7Lyog562b6YCJ54q25oCBICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgdmFsdWU9e2lzc3VlU3RhdGV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIOetm+mAieagh+etviAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbm46ICcwIDIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlc0NoYW5nZS5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgY29uc3QgW3sgZGF0YTogaXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\detail\\\\issues.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(Issues, "a1FTotoDi18ICDbODYVbmiE1/gs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], useCache];
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
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_11__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_11__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/labels")
            }, ctx.req, ctx.res)]);

          case 4:
            _yield$Promise$all = _context2.sent;
            _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
            issues = _yield$Promise$all2[0].data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ2VuRGV0YWlsQ2FjaGVLZXkiLCJpbml0SXNzdWVzIiwidXNlU3RhdGUiLCJzZXRDcmVhdG9yIiwiaXNzdWVTdGF0ZSIsInNldElzc3VlU3RhdGUiLCJzZWxlY3RlZExhYmVscyIsInNldFNlbGVjdGVkTGFiZWxzIiwiaXNzdWVzIiwiaXNzdWVzQ2hhbmdlIiwic2V0SXNzdWVzQ2hhbmdlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImhhbmRsZUxhYmVsc0NoYW5nZSIsInNlbGVjdGVkIiwiaGFuZGxlU2VhcmNoIiwicmVxdWVzdCIsInVybCIsIm93bmVyIiwibmFtZSIsInNlYXJjaElzc3VlcyIsImRhdGEiLCJzZWxlY3RDb21tb25TdHlsZSIsImFsaWduU2VsZiIsIndpZHRoIiwibWFyZ2luTGVmdCIsImZsZXhHcm93IiwibWFyZ2lubiIsIm1hcCIsImxhYmVsIiwiaWQiLCJtYXJnaW5SaWdodCIsImlzc3VlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFu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QyxLQUFaLGNBQXFCQyxJQUFyQjtBQUFMLGFBQUQsRUFBNENlLEdBQUcsQ0FBQ0ksR0FBaEQsRUFBcURKLEdBQUcsQ0FBQ0ssR0FBekQsQ0FEc0QsRUFFN0R2QiwyREFBTyxDQUFDO0FBQUVDLGlCQUFHLG1CQUFZQyxLQUFaLGNBQXFCQyxJQUFyQjtBQUFMLGFBQUQsRUFBNENlLEdBQUcsQ0FBQ0ksR0FBaEQsRUFBcURKLEdBQUcsQ0FBQ0ssR0FBekQsQ0FGc0QsQ0FBWixDQUZ0Qjs7QUFBQTtBQUFBO0FBQUE7QUFFZC9CLGtCQUZjLDBCQUVwQmEsSUFGb0I7QUFFSXZDLGtCQUZKLDBCQUVGdUMsSUFGRTtBQUFBLDhDQU90QjtBQUNMeEIsc0JBQVEsRUFBRTtBQUNSSSwwQkFBVSxFQUFWQSxVQURRO0FBRVJuQixzQkFBTSxFQUFOQTtBQUZRO0FBREwsYUFQc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QjtBQWVlYyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLmZkYzA5YTBkY2EyMDBlYWZlODljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXNzdWVJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXNzdWVJdGVtJztcclxuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJztcclxuaW1wb3J0IHsgZ2VuRGV0YWlsQ2FjaGVLZXksIGdlbkRldGFpbENhY2hlS2V5U3RyYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IGluaXRDbGllbnRDYWNoZSBmcm9tICcuLi8uLi91dGlscy9jbGllbnQtY2FjaGUnO1xyXG5cclxuZnVuY3Rpb24gbWFrZVF1ZXJ5KGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpIHtcclxuICBjb25zdCBjcmVhdG9yU3RyID0gY3JlYXRvciA/IGBjcmVhdG9yPSR7Y3JlYXRvcn1gIDogJyc7XHJcbiAgY29uc3Qgc3RhdGVTdHIgPSBzdGF0ZSA/IGBzdGF0ZT0ke3N0YXRlfWAgOiAnJztcclxuICBsZXQgbGFiZWxTdHIgPSAnJztcclxuICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWA7XHJcblxyXG4gIGNvbnN0IGFyciA9IFtdO1xyXG5cclxuICBpZiAoY3JlYXRvclN0cikgYXJyLnB1c2goY3JlYXRvclN0cik7XHJcbiAgaWYgKHN0YXRlU3RyKSBhcnIucHVzaChzdGF0ZVN0cik7XHJcbiAgaWYgKGxhYmVsU3RyKSBhcnIucHVzaChsYWJlbFN0cik7XHJcblxyXG4gIHJldHVybiBgPyR7YXJyLmpvaW4oJyYnKX1gO1xyXG59XHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENsaWVudENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5EZXRhaWxDYWNoZUtleVN0cmF0ZShjb250ZXh0KSxcclxufSk7XHJcblxyXG5jb25zdCBJc3N1ZXMgPSAoeyBzZXJ2aWNlcyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlc0NoYW5nZSwgc2V0SXNzdWVzQ2hhbmdlXSA9IHVzZVN0YXRlKGlzc3Vlcyk7XHJcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTGFiZWxzQ2hhbmdlID0gc2VsZWN0ZWQgPT4gc2V0U2VsZWN0ZWRMYWJlbHMoc2VsZWN0ZWQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IHNlYXJjaElzc3VlcyB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc0NoYW5nZSR7bWFrZVF1ZXJ5KGNyZWF0b3IsIGlzc3VlU3RhdGUsIHNlbGVjdGVkTGFiZWxzKX1gLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJc3N1ZXNDaGFuZ2Uoc2VhcmNoSXNzdWVzKTtcclxuICAgIHNldEZldGNoaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RDb21tb25TdHlsZSA9IHtcclxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICB7Lyog562b6YCJ55So5oi3ICovfVxyXG4gICAgICAgIDxTZWFyY2hVc2VyIHZhbHVlPXtjcmVhdG9yfSBvbkNoYW5nZT17c2V0Q3JlYXRvcn0gc3R5bGU9e3NlbGVjdENvbW1vblN0eWxlfSAvPlxyXG4gICAgICAgIHsvKiDnrZvpgInnirbmgIEgKi99XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldElzc3VlU3RhdGV9XHJcbiAgICAgICAgICB2YWx1ZT17aXNzdWVTdGF0ZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcclxuICAgICAgICAgIHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImFsbFwiPuWFqOmDqDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwib3BlblwiPm9wZW48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICB7Lyog562b6YCJ5qCH562+ICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxzQ2hhbmdlfVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGFiZWxzfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYWJlbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogMSwgd2lkdGg6IDIwMCwgbWFyZ2lubjogJzAgMjBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWxzLm1hcChsYWJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtsYWJlbC5pZH0ga2V5PXtsYWJlbC5pZH0+XHJcbiAgICAgICAgICAgICAge2xhYmVsLm5hbWV9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGxvYWRpbmc9e2ZldGNoaW5nfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaQnOe0olxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzQ2hhbmdlLm1hcChpc3N1ZSA9PiAoXHJcbiAgICAgICAgICA8SXNzdWVJdGVtIGtleT17aXNzdWUuaWR9IGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpc3N1ZXMgfSwgeyBkYXRhOiBsYWJlbHMgfV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICAgIHJlcXVlc3QoeyB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9sYWJlbHNgIH0sIGN0eC5yZXEsIGN0eC5yZXMpLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgaW5pdElzc3VlcyxcclxuICAgICAgbGFiZWxzLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElzc3VlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==