import React from 'react';
import {StyledSplash} from './styles';
import { Card, Button } from 'react-bootstrap';
import { StyledWrapper } from './SignUp';
import styled from 'styled-components';
const StyledConfirmationBox = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #b48139;
  background-color: white;
  height: 300px;
  width: 350px;
  
`

const OrderConfirmation = () => {
  return (
    <StyledWrapper>
      <StyledConfirmationBox>
        <h1>THANK YOU!</h1>
        <h2> We have recieved your order.</h2>
        <p> A confirmation has been sent to your email.
          Your order confirmation is 5514125
        </p>
      </StyledConfirmationBox>
    </StyledWrapper>
  
  // <Card border="primary" style={{ width: '18rem' }} className="confirmation-card">
  //   <Card.Body>
  //     <Card.Title>THANK YOU!</Card.Title>
  //     <Card.Text>
  //     We have recieved your order.
  //     </Card.Text>
  //     <Card.Text>
  //     A confirmation has been sent to your email.
  //     </Card.Text>
  //     <Card.Text>
  //     Your order confirmation is 5514125
  //     </Card.Text>
  //     <Button variant="primary">Continue Shopping</Button>
  //   </Card.Body>
  // </Card>
  );
};

export default OrderConfirmation;
