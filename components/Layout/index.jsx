import Link from 'next/link';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { HeaderInner, HeaderLeft, githubIconStyle, footer } from './style';
import MyContainer from '../MyContainer';
import UserAvatar from '../UserAvatar';
import SearchInput from '../SearchInput';
import PageLoading from '../PageLoading';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <PageLoading />
      <Layout.Header>
        <MyContainer renderer={<HeaderInner />}>
          {/* left-logo/search */}
          <HeaderLeft>
            <div>
              <Link href="/">
                <a>
                  <GithubOutlined style={githubIconStyle} />
                </a>
              </Link>
            </div>
            <div style={{ color: '#fff' }}>Github Assistant </div>
            <div>
              <SearchInput />
            </div>
          </HeaderLeft>

          {/* right-user */}
          <div className="header-right">
            <div className="user">
              <UserAvatar />
            </div>
          </div>
        </MyContainer>
      </Layout.Header>
      <Layout.Content>
        <MyContainer>{children}</MyContainer>
      </Layout.Content>
      <Layout.Footer style={footer}>
        Develop by ZJJ @
        <a href="https://github.com/zhangjunjie0730" target="__blank">
          github
        </a>
      </Layout.Footer>
      <style jsx global>
        {`
          #__next {
            height: 100%;
          }
          .ant-layout {
            min-height: 100%;
          }
          .ant-layout-header {
            padding-left: 0;
            padding-right: 0;
          }
          .ant-layout-content {
            background: #fff;
          }
        `}
      </style>
    </Layout>
  );
};

export default AppLayout;
