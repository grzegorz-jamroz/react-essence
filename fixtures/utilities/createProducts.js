import { PRODUCTS } from "../../assets/js/mocks/lib";
import { createDocument } from "./createDocument";

export const createProducts = () => {
  PRODUCTS.map(product => {
    createDocument("products", product);
  });
}
