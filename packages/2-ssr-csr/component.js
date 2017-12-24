const React = require('react')

function Component(props) {
  const { text } = props
  return React.createElement('div', null, text)
}

module.exports = Component
