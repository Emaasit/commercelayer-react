/**
 * @class AvailabilityMessageMaxDays
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AvailabilityMessageMaxDays extends Component {
  shouldComponentUpdate() {
    return false;
  }
    
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
      <ContainerTag className="clayer-availability-message-available-max-days"></ContainerTag>
    )
  }
}
