import { createSelector } from '@ngrx/store'
import { ProductsState } from 'src/app/core/models/product.state';
import { AppState } from '../app.state'


export const selectProductsFeature = (state: AppState) => state.listProduct;


export const selectListProducts = createSelector(
    selectProductsFeature, 
    (state: ProductsState) => state.products
);

export const selectLoading = createSelector(
    selectProductsFeature, 
    (state: ProductsState) => state.loading
);