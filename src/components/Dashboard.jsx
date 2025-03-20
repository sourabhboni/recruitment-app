import React from "react";
import { Container, Card, Button, Table, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const jobStats = { total: 12, active: 9, drafts: 3 };
  const applications = [
    { id: 1, name: "Alice Johnson", job: "Software Engineer", status: "Pending" },
    { id: 2, name: "Mark Smith", job: "Product Manager", status: "Reviewed" },
  ];

  const data = [
    { month: "Jan", jobs: 3 },
    { month: "Feb", jobs: 5 },
    { month: "Mar", jobs: 2 },
    { month: "Apr", jobs: 8 },
    { month: "May", jobs: 6 },
  ];

  return (
    <Container className="mt-5 admin-page-container">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center mb-4">
        Admin Dashboard
      </motion.h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm rounded-4">
            <h5>Total Jobs</h5>
            <motion.h3 whileHover={{ scale: 1.1 }}>{jobStats.total}</motion.h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm rounded-4">
            <h5>Active Jobs</h5>
            <motion.h3 whileHover={{ scale: 1.1 }}>{jobStats.active}</motion.h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center shadow-sm rounded-4">
            <h5>Draft Jobs</h5>
            <motion.h3 whileHover={{ scale: 1.1 }}>{jobStats.drafts}</motion.h3>
          </Card>
        </Col>
      </Row>

      <Card className="p-4 shadow-sm rounded-4 mb-4">
        <h4>Recent Job Applications</h4>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Job Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.job}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Row className="mb-4 text-center">
        <Col>
          <motion.button
            className="btn btn-primary rounded-pill px-4 py-2 m-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            + Post a New Job
          </motion.button>
          <motion.button
            className="btn btn-success rounded-pill px-4 py-2 m-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Review Applications
          </motion.button>
        </Col>
      </Row>

      <Card className="p-4 shadow-sm rounded-4">
        <h4>Hiring Trends</h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="jobs" stroke="#007bff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Container>
  );
};

export default Dashboard;
