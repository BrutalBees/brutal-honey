import React, { useState } from 'react';
import styled from 'styled-components';
import AdminProducts from './AdminProducts';
import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// Styled Components
const StyledProductsWrapper = styled.div`
  margin: 30px 50px;
  width: 85%
`;
const StyledMenu = styled(Menu)`
  width: 15%;
  .ant-menu-item-selected {
    color: black;
  }
  .ant-menu&:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #f7f0dc;
  }
  .ant-menu-item{
    &:after {
      border-right: 3px solid #f5db8b;
    }
  }
`;

function getMenuItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const menuItems = [
  getMenuItem('Products', 'products', <AppstoreOutlined />),
  getMenuItem('Users', 'users', <AppstoreOutlined />),
  getMenuItem('Settings', 'setting', <SettingOutlined />),
];

const AdminView = () => {
  const [view, setView] = useState("products");

  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <StyledMenu
        // style={{
        //   width: '15%'
        // }}
        onClick={(evt) => {
          return setView(evt.key)
        }}
        defaultSelectedKeys={['products']}
        mode="inline"
        items={menuItems}
      />
      <StyledProductsWrapper>
        {view === "products" && <AdminProducts />}
        {view === "users" && <h1>USERS PAGE</h1>}
      </StyledProductsWrapper>
    </div>
  );
};

export default AdminView;
