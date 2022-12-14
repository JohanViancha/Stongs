import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/security/auth/auth.service';
import { AlertIcon } from '../../util/services/alert.models';
import { AlertService } from '../../util/services/alert.service';

@Component({
  selector: 'app-button-sign-google',
  templateUrl: './button-sign-google.component.html',
  styleUrls: ['./button-sign-google.component.scss']
})
export class ButtonSignGoogleComponent implements OnInit {
  
  @Output() userAuthentication: EventEmitter<UserCredential> = new EventEmitter<UserCredential>()
  textBuutton = 'Iniciar con Google'
  constructor(private authService: AuthService, private alert: AlertService) { }

  ngOnInit(): void {
  }

  signWithGoogle(){
    this.authService.loginWithGoogle()
    .then((userCreditial: UserCredential)=>{
      if(userCreditial.user){
        this.userAuthentication.emit(userCreditial);
      }
    })
    .catch((error)=>{
      console.error(error);
    })
  }

}
