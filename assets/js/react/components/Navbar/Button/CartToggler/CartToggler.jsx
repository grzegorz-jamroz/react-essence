import React, { Component } from 'react';
import binImg from '../../../../../../img/core-img/bag.svg';
import '../../../../../Core/Fonts'
import './CartToggler.scss';

class CartToggler extends Component {
  render() {
    return(
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        <span className="cartToggler__counter">6</span>
      </div>
    );
  }
}

export default CartToggler;
