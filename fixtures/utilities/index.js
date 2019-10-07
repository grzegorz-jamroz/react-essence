import { deleteCollection } from "./deleteCollection";
import { createCategories } from "./createCategories";
import { createProducts } from "./createProducts";

export const removeFixtures = () => {
  deleteCollection("products");
  deleteCollection("categories");
};

export const setUpFixtures = () => {
  createCategories();
  createProducts();
};
