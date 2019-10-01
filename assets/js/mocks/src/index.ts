import { cartItems } from './cart-items'
import { topCategories } from "./top-categories";
import { cart } from './cart'

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

export const CART_ITEMS: ICartItem[] = cartItems;
export const TOP_CATEGORIES: ITopCategories[] = topCategories;
export const CART: ICart = cart;
