import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/auth';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { StyledFormBox, StyledWrapper } from './SignUp';

const Login = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <StyledWrapper>
      <header className="App-header">
        <Container>
          <div className="parent-div">
            <div className="exampldiv">
              <Card className="card-style">
                <h1 className="login-heading">Login</h1>
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

                    <a href="/#" className="forget-link">
                      Forgot password?
                    </a>
                    <Button
                      variant="secondary"
                      type="submit"
                      className="button"
                    >
                      {displayName}
                    </Button>
                    <div>
                      {error && error.response && (
                        <div> {error.response.data} </div>
                      )}
                    </div>
                    <div className="signup-link">
                      <a
                        href="/signup"
                        style={{ textDecoration: 'none', fontSize: '17px' }}
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
