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
  genCacheKeyStrate: function genCacheKeyStrate(context) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_13__["genCacheKeyByQuery"])(context.ctx.query);
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
      children: ".ant-list-item.selected{border-left:2px solid #e36209;font-weight:100;}.root.jsx-2801659865{padding:20px 0;}.list-header.jsx-2801659865{font-weight:800;font-size:16px;}.repos-title.jsx-2801659865{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-2801659865{margin-top:16px;text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxzZWFyY2guanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHUyxBQUcyQyxBQUlmLEFBR0MsQUFJYSxBQUtiLGVBWGxCLENBR2lCLEFBU0UsYUFMRixDQVhDLENBUWxCLEVBU0EsV0FMbUIsRUFYbkIsZUFZQSIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcc2VhcmNoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIFNPUlRfVFlQRVMsIFBFUl9QQUdFIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJMaW5rJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuaW1wb3J0IHsgZ2VuQ2FjaGVLZXlCeVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlCeVF1ZXJ5KGNvbnRleHQuY3R4LnF1ZXJ5KSxcclxufSk7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyByb3V0ZXIsIHJlcG9zIH0pID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgeyBzb3J0LCBvcmRlciwgbGFuZywgcGFnZSA9IDEgfSA9IHF1ZXJ5O1xyXG5cclxuICB1c2VDYWNoZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17bGFuZ0l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gbGFuZ0l0ZW07XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHNlbGVjdGVkPXtzZWxlY3RlZH0gbGFuZz17bGFuZ0l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYW5nSXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAvLyAxLuW9k+ayoeaciXNvcnTml7bvvIzpu5jorqTmmK9CZXN0TWF0Y2jvvJsyLuaciXNvcnTkuJTmnIlvcmRlcijmnInpu5jorqTlgLxkZXN0KeaXtlxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLnNvcnQgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJvdXRlci5xdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS5zb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpdGVtLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR95Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e1BFUl9QQUdFfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIC8vIGdpdGh1YiBhcGnpmZDliLbor7fmsYLliY0xMDAw5p2hXHJcbiAgICAgICAgICAgICAgdG90YWw9e01hdGgubWluKHJlcG9zLnRvdGFsX2NvdW50LCAxMDAwKX1cclxuICAgICAgICAgICAgICAvLyDmiJHku6znlKh1cmzmnaXmjqfliLbliIbpobXvvIzmiYDku6XkuI3pnIDopoHov5nkuKpvbkNoYW5nZe+8jOS9huaYr+S4gOWumuimgeS8oFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocmVuZGVyUGFnZSwgcmVuZGVyVHlwZSwgcmVuZGVyT2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJUeXBlID09PSAncGFnZScgPyByZW5kZXJQYWdlIDogcmVuZGVyVHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcmVuZGVyVHlwZSA9PT0gJ3BhZ2UnID8gcmVuZGVyUGFnZSA6IHJlbmRlck9sO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHBhZ2U9e3RhcmdldFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmFudC1saXN0LWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTM2MjA5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyID0gJ2Rlc2MnLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuIHsgcmVwb3M6IHsgdG90YWxfY291bnQ6IDAgfSB9O1xyXG5cclxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTJcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gIHNvcnQgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9YCk7XHJcbiAgcGFnZSAmJiAocXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl19 */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\search.jsx */"
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

  return function (_x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJpbml0Q2FjaGUiLCJnZW5DYWNoZUtleVN0cmF0ZSIsImNvbnRleHQiLCJnZW5DYWNoZUtleUJ5UXVlcnkiLCJjdHgiLCJxdWVyeSIsImNhY2hlIiwidXNlQ2FjaGUiLCJTZWFyY2giLCJyb3V0ZXIiLCJyZXBvcyIsInNvcnQiLCJvcmRlciIsImxhbmciLCJwYWdlIiwibWFyZ2luQm90dG9tIiwiTEFOR1VBR0VTIiwibGFuZ0l0ZW0iLCJzZWxlY3RlZCIsIlNPUlRfVFlQRVMiLCJpdGVtIiwibmFtZSIsInRvdGFsX2NvdW50IiwiaXRlbXMiLCJtYXAiLCJyZXBvIiwiaWQiLCJQRVJfUEFHRSIsIk51bWJlciIsIk1hdGgiLCJtaW4iLCJyZW5kZXJQYWdlIiwicmVuZGVyVHlwZSIsInJlbmRlck9sIiwidGFyZ2V0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVN0cmluZyIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7aUJBRTRCQSxtRUFBUyxDQUFDO0FBQ3BDQyxtQkFBaUIsRUFBRSwyQkFBQUMsT0FBTztBQUFBLFdBQUlDLGtFQUFrQixDQUFDRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsS0FBYixDQUF0QjtBQUFBO0FBRFUsQ0FBRCxDO0lBQTdCQyxLLGNBQUFBLEs7SUFBT0MsUSxjQUFBQSxROztBQUlmLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtB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dUJlLHFFQUFBQyw4REFBVSxDQUFDckMsTUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guOGI1ZDZlNzBjOTIxNWY5NDljNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgTGlzdCwgUGFnaW5hdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgaW5pdENhY2hlIGZyb20gJy4uL3V0aWxzL2NsaWVudC1jYWNoZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBMQU5HVUFHRVMsIFNPUlRfVFlQRVMsIFBFUl9QQUdFIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXJMaW5rJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuaW1wb3J0IHsgZ2VuQ2FjaGVLZXlCeVF1ZXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLyoqXHJcbiAqIHNlYXJjaOadoeS7tu+8mlxyXG4gKiBzb3J0OiDmjpLluo/mlrnlvI9cclxuICogb3JkZXI6IOaOkuW6j+WNh+mZjemhuuW6j1xyXG4gKiBsYW5nOiDku5PlupPlvIDlj5HkuLvor63oqIBcclxuICogcGFnZTog5YiG6aG1XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjYWNoZSwgdXNlQ2FjaGUgfSA9IGluaXRDYWNoZSh7XHJcbiAgZ2VuQ2FjaGVLZXlTdHJhdGU6IGNvbnRleHQgPT4gZ2VuQ2FjaGVLZXlCeVF1ZXJ5KGNvbnRleHQuY3R4LnF1ZXJ5KSxcclxufSk7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyByb3V0ZXIsIHJlcG9zIH0pID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgeyBzb3J0LCBvcmRlciwgbGFuZywgcGFnZSA9IDEgfSA9IHF1ZXJ5O1xyXG5cclxuICB1c2VDYWNoZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXsyMH0+XHJcbiAgICAgICAgPENvbCBzcGFuPXs2fT5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0VTfVxyXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+6K+t6KiAPC9zcGFuPn1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17bGFuZ0l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gbGFuZ0l0ZW07XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHNlbGVjdGVkPXtzZWxlY3RlZH0gbGFuZz17bGFuZ0l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYW5nSXRlbX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XHJcbiAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj7mjpLluo88L3NwYW4+fVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAvLyAxLuW9k+ayoeaciXNvcnTml7bvvIzpu5jorqTmmK9CZXN0TWF0Y2jvvJsyLuaciXNvcnTkuJTmnIlvcmRlcijmnInpu5jorqTlgLxkZXN0KeaXtlxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLnNvcnQgPT09IHNvcnQgJiYgaXRlbS5vcmRlciA9PT0gb3JkZXIpXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT17c2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJvdXRlci5xdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS5zb3J0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyPXtpdGVtLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicmVwb3MtdGl0bGVcIj57cmVwb3MudG90YWxfY291bnR95Liq5LuT5bqTPC9oMz5cclxuICAgICAgICAgIHtyZXBvcy5pdGVtcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgcGFnZVNpemU9e1BFUl9QQUdFfVxyXG4gICAgICAgICAgICAgIGN1cnJlbnQ9e051bWJlcihwYWdlKSB8fCAxfVxyXG4gICAgICAgICAgICAgIC8vIGdpdGh1YiBhcGnpmZDliLbor7fmsYLliY0xMDAw5p2hXHJcbiAgICAgICAgICAgICAgdG90YWw9e01hdGgubWluKHJlcG9zLnRvdGFsX2NvdW50LCAxMDAwKX1cclxuICAgICAgICAgICAgICAvLyDmiJHku6znlKh1cmzmnaXmjqfliLbliIbpobXvvIzmiYDku6XkuI3pnIDopoHov5nkuKpvbkNoYW5nZe+8jOS9huaYr+S4gOWumuimgeS8oFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocmVuZGVyUGFnZSwgcmVuZGVyVHlwZSwgcmVuZGVyT2wpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJUeXBlID09PSAncGFnZScgPyByZW5kZXJQYWdlIDogcmVuZGVyVHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcmVuZGVyVHlwZSA9PT0gJ3BhZ2UnID8gcmVuZGVyUGFnZSA6IHJlbmRlck9sO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMaW5rIHsuLi5yb3V0ZXIucXVlcnl9IHBhZ2U9e3RhcmdldFBhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZpbHRlckxpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmFudC1saXN0LWl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTM2MjA5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlzdC1oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVwb3MtdGl0bGUge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjdHgpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHNvcnQsIGxhbmcsIG9yZGVyID0gJ2Rlc2MnLCBwYWdlIH0gPSBjdHgucXVlcnk7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuIHsgcmVwb3M6IHsgdG90YWxfY291bnQ6IDAgfSB9O1xyXG5cclxuICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTJcclxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xyXG4gIGxhbmcgJiYgKHF1ZXJ5U3RyaW5nICs9IGArbGFuZ3VhZ2U6JHtsYW5nfWApO1xyXG4gIHNvcnQgJiYgKHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9YCk7XHJcbiAgcGFnZSAmJiAocXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7cGFnZX1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWAsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICByZXBvczogcmVzdWx0LmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==