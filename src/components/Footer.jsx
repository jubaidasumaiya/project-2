import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>EduTech</h5>
            <p>Empowering learners with modern skills and knowledge through quality courses.</p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/courses" className="text-light">Courses</a></li>
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Contact Us</h6>
            <p>Email: support@edutech.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} EduTech. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;