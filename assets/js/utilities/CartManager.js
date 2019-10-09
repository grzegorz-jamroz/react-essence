import React from 'react';

class CartManager {
  constructor(
    cartItems,
    setCartItems,
    cartItemsAmount,
    setCartItemsAmount
  ) {
    this.cartItems = cartItems;
    this.setCartItems = setCartItems;
    this.cartItemsAmount = cartItemsAmount;
    this.setCartItemsAmount = setCartItemsAmount;
  }

  addCartItem = product => {
    const newItem = {
      product: product,
      quantity: 1,
      amountValue: product.unitPrice.toNumber()
    };

    this.cartItems.push(newItem);
    this.setCartItems(this.cartItems);
  };

  increaseCartItemsQuantity = quantity => {
    this.setCartItemsAmount(this.cartItemsAmount + quantity);
  };

  decreaseCartItemsQuantity = quantity => {
    this.setCartItemsAmount(this.cartItemsAmount - quantity);
  };
}

export default CartManager;
