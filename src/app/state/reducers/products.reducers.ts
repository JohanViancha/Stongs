import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.interface';
import { ProductsState } from 'src/app/core/models/product.state';
import { loadProducts } from '../actions/products.actions';

export const initListProducts: ProductsState = {loading:false, products: [] }

export const itemsListProducts = createReducer(
  initListProducts,
  on(loadProducts, (state) => {
    return { ...state, loading:true}
  }),
);