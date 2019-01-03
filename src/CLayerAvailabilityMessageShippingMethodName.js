/**
 * @class CLayerAvailabilityMessageShippingMethodName
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CLayerAvailabilityMessageShippingMethodName extends Component {
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['span', 'div'])
  }

  static defaultProps = {
    ContainerTag: "span"
  }

  render() {

    const {
      ContainerTag,
    } = this.props

    return (
      <ContainerTag className="clayer-availability-message-available-shipping-method-name"></ContainerTag>
    )
  }
}
