import { Product } from "./product.interface";

export interface ProductsState{
    loading: boolean, 
    products: ReadonlyArray<Product>
}