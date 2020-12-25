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
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "4197889563",
        children: ".root.jsx-4197889563{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQixBQUcwQixhQUNBLDBFQUNTLDhFQUNDLG1HQUNKLDZGQUNyQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHVzZXJSZXBvcywgc3RhcnJlZCwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcblxyXG4gIC8vIOacqueZu+W9leaXtlxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5oKo6L+Y5rKh5pyJ55m75b2VPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYXZhdGFyX3VybCwgbG9naW4sIG5hbWUsIGJpbywgZW1haWwgfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7c3RhcnJlZC5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOmdsb2JhbCguaWNvbi1lbWFpbCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICBjb25zdCB7IGRhdGE6IHVzZXJSZXBvcyB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGE6IHN0YXJyZWQgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlclJlcG9zLFxyXG4gICAgc3RhcnJlZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleCk7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this);
  }

  var avatar_url = user.avatar_url,
      login = user.login,
      name = user.name,
      bio = user.bio,
      email = user.email;

  var handleTabChange = function handleTabChange(activeKey) {
    Router.push("/?key=".concat(activeKey));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-343846767" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-343846767" + " " + "user-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: avatar_url,
        alt: "user avatar",
        className: "jsx-343846767" + " " + "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "login",
        children: login
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "name",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        className: "jsx-343846767" + " " + "bio",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "jsx-343846767" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MailOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          href: "mailto:".concat(email),
          className: "jsx-343846767",
          children: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-343846767" + " " + "user-repos",
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
              lineNumber: 59,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tabs"].TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: starred.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "343846767",
      children: ".root.jsx-343846767{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-343846767{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:200px;margin-right:40px;}.login.jsx-343846767{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-343846767{font-size:16px;color:#777;}.bio.jsx-343846767{margin-top:20px;color:#333;}.avatar.jsx-343846767{width:100%;border-radius:5px;}.user-repos.jsx-343846767{-webkit-flex:1;-ms-flex:1;flex:1;}.icon-email{margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNeUdpdFxcZ2l0aHViLWRlbW9cXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VTLEFBRzBCLEFBTUMsQUFRRSxBQU1ELEFBS0MsQUFLTCxBQUtKLEFBSVcsV0FSQSxJQVZQLENBTkksQUFXSixFQWNiLFFBbEJBLENBS0EsRUFLQSxFQWhCa0IsRUFvQmxCLGNBbkJBLFNBVmUsa0JBTlUsd0RBT0QscURBTlAsZUFDakIsVUFNYyxZQUNNLGtCQUNwQiIsImZpbGUiOiJFOlxcTXlHaXRcXGdpdGh1Yi1kZW1vXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUYWJzIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTWFpbE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJztcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHVzZXJSZXBvcywgc3RhcnJlZCwgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RvcmUgPT4gc3RvcmUudXNlcik7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCAnMSc7XHJcblxyXG4gIC8vIOacqueZu+W9leaXtlxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5oKo6L+Y5rKh5pyJ55m75b2VPC9wPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTH0+XHJcbiAgICAgICAgICDngrnlh7vnmbvlvZVcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYXZhdGFyX3VybCwgbG9naW4sIG5hbWUsIGJpbywgZW1haWwgfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IGFjdGl2ZUtleSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChgLz9rZXk9JHthY3RpdmVLZXl9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXthdmF0YXJfdXJsfSBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57bG9naW59PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e2Jpb308L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgLz5cclxuICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT57ZW1haWx9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g5YWz5rOo55qE5LuT5bqTXCIga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICB7c3RhcnJlZC5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubG9naW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1yZXBvcyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOmdsb2JhbCguaWNvbi1lbWFpbCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gcmVkdXhTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICBjb25zdCB7IGRhdGE6IHVzZXJSZXBvcyB9ID0gYXdhaXQgcmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiAnL3VzZXIvcmVwb3MnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICBjb25zdCB7IGRhdGE6IHN0YXJyZWQgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3N0YXJyZWQnLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlclJlcG9zLFxyXG4gICAgc3RhcnJlZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleCk7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\MyGit\\\\github-demo\\\\pages\\\\index.jsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
            _context.next = 10;
            return Object(_utils_api__WEBPACK_IMPORTED_MODULE_9__["request"])({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 10:
            _yield$request2 = _context.sent;
            starred = _yield$request2.data;
            return _context.abrupt("return", {
              userRepos: userRepos,
              starred: starred
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJJbmRleCIsInVzZXJSZXBvcyIsInN0YXJyZWQiLCJyb3V0ZXIiLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsInRhYktleSIsInF1ZXJ5Iiwia2V5IiwiaWQiLCJPQVVUSF9VUkwiLCJhdmF0YXJfdXJsIiwibG9naW4iLCJuYW1lIiwiYmlvIiwiZW1haWwiLCJoYW5kbGVUYWJDaGFuZ2UiLCJhY3RpdmVLZXkiLCJSb3V0ZXIiLCJwdXNoIiwibWFwIiwicmVwbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlZHV4U3RvcmUiLCJnZXRTdGF0ZSIsInJlcXVlc3QiLCJ1cmwiLCJyZXEiLCJyZXMiLCJkYXRhIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztpQkFFZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztBQUVSLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9DO0FBQUE7O0FBQUEsTUFBakNDLFNBQWlDLFFBQWpDQSxTQUFpQztBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDaEQsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLElBQVY7QUFBQSxHQUFOLENBQXhCO0FBQ0EsTUFBTUcsTUFBTSxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsR0FBYixJQUFvQixHQUFuQyxDQUZnRCxDQUloRDs7QUFDQSxNQUFJLENBQUNMLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNNLEVBQW5CLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUEsMENB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJFRCxDQTNHRDs7R0FBTVYsSztVQUNTSyx1RDs7O0tBRFRMLEs7O0FBNkdOQSxLQUFLLENBQUN1QixlQUFOO0FBQUEsK0xBQXdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFULEVBQWNDLFVBQWQsU0FBY0EsVUFBZDtBQUFBLG1DQUNMQSxVQUFVLENBQUNDLFFBQVgsRUFESyxFQUNkdEIsSUFEYyx3QkFDZEEsSUFEYzs7QUFBQSxrQkFFbEIsQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ00sRUFGRztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FHYixFQUhhOztBQUFBO0FBQUE7QUFBQSxtQkFLWWlCLDBEQUFPLENBQ3ZDO0FBQ0VDLGlCQUFHLEVBQUU7QUFEUCxhQUR1QyxFQUl2Q0osR0FBRyxDQUFDSyxHQUptQyxFQUt2Q0wsR0FBRyxDQUFDTSxHQUxtQyxDQUxuQjs7QUFBQTtBQUFBO0FBS1I3QixxQkFMUSxrQkFLZDhCLElBTGM7QUFBQTtBQUFBLG1CQVlVSiwwREFBTyxDQUNyQztBQUNFQyxpQkFBRyxFQUFFO0FBRFAsYUFEcUMsRUFJckNKLEdBQUcsQ0FBQ0ssR0FKaUMsRUFLckNMLEdBQUcsQ0FBQ00sR0FMaUMsQ0FaakI7O0FBQUE7QUFBQTtBQVlSNUIsbUJBWlEsbUJBWWQ2QixJQVpjO0FBQUEsNkNBbUJmO0FBQ0w5Qix1QkFBUyxFQUFUQSxTQURLO0FBRUxDLHFCQUFPLEVBQVBBO0FBRkssYUFuQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUJlLHFFQUFBOEIsOERBQVUsQ0FBQ2hDLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2NlNjY2ZjhiY2E3NTFhODE4ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGFicyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1haWxPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCBSZXBvIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwbyc7XHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyB1c2VyUmVwb3MsIHN0YXJyZWQsIHJvdXRlciB9KSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHN0b3JlID0+IHN0b3JlLnVzZXIpO1xyXG4gIGNvbnN0IHRhYktleSA9IHJvdXRlci5xdWVyeS5rZXkgfHwgJzEnO1xyXG5cclxuICAvLyDmnKrnmbvlvZXml7ZcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxwPuaCqOi/mOayoeacieeZu+W9lTwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGF2YXRhcl91cmwsIGxvZ2luLCBuYW1lLCBiaW8sIGVtYWlsIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSBhY3RpdmVLZXkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17YXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e2xvZ2lufTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpb1wiPntiaW99PC9zcGFuPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICA8TWFpbE91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+e2VtYWlsfTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVwb3NcIj5cclxuICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgIDxUYWJzLlRhYlBhbmUgdGFiPVwi5L2g55qE5LuT5bqTXCIga2V5PVwiMVwiPlxyXG4gICAgICAgICAgICB7dXNlclJlcG9zLm1hcChyZXBvID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyBrZXk9e3JlcG8uaWR9IHJlcG89e3JlcG99IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3N0YXJyZWQubWFwKHJlcG8gPT4gKFxyXG4gICAgICAgICAgICAgIDxSZXBvIGtleT17cmVwby5pZH0gcmVwbz17cmVwb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYmlvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDpnbG9iYWwoLmljb24tZW1haWwpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCByZWR1eFN0b3JlIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKTtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuaWQpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyUmVwb3MgfSA9IGF3YWl0IHJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgY29uc3QgeyBkYXRhOiBzdGFycmVkIH0gPSBhd2FpdCByZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9zdGFycmVkJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlc1xyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZXBvcyxcclxuICAgIHN0YXJyZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9