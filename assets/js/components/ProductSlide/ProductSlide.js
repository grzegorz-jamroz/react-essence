import React from 'react';
import "../../Core/Fonts/Fontawesome.js";
import "../../Core/Styles";
import SingleProduct from "../SingleProduct";

const ProductSlide = ({product, cart}) => {
  if (product.images.length < 2) {
    return (<li className="glide__slide"/>);
  }

  return (
    <li className="glide__slide">
      <SingleProduct product={product} cart={cart} />
    </li>
  );
};

export default ProductSlide;
