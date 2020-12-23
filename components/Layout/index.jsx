import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Avatar, Button, Dropdown, Input, Layout, Menu, Tooltip } from 'antd';
import { GithubOutlined, UserOutlined } from '@ant-design/icons';
import { HeaderInner, HeaderLeft, githubIconStyle, footer } from './style';
import MyContainer from '../MyContainer';
import { logout } from '../../redux/action';

const AppLayout = ({ children, user, onLogout }) => {
  const router = useRouter(); //next框架的next/router提供的方法
  /**
   * search时，为了更好体验。如果直接输入网址也要显示对应query上面的参数在search框中
   */
  const urlQuery = router.query && router.query.query;
  const [search, setSearch] = useState(urlQuery || '');

  const handleSearchChange = useCallback(e => setSearch(e.target.value), []); // 因为依赖于setSearch，而这个方法是不会改变的，所以可以直接传[]
  const handleOnSearch = useCallback(() => router.push(`/search?query=${search}`), [search]);

  // 用户下拉菜单
  const UserDropdown = (
    <Menu>
      <Menu.Item>
        <Button onClick={() => onLogout()} type="link">
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
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
            <div>
              <Input.Search
                onChange={handleSearchChange}
                onSearch={handleOnSearch}
                value={search}
                placeholder="search..."
                style={{ paddingTop: '17px' }}
              />
            </div>
          </HeaderLeft>

          {/* right-user */}
          <div className="header-right">
            <div className="user">
              {user && user.id ? (
                <Dropdown overlay={UserDropdown} placement="bottomCenter">
                  <Avatar size={40} src={user.avatar_url} />
                </Dropdown>
              ) : (
                <Tooltip placement="bottom" title="点击进行登录">
                  <a href={`/prepare-auth?url=${router.asPath}`}>
                    <Avatar size={40} icon={<UserOutlined />} />
                  </a>
                </Tooltip>
              )}
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

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  })
)(AppLayout);
