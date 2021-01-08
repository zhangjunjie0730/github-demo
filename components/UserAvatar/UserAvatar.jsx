import { Avatar, Button, Dropdown, Menu, Tooltip } from 'antd';
import { withRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';

const UserAvatar = ({ router, user, onLogout }) => {
  const logoutClick = () => {
    onLogout();
    router.push('/');
  };
  // 用户下拉菜单
  const UserDropdown = (
    <Menu>
      <Menu.Item>
        <Button onClick={logoutClick} type="link">
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
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
    </>
  );
};

export default withRouter(UserAvatar);
