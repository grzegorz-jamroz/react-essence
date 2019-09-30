import { cartItems } from './cart-items'
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

export const CART_ITEMS: ICartItem[] = cartItems;
export const CART: ICart = cart;
