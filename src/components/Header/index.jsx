import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on click
  };

  return (
    <>
      <header className="text-white p-3">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <div className="h3 font-weight-bold">Your Logo</div>

          <nav className={`d-none d-md-block ${isOpen ? "open" : ""}`}>
            <ul className="nav">
              <li className="nav-item">
                <a href="#home" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link text-white">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a href="#" className="btn register-btn d-none d-md-inline-block">
            Request Audit
          </a>
          <a href="#" className="btn register-btn mobile-btn text-white">
                  Request Audit
                </a>
          {/* Hamburger Menu */}
          <div className="hamburger d-md-none" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
     
        {/* Mobile Menu */}
        {isOpen && (
          <nav className="mobile-nav d-md-none">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#home" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link text-white">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-white">
                  Contact
                </a>
              </li>
              <li className="nav-item">
              
              </li>
            </ul>
          
          </nav>
          
        )}
          
      </header>
    </>
  );
}

export default Header;
