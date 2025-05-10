import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from  '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Container} from 'react-bootstrap';

const NavbarComponent= () => {
    return (
      <div>

<Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" height="40" className="d-inline-block align-top"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
          <button className="nav-button">Log In</button>
          <button className="nav-button">Sign Up</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
