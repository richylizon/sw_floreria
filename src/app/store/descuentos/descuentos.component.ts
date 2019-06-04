import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductosService } from '../productos.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'iso-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})

export class DescuentosComponent implements OnInit{
  productos$: Observable<any[]>;
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');

  constructor(private productosSvc: ProductosService) { }

  ngOnInit() {
    this.productos$ = this.productosSvc.getProductos(this.startAt);
  }

  buy(product: Product){
    //funcion comprar producto
  }

  search(searchText: string) {
    this.startAt.next(searchText);
  }

}





