import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container className="not-found-container"> {/* ✅ New Class Used */}
      <h1 className="display-4">404</h1>
      <h2 className="mb-4">Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/">
        <Button variant="primary" className="mt-3">Go Back to Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
