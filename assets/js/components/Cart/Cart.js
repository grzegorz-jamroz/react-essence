import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import CartItem from "../CartItem";
import "./Cart.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {CART, CART_ITEMS} from '../../mocks/lib/index'
import Decimal from 'decimal.js';

const Cart = props => {
  const {
    cartOpen,
    cartItemsAmount,
    setCartOpen,
    addCartItemsAmount,
    subtractCartItemsAmount
  } = props;
  const [cartItems, setCartItems] = useState(CART_ITEMS);
  const [subtotal, setSubtotal] = useState(new Decimal(CART.subtotal));
  const [discount, setDiscount] = useState(new Decimal(CART.discount));
  const [delivery, setDelivery] = useState(new Decimal(CART.delivery));
  const [total, setTotal] = useState(new Decimal(CART.total));

  const removeCartItem = id => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    if (cartItemsAmount === 0) {
      setDelivery(0);
      setTotal(0);
    }
  }, [cartItemsAmount, total]);

  return (
    <Sidebar open={cartOpen} setOpen={setCartOpen}>
      <PerfectScrollbar>
        <div className="cart">
          <h2 className="cart__header">Summary</h2>
          <div className="cart__summary">
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">subtotal</div>
              <div className="cartSummaryColumn__right">
                {subtotal.toFixed(2)} $
              </div>
            </div>
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">delivery</div>
              <div className="cartSummaryColumn__right">{delivery.toFixed(2)} $</div>
            </div>
            <div className="cartSummary__column ">
              <div className="cartSummaryColumn__left">discount</div>
              <div className="cartSummaryColumn__right">{discount.toFixed(2)} $</div>
            </div>
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">total</div>
              <div className="cartSummaryColumn__right">
                {total.toFixed(2)} $
              </div>
            </div>
          </div>
          <div className="cart__list">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                addCartItemsAmount={addCartItemsAmount}
                subtractCartItemsAmount={subtractCartItemsAmount}
                setTotal={setTotal}
                removeCartItem={removeCartItem}
                total={total}
                setSubtotal={setSubtotal}
                subtotal={subtotal}
              />
            ))}
          </div>
        </div>
      </PerfectScrollbar>
    </Sidebar>
  );
};

export default Cart;
