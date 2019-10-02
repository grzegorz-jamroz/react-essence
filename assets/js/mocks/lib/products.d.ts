import { IBadge } from "./badge";
export interface IProduct {
    id: number;
    thumbnail: string;
    name: string;
    type: string;
    label: string;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    images: string[];
    badge?: IBadge;
}
export declare const products: ({
    id: number;
    thumbnail: string;
    name: string;
    type: string;
    label: string;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    badge: IBadge;
    images: string[];
} | {
    id: number;
    thumbnail: string;
    name: string;
    type: string;
    label: string;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    images: string[];
    badge?: undefined;
})[];
