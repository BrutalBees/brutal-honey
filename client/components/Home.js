import React from 'react';
import { Link } from 'react-router-dom';
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

const StyledProductIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-bottom: solid #b7aba4 1px;
  padding: 100px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 217px;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
`;

// COMPONENT
export const Home = props => {
  return (
    <div>
      <StyledSpash>
        <Navbar />
      </StyledSpash>
      <StyledProductIndexWrapper>
        <ProductIndex />
        <StyledLink to='/products'>VIEW ALL PRODUCTS</StyledLink>
      </StyledProductIndexWrapper>
    </div>
  )
};

export default Home;
