import React from "react";
import "../../Core/Styles";
import SingleProduct from "../SingleProduct";

const ProductSlide = ({ product }) => {
  if (product.images.length < 2) {
    return <li className="glide__slide" />;
  }

  return (
    <li className="glide__slide">
      <SingleProduct product={product} />
    </li>
  );
};

export default ProductSlide;
