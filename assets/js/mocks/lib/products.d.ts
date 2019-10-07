import { IBadge } from "./badge";
import { IBrand } from "./brands";
export interface IProduct {
    id: number;
    thumbnail: string;
    name: string;
    type: string;
    label: IBrand;
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
    label: IBrand;
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
    label: IBrand;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    images: string[];
    badge?: undefined;
})[];
