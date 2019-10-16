import Decimal from "decimal.js";

class Cart {
  constructor(cart) {
    let { quantity, total, subtotal, delivery, discount } = cart;

    this.quantity = quantity ?? 0;
    this.total = new Decimal(total ?? 0);
    this.subtotal = new Decimal(subtotal ?? 0);
    this.delivery = new Decimal(delivery ?? 0);
    this.discount = new Decimal(discount ?? 0);
  }
}

export default Cart;
