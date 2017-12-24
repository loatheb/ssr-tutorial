import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from './components/home'
import App from './components/app'

function renderComponent() {
  ReactDOM.hydrate(
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" render={() => <Home text={'client-side-rendering'} />} />
        <Route path="/app" render={() => <App items={['1', '2', '3', '4', '5']} />} />
      </div>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

setTimeout(renderComponent, 2000)
