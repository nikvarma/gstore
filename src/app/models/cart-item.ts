import { ProductList } from '.';

export interface CartItem extends ProductList {
    totalItem: number;
}