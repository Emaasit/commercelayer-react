/**
 * @class ShoppingBagTotal
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ShoppingBagTotal extends Component {
  shouldComponentUpdate() {
    return false;
  }

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
      <ContainerTag className="clayer-shopping-bag-total">
        {defaultText}
      </ContainerTag>
    )
  }
}
