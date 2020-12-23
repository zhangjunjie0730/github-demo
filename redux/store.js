import { useMemo } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer, userInitialState } from './reducers';

const rootReducers = combineReducers({ user: userReducer });

/**
 * 为什么要导出一个初始化store的方法呢？
 * 服务器启动后，所有js都现加载，认为他们是一个模块，这个模块再服务器启动后就已经设定好了。
 * 如果不重启服务器，每一次服务端渲染都会使用同一个store对象，这就导致我们的状态改变时不会进行重置
 * 如果按照以前的方式export，store会被共用。
 * 解决办法：每次渲染时都创建新的store，所以就把with-redux-app这个高阶组件加到根_App中。
 */

export default function initializeStore(state) {
  const store = createStore(
    rootReducers,
    { ...userInitialState, ...state },
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
