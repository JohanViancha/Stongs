import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Alert } from './alert.models';

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
}
