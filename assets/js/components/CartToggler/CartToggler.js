import React, { useEffect } from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import "../NavbarButton/NavbarButton.scss";
import { useCartOpenState, toggle } from "../../states/cartOpen.state";
import { connect } from "react-redux";

const CartToggler = ({cartItemsAmount, status}) => {
  const [, dispatch] = useCartOpenState();

  return (
    <div onClick={() => dispatch(toggle())} className="navbarButton navbarButton--bRight">
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        {status === "SUCCESS" && (
          <span className="cartToggler__counter">{cartItemsAmount}</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({cartReducer: {status, cart}}) => {
  return {
    status: status,
    cartItemsAmount: cart.cartItemsAmount ?? 0
  }};

export default connect(
  mapStateToProps
)(CartToggler);
