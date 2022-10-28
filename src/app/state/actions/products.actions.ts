import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.interface';

export const loadProducts = createAction('[Product List] Load Products');
export const loadedProducts = createAction(
    '[Product List] Loaded success', props<{items: Product[]} >()
);
