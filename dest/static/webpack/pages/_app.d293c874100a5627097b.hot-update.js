webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/with-redux-app.js":
/*!*********************************!*\
  !*** ./utils/with-redux-app.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");






var _jsxFileName = "E:\\MyGit\\github-demo\\utils\\with-redux-app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** 这个HOC的意义
 * 因为服务端执行了getInitialProps之后，返回给客户端的是序列化的字符串
 * redux里面有很多方法，不适合序列化存储
 * 所以在getInitialProps之后返回initialReduxState
 * 再通过initialReduxState去创建完整的store
 * 但是为了性能，客户端每次执行该方法的时候都去找一下window对象里面时候已经有了store
 */



var isServer = false;
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'; // 存储在window中表示window已经有了store

function getOrCreateStore(initialState) {
  if (isServer) {
    // 服务端执行时都重新创建一个store
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}
/**
 * !!注意函数组件不成功！
 */


var withReduxApp = function withReduxApp(Comp) {
  var withReduxApp = function withReduxApp(props) {
    var Component = props.Component,
        pageProps = props.pageProps,
        initialReduxState = props.initialReduxState,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["Component", "pageProps", "initialReduxState"]);

    var reduxStore = getOrCreateStore(initialReduxState);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Comp, _objectSpread(_objectSpread({}, rest), {}, {
      Component: Component,
      pageProps: pageProps,
      reduxStore: reduxStore
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, _this);
  };

  withReduxApp.getInitialProps = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
      var reduxStore, req, session, appProps;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isServer) {
                req = ctx.ctx.req;
                session = req.session;

                if (session && session.userInfo) {
                  reduxStore = getOrCreateStore({
                    user: session.userInfo
                  });
                } else {
                  reduxStore = getOrCreateStore();
                }
              } else {
                reduxStore = getOrCreateStore();
              }

              ctx.reduxStore = reduxStore;
              appProps = {};

              if (!(typeof Comp.getInitialProps === 'function')) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return Comp.getInitialProps(ctx);

            case 6:
              appProps = _context.sent;

            case 7:
              return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
                initialReduxState: reduxStore.getState()
              }));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return withReduxApp;
};

