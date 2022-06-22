import React, { useEffect } from 'react';
import {StyledSplash} from './styles';
import { Card, Button } from 'react-bootstrap';
import { StyledWrapper } from './SignUp';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import { fetchCart } from "../store/cart";

const StyledConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px solid #ffffff;
  padding: 20px 25px 25px 20px;
  color: #ffffff;
  height: 400px;
  width: 400px;
  overflow: auto;
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 180%;
  background-color:rgba(193, 125, 31, 0.8);
`
const StyledButton = styled(Button)`
   background-color:rgba(193, 125, 31, 0.8);
   border: 3px solid #ffffff;
   color: #ffffff;
`


const OrderConfirmation = (props) => {
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
        <StyledButton>CONTINUE SHOPPING</StyledButton>
        </a>
      </StyledConfirmationBox>
    </StyledWrapper>
  );
};

export default OrderConfirmation;
