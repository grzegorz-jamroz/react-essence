import React from 'react';

const ProductSlide = ({product}) => {
  return (
    <li className="glide__slide">{product.name}</li>
  );
};

export default ProductSlide;
