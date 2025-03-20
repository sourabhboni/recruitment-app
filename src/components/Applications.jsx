import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Applications = () => {
  const applications = [
    { id: 1, name: "Alice Johnson", job: "Software Engineer", status: "Pending" },
    { id: 2, name: "Mark Smith", job: "Product Manager", status: "Reviewed" },
    { id: 3, name: "Emily Brown", job: "Data Analyst", status: "Shortlisted" },
  ];

  return (
    <Container className="mt-5 admin-page-container">
      <h2 className="text-center mb-4">Job Applications</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.job}</td>
              <td>{app.status}</td>
              <td>
                <Button variant="success" size="sm">Approve</Button>{' '}
                <Button variant="danger" size="sm">Reject</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Applications;
