import React, { useEffect } from 'react';
import {StyledSplash} from './styles';
import { Button } from 'react-bootstrap';
import { StyledWrapper } from './styles';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { StyledShoppingButton, StyledConfirmationBox } from './styles'

import { fetchCart } from "../store/cart";




const OrderConfirmation = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
   useEffect(() => { dispatch(fetchCart()) }, [dispatch]);
  return (
    <StyledWrapper>
      <StyledConfirmationBox>
        <div>THANK YOU!</div>
        <div> We have recieved your order.</div>
        <div>A confirmation has been sent to your email.
          Your order confirmation is:</div>
        <div> {cart.id}</div>
        <a href="/home">
        <StyledShoppingButton>CONTINUE SHOPPING</StyledShoppingButton>
        </a>
      </StyledConfirmationBox>
    </StyledWrapper>
  );
};

export default OrderConfirmation;
