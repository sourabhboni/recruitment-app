import React, { useEffect, useState } from 'react';
import './JobManagement.css';
import axios from 'axios';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: '',
    salary: '',
    status: 'available',
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${API_BASE}/admin/job`);
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateUUID = () => {
    return 'job_' + Math.random().toString(36).substr(2, 9);
  };

  const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, location, type, salary } = formData;
    if (!title || !description || !location || !type || !salary) return;

    const payload = {
      ...formData,
      postedDate: getCurrentDate(),
      jobId: editingJobId || generateUUID(),
      status: formData.status || 'available',
    };

    try {
      await axios.post(`${API_BASE}/admin/job`, payload);
      fetchJobs();
      resetForm();
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job.jobId);
    setFormData({
      title: job.title,
      description: job.description,
      location: job.location,
      type: job.type,
      salary: job.salary,
      status: job.status,
    });
    setShowForm(true);
  };

  const markExpired = async (jobId) => {
    const jobToUpdate = jobs.find((j) => j.jobId === jobId);
    if (!jobToUpdate) return;

    try {
      await axios.post(`${API_BASE}/admin/job`, {
        ...jobToUpdate,
        status: 'expired',
      });
      fetchJobs();
    } catch (error) {
      console.error('Error expiring job:', error);
    }
  };

  const markAvailable = async (jobId) => {
    const jobToUpdate = jobs.find((j) => j.jobId === jobId);
    if (!jobToUpdate) return;

    try {
      await axios.post(`${API_BASE}/admin/job`, {
        ...jobToUpdate,
        status: 'available',
      });
      fetchJobs();
    } catch (error) {
      console.error('Error marking available', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      type: '',
      salary: '',
      status: 'available',
    });
    setEditingJobId(null);
    setShowForm(false);
  };

  return (
    <div className="job-management">
      <h2 className="page-title">Job Management</h2>

      <button className="post-job-toggle" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Post a Job'}
      </button>

      {showForm && (
        <form className="job-form" onSubmit={handleSubmit}>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
          <input name="type" value={formData.type} onChange={handleChange} placeholder="Job Type" />
          <input name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" />
          <button type="submit" className="submit-btn">{editingJobId ? 'Update Job' : 'Post Job'}</button>
        </form>
      )}

      <div className="job-list-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.jobId}>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.salary}</td>
                <td>{job.status}</td>
                <td>{job.postedDate}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(job)}>Edit</button>
                  {job.status !== 'expired' && (
                    <button className="expire-btn" onClick={() => markExpired(job.jobId)}>Mark Expired</button>
                  )}
                  {job.status !== 'available' && (
                    <button className="available-btn" onClick={() => markAvailable(job.jobId)}>Mark Available</button>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>        
      </div>
      {/* MOBILE VIEW – RESPONSIVE CARDS */}
<div className="job-card-mobile">
  {jobs.map((job) => (
    <div className="job-card" key={job.jobId}>
      <div className="job-card-title">{job.title}</div>
      <div className="job-card-detail">📍 {job.location}</div>
      <div className="job-card-detail">💼 {job.type}</div>
      <div className="job-card-detail">💲{job.salary}</div>
      <div className="job-card-detail">📅 {job.postedDate}</div>
      <div className="job-card-status">{job.status.toUpperCase()}</div>
      <div style={{ marginTop: "10px" }}>
        <button className="edit-btn" onClick={() => handleEdit(job)}>Edit</button>
        {job.status !== 'expired' && (
          <button className="expire-btn" onClick={() => markExpired(job.jobId)}>Expire</button>
        )}
        {job.status !== 'available' && (
          <button className="available-btn" onClick={() => markAvailable(job.jobId)}>Available</button>
        )}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default JobManagement;
