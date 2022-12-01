import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  
  thead:string[] = ['Descripción','Dirección', 'Cantidad', 'Total'];
  
  properties:string[] = ['size','colorShirt','colorNeck','typeNeck','type','typeCloth', 'customer','total']

  constructor() { }

  ngOnInit(): void {
  }

}
