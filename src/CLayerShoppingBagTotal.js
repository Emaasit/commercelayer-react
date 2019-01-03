/**
 * @class CLayerShoppingBagTotal
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerShoppingBagTotal extends Component {
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    defaultText: PropTypes.string
  }

  static defaultProps = {
    ContainerTag: "div",
    defaultText: "0"
  }

  render() {

    const {
      ContainerTag,
      defaultText
    } = this.props

    return (
      <ContainerTag id="clayer-shopping-bag-total">
        {defaultText}
      </ContainerTag>
    )
  }
}