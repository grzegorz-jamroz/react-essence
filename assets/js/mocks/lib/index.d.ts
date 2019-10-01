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
export declare const PRODUCTS: IProduct[];
export declare const CART_ITEMS: ICartItem[];
export declare const TOP_CATEGORIES: ITopCategories[];
export declare const CART: ICart;
export {};
