import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';

import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class ProductosService {
constructor(private afs: AngularFirestore) { }

 /* getProductos(): Observable<Product[]>{
    return this.db.collection<Product>('productos').valueChanges();     
  }*/
  //observable= coleccion de valores ue vive cierto tiempo
  //observador = el qe esta suscrito al observable y ve os cambios de la colecion
  
  getProductos(start: BehaviorSubject<string>): Observable<any[]> {
    return start.switchMap(startText => {
        const endText = startText + '\uf8ff';
        return this.afs
          .collection('productos', ref =>
            ref
              .orderBy('nombre')
              .limit(10)
              .startAt(startText)
              .endAt(endText)
          )
          .snapshotChanges()
          .debounceTime(200)
          .distinctUntilChanged()
          .map(changes => {
            return changes.map(c => {
              console.log(c);
              const data = c.payload.doc.data();
              const id = c.payload.doc.id;
              return { id, ...data };
            });
          });
      });
  }



}
