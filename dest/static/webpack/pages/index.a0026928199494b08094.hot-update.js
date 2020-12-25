webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo/index.jsx");




var _jsxFileName = "E:\\MyGit\\github-demo\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();










var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_5___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var cachedUserRepos, userStaredRepos;

var Index = function Index(_ref) {
  _s();

  var userRepos = _ref.userRepos,
      starred = _ref.starred,
      router = _ref.router;
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (store) {
    return store.user;
  });
  var tabKey = router.query.key || '1'; // 未登录时

  if (!user || !user.id) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-4197889563" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "jsx-4197889563",
        children: "\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "4197889563",
        children: ".root.jsx-4197889563{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJvQixBQUcwQixhQUNBLDBFQUNTLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi91dGlscy9hcGknO1xyXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nO1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmxldCBjYWNoZWRVc2VyUmVwb3MsIHVzZXJTdGFyZWRSZXBvcztcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgdXNlclJlcG9zLCBzdGFycmVkLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdG9yZSA9PiBzdG9yZS51c2VyKTtcclxuICBjb25zdCB0YWJLZXkgPSByb3V0ZXIucXVlcnkua2V5IHx8ICcxJztcclxuXHJcbiAgLy8g5pyq55m75b2V5pe2XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8cD7mgqjov5jmsqHmnInnmbvlvZU8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT5cclxuICAgICAgICAgIOeCueWHu+eZu+W9lVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBhdmF0YXJfdXJsLCBsb2dpbiwgbmFtZSwgYmlvLCBlbWFpbCB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gYWN0aXZlS2V5ID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e2F2YXRhcl91cmx9IGFsdD1cInVzZXIgYXZhdGFyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpblwiPntsb2dpbn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57YmlvfTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgPE1haWxPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PntlbWFpbH08L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgPFRhYnMgYWN0aXZlS2V5PXt0YWJLZXl9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGFuaW1hdGVkPXtmYWxzZX0+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOeahOS7k+W6k1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgIHtzdGFycmVkLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2dpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJpbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLXJlcG9zIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDpnbG9iYWwoLmljb24tZW1haWwpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCByZWR1eFN0b3JlIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKTtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyUmVwb3MgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgY2FjaGVkVXNlclJlcG9zID0gdXNlclJlcG9zO1xyXG4gIGNvbnN0IHsgZGF0YTogc3RhcnJlZCB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvc3RhcnJlZCcsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIGNhY2hlZDtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlclJlcG9zLFxyXG4gICAgc3RhcnJlZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleCk7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  }

  var avatar_url = user.avatar_url,
      login = user.login,
      name = user.name,
      bio = user.bio,
      email = user.email;

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/?key=".concat(activeKey));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-452155478" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-452155478" + " " + "user-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: avatar_url,
        alt: "user avatar",
        className: "jsx-452155478" + " " + "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-452155478" + " " + "login",
        children: login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-452155478" + " " + "name",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-452155478" + " " + "bio",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "jsx-452155478" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MailOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          href: "mailto:".concat(email),
          className: "jsx-452155478",
          children: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-452155478" + " " + "user-repos",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"], {
        activeKey: tabKey,
        onChange: handleTabChange,
        animated: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"].TabPane, {
          tab: "\u4F60\u7684\u4ED3\u5E93",
          children: userRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"].TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: starred.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "452155478",
      children: ".root.jsx-452155478{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-452155478{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:200px;margin-right:40px;}.login.jsx-452155478{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-452155478{font-size:16px;color:#777;}.bio.jsx-452155478{margin-top:20px;color:#333;}.avatar.jsx-452155478{width:100%;border-radius:5px;}.user-repos.jsx-452155478{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.icon-email{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VTLEFBRzBCLEFBTUMsQUFRRSxBQU1ELEFBS0MsQUFLTCxBQUtDLEFBSU0sV0FSQSxJQVZQLENBTkksQUFXSixFQWNiLFFBbEJBLENBS0EsRUFLQSxFQWhCa0IsZ0JBQ2xCLFNBVmUsZUE2QmYsR0FuQ3lCLHdEQU9ELHFEQU5QLGVBQ2pCLFVBTWMsWUFDTSxrQkFDcEIiLCJmaWxlIjoiRTpcXE15R2l0XFxnaXRodWItZGVtb1xccGFnZXNcXGluZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5sZXQgY2FjaGVkVXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3M7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHVzZXJSZXBvcywgc3RhcnJlZCwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcblxyXG4gIC8vIOacqueZu+W9leaXtlxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5oKo6L+Y5rKh5pyJ55m75b2VPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYXZhdGFyX3VybCwgbG9naW4sIG5hbWUsIGJpbywgZW1haWwgfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7c3RhcnJlZC5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Z2xvYmFsKC5pY29uLWVtYWlsKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YTogdXNlclJlcG9zIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvcztcclxuICBjb25zdCB7IGRhdGE6IHN0YXJyZWQgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICBjYWNoZWQ7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZXBvcyxcclxuICAgIHN0YXJyZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Index, "ODc3cjw/vvoWaLFqHWcEGODyOfo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, _reduxStore$getState, user, _yield$request, userRepos, _yield$request2, starred;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            _reduxStore$getState = reduxStore.getState(), user = _reduxStore$getState.user;

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {});

          case 4:
            _context.next = 6;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 6:
            _yield$request = _context.sent;
            userRepos = _yield$request.data;
            cachedUserRepos = userRepos;
            _context.next = 11;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 11:
            _yield$request2 = _context.sent;
            starred = _yield$request2.data;
            cached;
            return _context.abrupt("return", {
              userRepos: userRepos,
              starred: starred
            });

          case 15:
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

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Index));

