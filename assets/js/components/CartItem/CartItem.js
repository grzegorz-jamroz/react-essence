import React, { useState, useRef, useEffect } from "react";
import "../../Core/Fonts";
import variables from "../../Core/Bootstrap/VariablesExport.scss";
import "./CartItem.scss";
import Bin from "../CartItemBin";
import CartItemBadge from "../CartItemBadge";
import Decimal from "decimal.js";
import { updateCart } from "../../actions/cartActions";
import { connect } from "react-redux";
import Cart from "../../domain/Cart";

const CartItem = props => {
  const { item, cart, updateCart } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const [amountValue, setAmountValue] = useState(new Decimal(item.amountValue));
  const [cartItemStyle, setCartItemStyle] = useState({});
  const [cartItemClass, setCartItemClass] = useState("cartItem");
  const cartItemRef = useRef(null);
  const newCart = Object.assign({}, cart);

  const increaseAmount = () => () => {
    // cart.increaseCartItemsQuantity(1);
    // setAmountValue(amountValue.plus(item.product.unitPrice));
    // setQuantity(quantity + 1);
    // cart.setTotal(cart.total.plus(item.product.unitPrice));
    // cart.setSubtotal(cart.subtotal.plus(item.product.unitPrice));


    newCart.total = newCart.total.plus(item.product.unitPrice);
    updateCart(newCart);
  };

  const decreaseAmount = () => () => {
    if (quantity > 1) {
      // cart.decreaseCartItemsQuantity(1);
      // setAmountValue(amountValue.minus(item.product.unitPrice));
      // setQuantity(quantity - 1);
      // cart.setTotal(cart.total.minus(item.product.unitPrice));
      // cart.setSubtotal(cart.subtotal.minus(item.product.unitPrice));
    }
  };

  const deleteCartItem = () => () => {
    setCartItemClass(`${cartItemClass} cartItem--deleted`);
    setTimeout(() => {
      // cart.removeCartItem(item.id);
      // cart.decreaseCartItemsQuantity(quantity);
      // cart.setTotal(cart.total.minus(amountValue));
      // cart.setSubtotal(cart.subtotal.minus(amountValue));
    }, 500);
  };

  useEffect(() => {
    setCartItemStyle({
      maxHeight: `${cartItemRef.current.clientHeight / 16}rem`
    });
  }, []);

  return (
    <div ref={cartItemRef} style={cartItemStyle} className={cartItemClass}>
      <div className="cartItem__thumbnail">
        <div className="cartItem__badgesLeft">
          <CartItemBadge
            options={{ backgroundColor: variables.red }}
            text={quantity}
          />
        </div>
        <div className="cartItem__badgesRight">
          <CartItemBadge
            options={{ backgroundColor: variables.blue }}
            text={`${item.product.unitPrice.toFixed(2)} ${
              item.product.currency
            }`}
          />
        </div>
        <div className="cartItem__overlay" />
        <div className="cartItem__actionsLeft">
          <div className="cartItemAction__decrease" onClick={decreaseAmount()}>
            -
          </div>
          <div className="cartItemAction__increase" onClick={increaseAmount()}>
            +
          </div>
        </div>
        <div className="cartItem__actionsRight">
          <div className="cartItemAction__delete" onClick={deleteCartItem()}>
            <Bin />
          </div>
        </div>
        <div
          className="cartItemThumbnail__image"
          style={{
            backgroundImage: `url(${require("../../../img/product/" +
              item.product.thumbnail)})`
          }}
        />
      </div>
      <div className="cartItem__info">
        <div className="cartItem__details">
          <div className="cartItem__name">{item.product.name}</div>
          <div className="cartItem__type">{item.product.type}</div>
          <div className="cartItem__depot">
            <span className="cartItemUnit">
              <span className="cartItemUnit__price">
                {amountValue.toFixed(2)}
              </span>
              &nbsp;
              <span className="cartItemUnit__currency">
                {item.product.currency}
              </span>
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({cartReducer: {cart}}) => ({
  cart: cart ?? {}
});

const mapDispatchToProps = dispatch => ({
  updateCart: cart => {
    dispatch(updateCart(cart))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
