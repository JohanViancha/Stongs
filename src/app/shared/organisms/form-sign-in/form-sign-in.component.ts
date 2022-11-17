import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  signInForm: FormGroup;
  constructor(private fb:  FormBuilder) { }

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

}
