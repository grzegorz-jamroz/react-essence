import React from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import { useCartItemsQuantityState } from "../../states/cartItemsAmount.state";

const CartToggler = props => {
  const { open, setOpen } = props;
  const [cartItemsAmount] = useCartItemsQuantityState();

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
