// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your enquiry, ${formData.name}! We will contact you soon.`);
    // In a real application, you would submit this data to a backend API here.
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Start your packaging project with us today.
      </p>

      <div className="contact-container">
        {/* Contact Form Card */}
        <div className="contact-form-card">
          <h3>Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message / Enquiry</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="hero-btn hero-btn-primary">
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Contact Information Card */}
        <div className="contact-info-card">
          <h3>Contact Details</h3>
          
          <div className="info-item">
            <FiMapPin className="info-icon" />
            <div>
              <p>
                **Head Office:**<br />
                No. 123/A, Main Street,<br />
                Colombo 07, Sri Lanka
              </p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone className="info-icon" />
            <div>
              <p>
                **Phone:**<br />
                <a href="tel:+94112345678">+94 11 234 5678</a>
              </p>
            </div>
          </div>
          
          <div className="info-item">
            <FiMail className="info-icon" />
            <div>
              <p>
                **Email:**<br />
                <a href="mailto:info@dcms.lk">info@dcms.lk</a>
              </p>
            </div>
          </div>
          
          <div className="map-placeholder">
            
            <p>Location Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;