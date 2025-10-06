const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const query = event.queryStringParameters.q || 'technology';
  const lang = event.queryStringParameters.lang || 'en';
  const max = event.queryStringParameters.max || '10';

  const url = `https://gnews.io/api/v4/search?q=${query}&lang=${lang}&max=${max}&token=${process.env.GNEWS_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
    
