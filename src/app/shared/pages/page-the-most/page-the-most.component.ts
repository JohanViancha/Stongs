import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/core/services/product.service';
import { loadProducts } from 'src/app/state/actions/products.actions';

@Component({
  selector: 'app-page-the-most',
  templateUrl: './page-the-most.component.html',
  styleUrls: ['./page-the-most.component.scss']
})
export class PageTheMostComponent implements OnInit {

  constructor(private productService: ProductService,
    private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.productService.getProducts().subscribe((products)=>{
      console.log(products)
    })

  }

}
