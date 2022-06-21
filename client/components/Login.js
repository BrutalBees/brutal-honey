import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/auth';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledFormBox, StyledWrapper } from './SignUp';

// Styled Components
export const StyledLoginButton = styled(Button)`
  justify-content: center;
  color: black;
  background-color: white;
  border: solid #d9d9d9; 1px;
  margin-bottom: 20px;
  margin-top: 10%;
  margin-left: 50px;
  &:hover {
    color: #f5db8b;
    border: solid #f5db8b 1px;
  }
`;

const StyledFormLink = styled.a``;

const Login = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <StyledWrapper>
      <header className="App-header">
        <Container>
          <div className="parent-div">
            <div className="exampldiv">
              <Card className="card-style">
                <h1
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bolder',
                  }}
                >
                  Login
                </h1>
                <StyledFormBox>
                  <Form
                    onSubmit={handleSubmit}
                    name={name}
                    style={{ margin: '30px' }}
                  >
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formBasicUserName"
                    >
                      <Form.Label column sm={2}>
                        Email
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
                    <StyledLoginButton
                      variant="secondary"
                      type="submit"
                      className="button"
                    >
                      {displayName}
                    </StyledLoginButton>
                    <div>
                      {error && error.response && (
                        <div> {error.response.data} </div>
                      )}
                    </div>

                    <div className="signup-link">
                      <a
                        href="/signup"
                        style={{
                          textDecoration: 'none',
                          fontSize: '17px',
                          color: '#b48139',
                          alignText: 'center',
                        }}
                      >
                        Create Account
                      </a>
                    </div>
                  </Form>
                </StyledFormBox>
              </Card>
            </div>
          </div>
        </Container>
      </header>
    </StyledWrapper>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapDispatchLogin = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login(email, password));
    },
  };
};

export default connect(mapLogin, mapDispatchLogin)(Login);
