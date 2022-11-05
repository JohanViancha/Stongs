import { Injectable } from "@angular/core";
import  { createEffect,Actions, ofType } from '@ngrx/effects'
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductService } from "src/app/core/services/product.service";

@Injectable()
export class ProductEffects {

    loadMovies$ = createEffect(() => {
        return  this.actions$.pipe(
            ofType('[Product List] Load Products'),
            mergeMap(() => this.productService.getProducts()
              .pipe(
                map(products => ({ type: '[Product List] Loaded success', products })),
                catchError(() => EMPTY)
              ))
            )
    })
        
       



    constructor(
        private actions$: Actions, 
        private productService: ProductService
    ){

    }

}