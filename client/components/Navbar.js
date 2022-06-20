import React, { useCallback } from 'react';
import { logout } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
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
  const handleLogout = useCallback(() => dispatch(logout()));

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
              {isAdmin ?
                <StyledLink to="/admin">
                  WELCOME, {name.toUpperCase()}
                </StyledLink>
                :
                <span>WELCOME, {name.toUpperCase()} </span>
              }
              <StyledLink to="#" onClick={handleLogout}>
                LOG OUT
              </StyledLink>
              <StyledLink to="/cart">
                <ShoppingCartOutlined />
                {" CART "}
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
        <StyledLink to="/products?category=Organic">ORGANIC</StyledLink>
        <StyledLink to="/products?category=Raw">RAW</StyledLink>
        <StyledLink to="/products?category=Manuka">MANUKA</StyledLink>
        <StyledLink to="/products?category=Sage">SAGE</StyledLink>
        <StyledLink to="/home">ABOUT</StyledLink>
      </StyledNavHeaderBottom>
    </StyledNavbar>
  );
};
export default Navbar;
