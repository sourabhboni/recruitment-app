import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CandidatePool.css';
import awsExports from "../aws-exports";

const CandidatePool = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${awsExports.aws_cloud_logic_custom[0].endpoint}/apply`);
      setApplications(response.data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const downloadResume = (key) => {
    const resumeUrl = `https://${process.env.REACT_APP_RESUME_BUCKET}.s3.amazonaws.com/${key}`;
    window.open(resumeUrl, '_blank');
  };

  return (
    <Container className="candidate-pool-page py-5">
      <h2 className="mb-4">Candidate Pool</h2>
      <Row>
        {applications.length === 0 ? (
          <p>No candidates found.</p>
        ) : (
          applications.map((app) => (
            <Col md={6} lg={4} key={app.applicationId} className="mb-4">
              <Card className="candidate-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{app.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {app.email} | {app.phone}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Job:</strong> {app.jobTitle || 'N/A'}
                    <br />
                    <strong>Experience:</strong> {app.experience || 'N/A'}
                  </Card.Text>
                  <Button
                    className="btn-sm download-btn"
                    onClick={() => downloadResume(app.resumeKey)}
                  >
                    Download Resume
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CandidatePool;
