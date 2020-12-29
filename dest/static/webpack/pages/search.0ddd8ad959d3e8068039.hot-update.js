webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.jsx":
/*!**************************!*\
  !*** ./pages/search.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/client-cache */ "./utils/client-cache.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_FilterLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/FilterLink */ "./components/FilterLink/index.jsx");
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils */ "./utils/index.js");





var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\search.jsx",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










/**
 * search条件：
 * sort: 排序方式
 * order: 排序升降顺序
 * lang: 仓库开发主语言
 * page: 分页
 */

var _initCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_8__["default"])({
  genCacheKeyStrate: function (_genCacheKeyStrate) {
    function genCacheKeyStrate(_x) {
      return _genCacheKeyStrate.apply(this, arguments);
    }

    genCacheKeyStrate.toString = function () {
      return _genCacheKeyStrate.toString();
    };

    return genCacheKeyStrate;
  }(function (context) {
    return genCacheKeyStrate(context.ctx.query);
  })
}),
    cache = _initCache.cache,
    useCache = _initCache.useCache;

var Search = function Search(_ref) {
  _s();

  var router = _ref.router,
      repos = _ref.repos;
  var query = router.query;
  var sort = query.sort,
      order = query.order,
      lang = query.lang,
      _query$page = query.page,
      page = _query$page === void 0 ? 1 : _query$page;
  useCache();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "jsx-2801659865" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
      gutter: 20,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["List"], {
          bordered: true,
          style: {
            marginBottom: 20
          },
          dataSource: _config__WEBPACK_IMPORTED_MODULE_10__["LANGUAGES"],
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2801659865" + " " + "list-header",
            children: "\u8BED\u8A00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, _this),
          renderItem: function renderItem(langItem) {
            var selected = lang === langItem;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["List"].Item, {
              className: selected ? 'selected' : null,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                selected: selected,
                lang: langItem,
                children: langItem
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["List"], {
          bordered: true,
          style: {
            marginBottom: 20
          },
          dataSource: _config__WEBPACK_IMPORTED_MODULE_10__["SORT_TYPES"],
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2801659865" + " " + "list-header",
            children: "\u6392\u5E8F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, _this),
          renderItem: function renderItem(item) {
            var selected = false; // 1.当没有sort时，默认是BestMatch；2.有sort且有order(有默认值dest)时

            if (item.name === 'Best Match' && !sort || item.sort === sort && item.order === order) {
              selected = true;
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["List"].Item, {
              className: selected ? 'selected' : null,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                selected: selected,
                sort: item.sort,
                order: item.order,
                children: item.name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        span: 18,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
          className: "jsx-2801659865" + " " + "repos-title",
          children: [repos.total_count, "\u4E2A\u4ED3\u5E93"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), repos.items.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_12__["default"], {
            repo: repo
          }, repo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "jsx-2801659865" + " " + "pagination",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Pagination"], {
            pageSize: _config__WEBPACK_IMPORTED_MODULE_10__["PER_PAGE"],
            current: Number(page) || 1 // github api限制请求前1000条
            ,
            total: Math.min(repos.total_count, 1000) // 我们用url来控制分页，所以不需要这个onChange，但是一定要传
            ,
            onChange: function onChange() {},
            itemRender: function itemRender(renderPage, renderType, renderOl) {
              var targetPage = renderType === 'page' ? renderPage : renderType === 'prev' ? page - 1 : page + 1;
              var name = renderType === 'page' ? renderPage : renderOl;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                page: targetPage,
                children: name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "2801659865",
      children: ".ant-list-item.selected{border-left:2px solid #e36209;font-weight:100;}.root.jsx-2801659865{padding:20px 0;}.list-header.jsx-2801659865{font-weight:800;font-size:16px;}.repos-title.jsx-2801659865{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2801659865{margin-top:16px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxzZWFyY2guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHUyxBQUcyQyxBQUlmLEFBR0MsQUFJYSxBQUtiLGVBWGxCLENBR2lCLEFBU0UsYUFMRixDQVhDLENBUWxCLEVBU0EsV0FMbUIsRUFYbkIsZUFZQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcc2VhcmNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIFNPUlRfVFlQRVMsIFBFUl9QQUdFIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJMaW5rJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuaW1wb3J0IHsgZ2VuQ2FjaGVLZXlCeVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlTdHJhdGUoY29udGV4dC5jdHgucXVlcnkpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHJvdXRlciwgcmVwb3MgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IHNvcnQsIG9yZGVyLCBsYW5nLCBwYWdlID0gMSB9ID0gcXVlcnk7XHJcblxyXG4gIHVzZUNhY2hlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cclxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7or63oqIA8L3NwYW4+fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtsYW5nSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBsYW5nSXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgey4uLnJvdXRlci5xdWVyeX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBsYW5nPXtsYW5nSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhbmdJdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17U09SVF9UWVBFU31cclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuaOkuW6jzwvc3Bhbj59XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIC8vIDEu5b2T5rKh5pyJc29ydOaXtu+8jOm7mOiupOaYr0Jlc3RNYXRjaO+8mzIu5pyJc29ydOS4lOaciW9yZGVyKOaciem7mOiupOWAvGRlc3Qp5pe2XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0ubmFtZSA9PT0gJ0Jlc3QgTWF0Y2gnICYmICFzb3J0KSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uc29ydCA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcilcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucm91dGVyLnF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH3kuKrku5PlupM8L2gzPlxyXG4gICAgICAgICAge3JlcG9zLml0ZW1zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICBwYWdlU2l6ZT17UEVSX1BBR0V9XHJcbiAgICAgICAgICAgICAgY3VycmVudD17TnVtYmVyKHBhZ2UpIHx8IDF9XHJcbiAgICAgICAgICAgICAgLy8gZ2l0aHViIGFwaemZkOWItuivt+axguWJjTEwMDDmnaFcclxuICAgICAgICAgICAgICB0b3RhbD17TWF0aC5taW4ocmVwb3MudG90YWxfY291bnQsIDEwMDApfVxyXG4gICAgICAgICAgICAgIC8vIOaIkeS7rOeUqHVybOadpeaOp+WItuWIhumhte+8jOaJgOS7peS4jemcgOimgei/meS4qm9uQ2hhbmdl77yM5L2G5piv5LiA5a6a6KaB5LygXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhyZW5kZXJQYWdlLCByZW5kZXJUeXBlLCByZW5kZXJPbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFnZSA9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlclR5cGUgPT09ICdwYWdlJyA/IHJlbmRlclBhZ2UgOiByZW5kZXJUeXBlID09PSAncHJldicgPyBwYWdlIC0gMSA6IHBhZ2UgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByZW5kZXJUeXBlID09PSAncGFnZScgPyByZW5kZXJQYWdlIDogcmVuZGVyT2w7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgey4uLnJvdXRlci5xdWVyeX0gcGFnZT17dGFyZ2V0UGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmlsdGVyTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCguYW50LWxpc3QtaXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlMzYyMDk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBvcy10aXRsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eCk7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIgPSAnZGVzYycsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSByZXR1cm4geyByZXBvczogeyB0b3RhbF9jb3VudDogMCB9IH07XHJcblxyXG4gIC8vID9xPXJlYWN0K2xhbmd1YWdlOmphdmFzY3JpcHQmc29ydD1zdGFycyZvcmRlcj1kZXNjJnBhZ2U9MlxyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWA7XHJcbiAgbGFuZyAmJiAocXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YCk7XHJcbiAgc29ydCAmJiAocXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlcn1gKTtcclxuICBwYWdlICYmIChxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWApO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\search.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Search, "MWIIAj4RCYLIAOTG2F1uW9bftBE=", false, function () {
  return [useCache];
});

_c = Search;

Search.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, _ctx$query, query, sort, lang, _ctx$query$order, order, page, queryString, result;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx;
            console.log(ctx);
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, _ctx$query$order = _ctx$query.order, order = _ctx$query$order === void 0 ? 'desc' : _ctx$query$order, page = _ctx$query.page;

            if (query) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 5:
            // ?q=react+language:javascript&sort=stars&order=desc&page=2
            queryString = "?q=".concat(query);
            lang && (queryString += "+language:".concat(lang));
            sort && (queryString += "&sort=".concat(sort, "&order=").concat(order));
            page && (queryString += "&page=".concat(page));
            _context.next = 11;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 11:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Search));

var _c, _c2;

$RefreshReg$(_c, "Search");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJpbml0Q2FjaGUiLCJnZW5DYWNoZUtleVN0cmF0ZSIsImNvbnRleHQiLCJjdHgiLCJxdWVyeSIsImNhY2hlIiwidXNlQ2FjaGUiLCJTZWFyY2giLCJyb3V0ZXIiLCJyZXBvcyIsInNvcnQiLCJvcmRlciIsImxhbmciLCJwYWdlIiwibWFyZ2luQm90dG9tIiwiTEFOR1VBR0VTIiwibGFuZ0l0ZW0iLCJzZWxlY3RlZCIsIlNPUlRfVFlQRVMiLCJpdGVtIiwibmFtZSIsInRvdGFsX2NvdW50IiwiaXRlbXMiLCJtYXAiLCJyZXBvIiwiaWQiLCJQRVJfUEFHRSIsIk51bWJlciIsIk1hdGgiLCJtaW4iLCJyZW5kZXJQYWdlIiwicmVuZGVyVHlwZSIsInJlbmRlck9sIiwidGFyZ2V0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7aUJBRTRCQSxtRUFBUyxDQUFDO0FBQ3BDQyxtQkFBaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFBRSxVQUFBQyxPQUFPO0FBQUEsV0FBSUQsaUJBQWlCLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFiLENBQXJCO0FBQUEsR0FBVDtBQURtQixDQUFELEM7SUFBN0JDLEssY0FBQUEsSztJQUFPQyxRLGNBQUFBLFE7O0FBSWYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBdUI7QUFBQTs7QUFBQSxN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Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QmUscUVBQUFDLDhEQUFVLENBQUNyQyxNQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4wZGRkOGFkOTU5ZDNlODA2ODAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBpbml0Q2FjaGUgZnJvbSAnLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCB7IExBTkdVQUdFUywgU09SVF9UWVBFUywgUEVSX1BBR0UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckxpbmsnO1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nO1xyXG5pbXBvcnQgeyBnZW5DYWNoZUtleUJ5UXVlcnkgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG4vKipcclxuICogc2VhcmNo5p2h5Lu277yaXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP5Y2H6ZmN6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+W8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobVcclxuICovXHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5DYWNoZUtleVN0cmF0ZShjb250ZXh0LmN0eC5xdWVyeSksXHJcbn0pO1xyXG5cclxuY29uc3QgU2VhcmNoID0gKHsgcm91dGVyLCByZXBvcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xyXG4gIGNvbnN0IHsgc29ydCwgb3JkZXIsIGxhbmcsIHBhZ2UgPSAxIH0gPSBxdWVyeTtcclxuXHJcbiAgdXNlQ2FjaGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17Nn0+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e0xBTkdVQUdFU31cclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2xhbmdJdGVtID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGxhbmdJdGVtO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9e3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayB7Li4ucm91dGVyLnF1ZXJ5fSBzZWxlY3RlZD17c2VsZWN0ZWR9IGxhbmc9e2xhbmdJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICB7bGFuZ0l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvRmlsdGVyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtTT1JUX1RZUEVTfVxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+5o6S5bqPPC9zcGFuPn1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgLy8gMS7lvZPmsqHmnIlzb3J05pe277yM6buY6K6k5pivQmVzdE1hdGNo77ybMi7mnIlzb3J05LiU5pyJb3JkZXIo5pyJ6buY6K6k5YC8ZGVzdCnml7ZcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoaXRlbS5uYW1lID09PSAnQmVzdCBNYXRjaCcgJiYgIXNvcnQpIHx8XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5zb3J0ID09PSBzb3J0ICYmIGl0ZW0ub3JkZXIgPT09IG9yZGVyKVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9e3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6IG51bGx9PlxyXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yb3V0ZXIucXVlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ9e2l0ZW0uc29ydH1cclxuICAgICAgICAgICAgICAgICAgICBvcmRlcj17aXRlbS5vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmlsdGVyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MTh9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9zLXRpdGxlXCI+e3JlcG9zLnRvdGFsX2NvdW50feS4quS7k+W6kzwvaDM+XHJcbiAgICAgICAgICB7cmVwb3MuaXRlbXMubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplPXtQRVJfUEFHRX1cclxuICAgICAgICAgICAgICBjdXJyZW50PXtOdW1iZXIocGFnZSkgfHwgMX1cclxuICAgICAgICAgICAgICAvLyBnaXRodWIgYXBp6ZmQ5Yi26K+35rGC5YmNMTAwMOadoVxyXG4gICAgICAgICAgICAgIHRvdGFsPXtNYXRoLm1pbihyZXBvcy50b3RhbF9jb3VudCwgMTAwMCl9XHJcbiAgICAgICAgICAgICAgLy8g5oiR5Lus55SodXJs5p2l5o6n5Yi25YiG6aG177yM5omA5Lul5LiN6ZyA6KaB6L+Z5Liqb25DaGFuZ2XvvIzkvYbmmK/kuIDlrpropoHkvKBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgaXRlbVJlbmRlcj17KHJlbmRlclBhZ2UsIHJlbmRlclR5cGUsIHJlbmRlck9sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQYWdlID1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVyVHlwZSA9PT0gJ3BhZ2UnID8gcmVuZGVyUGFnZSA6IHJlbmRlclR5cGUgPT09ICdwcmV2JyA/IHBhZ2UgLSAxIDogcGFnZSArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJlbmRlclR5cGUgPT09ICdwYWdlJyA/IHJlbmRlclBhZ2UgOiByZW5kZXJPbDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayB7Li4ucm91dGVyLnF1ZXJ5fSBwYWdlPXt0YXJnZXRQYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5hbnQtbGlzdC1pdGVtLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2UzNjIwOTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlcG9zLXRpdGxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3R4KTtcclxuICBjb25zdCB7IHF1ZXJ5LCBzb3J0LCBsYW5nLCBvcmRlciA9ICdkZXNjJywgcGFnZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gIGlmICghcXVlcnkpIHJldHVybiB7IHJlcG9zOiB7IHRvdGFsX2NvdW50OiAwIH0gfTtcclxuXHJcbiAgLy8gP3E9cmVhY3QrbGFuZ3VhZ2U6amF2YXNjcmlwdCZzb3J0PXN0YXJzJm9yZGVyPWRlc2MmcGFnZT0yXHJcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcclxuICBsYW5nICYmIChxdWVyeVN0cmluZyArPSBgK2xhbmd1YWdlOiR7bGFuZ31gKTtcclxuICBzb3J0ICYmIChxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyfWApO1xyXG4gIHBhZ2UgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=