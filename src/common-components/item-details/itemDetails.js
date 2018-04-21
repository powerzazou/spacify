import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './itemDetails.css'

export default class ItemDetailsComponent extends Component {
  formatLabel (label) {
    return label.charAt(0).toUpperCase() + label.slice(1)
  }
  render () {
    const details = this.props.details.map((detail, index) => {
      return (<p key={index} >{this.formatLabel(detail.label)}: {detail.data}</p>)
    })
    const buttonLabel = (this.props.isSelected) ? 'Unselect' : 'Choose'
    const buttonClickMethod = (this.props.isSelected) ? () => { this.props.onUnselect(this.props.id) } : () => { this.props.onChoose(this.props.id) }
    return (
      <div className='itemDetails'>
        <div className='itemDetailsImage'><img src={this.props.image} /></div>
        <div className='itemDetailsInfos'>
          <h2>{this.props.name}</h2>
          {details}
          <button className='yellowButton' onClick={buttonClickMethod} >{buttonLabel}</button>
        </div>
      </div>
    )
  }
}

ItemDetailsComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChoose: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired
}
