export interface IBrand {
    name: string;
    logo: string;
}
export interface IBrands {
    [name: string]: IBrand;
}
export declare const brands: IBrands;
