import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <h3>Location</h3>
            <p>Armor Village San Jose Gusu <br /> Zamboanga City</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt contact-icon"></i>
            <h3>Phone Number</h3>
            <p>Philippine Toll-Free:<br />0955-032-8919</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <h3>Email</h3>
            <p>Send me your inquiries at<br />vannymacs@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;