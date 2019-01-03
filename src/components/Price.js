/**
 * @class Price
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Price extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  static propTypes = {
    ContainerTag: PropTypes.oneOf(['div', 'span']),
    AmountTag: PropTypes.oneOf(['div', 'span']),
    skuCode: PropTypes.string
  }

  static defaultProps = {
    ContainerTag: "div",
    AmountTag: "span"
  }

  render() {
    const {
      ContainerTag,
      AmountTag,
      skuCode
    } = this.props

    return (
      <ContainerTag className="clayer-price" data-sku-code={skuCode}>
        <AmountTag className="amount"></AmountTag>
        <AmountTag className="compare-at-amount"></AmountTag>
      </ContainerTag>
    )
  }
}