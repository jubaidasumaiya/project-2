import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
      

    <section className="home-section">
       <div className="home">
      <Container className="text-center py-5">
        <h1 className="home-title">Welcome to EduPlatform</h1>
        <p className="lead">Your gateway to learning new skills anytime, anywhere.</p>
        <Link to="/courses">
          <Button variant="primary" size="lg">Browse Courses</Button>
        </Link>
      </Container>

      <Container className="py-5">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <Row className="g-4">
          {['React for Beginners', 'Introduction to Python', 'Mastering UI/UX Design'].map((course, index) => (
            <Col key={index} md={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{course}</Card.Title>
                  <Card.Text>
                    Learn the fundamentals of {course.split(' ')[0]} and build real-world projects.
                  </Card.Text>
                  <Link to="/courses">
                    <button className="custom-button">View Course</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </section>

    <section className="why-us py-5 bg-light">
  <Container>
    <h2 className="text-center mb-4">Why Choose EduPlatform?</h2>
    <Row className="gx-4 gy-4">
      <Col md={4}>
        <div className="card text-center p-4 h-100 shadow-sm">
          <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
          <h5 className="mt-3">Expert Instructors</h5>
          <p>Learn from industry professionals with hands-on experience.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="card text-center p-4 h-100 shadow-sm">
          <i className="bi bi-laptop-fill fs-1 text-success"></i>
          <h5 className="mt-3">Flexible Learning</h5>
          <p>Access your courses anytime, from any device.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="card text-center p-4 h-100 shadow-sm">
          <i className="bi bi-award-fill fs-1 text-warning"></i>
          <h5 className="mt-3">Certified Courses</h5>
          <p>Receive certificates after successful completion of courses.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>


<section className="testimonials py-5 bg-white">
  <Container>
    <h2 className="text-center mb-5">What Our Students Say</h2>
    <Carousel indicators={false} controls={true} interval={1500}>
      <Carousel.Item>
        <div className="testimonial-slide text-center p-4">
          <p>"This platform has completely changed the way I learn. The instructors are amazing!"</p>
          <h6 className="mt-3 mb-0">– Sarah Ahmed</h6>
          <small className="text-muted">Web Developer</small>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-slide text-center p-4">
          <p>"I could study at my own pace and the courses were so well structured!"</p>
          <h6 className="mt-3 mb-0">– Rakib Hasan</h6>
          <small className="text-muted">Freelancer</small>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="testimonial-slide text-center p-4">
          <p>"Getting certified helped me land a new job. Highly recommend EduPlatform!"</p>
          <h6 className="mt-3 mb-0">– Nusaiba Chowdhury</h6>
          <small className="text-muted">UI/UX Designer</small>
        </div>
      </Carousel.Item>
    </Carousel>
  </Container>
</section>

<section className="newsletter text-white py-5 text-center">
  <Container>
    <h3>Stay Updated!</h3>
    <p>Subscribe to our newsletter for latest course updates and offers.</p>
    <form className="d-flex justify-content-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="form-control w-50 me-2"
      />
      <Button variant="light">Subscribe</Button>
    </form>
  </Container>
</section>
    </div>
  )
}

export default Home
