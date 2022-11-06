import { Product } from "./product.interface";

export interface ProductsState{
    loading: boolean, 
    products: Product[]
}