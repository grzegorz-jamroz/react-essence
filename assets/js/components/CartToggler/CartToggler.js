import React from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Essence";
import "../../Core/Fonts";
import "./CartToggler.scss";
import "../NavbarButton/NavbarButton.scss";
import { useCartOpenState, toggle } from "../../states/cartOpen.state";
import { connect } from "react-redux";

const CartToggler = ({cartItemsQuantity, status}) => {
  const [, dispatch] = useCartOpenState();

  return (
    <button onClick={() => dispatch(toggle())} className="navbarButton navbarButton--bRight btn">
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        {status === "SUCCESS" && cartItemsQuantity > 0 && (
          <span className="cartToggler__counter">{cartItemsQuantity}</span>
        )}
      </div>
    </button>
  );
};

const mapStateToProps = ({cartReducer: {cartStatus, cart}}) => {
  return {
    status: cartStatus,
    cartItemsQuantity: cart.quantity ?? 0
  }};

export default connect(
  mapStateToProps
)(CartToggler);
