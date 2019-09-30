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
export declare const CART_ITEMS: ICartItem[];
export declare const CART: ICart;
export {};
