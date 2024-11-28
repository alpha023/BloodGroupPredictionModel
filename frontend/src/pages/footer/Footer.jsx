// Footer.js
import React from 'react';
import './footer.css'; // Import footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#accuracy">Accuracy</a>
          <a href="#methodology">Methodology</a>
          <a href="#contact">Contact</a>
          <a href="#others">Others</a>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <a href="mailto:myselfamit.ap23@gmail.com">myselfamit.ap23@gmail.com</a>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
