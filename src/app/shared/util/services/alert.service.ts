import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Alert, AlertWithImage } from './alert.models';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  openAlert(alert:Alert){
    Swal.fire({
      title: alert.title,
      text: alert.text,
      icon: alert.icon,
    })
  }

 openAlertWithImage(alert: AlertWithImage){
  return Swal.fire({
    title: alert.title,
    text: alert.text,
    imageUrl: alert.imageUrl,
    imageWidth: alert.imageWidth,
    imageHeight: alert.imageHeight,
    confirmButtonText:alert.confirmButtonText,
    cancelButtonText:alert.cancelButtonText,
    showCancelButton: alert.showCancelButton,
    input: 'number',
    inputLabel: 'Cantidad',
    inputValue: 1
  })
 } 
}
