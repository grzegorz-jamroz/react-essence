export interface ICartItem {
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
export declare const cartItems: ICartItem[];
