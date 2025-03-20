import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard";
import JobManagement from "./JobManagement";
import Applications from "./Applications";
import AdminHeader from "./AdminHeader"; // Correct Header

const AdminPanel = () => {
  return (
    <div>
      <AdminHeader />  {/* New Admin Header */}
      
      {/* Main Content Area */}
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <Routes>
              {/* Default Route: Dashboard */}
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="jobs" element={<JobManagement />} />
              <Route path="applications" element={<Applications />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPanel;
