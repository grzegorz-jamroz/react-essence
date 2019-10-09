import React, { useState, useEffect, createContext } from "react";
import Decimal from "decimal.js";
import CartManager from "../utilities/CartManager";

const CartContext = createContext({
  cartItemsAmount: 0,
  subtotal: new Decimal(0),
  delivery: new Decimal(0),
  discount: new Decimal(0),
  total: new Decimal(0),
  cartItems: [],
  requestCart: () => {},
  removeDelivery: () => {}
});

const CartProvider = props => {
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(new Decimal(0));
  const [discount, setDiscount] = useState(new Decimal(0));
  const [delivery, setDelivery] = useState(new Decimal(0));
  const [total, setTotal] = useState(new Decimal(0));

  console.count("CartProvider");

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
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
