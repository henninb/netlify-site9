import fetch from 'node-fetch';

// const API_ENDPOINT = 'https://statsapi.mlb.com/api/v1/schedule'

const url = new URL('https://statsapi.mlb.com/api/v1/schedule')
let params = {
      startDate: "1/01/2023",
      endDate: "12/31/2023",
      gameTypes: "R",
      sportId: "1",
      teamId: "142",
      hydrate:"decisions",
}

url.search = new URLSearchParams(params).toString()

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch(url.toString(), {
        method: 'GET',
        redirect: 'follow',
        headers: {
          "Content-Type": "application/json",
        },
  })
    // response = await fetch(API_ENDPOINT)
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
