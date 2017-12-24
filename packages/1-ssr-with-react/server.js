const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Component = require('./components/component')

const app = express()

app.use('/:text', function(req, res) {
  const { text } = req.params
  const content = ReactDOMServer.renderToString(React.createElement(Component, { text }))
  res.send(content)
})

app.listen(3000)
