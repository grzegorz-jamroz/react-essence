import React from 'react';
import { firestore } from "../Firebase";
import { collectIdsAndDocs } from "../Firebase/utilities";
import Decimal from "decimal.js";

class CartManager {
  constructor(
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
  ) {
    this.cartItems = cartItems;
    this.setCartItems = setCartItems;
    this.cartItemsAmount = cartItemsAmount;
    this.setCartItemsAmount = setCartItemsAmount;
    this.total = total;
    this.setTotal = setTotal;
    this.subtotal = subtotal;
    this.setSubtotal = setSubtotal;
    this.discount = discount;
    this.setDiscount = setDiscount;
    this.delivery = delivery;
    this.setDelivery = setDelivery;
  }

  requestCart = async () => {
    const snapshot = await firestore.collection('carts').limit(1).get();
    let cart = snapshot.docs.map(collectIdsAndDocs);
    if (typeof cart[0] !== "undefined") {
      cart = cart[0];
      this.setTotal(new Decimal(cart.total));
      this.setSubtotal(new Decimal(cart.subtotal));
      this.setDelivery(new Decimal(cart.delivery));
      this.setDiscount(new Decimal(cart.discount));
      this.setCartItems(cart.items);
      this.setCartItemsAmount(cart.quantity);
    }
  };

  addCartItem = product => {
    const newItem = {
      product: product,
      quantity: 1,
      amountValue: product.unitPrice.toNumber()
    };

    this.cartItems.push(newItem);
    this.setCartItems(this.cartItems);
  };

  removeCartItem = itemId => {
    const newCartItems = this.cartItems.filter(item => item.product.id !== itemId);
    this.setCartItems(newCartItems);
  };

  increaseCartItemsQuantity = quantity => {
    this.setCartItemsAmount(this.cartItemsAmount + quantity);
  };

  decreaseCartItemsQuantity = quantity => {
    this.setCartItemsAmount(this.cartItemsAmount - quantity);
  };
}

export default CartManager;
