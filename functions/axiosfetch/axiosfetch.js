const axios = require('axios')

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

exports.handler = async (event, context) => {
  let response
  try {
    response = await axios.get(API_ENDPOINT)
    console.log("FETCH", response.data)
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
    body: JSON.stringify(response.data)
  }
}