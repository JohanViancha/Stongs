import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.scss']
})
export class PersonalizeComponent implements OnInit {

  personalizeForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.personalizeForm = fb.group({
      colorShirt: fb.control(''),
      colorNeck: fb.control(''),
      typeNeck: fb.control(''),
      print:fb.control(''),
      type:fb.control(''),
      typeCloth:fb.control(''),
      description:fb.control('')
    });

   }

  ngOnInit(): void {
    this.personalizeForm = this.fb.group({
      colorShirt: ['',[
        Validators.required
      ]],

      colorNeck: ['',[
        Validators.required
      ]],

      typeNeck: ['',[
        Validators.required
      ]],

      print: ['',[
        Validators.required
      ]],

      type: ['',[
        Validators.required
      ]],

      typeCloth: ['',[
        Validators.required
      ]],

      description: ['',[
        Validators.required
      ]],
    });
    
  }

}
