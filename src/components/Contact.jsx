import React, { useState } from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import heroBg from '../assets/contact-hero.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-full-page">
      <ToastContainer position="bottom-right" autoClose={3000} />

      {/* Hero Section */}
      <section className="contact-hero-blended"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.75), rgba(255,255,255,0.05)), url(${heroBg})`,
        }}
      >
        <div className="hero-text-zone">
          <h1>Let’s Start a Conversation</h1>
          <p>Whether you're hiring, applying, or just curious — we’re all ears.</p>
        </div>
      </section>

      {/* Main Section */}
      <section className="contact-content-area">
        {/* Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Type your message..." rows="5" value={formData.message} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Map + Address */}
        <div className="contact-duo">
          <div className="map-box">
            <iframe
              title="Agency Location"
              src="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R%20Sheridan,%20WY%2082801&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="address-box">
            <h3>Our Office</h3>
            <p><FaMapMarkerAlt /> 30 N Gould St Ste R, Sheridan, WY 82801</p>
            <p><FaPhoneAlt /> +1 (307) 555-2024</p>
            <p><FaEnvelope /> hiring@transglobalhiring.com</p>
            <p><FaClock /> Mon – Fri, 9am to 5pm (MT)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
