import React from 'react';
import './CTASection.css';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title" data-aos="fade-up">
          Ready to <span className="new-text">build your dream team</span> or find your next big opportunity?
        </h2>
        <p className="cta-subtext" data-aos="fade-up" data-aos-delay="200">
          Whether you’re hiring or job-hunting, Transglobal is your trusted partner in navigating the world of talent.
        </p>
        <div className="cta-buttons" data-aos="zoom-in" data-aos-delay="400">
          <Link to="/careers" className="cta-button primary">Explore Careers</Link>
          <Link to="/contact" className="cta-button secondary">Hire With Us</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
