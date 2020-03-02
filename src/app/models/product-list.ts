export interface ProductList {
    id: string;
    title: string;
    weight: number;
    subTitle: string;
    thumbnail: string;
    images: Array<{}>;
    vegStatus: string;
    productSrc: string;
    weightUnit: string;
    subCategory: string;
    actualPrice: number;
    currencyType: string;
    discountInPer: number;
}

export enum VegStatus {
    Veg = 'veg',
    NonVeg = 'non-veg',
    VegNonVeg = 'veg-nonveg'
}

export enum WeightUnit {
    Kg,
    Gm
}