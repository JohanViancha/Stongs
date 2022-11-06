import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.interface';

export const loadProducts = createAction('[Product List] Load Products');
export const loadedProductsMostSelled = createAction(
    '[Product List] Loaded most selled products success', props<{products: Product[]} >()
);

export const loadedProductsRebate = createAction(
    '[Product List] Loaded rebate products success', props<{products: Product[]} >()
);


export const loadedProductsMostViewed = createAction(
    '[Product List] Loaded most viewed products success', props<{products: Product[]} >()
);

