import React from "react";
import { connect } from "react-redux";
import "../../Core/Fonts/Fontawesome.js";
import "../../Core/Styles";
import "./SingleProduct.scss";
import ProductSlideBadge from "../ProductSlideBadge";
import { Decimal } from "decimal.js";
import { addCartItem } from "../../actions/cartActions";

const SingleProduct = props => {
  const { product, addCartItem } = props;
  let { unitPrice, previousPrice, badge, name, label, currency, images: [mainImage, hoverImage] } = product;
  unitPrice = new Decimal(unitPrice);
  previousPrice = new Decimal(previousPrice);

  const addItemToCart = () => () => {
    addCartItem({
      product: product,
      quantity: 1,
      amountValue: unitPrice.toNumber()
    });
  };

  try {
    mainImage = require("../../../img/product/" + mainImage);
    hoverImage = require("../../../img/product/" + hoverImage);
  } catch (e) { /* leave empty */ }

  return (
    <div className="singleProduct">
      <div className="singleProduct__image">
        <img
          className="singleProduct__img"
          src={mainImage}
          alt={name}
        />
        {typeof badge === "object" && (
          <ProductSlideBadge
            options={{
              backgroundColor: badge.bgColor,
              color: badge.color
            }}
            text={badge.text}
          />
        )}
        <span className="singleProduct__favourite fa fa-heart" />
        <img
          className="singleProduct__img singleProduct__img--hover"
          src={hoverImage}
          alt={name}
        />
      </div>
      <div className="singleProduct__description">
        <span className="singleProduct__label">{label.name}</span>
        <a href="/">
          <h6 className="singleProduct__h6">{name}</h6>
        </a>
        <p className="singleProduct__price">
          {previousPrice > unitPrice && (
            <span className="singleProduct__previousPrice">
              {currency + " " + previousPrice.toFixed(2)}
            </span>
          )}
          {currency}
          {unitPrice.toFixed(2)}
        </p>
        <div className="singleProduct__actions">
          <button
            className="btn essence-btn singleProduct__addToCartBtn"
            onClick={addItemToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(SingleProduct);

