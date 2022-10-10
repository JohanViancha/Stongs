import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb:  FormBuilder) {
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
        Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/')
      ]]
    });
  }

  loginUser(){

    console.log(this.loginForm)

  }

  
}
