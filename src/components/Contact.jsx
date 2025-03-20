import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      setError('Please verify the reCAPTCHA');
      return;
    }
    setSubmitted(true);
    setError(null);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-5" style={{ background: 'linear-gradient(to right, #ffffff, #f9f9f9)', color: '#132238' }}>
      {/* Hero Section */}
      
      
      {/* Contact Details & Map in Two Columns */}
      <Row className="w-100 justify-content-center mb-4" style={{ maxWidth: '900px' }}>
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <h1>Our Office</h1>
            <p style={{fontSize: '1.5rem'}}>Transglobal Hiring LLC</p>
            <p> 30 N Gould St Ste R
            Sheridan, WY 82801</p>
            <p>Phone: +1234 567 890</p>
            <p>Email: hiring@transglobalhiring.com</p>
          
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <iframe
            title="google-map"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167611283336!2d-106.95747832491564!3d44.797772677658145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2suk!4v1741898344357!5m2!1sen!2suk"
          ></iframe>
        </Col>
      </Row>

      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Let's Connect</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>We’re here to help. Drop us a message and we’ll respond within 24 hours.</p>
      </motion.div>

      {/* Contact Form */}
      <Card className="p-5 shadow-lg text-center" style={{ maxWidth: '700px', width: '100%', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }}>
        {submitted && <Alert variant="success">Your message has been sent!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ borderRadius: '10px' }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={{ borderRadius: '10px' }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{ borderRadius: '10px', minHeight: '120px' }} />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={setRecaptchaValue} />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button type="submit" className="mt-3 px-4 py-2" style={{ backgroundColor: '#132238', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '18px', borderRadius: '10px' }}>Send Message</Button>
          </motion.div>
        </Form>
      </Card>
    </Container>
  );
};

export default Contact;
