import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
import withReduxApp from '../utils/withReduxApp';
import { useEffect } from 'react';

// Component对应pages的每个页面
function MyApp(props) {
  const { Component, pageProps, reduxStore } = props;
  useEffect(() => (document.title = 'github assistant'), []);
  return (
    <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async appContext => {
  const { Component } = appContext;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(appContext);
  }

  return { pageProps };
};

export default withReduxApp(MyApp);
