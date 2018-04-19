import React, { Component } from 'react'

class PPApiStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    window.fetch('https://test-pilote-prive.herokuapp.com/heartbeat')
      .then(res => {
        if (!res.ok) {
          Promise.reject(res)
        }
        return res.json()
      })
      .then(res => {
        this.setState({
          apiMessage: '✔ UP'
        })
      }).catch(res => {
        this.setState({
          error: res.status
        })
      })
  }

  render () {
    if (this.state.error) {
      return <p>{this.state.error}</p>
    }
    if (!this.state.apiMessage) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <p>{this.state.apiMessage}</p>
      </div>
    )
  }
}

export default PPApiStatus
