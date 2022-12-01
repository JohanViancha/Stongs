import { Component, OnInit } from '@angular/core';
import { ProductPersonalize } from 'src/app/components/personalize/personalize.interface';
import { PersonalizeService } from 'src/app/core/services/personalize.service';

@Component({
  selector: 'app-list-personalize',
  templateUrl: './list-personalize.component.html',
  styleUrls: ['./list-personalize.component.scss']
})
export class ListPersonalizeComponent implements OnInit {

  thead:string[] = ['Talla','Color de camisa', 'Color de cuello', 'Tpo de cuello', 'Tipo de prenda', 'Tipo de tela', 'Cliente','Total'];
  properties:string[] = ['size','colorShirt','colorNeck','typeNeck','type','typeCloth', 'customer','total']
  tbody: ProductPersonalize[];
  constructor(private personalizeServices:PersonalizeService) { }

  ngOnInit(): void {
    this.personalizeServices.getProductsPersonalize().subscribe((res)=>{{
      this.tbody = res;
    }})
    
  }

}
