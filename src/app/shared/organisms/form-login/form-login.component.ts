import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/security/auth/auth.service';
import { AlertIcon } from '../../util/services/alert.models';
import { AlertService } from '../../util/services/alert.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  @Output() userAuthentication: EventEmitter<UserCredential> = new EventEmitter<UserCredential>()
  loginForm: FormGroup;
  constructor(private fb:  FormBuilder,
              private auth: AuthService,
              private alert: AlertService) {

    this.loginForm = fb.group({
      email: fb.control(''),
      password: fb.control('')
    });
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],

      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
      ]]
    });
  }

  loginUser(){
    const { email, password } = (this.loginForm.value);
    this.loginForm.markAllAsTouched();
    if(this.loginForm.status !== 'INVALID'){
      this.auth.loginWithEmailPassword(email, password)
    .then((user: UserCredential)=>{
      if(user){
        this.userAuthentication.emit(user)
      }
      
    })
    .catch((error)=>{
      this.alert.openAlert({
        title:'Autenticación del usuario', 
        text:'El email y/o contraseña son incorrectos',
        icon: AlertIcon.error
      })
    });
    }
    

  }

  
}
