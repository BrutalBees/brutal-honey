import React from "react";
import { Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// Styled Components
const StyledAdminDashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: space-between;
`;

const AdminDashboard = () => {
  return (
    <StyledAdminDashboard>
      <Statistic title="Active Users" value={23239} />
      <Statistic title="Account Balance" value={18347} precision={2} />
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </StyledAdminDashboard>
  );
};

export default AdminDashboard;
