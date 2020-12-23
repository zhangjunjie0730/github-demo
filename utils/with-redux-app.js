/** 这个HOC的意义
 * 因为服务端执行了getInitialProps之后，返回给客户端的是序列化的字符串
 * redux里面有很多方法，不适合序列化存储
 * 所以在getInitialProps之后返回initialReduxState
 * 再通过initialReduxState去创建完整的store
 * 但是为了性能，客户端每次执行该方法的时候都去找一下window对象里面时候已经有了store
 */
import React from 'react';
import initializeStore from '../redux/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'; // 存储在window中表示window已经有了store

function getOrCreateStore(initialState) {
  if (isServer) {
    // 服务端执行时都重新创建一个store
    return initializeStore(initialState);
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

const withRedux = Comp => {
  function withReduxApp(props) {
    const { Component, pageProps, initialReduxState, ...rest } = props;
    return (
      <Comp
        Component={Component}
        pageProps={pageProps}
        reduxStore={getOrCreateStore(initialReduxState)}
        {...rest}
      />
    );
  }
  withReduxApp.getInitialProps = async context => {
    let reduxStore;
    // 只有在服务端的时候，req才存在
    if (isServer) {
      const req = context.ctx.req;
      const { session } = req;
      if (session && session.userInfo) {
        reduxStore = getOrCreateStore({
          user: session.userInfo,
        });
      } else {
        reduxStore = getOrCreateStore();
      }
    } else {
      reduxStore = getOrCreateStore();
    }

    context.reduxStore = reduxStore;

    let appProps = {};

    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(context);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  };
  return withReduxApp;
};

export default withRedux;
