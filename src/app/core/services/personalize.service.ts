import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { last, Observable } from 'rxjs';
import { ProductPersonalize } from 'src/app/components/personalize/personalize.interface';
import { UserCustomer } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class PersonalizeService {

  productRef = collection(this.fireStore, 'personalize')
  constructor(private fireStore: Firestore) { }


  registerPersonalize(productPersonalize:ProductPersonalize){
    const userRef = collection(this.fireStore, 'personalize');
    const {names, lastname} =   JSON.parse(sessionStorage.getItem('session') || '')
    const personalize = {...productPersonalize , customer:`${names} ${lastname}`}
    return addDoc(userRef, personalize)
  }
  
  getProductsPersonalize():Observable<ProductPersonalize[]>{
    return collectionData(this.productRef, {idField:'id'}) as Observable<ProductPersonalize[]>;
  }


}
