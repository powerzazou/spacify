import React, { Component } from 'react'

const urlApiCheck = (filmId) => `https://swapi.co/api/films/${filmId}/`

class SWApiStatus extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    window.fetch(urlApiCheck(this.props.id))
      .then(res => {
        if (!res.ok) {
          Promise.reject(res)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          apiMessage: `✔ UP (${data.title})`
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

export default SWApiStatus
