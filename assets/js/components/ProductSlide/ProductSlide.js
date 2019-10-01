import React from 'react';
import './ProductSlide.scss';

const ProductSlide = ({ product }) => {

  if (product.images.length < 2) {
    return;
  }

  return (
    <li className="glide__slide">
      <div className="productSlide">
        <div className="productSlide__content">
          <img
            className="productSlide__img"
            src={require("../../../img/product/" + product.images[0])}
            alt={product.name}
          />
          <img
            className="productSlide__img productSlide__img--hover"
            src={require("../../../img/product/" + product.images[1])}
            alt={product.name}
          />
          <div className="product-favourite">
            <a href="#" className="favme fa fa-heart" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductSlide;
