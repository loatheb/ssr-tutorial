import { Link, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from './components/home'
import App from './components/app'

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('*', function(req, res) {
  const context = {}
  const text = 'server-side-render-result'
  
  class Component extends React.Component {
    render() {
      return (
        <StaticRouter
          context={context}
          location={req.originalUrl}
        >
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/app">App</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" render={() => <Home text={'server-side-rendering'} />} />
            <Route path="/app" render={() => <App items={['5', '4', '3', '2', '1']} />} />
          </div>
        </StaticRouter>
      )
    }
  }

  const content = ReactDOMServer.renderToString(<Component />)
  res.render('index', {
    content,
  })
})

app.listen(3000)
