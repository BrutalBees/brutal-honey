import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../store/users';
import { fetchProducts } from "../store/products";
import { Statistic } from 'antd';
import styled from 'styled-components';

// Styled Components
const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
`;

const AdminDashboard = () => {
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  debugger
  return (
    <StyledAdminDashboard>
      <h2>ADMIN DASHBOARD</h2>
      <Statistic title="Active Users" value={users && users.length} />
      <Statistic title="Products Available" value={products && products.length}/>
    </StyledAdminDashboard>
  );
};

export default AdminDashboard;
