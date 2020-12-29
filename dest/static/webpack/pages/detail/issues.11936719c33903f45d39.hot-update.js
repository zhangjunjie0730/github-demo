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
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PageLoading */ "./components/PageLoading/index.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/client-cache */ "./utils/client-cache.js");





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

var _initClientCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_13__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_11__["genDetailCacheKeyStrate"])(context);
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
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["genDetailCacheKey"])(router, {
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
              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_12__["request"])({
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
    className: "jsx-2468529071" + " " + "root",
    children: [fetching ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_PageLoading__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-2468529071" + " " + "search",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_SearchUser__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: creator,
        onChange: setCreator,
        style: selectCommonStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "open",
          children: "open"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
          value: "closed",
          children: "closed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
            lineNumber: 87,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        loading: fetching,
        onClick: handleSearch,
        size: "small",
        type: "primary",
        style: {
          marginRight: 11,
          marginTop: 20
        },
        children: "\u641C\u7D22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "jsx-2468529071" + " " + "issues",
      children: issues.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_IssueItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "2468529071",
      children: ".search.jsx-2468529071{margin-top:20px;}.issues.jsx-2468529071{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2468529071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdTLEFBRzZCLEFBR00sQUFNVCxnQkFSZixNQUdvQixrQkFDQyxtQkFDSCxlQUlHLENBSHJCLDRGQUlBIiwiZmlsZSI6IkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXNzdWVJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXNzdWVJdGVtJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJztcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnO1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnO1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YDtcclxuXHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKTtcclxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKTtcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWA7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2xpZW50Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiBjb250ZXh0ID0+IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpLFxyXG59KTtcclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIHtmZXRjaGluZyA/IDxQYWdlTG9hZGluZyAvPiA6IG51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIOetm+mAieeUqOaItyAqL31cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgICB7Lyog562b6YCJ54q25oCBICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgdmFsdWU9e2lzc3VlU3RhdGV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIOetm+mAieagh+etviAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbm46ICcwIDIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEsIG1hcmdpblRvcDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpbml0SXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\detail\\\\issues.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
            return Promise.all([Object(_utils_api__WEBPACK_IMPORTED_MODULE_12__["request"])({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res), Object(_utils_api__WEBPACK_IMPORTED_MODULE_12__["request"])({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qc3giXSwibmFtZXMiOlsibWFrZVF1ZXJ5IiwiY3JlYXRvciIsInN0YXRlIiwibGFiZWxzIiwiY3JlYXRvclN0ciIsInN0YXRlU3RyIiwibGFiZWxTdHIiLCJsZW5ndGgiLCJqb2luIiwiYXJyIiwicHVzaCIsImluaXRDbGllbnRDYWNoZSIsImdlbkNhY2hlS2V5U3RyYXRlIiwiY29udGV4dCIsImdlbkRldGFpbENhY2hlS2V5U3RyYXRlIiwiY2FjaGUiLCJ1c2VDYWNoZSIsIklzc3VlcyIsInNlcnZpY2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJvd25lciIsIm5hbWUiLCJnZW5EZXRhaWxDYWNoZUtleSIsImluaXRJc3N1ZXMiLCJ1c2VTdGF0ZSIsInNldENyZWF0b3IiLCJpc3N1ZVN0YXRlIiwic2V0SXNzdWVTdGF0ZSIsInNlbGVjdGVkTGFiZWxzIiwic2V0U2VsZWN0ZWRMYWJlbHMiLCJpc3N1ZXMiLCJzZXRJc3N1ZXMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiaGFuZGxlTGFiZWxzQ2hhbmdlIiwic2VsZWN0ZWQiLCJoYW5kbGVTZWFyY2giLCJyZXF1ZXN0IiwidXJsIiwic2VhcmNoSXNzdWVzIiwiZGF0YSIsInNlbGVjdENvbW1vblN0eWxlIiwiYWxpZ25TZWxmIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZmxleEdyb3ciLCJtYXJnaW5uIiwibWFwIiwibGFiZWwiLCJpZCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiaXNzdWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJQcm9taXNlIiwiYWxsIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxPQUFuQixF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QTtBQUFTeUMsZUFBVCxTQUFTQSxHQUFUO0FBQUEseUJBQ0xBLEdBQUcsQ0FBQ25DLEtBREMsRUFDckJDLEtBRHFCLGNBQ3JCQSxLQURxQixFQUNkQyxJQURjLGNBQ2RBLElBRGM7QUFBQTtBQUFBLG1CQUUwQmtDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ2pFbkIsMkRBQU8sQ0FBQztBQUFFQyxpQkFBRyxtQkFBWWxCLEtBQVosY0FBcUJDLElBQXJCO0FBQUwsYUFBRCxFQUE0Q2lDLEdBQUcsQ0FBQ0csR0FBaEQsRUFBcURILEdBQUcsQ0FBQ0ksR0FBekQsQ0FEMEQsRUFFakVyQiwyREFBTyxDQUFDO0FBQUVDLGlCQUFHLG1CQUFZbEIsS0FBWixjQUFxQkMsSUFBckI7QUFBTCxhQUFELEVBQTRDaUMsR0FBRyxDQUFDRyxHQUFoRCxFQUFxREgsR0FBRyxDQUFDSSxHQUF6RCxDQUYwRCxDQUFaLENBRjFCOztBQUFBO0FBQUE7QUFBQTtBQUVkbkMsc0JBRmMsMEJBRXBCaUIsSUFGb0I7QUFFUXZDLGtCQUZSLDBCQUVFdUMsSUFGRjtBQUFBLDhDQU90QjtBQUNMeEIsc0JBQVEsRUFBRTtBQUNSTywwQkFBVSxFQUFWQSxVQURRO0FBRVJ0QixzQkFBTSxFQUFOQTtBQUZRO0FBREwsYUFQc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QjtBQWVlYyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvaXNzdWVzLjExOTM2NzE5YzMzOTAzZjQ1ZDM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSXNzdWVJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSXNzdWVJdGVtJztcclxuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcnO1xyXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInO1xyXG5pbXBvcnQgeyBnZW5EZXRhaWxDYWNoZUtleSwgZ2VuRGV0YWlsQ2FjaGVLZXlTdHJhdGUgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgaW5pdENsaWVudENhY2hlIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlUXVlcnkoY3JlYXRvciwgc3RhdGUsIGxhYmVscykge1xyXG4gIGNvbnN0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJztcclxuICBjb25zdCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnO1xyXG4gIGxldCBsYWJlbFN0ciA9ICcnO1xyXG4gIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YDtcclxuXHJcbiAgY29uc3QgYXJyID0gW107XHJcblxyXG4gIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKTtcclxuICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKTtcclxuICBpZiAobGFiZWxTdHIpIGFyci5wdXNoKGxhYmVsU3RyKTtcclxuXHJcbiAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWA7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2FjaGUsIHVzZUNhY2hlIH0gPSBpbml0Q2xpZW50Q2FjaGUoe1xyXG4gIGdlbkNhY2hlS2V5U3RyYXRlOiBjb250ZXh0ID0+IGdlbkRldGFpbENhY2hlS2V5U3RyYXRlKGNvbnRleHQpLFxyXG59KTtcclxuXHJcbmNvbnN0IElzc3VlcyA9ICh7IHNlcnZpY2VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgdXNlQ2FjaGUoZ2VuRGV0YWlsQ2FjaGVLZXkocm91dGVyLCB7IHNlcnZpY2VzIH0pKTtcclxuXHJcbiAgY29uc3QgeyBpbml0SXNzdWVzLCBsYWJlbHMgfSA9IHNlcnZpY2VzO1xyXG5cclxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpc3N1ZVN0YXRlLCBzZXRJc3N1ZVN0YXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWxzLCBzZXRTZWxlY3RlZExhYmVsc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRJc3N1ZXMpO1xyXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUxhYmVsc0NoYW5nZSA9IHNlbGVjdGVkID0+IHNldFNlbGVjdGVkTGFiZWxzKHNlbGVjdGVkKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2hJc3N1ZXMgfSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShjcmVhdG9yLCBpc3N1ZVN0YXRlLCBzZWxlY3RlZExhYmVscyl9YCxcclxuICAgIH0pO1xyXG4gICAgc2V0SXNzdWVzKHNlYXJjaElzc3Vlcyk7XHJcbiAgICBzZXRGZXRjaGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0Q29tbW9uU3R5bGUgPSB7XHJcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIHtmZXRjaGluZyA/IDxQYWdlTG9hZGluZyAvPiA6IG51bGx9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIOetm+mAieeUqOaItyAqL31cclxuICAgICAgICA8U2VhcmNoVXNlciB2YWx1ZT17Y3JlYXRvcn0gb25DaGFuZ2U9e3NldENyZWF0b3J9IHN0eWxlPXtzZWxlY3RDb21tb25TdHlsZX0gLz5cclxuICAgICAgICB7Lyog562b6YCJ54q25oCBICovfVxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJc3N1ZVN0YXRlfVxyXG4gICAgICAgICAgdmFsdWU9e2lzc3VlU3RhdGV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIueKtuaAgVwiXHJcbiAgICAgICAgICBzdHlsZT17c2VsZWN0Q29tbW9uU3R5bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJhbGxcIj7lhajpg6g8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgey8qIOetm+mAieagh+etviAqL31cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhYmVsc0NoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZExhYmVsc31cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFiZWxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxleEdyb3c6IDEsIHdpZHRoOiAyMDAsIG1hcmdpbm46ICcwIDIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVscy5tYXAobGFiZWwgPT4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT17bGFiZWwuaWR9IGtleT17bGFiZWwuaWR9PlxyXG4gICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBsb2FkaW5nPXtmZXRjaGluZ31cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTEsIG1hcmdpblRvcDogMjAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDmkJzntKJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBrZXk9e2lzc3VlLmlkfSBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICBjb25zdCBbeyBkYXRhOiBpbml0SXNzdWVzIH0sIHsgZGF0YTogbGFiZWxzIH1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgcmVxdWVzdCh7IHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2AgfSwgY3R4LnJlcSwgY3R4LnJlcyksXHJcbiAgICByZXF1ZXN0KHsgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYCB9LCBjdHgucmVxLCBjdHgucmVzKSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlcnZpY2VzOiB7XHJcbiAgICAgIGluaXRJc3N1ZXMsXHJcbiAgICAgIGxhYmVscyxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJc3N1ZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=