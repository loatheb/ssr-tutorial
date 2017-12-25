import React from 'react'
import { connect } from 'react-redux'

class Component extends React.PureComponent {
  render() {
    const { token } = this.props
    return (
      <div>{ token }</div>
    )
  }
}

function mapStateToProps(state) {
  const { token } = state
  return {
    token,
  }
}

export default connect(mapStateToProps, {})(Component)
