import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorFormReactive'
})
export class ErrorFormReactivePipe implements PipeTransform {

  
  transform(value: any, ...args: unknown[]): string[] {
    const errorForm = Object.entries(value);
    return errorForm.map((inputError)=>{
        return this.setErrorInput(inputError,args)
    })
  }

  setErrorInput(errorForm:any,field:unknown,): string{
  const errrosType: any ={
    'required':`El campo ${field} es requerido`,
    'email':`El campo ${field} no tiene formato `,
    'minlength':`El campo ${field} debe contener minimo ${errorForm[1].requiredLength} caracteres`,
    'maxlength': `El campo ${field} debe contener maximo ${errorForm[1].requiredLength} caracteres`,
    'pattern': `El campo ${field} no cumple el formato requerido`,
    'default': 'Error en el campo'
  };

  return errrosType[errorForm[0]];
  }

}
