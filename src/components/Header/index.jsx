import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../assets/images/logos/Logo.svg'
import Formpopup from '../Formpopup'
function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on click
  };

  return (
    <>
      <header className="text-white p-3">
        <div className="container d-flex justify-content-between align-items-center p-0">
          

    
          <div className="h3 font-weight-bold logo">
          <a href="/">  <img src={Logo} alt="" /></a>
          </div>
          <nav className="desktop-nav d-none d-md-block">
            <ul className="nav">
            <li className="nav-item">
                <a href="/Home" className="nav-link text-white">
             Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link text-white">
                 Portfolio
                </a>
              </li>
           
              <li className="nav-item">
                <a href="/about-us" className="nav-link text-white">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">
             BLog
                </a>
              </li>
            </ul>
          </nav>

          {/* "Request Audit" Button Always Visible */}
       <div className="desktop-btn-request">
       <Formpopup/>
       </div>

          {/* Hamburger Menu for Mobile & Tablet */}
          <div className="hamburger d-md-none" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isOpen && (
          <nav className="mobile-nav d-md-none">
            <ul className="nav flex-column">
            <li className="nav-item">
                <a href="/Home" className="nav-link text-white">
             Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link text-white">
                 Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/about-us" className="nav-link text-white">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white">
             BLog
                </a>
              </li>
              <li className="nav-item">
              <Formpopup/>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
