import React from "react";
import "../../Core/Fonts";
import "./ProductSlideBadge.scss";
import Badge from "../Badge";

const ProductSlideBadge = props => {
  const { text, options, children } = props;

  return (
    <Badge className="productSlideBadge" options={options}>
      {children ?? text}
    </Badge>
  );
};

export default ProductSlideBadge;
