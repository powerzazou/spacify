import React, { Component } from 'react'
import SWApiStatus from '../SWApiStatus.js'
import PPApiStatus from '../PPApiStatus.js'

export default class StatusView extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Pilote Privé</h1>

        <h2>Star Wars API status</h2>
        <SWApiStatus id='1' />

        <h2>Pilote Privé's API status</h2>
        <PPApiStatus />
      </div>
    )
  }
}
