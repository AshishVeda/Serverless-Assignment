// 'use strict';

// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };


const axios = require('axios');

module.exports.getQuote = async (event) => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const quote = response.data.content;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({ quote })
    };
  } catch (error) {
    console.error('Error fetching quote:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch a random quote.' })
    };
  }
};
