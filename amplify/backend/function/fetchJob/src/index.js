const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  // Add status filter for job availability dynamically for any /jobs route with GET
  if (event.path && event.path.includes("/jobs") && event.httpMethod === "GET") {
    if (!event.queryStringParameters) {
      event.queryStringParameters = {};
    }
    if (!event.queryStringParameters.status) {
      event.queryStringParameters.status = "available";
    }
  }

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
