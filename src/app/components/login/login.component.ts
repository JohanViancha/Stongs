import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/state/actions/products.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { 
    
  }
  
  ngOnInit(): void {
  }

  redirectHome(user:UserCredential){
    this.router.navigate(['appStore']);
  }


}
