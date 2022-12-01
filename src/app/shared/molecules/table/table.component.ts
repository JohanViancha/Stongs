import { Component, Input, OnInit } from '@angular/core';
import { ProductPersonalize } from 'src/app/components/personalize/personalize.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() thheaders:string[];
  @Input() properties: string[];
  @Input() tbody:any[];

  constructor() { }

  ngOnInit(): void {
  }

}
