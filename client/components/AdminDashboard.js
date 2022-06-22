import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../store/users';
import { fetchProducts } from "../store/products";
import { Statistic } from "antd";
import styled from 'styled-components';

const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: space-between;
`;

const AdminDashboard = () => {
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  return (
    <StyledAdminDashboard>
      <Statistic title="Active Users" value={users.length} />
      <Statistic title="Available Products" value={products.length} />
    </StyledAdminDashboard>
  );
};

export default AdminDashboard;
