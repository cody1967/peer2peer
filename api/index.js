const app = require("https-localhost")()
// app is an express app, do what you usually do with express
app.listen(port)

const httpsLocalhost = require("https-localhost")()
// const app = ...
// const port = 443
const certs = await httpsLocalhost.getCerts()
const server = https.createServer(certs, app).listen(port)