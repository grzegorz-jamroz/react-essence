export interface ISubCategory {
    name: string;
}
export interface ISubCategories {
    [name: string]: ISubCategory[];
}
export declare const subCategories: ISubCategories;
