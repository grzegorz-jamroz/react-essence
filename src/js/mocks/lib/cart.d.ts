import { ICartItem } from "./cart-items";
export interface ICart {
    total: number;
    subtotal: number;
    discount: number;
    delivery: number;
    quantity: number;
    items: ICartItem[];
}
export declare const cart: ICart;
