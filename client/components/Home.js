import React from 'react';
import ProductIndex from './ProductIndex';

import styled from 'styled-components';
import Navbar from './Navbar';

// STYLED COMPONENTS
const StyledSpash = styled.div`
  background-image: url("https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

// COMPONENT
export const Home = props => {
  return (
    <div>
      <StyledSpash>
        <Navbar />
      </StyledSpash>
      <ProductIndex />
    </div>
  )
};

export default Home;
