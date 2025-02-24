const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const os = require('os');

// Add a new router for each test case
app.use('', require('./routes/base'));
app.use('/caching', require('./routes/caching'));
app.use('/compress', require('./routes/compression'));
app.use('/redirect', require('./routes/redirect'));
app.use('/_next/image', require('./routes/next-image'));

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
  console.log(`Nginx listening at http://localhost:8081`)
  console.log("The network interfaces which have been assigned to this Network address are: ")
  console.log(os.networkInterfaces());
})

// Handle Sigterm for quicker shutdowns in Docker
process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})
