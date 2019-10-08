import { IBadge } from "./badge";
import { IBrand } from "./brands";
export interface IProduct {
    id?: string;
    name: string;
    thumbnail: string;
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
    name: string;
    thumbnail: string;
    type: string;
    label: IBrand;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    badge: IBadge;
    images: string[];
} | {
    name: string;
    thumbnail: string;
    type: string;
    label: IBrand;
    unitPrice: number;
    previousPrice: number;
    currency: string;
    unit: string;
    images: string[];
    badge?: undefined;
})[];
