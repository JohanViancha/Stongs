import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { collection,DocumentData,Firestore, getDocs, query, QuerySnapshot, where, } from '@angular/fire/firestore';
import { UserSesion } from '../../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private fireStore: Firestore) {}

  loginWithGoogle(): Promise<UserCredentialÂ >{

    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  loginWithEmailPassword(email:string, password:string): Promise<UserCredentialÂ >{
    return signInWithEmailAndPassword(this.auth, email,password)
  }

  getUser(uid:string):Promise<QuerySnapshot<DocumentData>>{
    const userRef = collection(this.fireStore, 'users');
    const queryUser = query(userRef, where("uid", "==", uid));
    return  getDocs(queryUser);
  }

  registerSesion(session: UserSesion){
    sessionStorage.setItem('session', JSON.stringify(session))
  }
}

