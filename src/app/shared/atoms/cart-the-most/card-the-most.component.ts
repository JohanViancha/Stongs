import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.interface';
import { AlertService } from '../../util/services/alert.service';

@Component({
  selector: 'app-card-the-most',
  templateUrl: './card-the-most.component.html',
  styleUrls: ['./card-the-most.component.scss']
})
export class CardTheMostComponent implements OnInit {


  @Input() products: Product;
  constructor(private alert: AlertService) { }

  ngOnInit(): void {
  }

  makeOrder(produtcs: Product){    
    this.alert.openAlertWithImage(
      {
        title: produtcs.name,
        text: `${produtcs.description} por ${produtcs.price}`,
        imageUrl: produtcs.img,
        imageWidth: 300,
        imageHeight: 300,
        showCancelButton: true,
        confirmButtonText:'Confirmar',
        cancelButtonText:'Cancelar'
      }
    ).then((result)=>{
      if (result.isConfirmed) {
        console.log('asf')
      }
    })
  }

}
