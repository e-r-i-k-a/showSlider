const express = require('express')
const { resolve } = require('path')
const app = express()
// const Show = require('../app/Components/Show')

module.exports = app
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public/index.html')))
  // .get('*', (req, res) => {
  //   let innerContent = renderToString(<Show pathname={req.url} />);
  //   let html = renderToStaticMarkup(<Html innerContent= {innerContent} />);
  //   res.send(`<DOCTYPE html>${html}`)
  // })
  //respond to all requests with index.html

  // error handling endware
  .use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

console.log("app done been started")
