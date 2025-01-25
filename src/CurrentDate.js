import React, { Component } from 'react'

export class CurrentDate extends Component {
  render() {
    return (
      <div>
        {new Date().toLocaleString()}
      </div>
    )
  }
}
export default CurrentDate