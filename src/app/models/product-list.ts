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
    actualPrice: number;    
    currencyType: string;
    discountInPer: number;
}

export enum VegStatus {
    Veg,
    NonVeg,
    VegNonVeg
}

export enum WeightUnit {
    Kg,
    Gm
}