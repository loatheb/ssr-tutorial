const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Component = require('./component')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('/*', function(req, res) {
  const text = 'server-side-render-result (will start client-side-render in 2s!)'
  const content = ReactDOMServer.renderToString(React.createElement(Component, { text }))
  res.render('index', {
    content,
  })
})

app.listen(3000)
