import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import Component from './components/component'
import { createIsomorphicStore } from './store'

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('*', function(req, res) {
  const initState = {
    token: Math.random(),
  }
  const store = createIsomorphicStore(initState)
  const content = renderToString(
    <Provider
      store={store}
    >
      <Component />
    </Provider>
  )
  res.render('index', {
    content,
    initState: store.getState(),
  })
})

app.listen(3000)
