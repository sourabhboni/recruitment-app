/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3BUCKF0RRESUMES100_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3Client({ region: process.env.REGION });

exports.handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        const { fileName, fileContent } = requestBody; // Extract filename & content

        if (!fileName || !fileContent) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing fileName or fileContent" }),
            };
        }

        const key = `uploads/${uuidv4()}_${fileName}`;
        const buffer = Buffer.from(fileContent, 'base64');

        // Upload file to S3 using PutObjectCommand
        const uploadCommand = new PutObjectCommand({
            Bucket: process.env.STORAGE_S3BUCKF0RRESUMES100_BUCKETNAME,
            Key: key,
            Body: buffer,
            ContentType: "application/pdf",
        });

        await s3.send(uploadCommand);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "File uploaded successfully!", key }),
        };
    } catch (error) {
        console.error("Upload failed:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};