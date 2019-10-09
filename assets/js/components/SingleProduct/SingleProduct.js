import React from 'react';
import "../../Core/Fonts/Fontawesome.js";
import "../../Core/Styles";
import './SingleProduct.scss';
import ProductSlideBadge from "../ProductSlideBadge";
import { Decimal } from "decimal.js";

const SingleProduct = ({product, cart}) => {
  product.previousPrice = new Decimal(product.previousPrice);
  product.unitPrice = new Decimal(product.unitPrice);

  const addItemToCart = () => () => {
    cart.addCartItem(product);
  };

  let previousPrice = "";

  if (product.previousPrice > product.unitPrice) {
    previousPrice = (
      <span className="singleProduct__previousPrice">{product.currency + ' ' + product.previousPrice.toFixed(2)}</span>
    );
  }

  let badge =  "";

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

  try {
    product.images[0] = require("../../../img/product/" + product.images[0]);
    product.images[1] = require("../../../img/product/" + product.images[1]);
  } catch (e) {
  }

  return (
    <div className="singleProduct">
      <div className="singleProduct__image">
        <img
          className="singleProduct__img"
          src={product.images[0]}
          alt={product.name}
        />
        {badge}
        <span className="singleProduct__favourite fa fa-heart" />
        <img
          className="singleProduct__img singleProduct__img--hover"
          src={product.images[1]}
          alt={product.name}
        />
      </div>
      <div className="singleProduct__description">
        <span className="singleProduct__label">{product.label.name}</span>
        <a href="#">
          <h6 className="singleProduct__h6">{product.name}</h6>
        </a>
        <p className="singleProduct__price">
          {previousPrice}
          {product.currency}{product.unitPrice.toFixed(2)}
        </p>
        <div className="singleProduct__actions">
          <span className="btn essence-btn singleProduct__addToCartBtn" onClick={addItemToCart()}>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
