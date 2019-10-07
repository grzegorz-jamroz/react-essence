import { PRODUCTS } from "../../assets/js/mocks/lib";
import { createDocument } from "./createDocument";
import { getAllBrands } from "./BrandRepository";

export const createProducts = async () => {
  const brands = await getAllBrands();
  PRODUCTS.map(product => {
    product.label = brands.filter(brand => product.label.name === brand.name);
    createDocument("products", product);
  });
};
