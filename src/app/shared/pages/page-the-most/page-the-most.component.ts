import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/core/services/product.service';
import { loadProducts } from 'src/app/state/actions/products.actions';
import { selectListProducts } from 'src/app/state/selectors/product.selector';

@Component({
  selector: 'app-page-the-most',
  templateUrl: './page-the-most.component.html',
  styleUrls: ['./page-the-most.component.scss']
})
export class PageTheMostComponent implements OnInit {

  constructor(private productService: ProductService,
    private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(selectListProducts);
    this.store.dispatch(loadProducts());
    this.productService.getProducts().subscribe((products)=>{
     
    })

  }

}
