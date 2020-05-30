import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import { DashboardOutlined, ToolOutlined, TeamOutlined, QuestionOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const DashboardSideBar = () => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" title="Logo" />
        <h3>Admin</h3>
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" className={pathname === '/dashboard' ? 'ant-active-menu' : ''}>
          <Link to="/dashboard">
            <DashboardOutlined />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <TeamOutlined />
              <span>Management</span>
            </span>
          }
        >
          <Menu.Item key="3" className={pathname === '/management/member' ? 'ant-active-menu' : ''}>
            <Link to="/management/member">
              <span>Member</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <ToolOutlined />
              <span>Tools</span>
            </span>
          }
        >
          <Menu.Item key="5">Email</Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
          <QuestionOutlined />
          <span>About Project</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default DashboardSideBar;
