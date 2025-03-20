import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4" style={{backgroundColor:'#132238', color:'white', textAlign:'center'}}>
      <Container style={{ textAlign:'center'}} >
        <Row style={{ justifyContent: 'center' }} >
          <Col md={6} style={{ margin: 'auto' }}>
            <p>Transglobal Hiring LLC 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;