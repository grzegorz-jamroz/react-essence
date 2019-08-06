import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import CartItem from "./CartItem";
import './Cart.scss';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
class Cart extends Component {

  state = {
    cartItems: [
      { id: 1, thumbnail: 'product-1.jpg', name: 'Button Through Strap Mini Dress', type: 'size: M color: blue', quantity: 1, unitPrice: 55.99, amountValue: 55.99, currency: '$', unit: '(pc.)'},
      { id: 2, thumbnail: 'product-2.jpg', name: 'Poplin Displaced Wrap Dress', type: 'size: S color: beige', quantity: 2, unitPrice: 55.9, amountValue: 111.8, currency: '$', unit: '(pc.)'},
      { id: 3, thumbnail: 'product-3.jpg', name: 'PETITE Crepe Wrap Mini Dress', type: 'size: S color: green', quantity: 3, unitPrice: 55, amountValue: 165, currency: '$', unit: '(pc.)'},
    ],
    subtotal: 332.79,
    delivery: 15,
    discount: 0,
    total: 347.79
  };

  render() {
    return(
        <Sidebar handleClick={this.props.handleClick} open={this.props.open}>
          <PerfectScrollbar>
            <div className="cart">
              <h2 className="cart__header">
                Summary
              </h2>
              <div className="cart__summary">
                <div className="cartSummary__column">
                  <div className="cartSummaryColumn__left">subtotal</div>
                  <div className="cartSummaryColumn__right">{this.state.subtotal} $</div>
                </div>
                <div className="cartSummary__column">
                  <div className="cartSummaryColumn__left">delivery</div>
                  <div className="cartSummaryColumn__right">{this.state.delivery} $</div>
                </div>
                <div className="cartSummary__column ">
                  <div className="cartSummaryColumn__left">discount</div>
                  <div className="cartSummaryColumn__right">{this.state.discount} $</div>
                </div>
                <div className="cartSummary__column">
                  <div className="cartSummaryColumn__left">total</div>
                  <div className="cartSummaryColumn__right">{this.state.total} $</div>
                </div>
              </div>
              <div className="cart__list">
                {this.state.cartItems.map(item => <CartItem
                    increaseCartItemsAmount={this.props.increaseCartItemsAmount}
                    decreaseCartItemsAmount={this.props.decreaseCartItemsAmount}
                    thumbnail={require('./../../../../../img/product/' + item.thumbnail)}
                    name={item.name}
                    type={item.type}
                    quantity={item.quantity}
                    unitPrice={item.unitPrice}
                    amountValue={item.amountValue}
                    currency={item.currency}
                    unit={item.unit}
                    key={item.id} />
                  )
                }
              </div>
            </div>
          </PerfectScrollbar>
        </Sidebar>
    );
  }
}

export default Cart;
