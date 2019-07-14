import React, { Component } from 'react';
import '../../../../../Core/Fonts'
import variables from '../../../../../Core/Bootstrap/VariablesExport.scss';
import './CartItem.scss';
import Bin from "./Bin";
import Badge from "./Badge";

class CartItem extends Component {
  render() {
    return (
      <div className="cartItem">
        <div className="cartItem__thumbnail">
          <div className="cartItem__badgesLeft">
            <Badge bgColor={variables.red} text={this.props.quantity} />
          </div>
          <div className="cartItem__badgesRight">
            <Badge bgColor={variables.blue} text={this.props.unitPrice.toFixed(2) + ' ' + this.props.currency} />
          </div>
          <div className="cartItem__overlay">
          </div>
          <div className="cartItem__actionsLeft">
            <div className="cartItemAction__decrease">-</div>
            <div className="cartItemAction__increase">+</div>
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
                <span className="cartItemUnit__price">{this.props.amountValue.toFixed(2)}</span>&nbsp;
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
