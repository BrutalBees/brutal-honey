import React, { useCallback } from 'react';
import { logout } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledNavbar,
  StyledNavHeader,
  StyledLeftHeader,
  StyledRightHeader,
  StyledLogoHeader,
  StyledLogoLink,
  StyledLink,
  StyledLinksWrapper,
  StyledNavHeaderBottom,
} from './styles';

const Navbar = () => {
  const name = useSelector((state) => state.auth.firstName);
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(logout()));

  return (
    <StyledNavbar>
      <StyledNavHeader>
        <StyledLeftHeader>SEARCH</StyledLeftHeader>
        <StyledLogoHeader>
          <StyledLogoLink to="/home">BRUTAL HONEY</StyledLogoLink>
        </StyledLogoHeader>
        <StyledRightHeader>
          {isLoggedIn ? (
            <StyledLinksWrapper>
              <span>WELCOME, {name.toUpperCase()} </span>
              {isAdmin &&
                <StyledLink to="/admin">
                  ADMIN
                </StyledLink>}
              <StyledLink to="#" onClick={handleClick}>
                LOG OUT
              </StyledLink>
            </StyledLinksWrapper>
          ) : (
            <StyledLinksWrapper>
              <StyledLink to="/login">LOGIN</StyledLink>
              <StyledLink to="/signup">SIGN UP</StyledLink>
            </StyledLinksWrapper>
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
  );
};
export default Navbar;
