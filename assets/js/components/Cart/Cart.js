import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import CartItem from "../CartItem";
import "./Cart.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Decimal } from "decimal.js";

const Cart = props => {
  const {
    cartOpen,
    cartItemsAmount,
    setCartOpen,
    total,
    delivery,
    discount,
    subtotal,
    cartItems,
    setCartItems,
    setDelivery,
    setTotal,
    setSubtotal,
    cart
  } = props;

  const removeCartItem = id => {
    const newCartItems = cartItems.filter(item => item.product.id !== id);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    if (cartItemsAmount === 0) {
      setDelivery(new Decimal(0));
      setTotal(new Decimal(0));
    }
  }, [cartItemsAmount]);

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
                key={item.product.id}
                item={item}
                setTotal={setTotal}
                removeCartItem={removeCartItem}
                total={total}
                setSubtotal={setSubtotal}
                subtotal={subtotal}
                cart={cart}
              />
            ))}
          </div>
        </div>
      </PerfectScrollbar>
    </Sidebar>
  );
};

export default Cart;
