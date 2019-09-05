exports.handler = function (event, context, callback) {
    console.log(event.queryStringParameters.name)
    console.log(context)
    callback(null, {
        statusCode: 200,
        body: `<html><body><h1>Hello World!</h1></body></html>`
    })
}
