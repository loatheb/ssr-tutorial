const express = require('express')

const app = express()

app.use('/*', function(req, res) {
  res.render('index', {
    content: 'Hello SSR',
  })
})

app.listen(3000)
