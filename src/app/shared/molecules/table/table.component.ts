import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //@Input() thheaders:string[];
  thheaders:string[] =[
    'Producto',
    'Foto',
    'Stock',
    'Descripción',
    'Precio',
    'Dto.',
    'Env.'
  ]

  tbody:any[] =['']
  constructor() { }

  ngOnInit(): void {
  }

}
