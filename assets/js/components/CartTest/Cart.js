import React, { useEffect } from "react";
import "./Cart.scss";
import Sidebar from "../Sidebar";
import { close, useCartOpenState } from "../../states/cartOpen.state";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/cartActions";

const Cart = ({cart, status, fetchCart}) => {
  const [open, dispatch] = useCartOpenState();
  const cartClose = () => dispatch(close());

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Sidebar open={true} handleClose={cartClose}>
      {status === "FETCHING" && (<div>Fetching...</div>)}
      {status === "ERROR" && (<div>{console.error(cart)}Error</div>)}
      {status === "SUCCESS" && (
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
      )}
    </Sidebar>
  );
};

const mapStateToProps = ({cartReducer: { status, response }}) => ({
    status: status,
    cart: response ?? {}
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
