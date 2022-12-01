import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-page-the-most',
  templateUrl: './page-the-most.component.html',
  styleUrls: ['./page-the-most.component.scss']
})
export class PageTheMostComponent implements OnInit {

  products: Product[];
  constructor(private productServices: ProductService ) { }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe((res:Product[] )=>{
    
      this.products = res;
    })
  }

}
