import React, { useEffect, useContext } from "react";
import Sidebar from "../Sidebar";
import CartItem from "../CartItem";
import "./Cart.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { CartContext } from "../../context/CartContext";

const Cart = props => {
  const { cartOpen, setCartOpen } = props;
  const cart = useContext(CartContext);

  useEffect(() => {
    cart.removeDelivery();
  }, [cart.cartItemsAmount]);

  return (
    <Sidebar open={cartOpen} setOpen={setCartOpen}>
      <PerfectScrollbar>
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
          <div className="cart__list">
            {cart.cartItems.map(item => (
              <CartItem key={item.product.id} item={item} cart={cart} />
            ))}
          </div>
        </div>
      </PerfectScrollbar>
    </Sidebar>
  );
};

export default Cart;
