import React, { useEffect } from "react";
import CartItem from "../CartItem";
import "./Cart.scss";
import Sidebar from "../Sidebar";
import { close, useCartOpenState } from "../../states/cartOpen.state";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/cartActions";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Cart = ({ cart, cartItems, status, fetchCart }) => {
  const [open, dispatch] = useCartOpenState();
  const cartClose = () => dispatch(close());

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Sidebar open={open} handleClose={cartClose}>
      {status === "FETCHING" && <div>Fetching...</div>}
      {status === "ERROR" && <div>{console.error(cart)}Error</div>}
      {status === "SUCCESS" && (
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
              {cartItems.map(item => (
                <CartItem key={item.product.id} item={item} cart={cart} />
              ))}
            </div>
          </div>
        </PerfectScrollbar>
      )}
    </Sidebar>
  );
};

const mapStateToProps = ({ cartReducer: { cartStatus, cart, cartItems } }) => ({
  status: cartStatus,
  cart: cart ?? {},
  cartItems: cartItems ?? []
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
