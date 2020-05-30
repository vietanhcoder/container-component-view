import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Avatar, Row, Col, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, LogoutOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const { Header } = Layout;

const DashboardHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">
          <UserOutlined />
          <span>Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/change-password">
          <LockOutlined />
          <span>Change password</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <Link to="/login">
          <LogoutOutlined />
          <span>Logout</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background dashboard__header">
      <Row>
        <Col span={2}>
          <div className="trigger">
            {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
            <MenuUnfoldOutlined />
          </div>
        </Col>
        <Col span={22} className="text__align--right">
          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar
              className="ant-dropdown-link dashboard__avatar"
              size="large"
              src="images/avatar.jpg"
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default DashboardHeader;
