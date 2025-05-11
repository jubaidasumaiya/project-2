import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails';
import Footer from './components/Footer'
import NavbarComponent from './components/NavbarComponent'
import Login from './pages/LogIn';
import Signup from './pages/SignUp';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/>"
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        </Routes>
        <Footer/>
        </Router>
  );
}


export default App
