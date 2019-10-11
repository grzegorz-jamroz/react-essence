import React from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import { useCartItemsQuantityState } from "../../states/cartItemsAmount.state";
import { useCartOpenState, toggle } from "../../states/cartOpen.state";

const CartToggler = () => {
  const [cartItemsAmount] = useCartItemsQuantityState();
  const [, dispatch] = useCartOpenState();

  return (
    <div
      onClick={() => dispatch(toggle())}
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
