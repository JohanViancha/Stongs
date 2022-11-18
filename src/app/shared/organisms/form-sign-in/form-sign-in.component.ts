import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCustomer } from 'src/app/core/models/user.models';
import { AuthService } from 'src/app/core/security/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { AlertIcon } from '../../util/services/alert.models';
import { AlertService } from '../../util/services/alert.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb:  FormBuilder,
              private userService: UserService,
              private alert: AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['',[
        Validators.required,
      ]],
      lastName: ['',[
        Validators.required,
      ]],
      typeDocument: ['',[
        Validators.required,
      ]],
      document: ['',[
        Validators.required,
        Validators.pattern(/^[0-9]*$/)
      ]],
      address: ['',[
        Validators.required,
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      phone: ['',[
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.maxLength(10),
        Validators.minLength(10),
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
      ]]
    });
  }

  registerCustomer(){
    const { email, password } = (this.signInForm.value);

    this.userService.registerUserAuthentication(email, password).then((res: UserCredential)=>{

        const uid = res.user.uid
        const user: UserCustomer = this.signInForm.value
        this.userService.registerUser(user, uid).then((res)=>{
          this.alert.openAlert({
            title:'Registro de usuario', 
            text:'El usuario ha sido registrado',
            icon: AlertIcon.success
          })
          this.signInForm.reset();
          this.router.navigate(['./login']);
        })
        .catch((err)=>{
          console.log(err);
        });
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
