import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/profile-list">Favorites</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/example-list">Example List of Items</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => authService.logout()}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div>
            <p>This is where we will put Search component</p>
            <p>This is where we will put map component</p>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default RenderHomePage;
