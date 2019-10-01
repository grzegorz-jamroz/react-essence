import React, { useState, useRef, useEffect } from "react";
import "../../Core/Fonts";
import variables from "../../Core/Bootstrap/VariablesExport.scss";
import "./CartItem.scss";
import Bin from "../CartItemBin";
import Badge from "../CartItemBadge";

const CartItem = props => {
  const {
    item,
    addCartItemsAmount,
    subtractCartItemsAmount,
    setSubtotal,
    removeCartItem,
    subtotal,
    setTotal,
    total
  } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const [amountValue, setAmountValue] = useState(item.amountValue);
  const [cartItemStyle, setCartItemStyle] = useState({});
  const [cartItemClass, setCartItemClass] = useState('cartItem');
  const cartItemRef = useRef(null);

  const increaseAmount = () => () => {
    addCartItemsAmount(1);
    setAmountValue(amountValue + item.unitPrice);
    setQuantity(quantity + 1);
    setTotal(total + item.unitPrice);
    setSubtotal(subtotal + item.unitPrice);
  };

  const decreaseAmount = () => () => {
    if (quantity > 1) {
      subtractCartItemsAmount(1);
      setAmountValue(amountValue - item.unitPrice);
      setQuantity(quantity - 1);
      setTotal(total - item.unitPrice);
      setSubtotal(subtotal - item.unitPrice);
    }
  };

  const deleteCartItem = () => () => {
    setCartItemClass(`${cartItemClass} cartItem--deleted`);
    setTimeout(() => {
      removeCartItem(item.id);
      subtractCartItemsAmount(quantity);
      setTotal(total - amountValue);
      setSubtotal(subtotal - amountValue);
    }, 500);
  };

  useEffect(() => {
    setCartItemStyle({maxHeight: `${cartItemRef.current.clientHeight/16}rem`});
  }, []);

  return (
    <div ref={cartItemRef} style={cartItemStyle} className={cartItemClass}>
      <div className="cartItem__thumbnail">
        <div className="cartItem__badgesLeft">
          <Badge bgColor={variables.red} text={quantity} />
        </div>
        <div className="cartItem__badgesRight">
          <Badge
            bgColor={variables.blue}
            text={`${item.unitPrice.toFixed(2)} ${item.currency}`}
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
              item.thumbnail)})`
          }}
        />
      </div>
      <div className="cartItem__info">
        <div className="cartItem__details">
          <div className="cartItem__name">{item.name}</div>
          <div className="cartItem__type">{item.type}</div>
          <div className="cartItem__depot">
            <span className="cartItemUnit">
              <span className="cartItemUnit__price">
                {item.amountValue.toFixed(2)}
              </span>
              &nbsp;
              <span className="cartItemUnit__currency">{item.currency}</span>
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
