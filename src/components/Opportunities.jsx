import React from 'react';
import LazyImage from '../components/LazyImage';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const jobs = [
  { title: "Software Engineer", location: "London, UK", type: "Full-time" },
  { title: "HR Specialist", location: "Manchester, UK", type: "Part-time" },
  { title: "Marketing Manager", location: "Remote", type: "Contract" }
];

const Opportunities = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center" style={{color:'#364E68'}}>Latest Job Openings</h2>
      <Row className="mt-4">
        {jobs.map((job, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title style={{color:'#364E68'}}>{job.title}</Card.Title>
                <Card.Text>{job.location}</Card.Text>
                <Card.Text>{job.type}</Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Opportunities;