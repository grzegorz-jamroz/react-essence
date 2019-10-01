import { cartItems } from './cart-items'
import { products } from './products'
import { topCategories } from "./top-categories";
import { cart } from './cart'

interface IProduct {
  id: number;
  thumbnail: string;
  name: string;
  type: string;
  label: string;
  unitPrice: number;
  reducedPrice: number | undefined | null;
  currency: string;
  unit: string;
}

interface ICartItem {
  id: number;
  thumbnail: string;
  name: string;
  type: string;
  quantity: number;
  unitPrice: number;
  amountValue: number;
  currency: string;
  unit: string;
}

interface ICart {
  total: number;
  subtotal: number;
  discount: number;
  delivery: number;
  quantity: number;
}

interface ITopCategories {
  id: number;
  thumbnail: string;
  name: string;
}

export const PRODUCTS: IProduct[] = products;
export const CART_ITEMS: ICartItem[] = cartItems;
export const TOP_CATEGORIES: ITopCategories[] = topCategories;
export const CART: ICart = cart;
