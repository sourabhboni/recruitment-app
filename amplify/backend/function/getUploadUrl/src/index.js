/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3BUCKF0RRESUMES100_BUCKETNAME
Amplify Params - DO NOT EDIT */

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const REGION = process.env.AWS_REGION || 'us-east-1'; // update if needed
const BUCKET = process.env.STORAGE_S3BUCKF0RRESUMES100_BUCKETNAME; // Amplify sets this env var

const s3 = new S3Client({ region: REGION });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log('EVENT:', JSON.stringify(event));

  const queryParams = event.queryStringParameters || {};
  const fileName = queryParams.fileName;

  if (!fileName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing fileName in query string' }),
    };
  }

  const key = `resumes/${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    ContentType: 'application/pdf',
  });

  try {
    const uploadURL = await getSignedUrl(s3, command, { expiresIn: 600 });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
      body: JSON.stringify({ uploadURL, key }),
    };
  } catch (err) {
    console.error('Error generating presigned URL:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not generate upload URL' }),
    };
  }
};
