import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-4">Get in Touch</h2>
        <Row>
          <Col md={8}>
            <p>Have questions? Fill out the form and we'll get back to you as soon as possible.</p>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={4} className="mt-5">
            <h5>Contact Information</h5>
            <p>Email: support@eduplatform.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;