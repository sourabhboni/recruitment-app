import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col lassName="text-center">
            <p>Transglobal Hiring LLC © 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
