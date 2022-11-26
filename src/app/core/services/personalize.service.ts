import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { ProductPersonalize } from 'src/app/components/personalize/personalize.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonalizeService {

  constructor(private fireStore: Firestore) { }


  registerPersonalize(productPersonalize:ProductPersonalize, total:number){
    const userRef = collection(this.fireStore, 'personalize');
    return addDoc(userRef, {productPersonalize,total})
  }
}
