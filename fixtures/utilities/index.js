import { deleteCollection } from "./deleteCollection";
import { createCategories } from "./createCategories";
import { createProducts } from "./createProducts";
import { createBrands } from "./BrandRepository";
import { createCart } from "./CartRepository";

export const removeFixtures = async () => {
  await deleteCollection("brands");
  await deleteCollection("categories");
  await deleteCollection("products");
  await deleteCollection("carts");
};

export const setUpFixtures = async () => {
  await createBrands();
  await createCategories();
  await createProducts();
  await createCart();
};
