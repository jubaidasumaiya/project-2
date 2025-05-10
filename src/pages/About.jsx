import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';
//import about from '../assets/about.jpg';//

const About = () => {
  return (
    <>
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
        {/* <Col md={6}>
         {/*<img src={about} alt="about" />
         </Col>*/}
          <Col md={6}>
            <h2>About EduPlatform</h2>
            <p>
              EduPlatform is an innovative learning portal that offers a wide range of courses taught by top industry experts. 
              Our mission is to make quality education accessible to everyone, anywhere.
            </p>
            <p>
              Whether you're looking to develop new skills, change your career, or just explore something new, EduPlatform is here to support your journey.
            </p>
          </Col>
        </Row>
      </Container>
    </section>

<section className="values-section py-5 bg-light">
  <Container>
    <h3 className="text-center mb-4">Our Core Values</h3>
    <Row className="text-center">
      <Col md={4}>
        <div className="value-box p-4">
          <h5>Integrity</h5>
          <p>We prioritize honesty and transparency in all our practices.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="value-box p-4">
          <h5>Innovation</h5>
          <p>We embrace creativity and continuously improve learning experiences.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="value-box p-4">
          <h5>Inclusion</h5>
          <p>We are committed to accessible education for diverse learners worldwide.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

<section className="stats-section py-5">
  <Container>
    <h3 className="text-center mb-5">Our Impact in Numbers</h3>
    <Row className="text-center">
      <Col md={3}>
        <div className="stat-box">
          <h2>10K+</h2>
          <p>Students</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="stat-box">
          <h2>500+</h2>
          <p>Courses</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="stat-box">
          <h2>100+</h2>
          <p>Instructors</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="stat-box">
          <h2>95%</h2>
          <p>Satisfaction Rate</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>
</>
  );
};

export default About;