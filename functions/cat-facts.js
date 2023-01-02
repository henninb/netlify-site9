// const fetch = require('node-fetch')
// const fetch = request('node-fetch').default;
import fetch from 'node-fetch';

// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts'
const API_ENDPOINT = 'https://catfact.ninja/fact'
//const API_ENDPOINT = 'https://www.boredapi.com/api/activity'

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(API_ENDPOINT)
    data = await response.json()
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
