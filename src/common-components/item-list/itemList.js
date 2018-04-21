import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './itemList.css'

export default class ItemListComponent extends Component {
  handleClick (e) {
    if (this.props.onChoose) {
      this.props.onChoose(e.target.dataset.id)
    }
  }
  render () {
    return (
      <div className='itemList'>
        {this.props.items.map((item) => {
          const selectedElement = (item.isSelected) ? <p>Selected</p> : null
          return (
            <div key={item.id}>
              {selectedElement}
              <img data-id={item.id} src={item.source} onClick={(e) => this.handleClick(e)} />
            </div>)
        })}
      </div>
    )
  }
}

ItemListComponent.propTypes = {
  items: PropTypes.array.isRequired,
  onChoose: PropTypes.func
}
