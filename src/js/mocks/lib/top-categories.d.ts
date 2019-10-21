import { ISubCategory } from "./sub-categories";
export interface ITopCategories {
    id: number;
    thumbnail: string;
    name: string;
    sub: ISubCategory[];
}
export declare const topCategories: ITopCategories[];
