import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../store/auth';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledSplash, StyledFormWrapper } from './styles';
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3em;
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
  background-size: cover;
`;

const StyledFormBox = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #b48139;
`;

const SignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <StyledFormWrapper>
      <header className="App-header">
        <Container>
          <h1> Register</h1>
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

                <Button variant="secondary" type="submit" className="button">
                  {displayName}
                </Button>
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
    </StyledFormWrapper>
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
