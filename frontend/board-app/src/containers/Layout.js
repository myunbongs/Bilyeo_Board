import React from "react";
import { Card, Layout, Menu } from "antd";

const { Header, Content } = Layout;

const CustomLayOut = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Post</Menu.Item>
          <Menu.Item key="3">Login</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Card>
          <div className="site-layout-content">{props.children}</div>
        </Card>
      </Content>
    </Layout>
  );
};

export default CustomLayOut;
