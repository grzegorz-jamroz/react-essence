import React, { useState, useEffect, createContext } from 'react';
import Decimal from "decimal.js";
import CartManager from "../utilities/CartManager";

const CartContext = createContext({name: 'hello'});

const CartProvider = (props) => {
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(new Decimal(0));
  const [discount, setDiscount] = useState(new Decimal(0));
  const [delivery, setDelivery] = useState(new Decimal(0));
  const [total, setTotal] = useState(new Decimal(0));

  const cart = new CartManager(
    cartItems,
    setCartItems,
    cartItemsAmount,
    setCartItemsAmount,
    total,
    setTotal,
    subtotal,
    setSubtotal,
    discount,
    setDiscount,
    delivery,
    setDelivery
  );

  useEffect(() => {
    cart.requestCart();
  }, []);

  return (
    <CartContext.Provider value={cart}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
