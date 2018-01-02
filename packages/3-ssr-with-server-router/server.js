const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('./components/app')
const Home = require('./components/home')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('/home', function(req, res) {
  const text = 'home'
  const content = ReactDOMServer.renderToString(React.createElement(Home, { text }))
  res.render('home', {
    content,
  })
})

app.use('/app', function(req, res) {
  const items = ['1', '2', '3', '4', '5']
  const content = ReactDOMServer.renderToString(React.createElement(App, { items }))
  res.render('app', {
    content,
  })
})

app.use(function(req, res) {
  res.render('index')
})

app.listen(3000)
