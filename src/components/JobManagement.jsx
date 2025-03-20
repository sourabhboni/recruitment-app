import React, { useState } from 'react';
import { Container, Table, Button, Form, Card, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', category: 'IT', location: 'London', type: 'Full-time', salary: '£50,000', description: 'Develop and maintain software applications.' },
    { id: 2, title: 'Marketing Manager', category: 'Marketing', location: 'Manchester', type: 'Part-time', salary: '£35,000', description: 'Lead digital marketing campaigns.' }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: ''
  });

  // ✅ Toggle Form Visibility
  const toggleForm = () => {
    setShowForm((prev) => !prev);
    if (!showForm) setEditingJob(null); // Reset editing state when opening
  };

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...editingJob, ...formData } : job));
    } else {
      setJobs([...jobs, { id: Date.now(), ...formData }]);
    }
    toggleForm();
    setFormData({ title: '', category: '', location: '', type: 'Full-time', salary: '', description: '' });
  };

  // ✅ Handle Editing a Job
  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData(job);
    setShowForm(true);
  };

  // ✅ Handle Deleting a Job
  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <Container className="mt-5 pb-5">  {/* ✅ Added 'pb-5' to prevent overlap with footer */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-center mb-4">Manage Job Listings</h2>

        {/* ✅ Job Listings Table */}
        <Card className="p-4 shadow-sm rounded-4">
          <h4>Existing Job Listings</h4>
          {jobs.length > 0 ? (
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.category}</td>
                    <td>{job.location}</td>
                    <td>{job.type}</td>
                    <td>{job.salary}</td>
                    <td>
                      <Button variant="warning" size="sm" onClick={() => handleEdit(job)}>Edit</Button>{' '}
                      <Button variant="danger" size="sm" onClick={() => handleDelete(job.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p className="text-center text-muted mt-3">No jobs posted yet.</p>
          )}
        </Card>

        {/* ✅ Button to Open Job Form */}
        <motion.div className="text-center mt-4 mb-5">  {/* ✅ Added 'mb-5' for spacing */}
          <motion.button 
            className="btn btn-primary rounded-pill px-4 py-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleForm}
          >
            {showForm ? "Cancel" : "+ Add a New Job"}
          </motion.button>
        </motion.div>

        {/* ✅ Animated Job Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 mb-5"
            >
              <Card className="p-4 shadow-sm rounded-4">
                <h4>{editingJob ? "Edit Job" : "Post a New Job"}</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Title</Form.Label>
                        <motion.input 
                          type="text" 
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="form-control rounded-pill p-2"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <motion.input 
                          type="text" 
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="form-control rounded-pill p-2"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <motion.input 
                          type="text" 
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="form-control rounded-pill p-2"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Type</Form.Label>
                        <motion.select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="form-control rounded-pill p-2"
                          required
                        >
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                          <option>Remote</option>
                        </motion.select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Job Description</Form.Label>
                    <motion.textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="form-control rounded-3 p-3"
                      rows="4"
                      required
                    />
                  </Form.Group>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="success" type="submit" className="w-100 rounded-pill">
                      {editingJob ? "Update Job" : "Post Job"}
                    </Button>
                  </motion.div>
                </Form>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default JobManagement;
