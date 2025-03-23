import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="main-navbar"
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="/" className="brand-text">
          <img src={logo} alt="Logo" className="logo-img" />
          Transglobal Hiring LLC
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          <div className="custom-toggler-icon"><div></div></div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="mobile-dropdown">
          <Nav className="ms-auto text-center">
            <Nav.Link href="/" className="nav-item-custom" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="/services" className="nav-item-custom" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link href="/careers" className="nav-item-custom" onClick={() => setExpanded(false)}>Careers</Nav.Link>
            <Nav.Link href="/contact" className="nav-item-custom" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
