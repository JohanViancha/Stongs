import { Component, OnInit } from '@angular/core';
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

  textBuutton = 'Iniciar con Google'
  constructor(private authService: AuthService, private alert: AlertService) { }

  ngOnInit(): void {
  }

  signWithGoogle(){
    this.authService.loginWithGoogle()
    .then((userCreditial: UserCredential)=>{
      if(userCreditial.user){
        this.alert.openAlert({
          title:'Inicio de sesión', 
          text:`El usuario ${userCreditial.user.displayName} inició sesión en codigo101`,
          icon: AlertIcon.info,
        })
      }
    })
    .catch((error)=>{
      console.error(error);
    })
  }

}
