import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'

function renderComponent() {
  ReactDOM.render(
    <Component
      text={'client-side-render-result'}
    />,
    document.getElementById('root')
  )
}

setTimeout(renderComponent, 2000)
