import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
  { question: 'How quickly can I hire?', answer: 'Depending on role complexity, placements can range from a few days to a couple of weeks.' },
  { question: 'Which industries do you specialize in?', answer: 'We serve multiple sectors including tech, healthcare, finance, retail, and more.' },
  { question: 'What makes Hiring LLC different?', answer: 'We blend AI-driven recruitment with personalized human expertise, ensuring the best candidate fit for your organization.' },
  { question: 'Do you offer global hiri ng solutions?', answer: 'Yes! We help businesses hire talent beyond borders, ensuring compliance and smooth onboarding.' },
  { question: 'Can you support urgent hiring needs?', answer: 'Absolutely! Our fast-track hiring solutions help you fill roles in record time.' },
  { question: 'Do you provide employer branding support?', answer: 'Yes! We assist in building compelling employer brands that attract top talent.' },
  { question: 'What recruitment tools do you use?', answer: 'We utilize AI-powered screening, ATS integrations, and predictive hiring analytics.' },
  { question: 'Is diversity hiring part of your services?', answer: 'We prioritize DEI hiring to ensure inclusive workplaces with top diverse talent.' },
  { question: 'How does your candidate screening work?', answer: 'We combine AI automation with manual vetting to ensure quality hiring.' },
  { question: 'Can Hiring LLC manage large-scale recruitment projects?', answer: 'Yes! Our RPO services help companies with mass hiring needs efficiently.' },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Hero Section with Background Image */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="employers-hero text-center" style={{
        background: `url(${heroImage}) center/cover no-repeat`,
        color: 'white',
        padding: '150px 20px'
      }}>
        <h1 className="display-4 text-white fw-bold">Tailored Hiring Solutions <br /> From Job Seekers to Industry Leaders</h1>
      </motion.div>

      {/* Comprehensive Talent Solutions */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#364E68' }}>Comprehensive Talent Solutions</h2>
        <Row className="justify-content-center text-center">
          {[ 
            { title: 'Permanent Hiring Solutions', text: 'We provide businesses with long-term, high-caliber talent that fits their culture and goals.' },
            { title: 'Contract & Temp Staffing', text: 'Need quick hires? Our agile hiring approach ensures flexible staffing to match your business cycles.' },
            { title: 'Executive Search & Headhunting', text: 'Identifying transformational leaders to drive business growth and strategy.' },
            { title: 'Recruitment Outsourcing', text: 'Optimize your hiring process with end-to-end recruitment solutions managed by our experts.' },
            { title: 'Diversity & Inclusion Hiring', text: 'Building inclusive teams by prioritizing diversity without compromising on expertise.' },
          ].map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 shadow-sm rounded" style={{ backgroundColor: '#F8F9FA' }}>
                <h4 style={{ color: '#364E68' }}>{service.title}</h4>
                <p>{service.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Why Hiring LLC? */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: '#364E68' }}>Why Hiring LLC?</h2>
        <Row className="justify-content-center text-center">
          {[ 
            'AI-Powered Talent Matching for Efficiency',
            'Industry-Specific Recruitment Strategies',
            'Instant Access to Global Talent Pools',
            'Tailored Hiring Strategies for Every Business',
            'Proven Track Record with Scalable Solutions'
          ].map((point, index) => (
            <Col md={4} key={index} className="mb-3">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 shadow-sm rounded" style={{ backgroundColor: '#F8F9FA' }}>
                <h5 style={{ color: '#364E68' }}>✅ {point}</h5>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Streamlined Hiring Process */}
      <Container className="py-5 text-center">
        <h2 className="mb-4" style={{ color: '#364E68' }}>Our Hiring Process</h2>
        <Row>
          {[ 
            'Step 1: Share your requirements and preferences.',
            'Step 2: AI-driven shortlisting for precision hiring.',
            'Step 3: Receive top-tier candidates curated for your needs.',
            'Step 4: We support a smooth transition for your new hires.'
          ].map((step, index) => (
            <Col md={3} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 shadow rounded" style={{ backgroundColor: index % 2 === 0 ? '#E3F2FD' : '#F1F8E9' }}>
                <h4 style={{ color: '#364E68' }}>{index + 1}</h4>
                <p>{step}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Let's Connect Section */}
      <Container className="py-5 text-center">
        <h2 className="mb-4" style={{ color: '#364E68' }}>Let's Connect</h2>
        <p className="lead">Looking to hire or explore career opportunities? Reach out to us today!</p>
        <Button variant="primary" size="lg" color='#364E68'>Get in Touch</Button>
      </Container>

      {/* FAQ Section with Typing Effect */}
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
          .services-hero {
            background: linear-gradient(rgba(19,34,56,0.8), rgba(19,34,56,0.8)), url('/assets/services-bg.jpg') no-repeat center center;
            background-size: cover;
            padding: 100px 20px;
          }
          .contact-section {
            background-color: #364E68;
            padding: 50px 20px;
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

export default Services;
