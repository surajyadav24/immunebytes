// src/components/Footer.js
import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
            <div className="footer-section">
        <h3>Home</h3>
        <ul>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Request audit</a></li>
        </ul>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Smart contract audit</a></li>
          <li><a href="#">Blockchain security service</a></li>
          <li><a href="#">Penetration Testing</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="footer-section">
        <h3>Subscribe</h3>
        <form>
            <label htmlFor="first&lastname">First & Last Name</label>
          <input type="text" placeholder="First & Last Name" />
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>©2024 ImmuneBytes. All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
            </div>
        </div>
     
    </footer>
  );
};

export default Footer;
