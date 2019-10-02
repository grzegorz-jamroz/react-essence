import React from "react";
import "../../Core/Fonts";
import "./CartItemBadge.scss";
import Badge from "../Badge";

const CartItemBadge = props => {
  const { text, options, children } = props;

  return (
    <Badge className="cartItemBadge" options={options}>
      {children ?? text}
    </Badge>
  );
};

export default CartItemBadge;
