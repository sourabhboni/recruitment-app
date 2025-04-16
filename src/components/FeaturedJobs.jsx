import React from 'react';
import './FeaturedJobs.css';
import { Link } from 'react-router-dom';

const jobs = [
  {
    id: 'job1',
    title: 'Senior Data Engineer',
    location: 'London, UK',
    type: 'Full-time',
    summary: 'Architect robust pipelines & data ecosystems for high-growth clients.',
  },
  {
    id: 'job2',
    title: 'UX/UI Designer',
    location: 'Remote',
    type: 'Contract',
    summary: 'Craft elegant user interfaces that enhance digital engagement.',
  },
  {
    id: 'job3',
    title: 'DevOps Lead',
    location: 'Berlin, Germany',
    type: 'Full-time',
    summary: 'Drive CI/CD excellence and automate scalable infrastructure.',
  },
];

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs-section-light">
      <div className="featured-jobs-container-light">
        <h2 className="featured-heading-light">
          Featured <span className="highlight">Opportunities</span>
        </h2>
        <div className="jobs-grid-light">
          {jobs.map((job, index) => (
            <div className="job-card-light" key={job.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{job.title}</h3>
              <p className="job-meta-light">{job.location} · {job.type}</p>
              <p className="job-summary-light">{job.summary}</p>
              <Link to={`/careers/${job.id}`} className="job-link-light">Know More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
