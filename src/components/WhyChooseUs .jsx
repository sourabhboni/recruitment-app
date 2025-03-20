import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center" style={{color:'#364E68'}}>Why Partner with DataSync Solutions?</h2>
      <Row className="mt-4">
        <Col md={4}>
          <h4 style={{color:'#364E68'}}>Security & Scalability</h4>
          <p>At DataSync Solutions, we prioritize the security of your data. Our robust security protocols ensure that your sensitive information is protected against unauthorized access and breaches. We also offer scalable solutions that grow with your business, allowing you to adapt to changing demands without compromising on performance or security. Whether you are a small startup or a large enterprise, our solutions are designed to meet your unique needs.</p>
        </Col>
        <Col md={4}>
          <h4 style={{color:'#364E68'}}>Expertise in AI</h4>
          <p>Our team of experts is at the forefront of artificial intelligence and cloud technologies. We harness the power of AI to automate processes, enhance decision-making, and improve operational efficiency. By integrating advanced analytics and machine learning into your business operations, we help you unlock valuable insights and drive innovation. Our commitment to staying updated with the latest technological advancements ensures that you benefit from the most effective solutions available.</p>
        </Col>
        <Col md={4}>
          <h4 style={{color:'#364E68'}}>Proven Track Record</h4>
          <p>With years of experience in the industry, DataSync Solutions has a proven track record of successfully transforming businesses through data-driven strategies. Our portfolio includes a diverse range of clients across various sectors, each benefiting from our tailored solutions. We pride ourselves on our ability to simplify complex processes and deliver measurable results. Our client testimonials and case studies speak volumes about our dedication to excellence and customer satisfaction.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;