import React, { Component } from 'react';
import binImg from '../../../../../../../img/core-img/trash.svg';
import './Bin.scss';

class Bin extends Component {
  render() {
    return (
      <img className="cartItem__bin" src={binImg} alt={'bin-icon'} />
    );
  }
}

export default Bin;
