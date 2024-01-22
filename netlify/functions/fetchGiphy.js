const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const apiKey = process.env.GIPHY_API_KEY;
  const input = event.queryStringParameters.input;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${encodeURIComponent(
        input
      )}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
