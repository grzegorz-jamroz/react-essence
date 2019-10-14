import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import CartItem from "../CartItem";
import "./Cart.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useCartOpenState, close } from "../../states/cartOpen.state";

import useCartRequest from "../../hooks/useCartRequest";

const Cart = () => {
  const [open, dispatch] = useCartOpenState();
  const [{ status, response }, requestCart] = useCartRequest();
  const cartClose = () => dispatch(close());

  useEffect(() => {
    requestCart();
  }, []);

  return (
    <Sidebar open={open} handleClose={cartClose}>
      {status === "FETCHING" && (<div>Fetching...</div>)}
      {status === "ERROR" && (<div>{console.error(response)}Error</div>)}
      {status === "SUCCESS" && (
      <PerfectScrollbar>
        <div className="cart">
          <h2 className="cart__header">Summary</h2>
          <div className="cart__summary">
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">subtotal</div>
              <div className="cartSummaryColumn__right">
                {response.subtotal.toFixed(2)} $
              </div>
            </div>
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">delivery</div>
              <div className="cartSummaryColumn__right">
                {response.delivery.toFixed(2)} $
              </div>
            </div>
            <div className="cartSummary__column ">
              <div className="cartSummaryColumn__left">discount</div>
              <div className="cartSummaryColumn__right">
                {response.discount.toFixed(2)} $
              </div>
            </div>
            <div className="cartSummary__column">
              <div className="cartSummaryColumn__left">total</div>
              <div className="cartSummaryColumn__right">
                {response.total.toFixed(2)} $
              </div>
            </div>
          </div>
          <div className="cart__list">
            {response.cartItems.map(item => (
              <CartItem key={item.product.id} item={item} cart={response} />
            ))}
          </div>
        </div>
      </PerfectScrollbar>
      )}
    </Sidebar>
  );
};

export default Cart;
