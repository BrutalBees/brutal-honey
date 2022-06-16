// STYLED COMPONENTS
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Home
const StyledSplash = styled.div`
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
  height: 80%;
  border-bottom: solid #b7aba4 1px;
  padding: 100px;
`;

const StyledProductsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 217px;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  margin: 50px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
`;
//
// Navbar
const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 100%;
  padding: 24px 50px;
  border-bottom: solid white 0.5px;
  color: #292819;
  opacity: 1;
  &:hover {
    color: #ffffff;
    background-color: #b48139;
    transition: background .5s ease-in-out,box-shadow .3s ease-in-out;
  }
`;

const StyledNavHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLeftHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: flex-start;
`;

const StyledRightHeader = styled(StyledLeftHeader)`
  justify-content: flex-end;
`;

const StyledLogoHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

const StyledLogoLink = styled(Link)`
  font-size: 30px;
  font-weight: 300px;
  color: #705129;
`;

const StyledLink = styled(Link)`
  color: black;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledNavHeaderBottom = styled(StyledNavHeader)`
  padding: 0px 30%;
  align-items: flex-end;
`;

// ProductIndexItem
const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 360px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.5s;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }
`;

const StyledItemImage = styled.div`
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
`;

const StyledProductName = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

export {
  // Home
  StyledSplash,
  StyledProductIndexWrapper,
  StyledProductsLink,
  //Navbar
  StyledNavbar,
  StyledNavHeader,
  StyledLeftHeader,
  StyledRightHeader,
  StyledLogoHeader,
  StyledLogoLink,
  StyledLink,
  StyledLinksWrapper,
  StyledNavHeaderBottom,
  // ProductIndexItem
  StyledItemWrapper,
  StyledItemImage,
  StyledProductName
};