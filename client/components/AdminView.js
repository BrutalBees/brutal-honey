import React, { useState } from 'react';
import styled from 'styled-components';
import AdminDashboard from './AdminDashboard';
import AdminProducts from './AdminProducts';
import AdminUsers from './AdminUsers';
import { DashboardOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
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
  .ant-menu-item:hover {
    color: #a2aab1;
  }
`;

function getMenuItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
};

const menuItems = [
  getMenuItem('Dashboard', 'dashboard', <DashboardOutlined />),
  getMenuItem('Products', 'products', <AppstoreOutlined />),
  getMenuItem('Users', 'users', <UserOutlined />)
];

const AdminView = () => {
  const [view, setView] = useState("dashboard");

  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <StyledMenu
        onClick={(evt) => {
          return setView(evt.key)
        }}
        defaultSelectedKeys={['dashboard']}
        mode="inline"
        items={menuItems}
      />
      <StyledProductsWrapper>
        {view === "dashboard" && <AdminDashboard />}
        {view === "products" && <AdminProducts />}
        {view === "users" && <AdminUsers />}
      </StyledProductsWrapper>
    </div>
  );
};

export default AdminView;
