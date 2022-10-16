import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-page-the-most',
  templateUrl: './page-the-most.component.html',
  styleUrls: ['./page-the-most.component.scss']
})
export class PageTheMostComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      console.log(products)
    })

  }

}
