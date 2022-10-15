import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productRef = collection(this.fire, 'products')
  constructor(private fire: Firestore) { }


  getProducts():Observable<Product[]>{
    return collectionData(this.productRef, {idField:'id'}) as Observable<Product[]>;
  }
}
