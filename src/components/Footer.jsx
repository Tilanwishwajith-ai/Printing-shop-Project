// src/components/Footer.jsx
import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Logo and Company Info */}
        <div className="footer-column logo-col">
          <h3>DCMS Solutions</h3>
          <p>
            Uncompromised commitment to customer satisfaction. We deliver high-quality 
            Offset Printing and Flexible Packaging products.
          </p>
          <p className="address">
            No. 123/A, Main Street, Colombo 07, Sri Lanka
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Get a Quote</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact Information</h4>
          <ul>
            <li>Email: <a href="mailto:info@dcms.lk">info@dcms.lk</a></li>
            <li>Phone: <a href="tel:+94112345678">+94 11 234 5678</a></li>
            <li>Hours: Mon - Fri, 9:00 AM - 5:00 PM</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} DCMS Packaging Solutions (Pvt)Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;