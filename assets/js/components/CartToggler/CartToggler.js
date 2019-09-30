import React from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";

const CartToggler = props => {
  const { open, setOpen, cartItemsAmount } = props;

  return (
    <div
      onClick={() => setOpen(!open)}
      className="navbarButton navbarButton--bRight"
    >
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        <span className="cartToggler__counter">{cartItemsAmount}</span>
      </div>
    </div>
  );
};

export default CartToggler;
