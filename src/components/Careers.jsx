import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CareerPage from './CareerPage';

const jobOpenings = [
  {
    title: 'AWS Cloud Engineer',
    description: 'Join our team to manage and optimize cloud infrastructure.',
    requirements: 'Minimum 2 years of experience with AWS services, strong knowledge of cloud architecture.',
    skills: 'AWS, CloudFormation, Terraform, Linux',
  },
  {
    title: 'Front End Developer',
    description: 'Develop user-friendly web applications with modern frameworks.',
    requirements: 'Minimum 2 years of experience in front-end development.',
    skills: 'React, JavaScript, HTML, CSS',
  },
  {
    title: 'DevOps Engineer',
    description: 'Implement CI/CD pipelines and automate deployment processes.',
    requirements: 'Minimum 2 years of experience in DevOps practices.',
    skills: 'Docker, Kubernetes, Jenkins, AWS',
  },
  {
    title: 'Full Stack Developer',
    description: 'Work on both front-end and back-end technologies to deliver complete solutions.',
    requirements: 'Minimum 3 years of experience in full stack development.',
    skills: 'React, Node.js, Express, MongoDB',
  },
  {
    title: 'Robotic Process Automation Developer',
    description: 'Design and implement automation solutions to improve business processes.',
    requirements: 'Minimum 2 years of experience in RPA development, familiarity with RPA tools.',
    skills: 'UiPath, Automation Anywhere, Blue Prism, Python',
  },
];

const Careers = () => {
  return (
    <div style={{ backgroundColor: '#EBF0F6' }}>
      <CareerPage/>
      <div>
      <Container style={{ paddingTop: "50px",  }}>
        <Row>
          <Col>
            {/* <h2 style={{color:'#364E68'}}>Careers</h2> */}
            <p>
              Join our innovative team and redefine how businesses handle data.
              Explore opportunities in AI, cloud technologies, and IT development.
            </p>
          </Col>
        </Row>
        <Row>
          {jobOpenings.map((job, index) => (
            <Col md={4} key={index} style={{ marginBottom: '20px' }}>
              <Card>
                <Card.Body>
                  <Card.Title style={{color:'#364E68'}}>{job.title}</Card.Title>
                  <Card.Text>
                    <strong style={{color:'#364E68'}}>Description:</strong> {job.description}<br />
                    <strong style={{color:'#364E68'}}>Requirements:</strong> {job.requirements}<br />
                    <strong style={{color:'#364E68'}}>Skills:</strong> {job.skills}
                  </Card.Text>
                  {/* <Button variant="primary">Apply Now</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
      
    </div>
  );
};

export default Careers;