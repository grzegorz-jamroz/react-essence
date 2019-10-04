import {ICartItem, cartItems} from './cart-items'
import {IProduct, products} from './products'
import {ICategory, categories} from "./categories";
import { ISubCategories, subCategories} from "./sub-categories";
import {ICart, cart} from './cart'

export const PRODUCTS: IProduct[] = products;
export const CART_ITEMS: ICartItem[] = cartItems;
export const CATEGORIES: ICategory[] = categories;
export const SUB_CATEGORIES: ISubCategories = subCategories;
export const CART: ICart = cart;
