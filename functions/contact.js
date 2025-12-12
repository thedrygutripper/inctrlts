exports.handler = async (event, context) => {
  // Example Netlify serverless function to receive form submissions
  const data = event.body;
  console.log('Received form submission:', data);
  // Forward to Zapier or send email here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form received' }),
  };
};
