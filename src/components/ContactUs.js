import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page page-content-container">
      <h2>Contact Us</h2>
      <p>We are here to assist you. Please feel free to reach out to us using the information below or by filling out the contact form.</p>

      <div className="contact-details-grid">
        <div className="contact-info-card">
          <h3>Our Address</h3>
          <p>Sumatidevi Tompe Institute of Pharmaceutical Science and Research</p>
          <p>[Institute Street Address]</p>
          <p>[City, State, Zip Code]</p>
          <p>Maharashtra, India</p>
        </div>
        <div className="contact-info-card">
          <h3>Contact Numbers</h3>
          <p><strong>General Enquiries:</strong> +91 [Your Phone Number]</p>
          <p><strong>Admissions:</strong> +91 [Admissions Phone Number]</p>
          <p><strong>Email:</strong> <a href="mailto:info@yourinstitute.com">info@yourinstitute.com</a></p>
          <p><strong>Admissions Email:</strong> <a href="mailto:admissions@yourinstitute.com">admissions@yourinstitute.com</a></p>
        </div>
        <div className="contact-info-card">
          <h3>Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <section className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="location-map">
        <h3>Find Us on Map</h3>
        {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
        <div className="map-placeholder">
          {/* Replace with your actual Google Maps embed code or similar */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.222301989422!2d73.4079836!3d18.662283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a3a0d5c2a11b%3A0x3f5c9e2b1e1d0f!2sAamby%20Valley%20City!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Institute Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;