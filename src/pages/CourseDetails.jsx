import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './coursedetails.css';

const courseDetails = {
  1: {
    title: 'React for Beginners',
    overview: "This course is designed for absolute beginners who want to dive into modern web development using React — the most popular JavaScript library for building user interfaces. You'll start from the basics and gradually build up to creating your own interactive web apps.",
    learningPoints: [
      "Introduction to React and its core concepts",
      "Setting up a development environment with Create React App",
      "JSX syntax and how it differs from HTML",
      "Understanding components — functional vs. class-based",
      "Props and State: passing data and managing dynamic content",
      "Handling user events and building interactivity",
      "Using hooks like useState and useEffect",
      "Conditional rendering and list rendering",
      "React Router for navigating between pages",
      "Project: Build a simple to-do app or portfolio page"
    ],
    audience: "Perfect for those with basic knowledge of HTML, CSS, and JavaScript who want to learn how to build dynamic, responsive user interfaces using React.",
    duration: "4 weeks (3–4 hours/week)",
    tools: [
      "Visual Studio Code",
      "React Developer Tools",
      "Git & GitHub (optional for version control)"
    ]
  },
  2: {
    title: 'Introduction to Python',
    overview: "Master variables, loops, conditionals, and functions in Python. Perfect for beginners looking to dive into programming.",
    learningPoints: [],
    audience: "Anyone new to coding who wants to start with an easy-to-learn language.",
    duration: "3 weeks (2–3 hours/week)",
    tools: ["Python", "IDLE or VS Code"]
  },
  3: {
    title: 'Mastering UI/UX Design',
    overview: "Understand design principles, wireframing, and tools like Figma to build user-centered designs.",
    learningPoints: [],
    audience: "Aspiring designers or developers interested in front-end design.",
    duration: "4 weeks",
    tools: ["Figma", "Adobe XD", "Pen & Paper"]
  }
};

const CourseDetails = () => {
  const { id } = useParams();

  if (!id || isNaN(parseInt(id))) {
    return <p className="text-center py-5">Invalid course ID.</p>;
  }

  const course = courseDetails[parseInt(id)];

  if (!course) {
    return <p className="text-center py-5">Course not found.</p>;
  }

  return (
    <section className="course-details-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4">{course.title}</h2>

            <p><strong>Overview:</strong> {course.overview}</p>

            {course.learningPoints.length > 0 && (
              <>
                <h5>What You’ll Learn:</h5>
                <ul>
                  {course.learningPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            <p><strong>Who Should Take This Course:</strong> {course.audience}</p>
            <p><strong>Duration:</strong> {course.duration}</p>

            {course.tools && (
              <>
                <h5>Tools You'll Use:</h5>
                <ul>
                  {course.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </>
            )}

            <Link to="/courses">
              <Button variant="primary">Back to Courses</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseDetails;