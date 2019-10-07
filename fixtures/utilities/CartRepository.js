import { firestore } from "../../assets/js/Firebase";
import { CART_ITEMS, CART } from "../../assets/js/mocks/lib";
import { createDocument } from "./createDocument";
import { collectIdsAndDocs } from "../../assets/js/Firebase/utilities";

export const createCart = async () => {
  createDocument("carts", CART);
};

export const addItemsToCart = async () => {
  const snapshot = await firestore.collection('categories').get();
  const carts = snapshot.docs.map(collectIdsAndDocs);

  console.log(carts);

  // CART_ITEMS.map(cartItem => {
  //   createDocument("carts/cartItems", cartItem);
  // });
};
