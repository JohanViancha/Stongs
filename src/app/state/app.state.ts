import { ProductsState } from "../core/models/product.state";
import {  ActionReducerMap} from '@ngrx/store'
import { itemsListProducts } from "./reducers/products.reducers";

export interface AppState{
    listProduct: ProductsState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    listProduct: itemsListProducts
}