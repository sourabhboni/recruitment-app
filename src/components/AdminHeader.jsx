import React, { useState } from "react";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import './Header.css'; // Using the same styles

const AdminHeader = ({ user,  onLogout }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="main-navbar"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/admin/dashboard" className="brand-text">
          <img src={logo} alt="Logo" className="logo-img" />
          Admin Panel
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          <div className="custom-toggler-icon">
            <div></div>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav"  className="mobile-dropdown">
          <Nav className="ms-auto text-center">
            <Nav.Link
              as={NavLink}
              to="/admin/dashboard"
              className="nav-item-custom"
              onClick={() => setExpanded(false)}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/jobs"
              className="nav-item-custom"
              onClick={() => setExpanded(false)}
            >
              Job Management
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admin/applications"
              className="nav-item-custom"
              onClick={() => setExpanded(false)}
            >
              Applications
            </Nav.Link>

            {/* Conditionally show logout */}
            {user   && (
              <Button
                className="logout-button ms-lg-3 mt-2 mt-lg-0"
                onClick={onLogout}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
