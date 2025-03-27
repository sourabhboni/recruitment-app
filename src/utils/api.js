import awsExports from '../aws-exports';

const BASE_URL = awsExports.aws_cloud_logic_custom[0].endpoint;
const BUCKET = awsExports.aws_user_files_s3_bucket;
const REGION = awsExports.aws_project_region;

/**
 * Uploads resume to S3 via pre-signed URL
 * Generates a unique key using jobId + email to avoid duplicates
 * Returns the final public S3 URL
 */
export const uploadResumeToS3 = async (file, jobId, email) => {
  const timestamp = Date.now();
  const safeEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
  const key = `resumes/${jobId}-${safeEmail}-${timestamp}-${file.name}`;

  // Request pre-signed URL from backend
  const res = await fetch(`${BASE_URL}/upload-url?fileName=${encodeURIComponent(key)}`);
  const { uploadURL } = await res.json();

  // Upload file to S3
  await fetch(uploadURL, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type
    }
  });

  // Return public S3 URL
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
};

/**
 * Submits application data to the API Gateway
 */
export const submitApplication = async (applicationData) => {
  const response = await fetch(`${BASE_URL}/applications/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(applicationData)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Application submission failed: ${error}`);
  }
};

/**
 * Checks for duplicate application based on jobId + email
 */
export const checkDuplicateApplication = async (jobId, email) => {
  const response = await fetch(`${BASE_URL}/applications/check?jobId=${jobId}&email=${encodeURIComponent(email)}`);

  if (!response.ok) {
    throw new Error('Failed to check for duplicate application');
  }

  const { exists } = await response.json();
  return exists; // true if already applied
};
