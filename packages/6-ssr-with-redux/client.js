import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { hydrate } from 'react-dom'

import Component from './components/component'
import { createIsomorphicStore } from './store'

const store = createIsomorphicStore(window.initState)

hydrate(
  <Provider
    store={store}
  >
    <Component />
  </Provider>,
  document.getElementById('root')
)