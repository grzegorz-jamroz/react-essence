import React from 'react';
import "../../Core/Fonts/Fontawesome.js";
import "../../Core/Styles";
import './ProductSlide.scss';
import ProductSlideBadge from "../ProductSlideBadge";

const ProductSlide = ({product}) => {
  if (product.images.length < 2) {
    return (<li className="glide__slide"/>);
  }

  let previousPrice = "";

  if (product.previousPrice > product.unitPrice) {
    previousPrice = (
      <span className="productSlide__previousPrice">{product.currency + ' ' + product.previousPrice.toFixed(2)}</span>
    );
  }

  let badge = "";

  if (typeof product.badge === "object") {
    badge = (
      <ProductSlideBadge
        options={{
          backgroundColor: product.badge.bgColor,
          color: product.badge.color
        }}
        text={product.badge.text}
      />
    );
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
          {badge}
          <span className="productSlide__favourite fa fa-heart" />
          <img
            className="productSlide__img productSlide__img--hover"
            src={require("../../../img/product/" + product.images[1])}
            alt={product.name}
          />
        </div>
        <div className="productSlide__description">
          <span className="productSlide__label">{product.label}</span>
          <a href="#">
            <h6 className="productSlide__h6">{product.name}</h6>
          </a>
          <p className="productSlide__price">
            {previousPrice}
            {product.currency}{product.unitPrice.toFixed(2)}
          </p>
          <div className="productSlide__actions">
            <span className="btn essence-btn productSlide__addToCartBtn">Add to Cart</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductSlide;
