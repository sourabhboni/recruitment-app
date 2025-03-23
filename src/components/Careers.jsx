import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';
import './Careers.css';
import LazyImage from './LazyImage';
import careersimage from '../assets/careers.jpg';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState('date_desc');

  useEffect(() => {
    fetchJobs(sortOrder);
  }, [sortOrder]);

  const fetchJobs = async (order) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs?status=available&sort=${order}`);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="hero-section">
        <LazyImage
         src={careersimage}
         alt="Careers at Transglobal"
         className="hero-image"/>
        <div className="hero-overlay">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Explore Exciting Careers With Us</h1>
            <p className="hero-subtitle">Join a team that's reshaping the future of recruitment</p>
          </div>
        </div>
      </div>

      <Container className="job-listing-container mt-5 mb-5">
        <Row className="mb-4 justify-content-end">
          <Col xs="auto">
            <Dropdown onSelect={(e) => setSortOrder(e)}>
              <Dropdown.Toggle variant="outline-primary" id="sort-dropdown">
                Sort by
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="date_desc">Newest First</Dropdown.Item>
                <Dropdown.Item eventKey="date_asc">Oldest First</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          {jobs.length === 0 ? (
            <p>No jobs available at the moment.</p>
          ) : (
            jobs.map((job) => (
              <Col md={6} lg={4} className="mb-4" key={job.jobId}>
                <Card className="job-card h-100">
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job.location} | {job.type}</Card.Subtitle>
                    <Card.Text>{job.description?.substring(0, 120)}...</Card.Text>
                    <a href={`/apply/${job.jobId}`} className="btn btn-primary mt-2">Apply Now</a>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
