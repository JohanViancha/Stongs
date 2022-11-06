import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { addDoc, collection,DocumentData,Firestore, getDocs, query, QuerySnapshot, where, } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private fireStore: Firestore) {}

  loginWithGoogle(): Promise<UserCredential >{

    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  loginWithEmailPassword(email:string, password:string): Promise<UserCredential >{
    return signInWithEmailAndPassword(this.auth, email,password)
  }

  registerUser(user: UserCredential){
    const userRef = collection(this.fireStore, 'users');
    return addDoc(userRef, {uid:user.user.uid, rol:'Administrador'})
    
  }

  getUser(uid:string):Promise<QuerySnapshot<DocumentData>>{
    const userRef = collection(this.fireStore, 'users');
    const queryUser = query(userRef, where("uid", "==", uid))
    return  getDocs(queryUser);
  }
}

