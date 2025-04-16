import React from 'react';
import './Specialties.css';
import { FaLaptopCode, FaStethoscope, FaHammer, FaUniversity, FaWarehouse, FaBullhorn } from 'react-icons/fa';

const specialties = [
  {
    icon: <FaLaptopCode />,
    title: 'Tech & Engineering',
    description: 'From software engineers to cloud architects — we power innovation.',
    delay: 0,
  },
  {
    icon: <FaStethoscope />,
    title: 'Healthcare',
    description: 'Doctors, nurses, and medical staff to keep your teams thriving.',
    delay: 100,
  },
  {
    icon: <FaHammer />,
    title: 'Construction',
    description: 'Reliable trades and skilled workers for every build and blueprint.',
    delay: 200,
  },
  {
    icon: <FaUniversity />,
    title: 'Education',
    description: 'Top educators and support staff for academic excellence.',
    delay: 300,
  },
  {
    icon: <FaWarehouse />,
    title: 'Logistics',
    description: 'Efficient operations — warehouse to delivery, all covered.',
    delay: 400,
  },
  {
    icon: <FaBullhorn />,
    title: 'Marketing & Sales',
    description: 'Sales stars and brand builders that drive revenue forward.',
    delay: 500,
  },
];

const Specialties = () => {
  return (
    <section className="specialties-section">
      <h2 className="specialties-heading" data-aos="fade-up">
        Industries <span className="highlight">We Serve</span>
      </h2>
      <div className="specialties-grid">
        {specialties.map((spec, index) => (
          <div
            className="specialty-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={spec.delay}
          >
            <div className="icon-wrapper">{spec.icon}</div>
            <h3>{spec.title}</h3>
            <p className="specialty-desc">{spec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;