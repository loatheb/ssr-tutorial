const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.use('/*', function(req, res) {
  res.render('index', {
    content: 'Hello SSR',
  })
})

app.listen(3000)
