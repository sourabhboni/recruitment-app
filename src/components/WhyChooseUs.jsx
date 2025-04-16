// components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const highlights = [
    { stat: '48h', label: 'Avg. Response Time' },
    { stat: '5+', label: 'Countries Covered' },
    { stat: '10K+', label: 'Candidates Placed' },
    { stat: '100%', label: 'GDPR Compliant' },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2>Why Choose Us</h2>
        <div className="stats-grid">
          {highlights.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{item.stat}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
