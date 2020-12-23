import App from 'next/app';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import Router from 'next/router';

import Layout from '../components/Layout';
import withRedux from '../utils/with-redux-app';
import PageLoading from '../components/PageLoading';

// Component对应pages的每个页面
function MyApp(props) {
  const { Component, pageProps, reduxStore } = props;

  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  });

  return (
    <Provider store={reduxStore}>
      <Layout>
        {loading && <PageLoading />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

// MyApp.getInitialProps = async appContext => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default withRedux(MyApp);
// export default MyApp;
