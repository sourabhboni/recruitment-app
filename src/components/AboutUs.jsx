import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';
import teamImage from '../assets/team.jpg';
//import missionImage from '../assets/mission.jpg';
//import visionImage from '../assets/vision.jpg';
//import valuesImage from '../assets/values.jpg';
import successImage from '../assets/success.webp';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutUs = () => {
  
  return (
    <>
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="employers-hero text-center" style={{
        position: 'relative',
        color: 'white',
        padding: '0', // Remove padding to fit the image properly
        overflow: 'hidden' // Ensures no unwanted spaces
      }}>
        <LazyImage src={teamImage} alt="Home Hero" className="hero-image" style={{
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
          <h1 className="display-4 text-white fw-bold">Empowering Businesses, Elevating Careers</h1>
        </div>
      </motion.div>

      {/* Our Story - Diagonal Layout */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex' }}>
        <div
          style={{
            width: '25%',
            backgroundColor: '#364E68',
            transform: 'skewX(-15deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          Driven by <br /> Purpose <br /> <br />Powered by <br /> Innovation
        </div>
        <div
          style={{
            width: '75%',
            backgroundColor: '#f8f9fa',
            transform: 'skewX(-15deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            animation: 'blink 1.5s infinite alternate',
            zIndex: 1,
          }}
        >
          <p style={{ maxWidth: '800px', fontSize: '1.2rem', transform: 'skewX(15deg)' }}>
            We witnessed a growing disconnect between companies and top talent—businesses struggling to find the right candidates
            and job seekers feeling lost in automated recruitment processes. We felt compelled to bridge this gap by leveraging
            cutting-edge technology without losing the human touch. Hiring LLC was built on the belief that recruitment should be
            seamless, data-driven, and personalized, equally valuing both client needs and candidate aspirations.
          </p>
        </div>
      </div>

      {/* Company Overview - Centered Layout */}
      <Container className="py-5">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={10}>
            <h1 style={{ color: '#364E68' }}>Who We Are</h1>
            <p>
              <br />
              At Hiring LLC, we are more than just recruiters; we are workforce architects. Our mission is to align
              top-tier talent with high-performing companies, making recruitment an enriching and empowering experience.
            </p>
            <p>
              With a decade of experience and an extensive network of professionals across industries, we blend AI-powered
              hiring with human expertise to create a tailored recruitment process that works for everyone.
            </p>
          </Col>          
        </Row>
      </Container>

      <Container className="py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="text-center"
      >
        <h2 style={{ color: '#364E68', fontSize: '2.5rem', fontWeight: 'bold' }}>Our Mission</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto' }}>
          At Hiring LLC, we are revolutionizing recruitment by blending cutting-edge technology with a human touch. Our mission is to seamlessly connect top-tier talent with forward-thinking organizations, ensuring mutual success and long-term growth.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="text-center mt-5"
      >
        <h2 style={{ color: '#364E68', fontSize: '2.5rem', fontWeight: 'bold' }}>Our Vision</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto' }}>
          We envision a world where hiring is streamlined, accessible, and transparent. By leveraging AI-driven insights, we aim to transform traditional recruitment into a seamless experience, fostering stronger, more diverse teams.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
        className="text-center mt-5"
      >
        <h2 style={{ color: '#364E68', fontSize: '2.5rem', fontWeight: 'bold' }}>Our Values</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: 'auto' }}>
          Integrity, Excellence, Adaptability, and People-Centric Innovation are the values that drive us forward. We are committed to delivering excellence while ensuring fairness, transparency, and diversity in hiring.
        </p>
      </motion.div>
    </Container>
      

      {/* Custom Styles */}
      <style>
        {`
          .custom-tab-button {
            width: 100%;
            padding: 15px;
            margin: 10px 0;
            background-color: #132238;
            color: white;
            border: none;
            border-radius: 25px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            font-weight: bold;
          }
          .custom-tab-button.active {
            background-color: #364E68;
          }
          .custom-tab-button:hover {
            background-color: #1b3b5f;
          }
        `}
      </style>

      {/* Why Choose Us 
      <Container className="py-5">
        <h2 className="text-center" style={{ color: '#364E68' }}>Why Choose Hiring LLC?</h2>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title style={{ color: '#364E68' }}>AI-Driven Talent Matching</Card.Title>
                <Card.Text>
                  Utilizing machine learning and predictive analytics, we match candidates with the best opportunities faster and smarter.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title style={{ color: '#364E68' }}>Industry-Specific Recruitment</Card.Title>
                <Card.Text>
                  From IT to Healthcare, we specialize in providing tailored hiring solutions to meet industry-specific workforce demands.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>*/}

      {/* Success Stories */}
      <Container className="py-5 bg-light">
        <h2 className="text-center" style={{ color: '#364E68' }}>Our Success Stories</h2>
        <Row className="align-items-center mt-4">
          <Col md={6}>
          <LazyImage src={successImage} alt="Success Stories" style={{ width: '75%', height: 'auto' }} className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} g>
            <p>
              Over the years, we have transformed the hiring experience for hundreds of businesses and thousands of job seekers.
              Our clients range from Fortune 500 companies to innovative startups, and our candidates are shaping the future of various industries.
            </p>
            <p>
              With a 95% placement success rate and a growing network of satisfied clients and professionals, we are proud to be at the forefront
              of workforce transformation.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <Container className="text-center py-5">
        <h2 style={{ color: '#364E68' }}>Let’s Build Your Future Together</h2>
        <p>
          Whether you are a business looking to hire or a professional seeking the next big opportunity,
          Hiring LLC is your trusted partner in success.
        </p>
        <Button variant="primary" size="lg" href="/jobs">Explore Job Openings</Button>
        {' '}
        <Button variant="secondary" size="lg" href="/employers">Find Top Talent</Button>
      </Container>
    </>
  );
};

export default AboutUs;