import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Contact Us - Charitable Support</title>
        <meta name="description" content="Get in touch with Charitable Support" />
      </Helmet>
      <div className="contact-content">
        <div className="contact-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p className="subtitle">We'd love to hear from you</p>
          </div>
        </div>

        <div className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Have questions about our programs or want to get involved? We're here to help!</p>
                <div className="contact-card-grid">
                  <div className="contact-card">
                    <h3>Email</h3>
                    <p>nvengeeric@yahoo.com</p>
                  </div>
                  <div className="contact-card">
                    <h3>Phone</h3>
                    <p>240-310-5210</p>
                  </div>
                  <div className="contact-card">
                    <h3>Office</h3>
                    <p>10312 Garson Terrace, Lanham, MD 20706</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <h2>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 