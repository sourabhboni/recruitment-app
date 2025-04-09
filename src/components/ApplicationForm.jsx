import React, { useEffect, useState } from 'react';
import { uploadResumeToS3, submitApplication, checkDuplicateApplication } from '../utils/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ApplicationForm.css';

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [checkingDuplicate, setCheckingDuplicate] = useState(false);

  // 👀 Check for duplicate application once email is typed in
  useEffect(() => {
    const checkIfAlreadyApplied = async () => {
      const email = formData.email;
      if (!email || email.length < 5) return;

      try {
        setCheckingDuplicate(true);
        const alreadyApplied = await checkDuplicateApplication(jobId, email);
        if (alreadyApplied) {
          setSubmitted(true); // Skip form, show thank you block
        }
      } catch (err) {
        console.warn('Error checking for duplicate application:', err);
      } finally {
        setCheckingDuplicate(false);
      }
    };

    checkIfAlreadyApplied();
  }, [formData.email, jobId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { name, email, phone, resume } = formData;

    if (!name || !email || !phone || !resume) {
      setError('Please fill in all fields.');
      setSubmitting(false);
      return;
    }

    try {
      // Re-check for duplicate at submission time too (just in case)
      const duplicate = await checkDuplicateApplication(jobId, email);
      if (duplicate) {
        setError('You have already applied for this job.');
        toast.info("You've already applied for this job.");
        setSubmitting(false);
        setSubmitted(true); // Show thank you block instead
        return;
      }

      const resumeUrl = await uploadResumeToS3(resume, jobId, email);
      await submitApplication({
        jobId,
        name,
        email,
        phone,
        resumeUrl,
        appliedAt: new Date().toISOString()
      });

      setSubmitted(true);
      toast.success('Application submitted successfully!');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    }

    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />

      {submitted ? (
        <div className="thank-you-block">
          <h3>Thank you for applying!</h3>
          <p>We’ve received your application and will be in touch soon.</p>
        </div>
      ) : (
        <form className="slick-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Application Form</h3>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={checkingDuplicate}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Upload Resume (PDF)</label>
            <input type="file" name="resume" accept=".pdf" onChange={handleChange} required />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="submit-button" disabled={submitting || checkingDuplicate}>
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      )}
    </>
  );
};

export default ApplicationForm;
