import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './courses.css';

const coursesData = [
  {
    title: 'React for Beginners',
    description: 'Learn to build dynamic user interfaces with React.js.',
  },
  {
    title: 'Introduction to Python',
    description: 'Master the basics of Python programming language.',
  },
  {
    title: 'UI/UX Design Fundamentals',
    description: 'Understand the core principles of effective design.',
  },
  {
    title: 'Web Development Bootcamp',
    description: 'Full-stack development with HTML, CSS, JavaScript, and more.',
  },
  {
    title: 'Data Science Essentials',
    description: 'Dive into data analysis and machine learning basics.',
  },
  {
    title: 'Digital Marketing Basics',
    description: 'Grow your brand with social media and SEO skills.',
  },
];

const Courses = () => {
  return (
    <section className="courses-section py-5">
      <Container>
        <h2 className="text-center mb-4">Our Courses</h2>
        <Row className="g-4">
          {coursesData.map((course, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Link to={`/courses/${index + 1}`}>
                  <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;