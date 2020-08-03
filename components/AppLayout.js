import { Menu, Layout } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Header, Content } = Layout;
const { SubMenu } = Menu;

const AppLayout = ({ children }) => {
  const [current, setCurrent] = useState("mail");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout style={{ background: "white" }}>
      <Header style={{ background: "white" }}>
        <Menu
          onClick={() => handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu title="Navigation">
            <Menu.Item key="setting:1">회사개요</Menu.Item>
            <Menu.Item key="setting:2">경영정신</Menu.Item>
            <Menu.Item key="setting:3">CI</Menu.Item>
            <Menu.Item key="setting:4">연혁</Menu.Item>
            <Menu.Item key="setting:5">오시는길</Menu.Item>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ marginTop: 10 }}>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
