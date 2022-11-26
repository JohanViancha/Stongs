import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  valueTotal=0;

  valuesPersonalize = {
        redondo:5000, v:7000,
   camiseta:10000, camisilla:8000,csmangalarga:12000,
    normal:5000,elastica:8000 
  }


  constructor(private fb: FormBuilder,
              private PersonalizeServices: PersonalizeService,
              private alert: AlertService) {
   }

  ngOnInit(): void {
    this.personalizeForm = this.fb.group({
      colorShirt: ['#000',[
        Validators.required
      ]],

      colorNeck: ['#000',[
        Validators.required
      ]],

      typeNeck: ['redondo',[
        Validators.required
      ]],

      print: ['',[
        Validators.required
      ]],

      type: ['camiseta',[
        Validators.required
      ]],

      typeCloth: ['normal',[
        Validators.required
      ]],

      description: ['',[
        Validators.required
      ]]
    });
    
  }

  calculateTotal(){
    const valueTypeNeck = priceProduct[this.personalizeForm.get('typeNeck')?.value]
    const valueType = priceProduct[this.personalizeForm.get('type')?.value]
    const valueTypeCloth = priceProduct[this.personalizeForm.get('typeCloth')?.value]
    this.valueTotal = Number(valueTypeNeck+valueType+valueTypeCloth+valueTypeCloth);
    return this.valueTotal
  }



  registerPersonalize(){
    this.personalizeForm.markAllAsTouched();
    if(this.personalizeForm.status !== 'INVALID'){
      this.PersonalizeServices.registerPersonalize(this.personalizeForm.value,this.valueTotal)
      .then((res)=>{
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
