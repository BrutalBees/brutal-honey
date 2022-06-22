import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../store/users';
import { fetchProducts } from "../store/products";
import styled from 'styled-components';

// Styled Components
const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  gap: 20px;
  justify-content: space-between;
`;

const StyledStatistic = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const AdminDashboard = () => {
  const users = useSelector(state => state.users);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
  useEffect(() => { dispatch(fetchProducts()) }, [dispatch]);

  return (
    <StyledAdminDashboard>
      <StyledStatistic>
        <h2>Active Users</h2>
        <h1>{users.length}</h1>
      </StyledStatistic>
      <StyledStatistic>
        <h2>Current Products</h2>
        <h1>{products.length}</h1>
      </StyledStatistic>
    </StyledAdminDashboard>
  );
};

export default AdminDashboard;
