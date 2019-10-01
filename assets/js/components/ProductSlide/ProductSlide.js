import React from 'react';
import './ProductSlide.scss';

const ProductSlide = ({ product }) => {
  if (product.images.length < 2) {
    return (<li className="glide__slide" />);
  }

  return (
    <li className="glide__slide">
      <div className="productSlide">
        <div className="productSlide__image">
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
        <div className="productSlide__description">
          <span>{product.label}</span>
          <a href="#">
            <h6>{product.name}</h6>
          </a>
          <p className="product-price">
            <span className="old-price">
              {product.reducedPrice}
            </span>
            {product.unitPrice}
          </p>
          <div className="hover-content">
            <div className="add-to-cart-btn">
              <a href="#" className="btn essence-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductSlide;
