import Decimal from "decimal.js";

class Cart {
  constructor(cart) {
    this.cartItems = cart.items ?? [];
    this.cartItemsAmount = cart.quantity ?? 0;
    this.total = new Decimal(cart.total ?? 0);
    this.subtotal = new Decimal(cart.subtotal ?? 0);
    this.delivery = new Decimal(cart.delivery ?? 0);
    this.discount = new Decimal(cart.discount ?? 0);
  }
}

export default Cart;
