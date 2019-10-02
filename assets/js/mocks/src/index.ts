import {ICartItem, cartItems} from './cart-items'
import {IProduct, products} from './products'
import {ITopCategories, topCategories} from "./top-categories";
import {ICart, cart} from './cart'

export const PRODUCTS: IProduct[] = products;
export const CART_ITEMS: ICartItem[] = cartItems;
export const TOP_CATEGORIES: ITopCategories[] = topCategories;
export const CART: ICart = cart;
