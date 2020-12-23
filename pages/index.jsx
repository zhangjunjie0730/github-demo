import { connect } from 'react-redux';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import api from '../utils/api';

const { publicRuntimeConfig } = getConfig();

const Index = props => {
  console.log('index.redux', props.userInfo);
  const router = useRouter();
  return (
    <>
      <span>index</span>
    </>
  );
};

// Index.getInitialProps = async context => {
//   console.log('index页面的context', context);
//   // const result = await api.request({ url: `/user/repos` }, ctx.req, ctx.res);
//   // return {
//   //   userRepos: result.data,
//   //   ctx,
//   // };
//   return context;
// };

export default connect(state => ({ user: state.user }))(Index);
