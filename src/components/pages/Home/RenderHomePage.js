import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <div>
            <p>
              This is an example of a common example of how we'd like for you to
              approach components.
            </p>
            <p>
              <Link to="/profile-list">Profiles Example</Link>
            </p>
            <p>
              <Link to="/example-list">Example List of Items</Link>
            </p>
            <p>
              <Link to="/datavis">Data Visualizations Example</Link>
            </p>
            <p>
              <Button
                handleClick={() => authService.logout()}
                buttonText="Logout"
              />
            </p>
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
