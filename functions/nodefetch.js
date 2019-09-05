const fetch = require('node-fetch')

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

exports.handler = async (event, context) => {
  let response
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
    json = await response.json()
    console.log("JSON", json);
    // handle response
  } catch (err) {
    console.log("ERROR")
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(json)
  }
}