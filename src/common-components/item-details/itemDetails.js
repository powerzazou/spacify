import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './itemDetails.css'

export default class ItemDetailsComponent extends Component {
  render () {
    const details = this.props.details.map((detail) => {
      return (<p>{detail.label}: {detail.data}</p>)
    })
    return (
      <div className='itemDetails'>
        <div className='itemDetailsImage'><img src={this.props.image} /></div>
        <div className='itemDetailsInfos'>
          <h2>{this.props.name}</h2>
          {details}
          <button className='yellowButton'>Choose</button>
        </div>
      </div>
    )
  }
}

ItemDetailsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  onChoose: PropTypes.func
}
