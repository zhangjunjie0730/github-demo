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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _utils_client_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/client-cache */ "./utils/client-cache.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_FilterLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FilterLink */ "./components/FilterLink/index.jsx");
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./utils/index.js");





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

var _initCache = Object(_utils_client_cache__WEBPACK_IMPORTED_MODULE_7__["default"])({
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["genCacheKeyByQuery"])(context.ctx.query);
  }
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
  useCache(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["genCacheKeyByQuery"])(query), {
    repos: repos
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "jsx-2801659865" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      gutter: 20,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        span: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["List"], {
          bordered: true,
          style: {
            marginBottom: 20
          },
          dataSource: _config__WEBPACK_IMPORTED_MODULE_9__["LANGUAGES"],
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2801659865" + " " + "list-header",
            children: "\u8BED\u8A00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, _this),
          renderItem: function renderItem(langItem) {
            var selected = lang === langItem;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
              className: selected ? 'selected' : null,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                selected: selected,
                lang: langItem,
                children: langItem
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["List"], {
          bordered: true,
          style: {
            marginBottom: 20
          },
          dataSource: _config__WEBPACK_IMPORTED_MODULE_9__["SORT_TYPES"],
          header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            className: "jsx-2801659865" + " " + "list-header",
            children: "\u6392\u5E8F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, _this),
          renderItem: function renderItem(item) {
            var selected = false; // 1.当没有sort时，默认是BestMatch；2.有sort且有order(有默认值dest)时

            if (item.name === 'Best Match' && !sort || item.sort === sort && item.order === order) {
              selected = true;
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["List"].Item, {
              className: selected ? 'selected' : null,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                selected: selected,
                sort: item.sort,
                order: item.order,
                children: item.name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        span: 18,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
          className: "jsx-2801659865" + " " + "repos-title",
          children: [repos.total_count, "\u4E2A\u4ED3\u5E93"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), repos.items.map(function (repo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
            repo: repo
          }, repo.id, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "jsx-2801659865" + " " + "pagination",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Pagination"], {
            pageSize: _config__WEBPACK_IMPORTED_MODULE_9__["PER_PAGE"],
            current: Number(page) || 1 // github api限制请求前1000条
            ,
            total: Math.min(repos.total_count, 1000) // 我们用url来控制分页，所以不需要这个onChange，但是一定要传
            ,
            onChange: function onChange() {},
            itemRender: function itemRender(renderPage, renderType, renderOl) {
              var targetPage = renderType === 'page' ? renderPage : renderType === 'prev' ? page - 1 : page + 1;
              var name = renderType === 'page' ? renderPage : renderOl;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_FilterLink__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, router.query), {}, {
                page: targetPage,
                children: name
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "2801659865",
      children: ".ant-list-item.selected{border-left:2px solid #e36209;font-weight:100;}.root.jsx-2801659865{padding:20px 0;}.list-header.jsx-2801659865{font-weight:800;font-size:16px;}.repos-title.jsx-2801659865{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2801659865{margin-top:16px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxzZWFyY2guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHUyxBQUcyQyxBQUlmLEFBR0MsQUFJYSxBQUtiLGVBWGxCLENBR2lCLEFBU0UsYUFMRixDQVhDLENBUWxCLEVBU0EsV0FMbUIsRUFYbkIsZUFZQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcc2VhcmNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBpbml0Q2FjaGUgZnJvbSAnLi4vdXRpbHMvY2xpZW50LWNhY2hlJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCB7IExBTkdVQUdFUywgU09SVF9UWVBFUywgUEVSX1BBR0UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlckxpbmsnO1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nO1xyXG5pbXBvcnQgeyBnZW5DYWNoZUtleUJ5UXVlcnkgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG4vKipcclxuICogc2VhcmNo5p2h5Lu277yaXHJcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xyXG4gKiBvcmRlcjog5o6S5bqP5Y2H6ZmN6aG65bqPXHJcbiAqIGxhbmc6IOS7k+W6k+W8gOWPkeS4u+ivreiogFxyXG4gKiBwYWdlOiDliIbpobVcclxuICovXHJcblxyXG5jb25zdCB7IGNhY2hlLCB1c2VDYWNoZSB9ID0gaW5pdENhY2hlKHtcclxuICBnZW5DYWNoZUtleVN0cmF0ZTogY29udGV4dCA9PiBnZW5DYWNoZUtleUJ5UXVlcnkoY29udGV4dC5jdHgucXVlcnkpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICh7IHJvdXRlciwgcmVwb3MgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IHNvcnQsIG9yZGVyLCBsYW5nLCBwYWdlID0gMSB9ID0gcXVlcnk7XHJcblxyXG4gIHVzZUNhY2hlKGdlbkNhY2hlS2V5QnlRdWVyeShxdWVyeSksIHsgcmVwb3MgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cclxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7or63oqIA8L3NwYW4+fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtsYW5nSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBsYW5nSXRlbTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgey4uLnJvdXRlci5xdWVyeX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBsYW5nPXtsYW5nSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhbmdJdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17U09SVF9UWVBFU31cclxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuaOkuW6jzwvc3Bhbj59XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIC8vIDEu5b2T5rKh5pyJc29ydOaXtu+8jOm7mOiupOaYr0Jlc3RNYXRjaO+8mzIu5pyJc29ydOS4lOaciW9yZGVyKOaciem7mOiupOWAvGRlc3Qp5pe2XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0ubmFtZSA9PT0gJ0Jlc3QgTWF0Y2gnICYmICFzb3J0KSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uc29ydCA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcilcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiBudWxsfT5cclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucm91dGVyLnF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnNvcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH3kuKrku5PlupM8L2gzPlxyXG4gICAgICAgICAge3JlcG9zLml0ZW1zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICBwYWdlU2l6ZT17UEVSX1BBR0V9XHJcbiAgICAgICAgICAgICAgY3VycmVudD17TnVtYmVyKHBhZ2UpIHx8IDF9XHJcbiAgICAgICAgICAgICAgLy8gZ2l0aHViIGFwaemZkOWItuivt+axguWJjTEwMDDmnaFcclxuICAgICAgICAgICAgICB0b3RhbD17TWF0aC5taW4ocmVwb3MudG90YWxfY291bnQsIDEwMDApfVxyXG4gICAgICAgICAgICAgIC8vIOaIkeS7rOeUqHVybOadpeaOp+WItuWIhumhte+8jOaJgOS7peS4jemcgOimgei/meS4qm9uQ2hhbmdl77yM5L2G5piv5LiA5a6a6KaB5LygXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhyZW5kZXJQYWdlLCByZW5kZXJUeXBlLCByZW5kZXJPbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFnZSA9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlclR5cGUgPT09ICdwYWdlJyA/IHJlbmRlclBhZ2UgOiByZW5kZXJUeXBlID09PSAncHJldicgPyBwYWdlIC0gMSA6IHBhZ2UgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByZW5kZXJUeXBlID09PSAncGFnZScgPyByZW5kZXJQYWdlIDogcmVuZGVyT2w7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgey4uLnJvdXRlci5xdWVyeX0gcGFnZT17dGFyZ2V0UGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvRmlsdGVyTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCguYW50LWxpc3QtaXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlMzYyMDk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZXBvcy10aXRsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBjYWNoZShhc3luYyAoeyBjdHggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eCk7XHJcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIgPSAnZGVzYycsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcclxuICBpZiAoIXF1ZXJ5KSByZXR1cm4geyByZXBvczogeyB0b3RhbF9jb3VudDogMCB9IH07XHJcblxyXG4gIC8vID9xPXJlYWN0K2xhbmd1YWdlOmphdmFzY3JpcHQmc29ydD1zdGFycyZvcmRlcj1kZXNjJnBhZ2U9MlxyXG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cT0ke3F1ZXJ5fWA7XHJcbiAgbGFuZyAmJiAocXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YCk7XHJcbiAgc29ydCAmJiAocXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlcn1gKTtcclxuICBwYWdlICYmIChxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWApO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcG9zOiByZXN1bHQuZGF0YSxcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\search.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Search, "MWIIAj4RCYLIAOTG2F1uW9bftBE=", false, function () {
  return [useCache];
});

_c = Search;
Search.getInitialProps = cache( /*#__PURE__*/function () {
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
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__["request"])({
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

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJpbml0Q2FjaGUiLCJnZW5DYWNoZUtleVN0cmF0ZSIsImNvbnRleHQiLCJnZW5DYWNoZUtleUJ5UXVlcnkiLCJjdHgiLCJxdWVyeSIsImNhY2hlIiwidXNlQ2FjaGUiLCJTZWFyY2giLCJyb3V0ZXIiLCJyZXBvcyIsInNvcnQiLCJvcmRlciIsImxhbmciLCJwYWdlIiwibWFyZ2luQm90dG9tIiwiTEFOR1VBR0VTIiwibGFuZ0l0ZW0iLCJzZWxlY3RlZCIsIlNPUlRfVFlQRVMiLCJpdGVtIiwibmFtZSIsInRvdGFsX2NvdW50IiwiaXRlbXMiLCJtYXAiLCJyZXBvIiwiaWQiLCJQRVJfUEFHRSIsIk51bWJlciIsIk1hdGgiLCJtaW4iLCJyZW5kZXJQYWdlIiwicmVuZGVyVHlwZSIsInJlbmRlck9sIiwidGFyZ2V0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztpQkFFNEJBLG1FQUFTLENBQUM7QUFDcENDLG1CQUFpQixFQUFFLDJCQUFBQyxPQUFPO0FBQUEsV0FBSUMsa0VBQWtCLENBQUNELE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyxLQUFiLENBQXRCO0FBQUE7QUFEVSxDQUFELEM7SUFBN0JDLEssY0FBQUEsSztJQUFPQyxRLGNBQUFBLFE7O0FBSWYsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFB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QWxCc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QjtBQXVCZSxxRUFBQUMsOERBQVUsQ0FBQ3JDLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmFkYTdlNzBkNDI2ZTQ0YWRmNjA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIFNPUlRfVFlQRVMsIFBFUl9QQUdFIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJMaW5rJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuaW1wb3J0IHsgZ2VuQ2FjaGVLZXlCeVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlCeVF1ZXJ5KGNvbnRleHQuY3R4LnF1ZXJ5KSxcclxufSk7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyByb3V0ZXIsIHJlcG9zIH0pID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgeyBzb3J0LCBvcmRlciwgbGFuZywgcGFnZSA9IDEgfSA9IHF1ZXJ5O1xyXG5cclxuICB1c2VDYWNoZShnZW5DYWNoZUtleUJ5UXVlcnkocXVlcnkpLCB7IHJlcG9zIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17bGFuZ0l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gbGFuZ0l0ZW07XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHNlbGVjdGVkPXtzZWxlY3RlZH0gbGFuZz17bGFuZ0l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYW5nSXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAvLyAxLuW9k+ayoeaciXNvcnTml7bvvIzpu5jorqTmmK9CZXN0TWF0Y2jvvJsyLuaciXNvcnTkuJTmnIlvcmRlcijmnInpu5jorqTlgLxkZXN0KeaXtlxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLnNvcnQgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJvdXRlci5xdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS5zb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpdGVtLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR95Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e1BFUl9QQUdFfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIC8vIGdpdGh1YiBhcGnpmZDliLbor7fmsYLliY0xMDAw5p2hXHJcbiAgICAgICAgICAgICAgdG90YWw9e01hdGgubWluKHJlcG9zLnRvdGFsX2NvdW50LCAxMDAwKX1cclxuICAgICAgICAgICAgICAvLyDmiJHku6znlKh1cmzmnaXmjqfliLbliIbpobXvvIzmiYDku6XkuI3pnIDopoHov5nkuKpvbkNoYW5nZe+8jOS9huaYr+S4gOWumuimgeS8oFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocmVuZGVyUGFnZSwgcmVuZGVyVHlwZSwgcmVuZGVyT2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJUeXBlID09PSAncGFnZScgPyByZW5kZXJQYWdlIDogcmVuZGVyVHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcmVuZGVyVHlwZSA9PT0gJ3BhZ2UnID8gcmVuZGVyUGFnZSA6IHJlbmRlck9sO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHBhZ2U9e3RhcmdldFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmFudC1saXN0LWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTM2MjA5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gY2FjaGUoYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyID0gJ2Rlc2MnLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuIHsgcmVwb3M6IHsgdG90YWxfY291bnQ6IDAgfSB9O1xyXG5cclxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTJcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gIHNvcnQgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9YCk7XHJcbiAgcGFnZSAmJiAocXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=