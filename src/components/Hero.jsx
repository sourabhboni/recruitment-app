import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import HomeheroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
              backgroundImage: `linear-gradient(to right, rgba(3, 13, 35, 0.75), rgba(255, 255, 255, 0.01)), url(${HomeheroBg})`,
            }}
    >
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up">
          Empowering <span style={{
            background: 'linear-gradient(to right, #283048, #859398)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            }}>Bold Careers</span><br />
          For the Brave and Brilliant.
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          Recruitment reimagined. Where purpose meets possibility.
        </p>
        <Link
          to="/careers"
          className="hero-button"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Careers
        </Link>
      </div>
    </section>
  );
};

export default Hero;