var _c, _c2;

$RefreshReg$(_c, "Index");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjYWNoZWRVc2VyUmVwb3MiLCJ1c2VyU3RhcmVkUmVwb3MiLCJJbmRleCIsInVzZXJSZXBvcyIsInN0YXJyZWQiLCJyb3V0ZXIiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsInRhYktleSIsInF1ZXJ5Iiwia2V5IiwiaWQiLCJPQVVUSF9VUkwiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJuYW1lIiwiYmlvIiwiZW1haWwiLCJoYW5kbGVUYWJDaGFuZ2UiLCJhY3RpdmVLZXkiLCJSb3V0ZXIiLCJwdXNoIiwibWFwIiwicmVwbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlZHV4U3RvcmUiLCJnZXRTdGF0ZSIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJkYXRhIiwiY2FjaGVkIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztpQkFFZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztBQUVSLElBQUlDLGVBQUosRUFBcUJDLGVBQXJCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9DO0FBQUE7O0FBQUEsTUFBakNDLFNBQWlDLFFBQWpDQSxTQUFpQztBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDaEQsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLElBQVY7QUFBQSxHQUFOLENBQXhCO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsR0FBYixJQUFvQixHQUFuQyxDQUZnRCxDQUloRDs7QUFDQSxNQUFJLENBQUNMLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNNLEVBQW5CLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUEsMENBQWUsTUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBSSxFQUFFYixtQkFBbUIsQ0FBQ2MsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWtCRDs7QUF4QitDLE1BMEJ4Q0MsVUExQndDLEdBMEJBUixJQTFCQSxDQTBCeENRLFVBMUJ3QztBQUFBLE1BMEI1QkMsS0ExQjRCLEdBMEJBVCxJQTFCQSxDQTBCNUJTLEtBMUI0QjtBQUFBLE1BMEJyQkMsSUExQnFCLEdBMEJBVixJQTFCQSxDQTBCckJVLElBMUJxQjtBQUFBLE1BMEJmQyxHQTFCZSxHQTBCQVgsSUExQkEsQ0EwQmZXLEdBMUJlO0FBQUEsTUEwQlZDLEtBMUJVLEdBMEJBWixJQTFCQSxDQTBCVlksS0ExQlU7O0FBNEJoRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLFNBQVMsRUFBSTtBQUNuQ0Msc0RBQU0sQ0FBQ0MsSUFBUCxpQkFBcUJGLFNBQXJCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLHVDQUFlLE1BQWY7QUFBQSw0QkFDRTtBQUFBLHlDQUFlLFdBQWY7QUFBQSw4QkFDRTtBQUF3QixXQUFHLEVBQUVOLFVBQTdCO0FBQXlDLFdBQUcsRUFBQyxhQUE3QztBQUFBLDJDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwyQ0FBZ0IsT0FBaEI7QUFBQSxrQkFBeUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUEsMkNBQWdCLE1BQWhCO0FBQUEsa0JBQXdCQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUFBLDJDQUFnQixLQUFoQjtBQUFBLGtCQUF1QkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBQSwyQ0FBYSxPQUFiO0FBQUEsZ0NBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUcsY0FBSSxtQkFBWUMsS0FBWixDQUFQO0FBQUE7QUFBQSxvQkFBNkJBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRTtBQUFBLHlDQUFlLFlBQWY7QUFBQSw2QkFDRSxxRUFBQyx5Q0FBRDtBQUFNLGlCQUFTLEVBQUVULE1BQWpCO0FBQXlCLGdCQUFRLEVBQUVVLGVBQW5DO0FBQW9ELGdCQUFRLEVBQUUsS0FBOUQ7QUFBQSxnQ0FDRSxxRUFBQyx5Q0FBRCxDQUFNLE9BQU47QUFBYyxhQUFHLEVBQUMsMEJBQWxCO0FBQUEsb0JBQ0doQixTQUFTLENBQUNvQixHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLGdDQUNqQixxRUFBQyx5REFBRDtBQUFvQixrQkFBSSxFQUFFQTtBQUExQixlQUFXQSxJQUFJLENBQUNaLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGlCO0FBQUEsV0FBbEI7QUFESCxXQUE2QixHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUUscUVBQUMseUNBQUQsQ0FBTSxPQUFOO0FBQWMsYUFBRyxFQUFDLHNDQUFsQjtBQUFBLG9CQUNHUixPQUFPLENBQUNtQixHQUFSLENBQVksVUFBQUMsSUFBSTtBQUFBLGdDQUNmLHFFQUFDLHlEQUFEO0FBQW9CLGtCQUFJLEVBQUVBO0FBQTFCLGVBQVdBLElBQUksQ0FBQ1osRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZTtBQUFBLFdBQWhCO0FBREgsV0FBK0IsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyRUQsQ0EzR0Q7O0dBQU1WLEs7VUFDU0ssdUQ7OztLQURUTCxLOztBQTZHTkEsS0FBSyxDQUFDdUIsZUFBTjtBQUFBLCtMQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVCxFQUFjQyxVQUFkLFNBQWNBLFVBQWQ7QUFBQSxtQ0FDTEEsVUFBVSxDQUFDQyxRQUFYLEVBREssRUFDZHRCLElBRGMsd0JBQ2RBLElBRGM7O0FBQUEsa0JBRWxCLENBQUNBLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNNLEVBRkc7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBR2IsRUFIYTs7QUFBQTtBQUFBO0FBQUEsbUJBS1lpQiwwREFBTyxDQUN2QztBQUNFQyxpQkFBRyxFQUFFO0FBRFAsYUFEdUMsRUFJdkNKLEdBQUcsQ0FBQ0ssR0FKbUMsRUFLdkNMLEdBQUcsQ0FBQ00sR0FMbUMsQ0FMbkI7O0FBQUE7QUFBQTtBQUtSN0IscUJBTFEsa0JBS2Q4QixJQUxjO0FBWXRCakMsMkJBQWUsR0FBR0csU0FBbEI7QUFac0I7QUFBQSxtQkFhVTBCLDBEQUFPLENBQ3JDO0FBQ0VDLGlCQUFHLEVBQUU7QUFEUCxhQURxQyxFQUlyQ0osR0FBRyxDQUFDSyxHQUppQyxFQUtyQ0wsR0FBRyxDQUFDTSxHQUxpQyxDQWJqQjs7QUFBQTtBQUFBO0FBYVI1QixtQkFiUSxtQkFhZDZCLElBYmM7QUFvQnRCQyxrQkFBTTtBQXBCZ0IsNkNBcUJmO0FBQ0wvQix1QkFBUyxFQUFUQSxTQURLO0FBRUxDLHFCQUFPLEVBQVBBO0FBRkssYUFyQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMkJlLHFFQUFBK0IsOERBQVUsQ0FBQ2pDLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTAwMjY5MjgxOTk0OTRiMDgwOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5sZXQgY2FjaGVkVXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3M7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHVzZXJSZXBvcywgc3RhcnJlZCwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcblxyXG4gIC8vIOacqueZu+W9leaXtlxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5oKo6L+Y5rKh5pyJ55m75b2VPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYXZhdGFyX3VybCwgbG9naW4sIG5hbWUsIGJpbywgZW1haWwgfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7c3RhcnJlZC5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Z2xvYmFsKC5pY29uLWVtYWlsKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgcmVkdXhTdG9yZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSByZWR1eFN0b3JlLmdldFN0YXRlKCk7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlkKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIGNvbnN0IHsgZGF0YTogdXNlclJlcG9zIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9yZXBvcycsXHJcbiAgICB9LFxyXG4gICAgY3R4LnJlcSxcclxuICAgIGN0eC5yZXNcclxuICApO1xyXG4gIGNhY2hlZFVzZXJSZXBvcyA9IHVzZXJSZXBvcztcclxuICBjb25zdCB7IGRhdGE6IHN0YXJyZWQgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICBjYWNoZWQ7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZXBvcyxcclxuICAgIHN0YXJyZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9