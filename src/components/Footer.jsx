import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow-divider"></div>

      <div className="footer-container">

        {/* Column 1: Brand & Mission */}
        <div className="footer-column">
          <p className="footer-tagline">
            Bridging bold talent with daring opportunity — coast to coast.
          </p>
        </div>

        {/* Column 2: Contact & Social */}
        <div className="footer-column">
          <h4 className="footer-heading">Connect</h4>
          <p className="footer-contact">hiring@transglobalhiring.com</p>
          <p className="footer-location">Wyoming, United States</p>
          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

        {/* Column 3: Legal */}
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Transglobal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
