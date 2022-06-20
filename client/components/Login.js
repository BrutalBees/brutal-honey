import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/auth';
import { Container, Card, Button, Form } from 'react-bootstrap';

const Login = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <div className="parent-div">
            <div className="exampldiv">
              <Card className="card-style">
                <h1 className="login-heading">Login</h1>
                <Form
                  onSubmit={handleSubmit}
                  name={name}
                  style={{ margin: '30px' }}
                >
                  <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <a href="/#" className="forget-link">
                    Forgot password?
                  </a>
                  <Button variant="secondary" type="submit" className="button">
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
              </Card>
            </div>
          </div>
        </Container>
      </header>
    </div>
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
