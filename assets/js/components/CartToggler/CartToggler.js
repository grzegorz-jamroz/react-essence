import React from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import "../NavbarButton/NavbarButton.scss";
import { useCartOpenState, toggle } from "../../states/cartOpen.state";
import { connect } from "react-redux";

const CartToggler = ({cartItemsQuantity, status}) => {
  const [, dispatch] = useCartOpenState();

  return (
    <div onClick={() => dispatch(toggle())} className="navbarButton navbarButton--bRight">
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        {status === "FETCHING_CART_SUCCESS" && (
          <span className="cartToggler__counter">{cartItemsQuantity}</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({cartReducer: {status, cart}}) => {
  return {
    status: status,
    cartItemsQuantity: cart.quantity ?? 0
  }};

export default connect(
  mapStateToProps
)(CartToggler);
