import React from 'react';
import {StyledSplash} from './styles';
import { Card, Button } from 'react-bootstrap';
import { StyledWrapper } from './SignUp';
import styled from 'styled-components';
const StyledConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px solid #b48139;
  color: #ffffff;
  height: 300px;
  width: 350px;
  overflow: auto;
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 150%;
  background-color:rgba(180, 129, 57, 0.5);
`


const OrderConfirmation = () => {
  return (
    <StyledWrapper>
      <StyledConfirmationBox>
        <div>THANK YOU!</div>
        <div> We have recieved your order.</div>
        <div>A confirmation has been sent to your email.
          Your order confirmation is: 5514125</div>
      </StyledConfirmationBox>
    </StyledWrapper>
  );
};

export default OrderConfirmation;
