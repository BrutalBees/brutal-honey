import React, {useCallback} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

// STYLED COMPONENT
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
  font-size: 30px;
  font-weight: 300px;
`;

const StyledNavHeaderBottom = styled(StyledNavHeader)`
  padding: 0px 30%;
  align-items: flex-end;
`;

// FUNCTIONAL COMPONENT
const Navbar = () => {
  const name = useSelector(state => state.auth.firstName);
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(logout()));

  return (
    <StyledNavbar>
      <StyledNavHeader>
        <StyledLeftHeader>SEARCH</StyledLeftHeader>
        <StyledLogoHeader>
          <Link to='/home'>BRUTAL HONEY</Link>
        </StyledLogoHeader>
        <StyledRightHeader>
          {isLoggedIn ? (
          <div>
          {/* The navbar will show these links after you log in */}
            <span>WELCOME, {name.toUpperCase()} </span>
            <a href="#" onClick={handleClick}>
              LOG OUT
            </a>
            </div>
          ) : (
            <div>
          {/* The navbar will show these links before you log in */}
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGN UP</Link>
            </div>
          )}
        </StyledRightHeader>
      </StyledNavHeader>
      <StyledNavHeaderBottom>
        <span>ORGANIC</span>
        <span>RAW</span>
        <span>MANUKA</span>
        <span>SAGE</span>
        <span>ABOUT</span>
      </StyledNavHeaderBottom>
    </StyledNavbar>
  )
}
export default Navbar;
