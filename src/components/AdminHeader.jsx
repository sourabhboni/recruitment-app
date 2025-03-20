import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; // Import Logo

const AdminHeader = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "#132238",
        color: "white",
        padding: "10px 20px",
        height: '80px', // Ensure consistent height
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/admin/dashboard" style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          <img src={logo} alt="Admin Logo" style={{ height: "40px", marginRight: "10px" }} />
          Admin Panel
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/admin/dashboard" style={{ color: "white" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/jobs" style={{ color: "white" }}>
              Job Management
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/applications" style={{ color: "white" }}>
              Applications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
