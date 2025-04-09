import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';
import ApplicationForm from './ApplicationForm';
import awsExports from '../aws-exports';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const BASE_URL = awsExports.aws_cloud_logic_custom[0].endpoint;

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/jobs/${jobId}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [jobId, BASE_URL]);

  const handleApplyClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // slight delay for smoother scroll
  };

  if (!job) return <p className="loading-message">Loading job details...</p>;

  return (
    <div className="job-details-wrapper">
      <div className="job-details-card">
        <h1 className="job-title">{job.title}</h1>
        <p className="job-meta"><strong>Location:</strong> {job.location}</p>
        <p className="job-meta"><strong>Type:</strong> {job.type}</p>

        <h4 className="section-heading">Job Description</h4>
        <div className="job-description" dangerouslySetInnerHTML={{ __html: job.description }} />

        {!showForm && (
          <button className="apply-button-slick" onClick={handleApplyClick}>
            Apply Now
          </button>
        )}
      </div>

      {showForm && (
        <div ref={formRef} className="application-form-wrapper animate-fade-in">
          <ApplicationForm jobId={jobId} />
        </div>
      )}
    </div>
  );
};

export default JobDetails;
