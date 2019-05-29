import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  productos$:Observable<any>;
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    
    //this.productos$ = this.productosService.getProductos();
    //this.productosService.getProductos();

  }

}
