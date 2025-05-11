import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Log In</h2>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;