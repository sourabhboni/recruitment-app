import React from 'react';
import Slider from 'react-slick';
import './TestimonialCarousel.css';

const testimonials = [
  {
    name: 'Aarav Patel',
    role: 'CTO, TechNova Ltd.',
    quote: 'Working with Transglobal was a game-changer. Their speed and precision in hiring are unmatched.',
  },
  {
    name: 'Emily Roberts',
    role: 'Head of People, HealRight Clinics',
    quote: 'Their team truly understands healthcare hiring nuances. We scaled with confidence.',
  },
  {
    name: 'Daniel Osei',
    role: 'Frontend Engineer (placed)',
    quote: 'They got me my dream job in 2 weeks. I’ve never had a smoother hiring experience.',
  },
];


const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="testimonial-carousel-section">
      <h2 className="carousel-heading">
        Trusted by <span className="highlight">Real People</span>
      </h2>
      <div className="testimonial-carousel-wrapper">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="carousel-card fancy-zoom">
              <p className="carousel-quote">“{t.quote}”</p>
              <p className="carousel-name">{t.name}</p>
              <p className="carousel-role">{t.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
