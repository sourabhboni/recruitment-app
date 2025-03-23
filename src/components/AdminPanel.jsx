import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Amplify } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from '../aws-exports';
import Dashboard from "./Dashboard";
import JobManagement from "./JobManagement";
import Applications from "./Applications";
import AdminHeader from "./AdminHeader";
import '@aws-amplify/ui-react/styles.css';
import './AdminLogin.css'; // Custom login styling

Amplify.configure(awsconfig);

const AdminPanel = () => {
  return (
    <div className="login-wrapper">
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <AdminHeader user= {user} signOut={signOut} />

          <Container className="admin-panel-container">
            <Row>
              <Col>
                <Routes>
                  <Route index element={<Dashboard user={user} signOut={signOut} />} />
                  <Route path="dashboard" element={<Dashboard user={user} signOut={signOut} />} />
                  <Route path="jobs" element={<JobManagement />} />
                  <Route path="applications" element={<Applications />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Authenticator>
    </div>
  );
};

export default AdminPanel;
