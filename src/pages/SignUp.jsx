import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;