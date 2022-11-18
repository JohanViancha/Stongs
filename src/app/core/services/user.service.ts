import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { UserCustomer } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: Firestore) { }

  registerUser(user: UserCustomer, uid:string){
    const userRef = collection(this.fireStore, 'users');
    return addDoc(userRef, {...user,uid,rol:'Customer'})
    
  }

  registerUserAuthentication(email:string, password:string){
    return createUserWithEmailAndPassword(getAuth(), email,password);
  }
}
