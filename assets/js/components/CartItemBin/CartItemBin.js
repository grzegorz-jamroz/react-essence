import React from "react";
import binImg from "../../../img/core-img/trash.svg";
import "./CartItemBin.scss";

const CartItemBin = () => (
  <img className="cartItem__bin" src={binImg} alt={"bin-icon"} />
);

export default CartItemBin;
