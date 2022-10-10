import { Injectable } from '@angular/core';
import { Auth, SignInMethod, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}

  loginWithGoogle(): Promise<UserCredential >{
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  loginWithEmailPassword(email:string, password:string): Promise<UserCredential >{
    return signInWithEmailAndPassword(this.auth, email,password)
  }
}

