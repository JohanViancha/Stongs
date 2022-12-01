import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { priceProduct } from 'src/app/components/personalize/personalize.interface';
import { PersonalizeService } from 'src/app/core/services/personalize.service';
import { AlertIcon } from '../../util/services/alert.models';
import { AlertService } from '../../util/services/alert.service';

@Component({
  selector: 'app-form-register-personalize',
  templateUrl: './form-register-personalize.component.html',
  styleUrls: ['./form-register-personalize.component.scss']
})
export class FormRegisterPersonalizeComponent implements OnInit {

  personalizeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private PersonalizeServices: PersonalizeService,
              private alert: AlertService, 
              private router: Router) {
   }

  ngOnInit(): void {
    this.personalizeForm = this.fb.group({
      colorShirt: ['#000',[
        Validators.required
      ]],

      colorNeck: ['#000',[
        Validators.required
      ]],

      typeNeck: ['',[
        Validators.required
      ]],

      print: [''],

      type: ['',[
        Validators.required
      ]],

      typeCloth: ['',[
        Validators.required
      ]],

      description: ['',[
        Validators.required
      ]],
      
      size: ['',[
        Validators.required
      ]],

      total: [0,[
        Validators.required
      ]]
    });
    
  }

  calculateTotal(){
    const valueTypeNeck = priceProduct[this.personalizeForm.get('typeNeck')?.value]
    const valueType = priceProduct[this.personalizeForm.get('type')?.value];
    const valueTypeCloth = priceProduct[this.personalizeForm.get('typeCloth')?.value];
    const valueSize = priceProduct[this.personalizeForm.get('size')?.value];
    const total = Number(valueTypeNeck+valueType+valueTypeCloth+valueTypeCloth+valueSize);
    return total;
  }



  registerPersonalize(){
    this.personalizeForm.markAllAsTouched();
    this.personalizeForm.get('total')?.setValue(this.calculateTotal())
    if(this.personalizeForm.status !== 'INVALID'){
      this.PersonalizeServices.registerPersonalize(this.personalizeForm.value)
      .then((res)=>{
        this.router.navigate(['./appStore/personalize/listPersonalize'])
        this.alert.openAlert({
          title:'Personalización de prenda', 
          text:'Su producto personalizado ha sido creado',
          icon: AlertIcon.success
        })
      })
      .catch((err)=>{
        this.alert.openAlert({
          title:'Personalización de prenda', 
          text:'Error al crear el producto',
          icon: AlertIcon.error
        })
      })
    }
  }

}
