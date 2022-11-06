import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.interface';
import { ProductsState } from 'src/app/core/models/product.state';
import { loadedProductsMostSelled,loadedProductsMostViewed, loadedProductsRebate, loadProducts } from '../actions/products.actions';

export const initListProducts: ProductsState = {loading:false, products: [] }

export const itemsListProducts = createReducer(
  initListProducts,
  on(loadProducts, (state) => {
    return { ...state, loading:true}
  }),

  on(loadedProductsMostSelled, (state, {products}) => {
    return { ...state,products }
  }),
  
  on(loadedProductsMostViewed, (state, {products}) => {
    return { ...state,products }
  }),
  
  on(loadedProductsRebate, (state, {products}) => {
    return { ...state,products }
  }),

);