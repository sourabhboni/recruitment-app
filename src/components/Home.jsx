import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Specialties from '../components/Specialties';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FeaturedJobs from '../components/FeaturedJobs';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

import './Home.css';

const Home = () => {
  return (
    <main>
      <Hero /> {/* No ID here, navbar sits on top */}

      <div id="about" className="soft-section">
        <AboutUs />
      </div>

      <div id="services" className="white-section">
        <Specialties />
      </div>

      <div id="testimonials" className="soft-section">
        <TestimonialCarousel />
      </div>

      <div id="featured-jobs" className="white-section">
        <FeaturedJobs />
      </div>

      <div id="contact" className="cta-bg-section">
        <CTASection />
      </div>

    
    </main>
  );
};

export default Home;
