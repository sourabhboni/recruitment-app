import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Import Logo

const Header = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: '#132238',
        color: 'white',
        height: '80px', // Ensure consistent height
        padding: '10px 20px',
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          Transglobal Hiring LLC
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: 'white',
          }}
        >
          <span style={{ backgroundColor: 'white' }} className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: 'white', fontSize: '18px' }}>
              Home
            </Nav.Link>
            <Nav.Link href="/services" style={{ color: 'white', fontSize: '18px' }}>
              Services
            </Nav.Link>
            <Nav.Link href="/jobs" style={{ color: 'white', fontSize: '18px' }}>
              Opportunities
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: 'white', fontSize: '18px' }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
