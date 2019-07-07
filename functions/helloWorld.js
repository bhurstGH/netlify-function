exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: `<html><body><h1>Hello World!</h1></body></html>`
    })
}