import React from 'react';
import styled from 'styled-components';
import AdminProducts from './AdminProducts';

// Styled Components
const StyledProductsWrapper = styled.div`
  margin: 100px;
`;

const AdminView = () => {

  return (
    <StyledProductsWrapper>
      <AdminProducts />
    </StyledProductsWrapper>
  );
};

export default AdminView;
