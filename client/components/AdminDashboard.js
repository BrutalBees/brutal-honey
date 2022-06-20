import React from "react";
import { Statistic } from 'antd';
import styled from 'styled-components';

// Styled Components
const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-between;
`;

const AdminDashboard = () => {
  return (
    <StyledAdminDashboard>
      <Statistic title="Active Users" value={112893} />
      <Statistic title="Account Balance" value={112893} precision={2} />
      <Statistic title="Active Users" value={112893} loading />
    </StyledAdminDashboard>
  );
};

export default AdminDashboard;
