import React from "react";
import "./Cart.scss";

const Cart = ({cart}) => {
  return (
    <div className="cart">
      <h2 className="cart__header">Summary</h2>
      <div className="cart__summary">
        <div className="cartSummary__column">
          <div className="cartSummaryColumn__left">subtotal</div>
          <div className="cartSummaryColumn__right">
            {cart.subtotal.toFixed(2)} $
          </div>
        </div>
        <div className="cartSummary__column">
          <div className="cartSummaryColumn__left">delivery</div>
          <div className="cartSummaryColumn__right">
            {cart.delivery.toFixed(2)} $
          </div>
        </div>
        <div className="cartSummary__column ">
          <div className="cartSummaryColumn__left">discount</div>
          <div className="cartSummaryColumn__right">
            {cart.discount.toFixed(2)} $
          </div>
        </div>
        <div className="cartSummary__column">
          <div className="cartSummaryColumn__left">total</div>
          <div className="cartSummaryColumn__right">
            {cart.total.toFixed(2)} $
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
