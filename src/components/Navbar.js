import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-group">
          <Link to="/" className="navbar-logo">
            Charitable Support for Memory loss, Cognitive impairment and cardiovascular health
          </Link>
        </div>
        <div className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/programs" className="nav-item">Programs & Services</Link>
          <Link to="/contact" className="nav-item">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 