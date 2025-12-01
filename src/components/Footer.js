import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS for the footer

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about-us/institute">About Us</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/courses/d-pharm">Courses</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-user"></i> <span>Sumatidevi Tompe Institute of Pharmaceutical Science and Research</span>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> <span>G.S.Tompe Educational Campus, Nanori Road, Chandur Bazar,Amravati 444704</span>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> <span>8551954921</span>
          </p>
          <p>
            <i className="fas fa-envelope"></i> <span>stipsr.admission@gmail.com</span>
          </p>
          <p>
            <i className="fas fa-clock"></i> <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
          </p>
        </div>

        {/* Connect with Us / Social Links Section - now a column */}
        <div className="footer-section footer-social">
          <h3>Connect with Us</h3>
          <div className="social-links">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/stipsr_pharmacy?igsh=MWs4ODI4M3VmMTg1Ng==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="footer-section footer-map">
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3718.6110599072363!2d77.75665937526264!3d21.247266380457315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE0JzUwLjIiTiA3N8KwNDUnMzMuMiJF!5e0!3m2!1sen!2sin!4v1754748244820!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Institute Location Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} Sumatidevi Tompe Institute. All rights reserved.</p>
          <p>Designed with ❤️ by Your Name/Organization</p>
          <div className="footer-policy-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;