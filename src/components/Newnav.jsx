

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Newnav.css"; 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="navbar-item" onClick={closeMenu}>
            <a>MUTHURAJ'S</a>
          </Link>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/about" className="navbar-item" onClick={closeMenu}>
            <a>About</a>
          </Link>
          <Link to="/services" className="navbar-item" onClick={closeMenu}>
            <a>Services</a>
          </Link>
          <Link to="/project" className="navbar-item" onClick={closeMenu}>
            <a>Project</a>
          </Link>
          <Link to="/contact" className="navbar-item" onClick={closeMenu}>
            <a>Contact</a>
          </Link>
         
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;