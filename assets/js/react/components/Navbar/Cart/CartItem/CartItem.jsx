import React, { Component } from 'react';
import '../../../../../Core/Fonts'
import variables from '../../../../../Core/Bootstrap/VariablesExport.scss';
import './CartItem.scss';
import Bin from "./Bin";
import Badge from "./Badge";

class CartItem extends Component {
  state = {
    quantity: this.props.quantity,
    amountValue: this.props.amountValue
  };

  handleIncrement = () => {
    this.props.increaseCartItemsAmount();
    this.setState((state) => ({
      quantity: state.quantity + 1
    }));
    this.calculateAmountValue();
  };

  handleDecrement = () => {
    this.props.decreaseCartItemsAmount();
    this.setState((state) => ({
      quantity: state.quantity - 1
    }));
    this.calculateAmountValue();
  };

  calculateAmountValue = () => {
    this.setState((state, props) => ({
      amountValue: state.quantity * props.unitPrice
    }));
  };

  render() {
    return (
      <div className="cartItem">
        <div className="cartItem__thumbnail">
          <div className="cartItem__badgesLeft">
            <Badge bgColor={variables.red} text={this.state.quantity} />
          </div>
          <div className="cartItem__badgesRight">
            <Badge bgColor={variables.blue} text={this.props.unitPrice.toFixed(2) + ' ' + this.props.currency} />
          </div>
          <div className="cartItem__overlay">
          </div>
          <div className="cartItem__actionsLeft">
            <div className="cartItemAction__decrease" onClick={this.handleDecrement}>-</div>
            <div className="cartItemAction__increase" onClick={this.handleIncrement}>+</div>
          </div>
          <div className="cartItem__actionsRight">
            <div className="cartItemAction__delete">
              <Bin color={variables.white} />
            </div>
          </div>
          <div style={{backgroundImage: `url(${this.props.thumbnail})`}} className="cartItemThumbnail__image">
        </div>
        </div>
        <div className="cartItem__info">
          <div className="cartItem__details">
            <div className="cartItem__name">{this.props.name}</div>
            <div className="cartItem__type">{this.props.type}</div>
            <div className="cartItem__depot">
              <span className="cartItemUnit">
                <span className="cartItemUnit__price">{this.state.amountValue.toFixed(2)}</span>&nbsp;
                <span className="cartItemUnit__currency">{this.props.currency}</span>&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
