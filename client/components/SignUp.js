import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/auth';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
const StyledSignupButton = styled(Button)`
  justify-content: center;
  color: black;
  background-color: white;
  border: solid #d9d9d9; 1px;
  margin-bottom: 20px;
  margin-top: 15%;
  margin-left: 50px;

  &:hover {
    color: #f5db8b;
    border: solid #f5db8b 1px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3em;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
  background-size: cover;
  background-position: center;
`;

export const StyledFormBox = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #b48139;
  background-color: #ebe8eb;
  align-text: center;
`;

const SignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <StyledWrapper>
      <header className="App-header">
        <Container>
          <h1
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bolder',
            }}
          >
            {' '}
            Register
          </h1>
          <div>
            <StyledFormBox>
              <Form
                onSubmit={handleSubmit}
                name={name}
                style={{ margin: '30px' }}
              >
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicFirstName"
                >
                  <Form.Label column sm={2}>
                    First Name:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control name="firstName" type="text" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicLastName"
                >
                  <Form.Label column sm={2}>
                    Last Name:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control name="lastName" type="lastName" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label column sm={2}>
                    Email:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control name="email" type="email" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label column sm={2}>
                    Password:
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control name="password" type="password" />
                  </Col>
                </Form.Group>

                <StyledSignupButton
                  variant="secondary"
                  type="submit"
                  className="button"
                >
                  {displayName}
                </StyledSignupButton>
                <div>
                  {error && error.response && (
                    <div> {error.response.data} </div>
                  )}
                </div>
              </Form>
            </StyledFormBox>
          </div>
        </Container>
      </header>
    </StyledWrapper>
  );
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatchSignup = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;

      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(signup(firstName, lastName, email, password));
    },
  };
};

export default connect(mapSignup, mapDispatchSignup)(SignUp);
