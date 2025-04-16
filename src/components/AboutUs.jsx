import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading" data-aos="fade-right" data-aos-delay="200">
          About <span className="new-text">Transglobal Hiring LLC</span>
        </h2>
        <p className="about-paragraph">
          <strong>We’re not here to just fill roles — we’re here to shape futures.</strong> Transglobal was born out of a vision to break away from transactional recruitment and create a people-first model that fuels both careers and companies.
        </p>
        <p className="about-paragraph">
          With a reach that spans continents, we specialize in identifying untapped potential, curating tailored matches, and driving workforce transformation. We believe hiring isn't about quantity — it’s about connection, chemistry, and long-term impact.
        </p>
        <ul className="about-list">
          <li><strong>🔍 Hyper-personalized:</strong> Matching more than keywords — we dig deep into cultural & growth fit.</li>
          <li><strong>🌍 Industry-Aware:</strong> Healthcare, fintech, logistics, education — we speak your business language.</li>
          <li><strong>🤖 Smart Tech + Human Insight:</strong> ATS + AI + real human understanding.</li>
          <li><strong>🚀 Fast & Flexible:</strong> Shortlists delivered within 72 hours, globally ready.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
