const React = require('react')

function App(props) {
  const { items } = props

  return items.map(item => {
    return React.createElement('p', null, item)
  })
}

module.exports = App
