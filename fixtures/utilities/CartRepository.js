import { firestore } from "../../assets/js/Firebase";
import { CART } from "../../assets/js/mocks/lib";
import { createDocument } from "./createDocument";
import { collectIdsAndDocs } from "../../assets/js/Firebase/utilities";
import Decimal from 'decimal.js';

export const createCart = async () => {
  let collectionRef = firestore.collection('products');
  let query = collectionRef.orderBy('name').limit(3);
  const snapshot = await query.get();
  const products = snapshot.docs.map(collectIdsAndDocs);
  CART.delivery = 15;

  CART.items = products.map((product, index) => {
    const quantity = index + 1;
    const amountValue = new Decimal(product.unitPrice).times(quantity);
    CART.quantity = new Decimal(CART.quantity).add(quantity).toNumber();
    CART.subtotal = new Decimal(CART.subtotal).add(amountValue).toNumber();

    return {
      product: product,
      quantity: quantity,
      amountValue: amountValue.toNumber()
    };
  });

  CART.total = new Decimal(CART.subtotal).add(CART.delivery).toNumber();

  await createDocument("carts", CART);
};
