import React, { useContext } from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import { CartContext } from "../../context/CartContext";

const CartToggler = props => {
  const { open, setOpen } = props;
  const cart = useContext(CartContext);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="navbarButton navbarButton--bRight"
    >
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        <span className="cartToggler__counter">{cart.cartItemsAmount}</span>
      </div>
    </div>
  );
};

export default CartToggler;