/* harmony default export */ __webpack_exports__["default"] = (withReduxApp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2l0aC1yZWR1eC1hcHAuanMiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ3aXRoUmVkdXhBcHAiLCJDb21wIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsInJlc3QiLCJyZWR1eFN0b3JlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIiwic2Vzc2lvbiIsInVzZXJJbmZvIiwidXNlciIsImFwcFByb3BzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxRQUFkO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCLEMsQ0FBcUQ7O0FBRXJELFNBQVNDLGdCQUFULENBQTBCQyxZQUExQixFQUF3QztBQUN0QyxNQUFJSCxRQUFKLEVBQWM7QUFDWjtBQUNBLFdBQU9JLDREQUFlLENBQUNELFlBQUQsQ0FBdEI7QUFDRDs7QUFDRCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0osb0JBQUQsQ0FBWCxFQUFtQztBQUNqQ0ksVUFBTSxDQUFDSixvQkFBRCxDQUFOLEdBQStCRyw0REFBZSxDQUFDRCxZQUFELENBQTlDO0FBQ0Q7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixvQkFBRCxDQUFiO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLElBQU1LLFlBQVksR0FBRyxzQkFBQUMsSUFBSSxFQUFJO0FBQzNCLE1BQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFFLEtBQUssRUFBSTtBQUFBLFFBQ3BCQyxTQURvQixHQUNpQ0QsS0FEakMsQ0FDcEJDLFNBRG9CO0FBQUEsUUFDVEMsU0FEUyxHQUNpQ0YsS0FEakMsQ0FDVEUsU0FEUztBQUFBLFFBQ0VDLGlCQURGLEdBQ2lDSCxLQURqQyxDQUNFRyxpQkFERjtBQUFBLFFBQ3dCQyxJQUR4QixzR0FDaUNKLEtBRGpDOztBQUU1QixRQUFNSyxVQUFVLEdBQUdYLGdCQUFnQixDQUFDUyxpQkFBRCxDQUFuQztBQUNBLHdCQUFPLHFFQUFDLElBQUQsa0NBQVVDLElBQVY7QUFBZ0IsZUFBUyxFQUFFSCxTQUEzQjtBQUFzQyxlQUFTLEVBQUVDLFNBQWpEO0FBQTRELGdCQUFVLEVBQUVHO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBSkQ7O0FBTUFQLGNBQVksQ0FBQ1EsZUFBYjtBQUFBLGdNQUErQixpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHN0Isa0JBQUlmLFFBQUosRUFBYztBQUVIZ0IsbUJBRkcsR0FHUkQsR0FIUSxDQUVWQSxHQUZVLENBRUhDLEdBRkc7QUFJSkMsdUJBSkksR0FJUUQsR0FKUixDQUlKQyxPQUpJOztBQUtaLG9CQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsUUFBdkIsRUFBaUM7QUFDL0JMLDRCQUFVLEdBQUdYLGdCQUFnQixDQUFDO0FBQzVCaUIsd0JBQUksRUFBRUYsT0FBTyxDQUFDQztBQURjLG1CQUFELENBQTdCO0FBR0QsaUJBSkQsTUFJTztBQUNMTCw0QkFBVSxHQUFHWCxnQkFBZ0IsRUFBN0I7QUFDRDtBQUNGLGVBWkQsTUFZTztBQUNMVywwQkFBVSxHQUFHWCxnQkFBZ0IsRUFBN0I7QUFDRDs7QUFFRGEsaUJBQUcsQ0FBQ0YsVUFBSixHQUFpQkEsVUFBakI7QUFFSU8sc0JBckJ5QixHQXFCZCxFQXJCYzs7QUFBQSxvQkFzQnpCLE9BQU9iLElBQUksQ0FBQ08sZUFBWixLQUFnQyxVQXRCUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQXVCVlAsSUFBSSxDQUFDTyxlQUFMLENBQXFCQyxHQUFyQixDQXZCVTs7QUFBQTtBQXVCM0JLLHNCQXZCMkI7O0FBQUE7QUFBQSwrRUEyQnhCQSxRQTNCd0I7QUE0QjNCVCxpQ0FBaUIsRUFBRUUsVUFBVSxDQUFDUSxRQUFYO0FBNUJROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdDQSxTQUFPZixZQUFQO0FBQ0QsQ0F4Q0Q7O0FBeUNlQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQyOTNjODc0MTAwYTU2MjcwOTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiog6L+Z5LiqSE9D55qE5oSP5LmJXHJcbiAqIOWboOS4uuacjeWKoeerr+aJp+ihjOS6hmdldEluaXRpYWxQcm9wc+S5i+WQju+8jOi/lOWbnue7meWuouaIt+err+eahOaYr+W6j+WIl+WMlueahOWtl+espuS4slxyXG4gKiByZWR1eOmHjOmdouacieW+iOWkmuaWueazle+8jOS4jemAguWQiOW6j+WIl+WMluWtmOWCqFxyXG4gKiDmiYDku6XlnKhnZXRJbml0aWFsUHJvcHPkuYvlkI7ov5Tlm55pbml0aWFsUmVkdXhTdGF0ZVxyXG4gKiDlho3pgJrov4dpbml0aWFsUmVkdXhTdGF0ZeWOu+WIm+W7uuWujOaVtOeahHN0b3JlXHJcbiAqIOS9huaYr+S4uuS6huaAp+iDve+8jOWuouaIt+err+avj+asoeaJp+ihjOivpeaWueazleeahOaXtuWAmemDveWOu+aJvuS4gOS4i3dpbmRvd+WvueixoemHjOmdouaXtuWAmeW3sue7j+acieS6hnN0b3JlXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IGluaXRpYWxpemVTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5jb25zdCBfX05FWFRfUkVEVVhfU1RPUkVfXyA9ICdfX05FWFRfUkVEVVhfU1RPUkVfXyc7IC8vIOWtmOWCqOWcqHdpbmRvd+S4reihqOekundpbmRvd+W3sue7j+acieS6hnN0b3JlXHJcblxyXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgLy8g5pyN5Yqh56uv5omn6KGM5pe26YO96YeN5paw5Yib5bu65LiA5Liqc3RvcmVcclxuICAgIHJldHVybiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgaWYgKCF3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dKSB7XHJcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dO1xyXG59XHJcblxyXG4vKipcclxuICogISHms6jmhI/lh73mlbDnu4Tku7bkuI3miJDlip/vvIFcclxuICovXHJcbmNvbnN0IHdpdGhSZWR1eEFwcCA9IENvbXAgPT4ge1xyXG4gIGNvbnN0IHdpdGhSZWR1eEFwcCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGluaXRpYWxSZWR1eFN0YXRlLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxSZWR1eFN0YXRlKTtcclxuICAgIHJldHVybiA8Q29tcCB7Li4ucmVzdH0gQ29tcG9uZW50PXtDb21wb25lbnR9IHBhZ2VQcm9wcz17cGFnZVByb3BzfSByZWR1eFN0b3JlPXtyZWR1eFN0b3JlfSAvPjtcclxuICB9O1xyXG5cclxuICB3aXRoUmVkdXhBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGxldCByZWR1eFN0b3JlO1xyXG5cclxuICAgIGlmIChpc1NlcnZlcikge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgY3R4OiB7IHJlcSB9LFxyXG4gICAgICB9ID0gY3R4O1xyXG4gICAgICBjb25zdCB7IHNlc3Npb24gfSA9IHJlcTtcclxuICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VySW5mbykge1xyXG4gICAgICAgIHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHtcclxuICAgICAgICAgIHVzZXI6IHNlc3Npb24udXNlckluZm8sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmU7XHJcblxyXG4gICAgbGV0IGFwcFByb3BzID0ge307XHJcbiAgICBpZiAodHlwZW9mIENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGFwcFByb3BzID0gYXdhaXQgQ29tcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdpdGhSZWR1eEFwcDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4QXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9