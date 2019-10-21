import { ICategory } from "./categories";
export interface ISubCategories {
    [name: string]: ICategory[];
}
export declare const subCategories: ISubCategories;
