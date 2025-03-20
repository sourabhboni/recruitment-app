import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';
//import joinImage from '../assets/join.jpg';
import heroImage from '../assets/employers-hero.jpg';


const typingEffect = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: 'auto',
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
};

const faqData = [
  { question: 'How does Hiring LLC streamline recruitment?', answer: 'We leverage AI-powered tools combined with expert recruiters to match top talent efficiently.' },
  { question: 'What industries do you specialize in?', answer: 'We specialize in IT, healthcare, finance, retail, and engineering sectors.' },
  { question: 'Can Hiring LLC handle bulk hiring?', answer: 'Yes! We have expertise in high-volume recruitment solutions with scalable strategies.' },
  { question: 'How do you ensure candidate quality?', answer: 'We use data-driven assessment tools and deep screening to match candidates with precision.' },
  { question: 'Do you offer employer branding support?', answer: 'Absolutely! We enhance your brand to attract top-tier candidates and industry talent.' }
];

const Employers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Hero Section with Futuristic Design */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="employers-hero text-center" style={{
        position: 'relative',
        color: 'white',
        padding: '0', // Remove padding to fit the image properly
        overflow: 'hidden' // Ensures no unwanted spaces
      }}>
        <LazyImage src={heroImage} alt="Employers Hero" className="hero-image" style={{
          width: '100%',
          height: '500px', // Adjust image height to fit appropriately
          objectFit: 'cover' // Ensures image scales properly without distortion
        }} />
        <div className="hero-content" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
          padding: '20px'
        }}>
          <h1 className="display-4 text-white fw-bold">Redefining Recruitment for the Future</h1>
          <p className="lead text-white">Hiring LLC bridges technology and human expertise to connect you with world-class talent effortlessly.</p>
          <Button variant="outline-light" size="lg">Start Hiring</Button>
        </div>
      </motion.div>

      {/* Unique Employer Benefits */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#364E68' }}>What Sets Us Apart?</h2>
        <Row>
          {[ 
            { title: 'Predictive AI Talent Sourcing', text: 'Harness AI-powered algorithms to find high-quality candidates before your competitors.' },
            { title: 'Seamless Bulk Hiring Solutions', text: 'Rapidly scale your workforce with our optimized mass-hiring strategies.' },
            { title: 'Compensation & Market Insights', text: 'Data-driven salary benchmarking ensures competitive offers to attract top talent.' },
            { title: 'Retention & Engagement Support', text: 'We help improve employee retention through onboarding and engagement strategies.' }
          ].map((benefit, index) => (
            <Col md={6} key={index} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 shadow-lg rounded" style={{ backgroundColor: '#F1F3F4' }}>
                <h4 style={{ color: '#364E68' }}>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Interactive Hiring Process with Timeline Animation */}
      <Container className="py-5 text-center">
        <h2 className="mb-4" style={{ color: '#364E68' }}>Our Hiring Process in Motion</h2>
        <Row className="timeline">
          {[ 'Job Requirement Analysis', 'AI Candidate Discovery', 'Screening & Skill Assessment', 'Smooth Onboarding Process' ].map((step, index) => (
            <Col md={3} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 shadow-md rounded" style={{ backgroundColor: index % 2 === 0 ? '#E8F0FE' : '#FCE8E6' }}>
                <h4 style={{ color: '#364E68' }}>{index + 1}</h4>
                <p>{step}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Success Stories Instead of Generic Testimonials */}
      <Container className="py-5 text-center">
        <h2 className="mb-4" style={{ color: '#364E68' }}>Success Stories from Our Clients</h2>
        <Carousel>
          {[ 
            { company: 'Tech Corp', impact: 'Reduced hiring time by 60% through AI-driven sourcing' },
            { company: 'Global Finance Ltd.', impact: 'Hired 50+ professionals in record time, ensuring compliance and quality' },
            { company: 'HealthCare Plus', impact: 'Improved retention rate by 40% through employee engagement strategies' }
          ].map((story, index) => (
            <Carousel.Item key={index}>
              <p className="lead">“{story.impact}”</p>
              <h5>- {story.company}</h5>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* FAQ Section with Smooth Animation */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#364E68' }}>Your Questions, Answered</h2>
        <Accordion>
          {faqData.map((faq, index) => (
            <Accordion.Item 
              eventKey={index.toString()} 
              key={index} 
              onClick={() => setActiveIndex(index)}
            >
              <Accordion.Header style={activeIndex === index ? { backgroundColor: '#0A3D62', color: 'white' } : {}}>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body style={{ border: 'none', padding: '10px 0', fontSize: '1.1rem', paddingLeft: '20px' }}>
                <motion.span
                  initial="hidden"
                  animate={activeIndex === index ? "visible" : "hidden"}
                  variants={typingEffect}
                  style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '1.1rem', fontWeight: '400', color: '#364E68' }}
                >
                  {faq.answer}
                </motion.span>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .employers-hero {
            background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
            color: white;
            padding: 100px 20px;
          }
          .join-our-team {
            background-color: #F8F9FA;
            padding: 50px 20px;
            text-align: center;
          }
          .timeline {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .accordion-button {
            font-weight: bold;
          }
          .accordion-body {
            padding-left: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Employers;