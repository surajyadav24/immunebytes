import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Header() { // Renamed function to capitalize (React components should be capitalized)
  return (
    <>
      <header className=" text-white p-3 ">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <div className="h3 font-weight-bold">Your Logo</div>
          <nav>
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
          <a href="#" className="btn register-btn ">Request Audit</a>
        </div>
      </header>
    </>
  );
}

export default Header;
