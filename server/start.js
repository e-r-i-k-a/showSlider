const express = require('express')
const path = require('path')
const app = express()

module.exports = app
  .use(express.static(__dirname + '/public')) // Serve static files from ../public
  .get('*', (req, res) => res.sendFile(path.resolve(__dirname + 'public/index.html'))) //respond to all requests with index.html

  // error handling endware
  .use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

console.log("app done been started on http://localhost:3000/")
